import RecipeListItem from "./RecipeListItem.tsx";
import Container from "react-bootstrap/Container";
import type {ReactElement} from "react";

/**
 * Contains the list of recipes received after a search.
 * @param recipes The list of recipes.
 * @param setCurrentRecipe Sets the recipe to be shown in the single recipe view.
 * @param setSearchState Decides which view is shown, the search menu or a single recipe.
 * @constructor
 */
export default function RecipeList({recipes, setCurrentRecipe, setSearchState} :
{ recipes: object, setCurrentRecipe: (recipe: object) => void, setSearchState: (state: boolean) => void }) {
    const listItems : ReactElement[] = [];;
    for (let i = 0; i < recipes.length; i++) {
        listItems.push(
            <RecipeListItem name={recipes[i].title} image={recipes[i].image} key={i} recipes={recipes}
                            onClick={() => { setCurrentRecipe(recipes[i]); setSearchState(false); }} />
        );
    }
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column col-8 col-lg-6 p-2">
            {listItems}
        </Container>
    )
}