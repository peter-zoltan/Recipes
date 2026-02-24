import './App.css'
import Search from "./search/Search.tsx";
import RecipeList from "./recipe/RecipeList.tsx";
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import type {SearchBarProps} from "./search/SearchBar.tsx";
import {type MealTypeProps} from "./search/MealType.tsx";
import type {IntolerancesProps} from "./search/Intolerances.tsx";
import ExpandedRecipe from "./recipe/ExpandedRecipe.tsx";
import Favourites, {type Favourite} from "./recipe/Favourite.tsx";

/**
 * The components to where almost all states are lifted to, the main management point of the applicaton.
 * Stores the parameters used in the API call, sand handles the call itself.
 * Stores some particulars of the API, like possible intolerances.
 * Contains all visible React elements on the page in its return value.
 */
function App() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [type, setType] = useState("");
    const [recipes, setRecipes] = useState<object>();
    const [currentRecipe, setCurrentRecipe] = useState<object>({});
    const arr = Array(12).fill(false);
    const [intolerances, setIntolerances] = useState<boolean[]>(arr);
    const intoleranceNames = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesam", "Shellfish", "Soy", "Sulfite", "Tree nut", "Wheat"];
    const [searchState, setSearchState] = useState(true);
    const [favourites, setFavourites] = useState<Favourite[]>(JSON.parse(localStorage.getItem("Favourites") as string) || []);

    const searchBarProps: SearchBarProps = {
        name: name,
        setName: setName,
        ingredients: ingredients,
        setIngredients: setIngredients,
        onSearch: () => { search(name, ingredients, type, intolerances, intoleranceNames, setRecipes); }
    }
    const mealTypeProps: MealTypeProps = {
        type: type,
        setType: setType,
    }
    const intolerancesProps: IntolerancesProps = {
        intolerances: intolerances,
        setIntolerances: setIntolerances,
        intoleranceNames: intoleranceNames,
    }

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            {searchState ? <>
                <Favourites favourites={favourites} setSearchState={setSearchState} setCurrentRecipe={setCurrentRecipe}/>
                <Search searchBar={searchBarProps} mealType={mealTypeProps} intolerances={intolerancesProps} />
                {recipes && <RecipeList recipes={recipes} setCurrentRecipe={setCurrentRecipe}
                                        setSearchState={setSearchState} />
                }
            </> : <>
                <ExpandedRecipe recipe={currentRecipe} setSearchState={setSearchState}
                                favourites={favourites}  saveFavourites={() => saveFavourites(favourites, setFavourites)}/>
            </>}
        </Container>
    );
}

export default App

/**
 * Builds the url necessary to reach the Spoonacular API with the given parameters.
 * @param name The natural language recipe search query.
 * @param ingredients A list of ingredients that should/must be used in the recipes.
 * @param type The type of recipe, "main course" for example.
 * @param intolerances A  list of intolerances. All recipes returned must not contain ingredients that are not suitable
 * for people with the intolerances entered.
 * @param intoleranceNames The names of the intolerances that can be selected.
 */
function buildQuery(name: string, ingredients: string, type: string, intolerances: boolean[], intoleranceNames: string[]) {
    let query = `https://api.spoonacular.com/recipes/complexSearch?number=10&addRecipeInformation=true&apiKey=${import.meta.env.VITE_API_KEY}`;
    if (name) {
        query += `&query=${name}`;
    }
    if(ingredients) {
        query += `&includeIngredients=${formatIngredients(ingredients)}`;
    }
    if (type) {
        if (type == "Main course") {
            query += "&type=main%20course";
        } else {
            query += `&type=${type}`;
        }
    }
    let t = 0;
    for (let i = 0; i < intolerances.length; i++) {
        if (intolerances[i]) {
            t++;
        }
    }
    if (t > 0) {
        query += `&intolerances=${formatIntolerances(intolerances, intoleranceNames)}`;
    }
    console.log(query);
    return query;
}

/**
 * Formats the given ingredients so that it becomes a comma-separated list with no whitespaces.
 * @param ingredients The list to be formatted.
 */
function formatIngredients(ingredients: string) {
    ingredients = ingredients.toLowerCase();
    for (let i = 1; i < ingredients.length - 1; i++) {
        if (ingredients[i] == " " && ingredients[i - 1] == ",") {
            ingredients = ingredients.slice(0, i) + ingredients.slice(i + 1);
            i--;
        }
    }
    for (let i = 1; i < ingredients.length - 1; i++) {
        if (ingredients[i] == " ") {
            ingredients = ingredients.slice(0, i) + "%20" + ingredients.slice(i + 1);
        }
    }
    return ingredients;
}

/**
 * Formats the given intolerances so that it becomes a comma-separated list with no whitespaces.
 * @param intolerances The list signifying wether an intolerance is present.
 * @param intoleranceNames The names of the intolerances.
 */
function formatIntolerances(intolerances: boolean[], intoleranceNames: string[]) {
    let result = "";
    let firstI = true;
    for (let i = 0; i < intolerances.length; i++) {
        if (intolerances[i]) {
            if (!firstI) {
                result += ",";
            }
            if (intoleranceNames[i] == "Tree nut") {
                result += "tree%20nut";
            } else {
                result += intoleranceNames[i].toLowerCase();
            }
            firstI = false;
        }
    }
    return result;
}

/**
 * Sends an HTTP request to the Spoonacular API, parses and saves the results to the given object.
 * @param name The natural language recipe search query.
 * @param ingredients A list of ingredients that should/must be used in the recipes.
 * @param type The type of recipe, "main course" for example.
 * @param intolerances A list of intolerances. All recipes returned must not contain ingredients that are not suitable
 * for people with the intolerances entered.
 * @param intoleranceNames The names of the intolerances that can be selected.
 * @param setData The function used to store the result.
 */
async function search(name: string, ingredients: string, type: string, intolerances: boolean[], intoleranceNames: string[], setData: (data: object) => void) {
    const query = buildQuery(name, ingredients, type, intolerances, intoleranceNames);
    const response = await fetch(query);
    let data;
    if (response.ok) {
        data = await response.json();
    } else {
        alert("Http error: " + response.statusText);
    }
    setData(data.results);
    console.log(data.results);
}

/**
 * Sets the value of the list of favourites, and saves it to local storage.
 * @param favourites The value to be set and saved.
 * @param setFavourites The function used to set the list of favoruites.
 */
function saveFavourites(favourites: Favourite[], setFavourites: (favourites: Favourite[]) => void) {
    setFavourites(favourites);
    localStorage.setItem("Favourites", JSON.stringify(favourites));
}