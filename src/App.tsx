import './App.css'
import Search from "./search/Search.tsx";
import RecipeList from "./recipe/RecipeList.tsx";
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import type {SearchBarProps} from "./search/SearchBar.tsx";
import {type MealTypeProps} from "./search/MealType.tsx";

function App() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [type, setType] = useState("");
    const searchBarProps: SearchBarProps = {
        name: name,
        setName: setName,
        ingredients: ingredients,
        setIngredients: setIngredients,
    }
    const mealTypeProps: MealTypeProps = {
        type: type,
        setType: setType,
    }
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <Search searchBar={searchBarProps} mealType={mealTypeProps} />
            <RecipeList />
        </Container>
    );
}

export default App
