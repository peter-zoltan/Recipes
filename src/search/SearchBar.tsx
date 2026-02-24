import Container from "react-bootstrap/Container";

/**
 * Props for the SearchBar component.
 */
export type SearchBarProps = {
    name: string;
    setName: (name: string) => void;
    ingredients: string;
    setIngredients: (ingredients: string) => void;
    onSearch: () => void;
}

/**
 * Contains the searchbars and the search button.
 * @param name Value of the natural language recipe search query.
 * @param setName Function to set the value of the natural language recipe search query.
 * @param ingredients The list of ingredients that should/must be used in the recipes.
 * @param setIngredients Function to set the value of the list of ingredients that should/must be used in the recipes.
 * @param onSearch Function that should be called when the search button is pressed, sending a network call to the API.
 */
export default function SearchBar({name, setName, ingredients, setIngredients, onSearch}: SearchBarProps) {
    return (
        <form className="d-flex justify-content-center align-items-center col-8 col-lg-6 flex-column">
            <Container className="d-flex justify-content-center align-items-center p-2">
                <input className="form-control me-2" type="search" placeholder="Name"
                       value={name} onChange={e => setName(e.currentTarget.value)}
                />
                <button className="btn btn-outline-success" type="button" onClick={onSearch}>
                    Search
                </button>
            </Container>
            <Container className="p-2">
                <input className="form-control col-12" type="search" placeholder="Ingredients"
                       value={ingredients} onChange={e => setIngredients(e.currentTarget.value)}
                />
            </Container>
        </form>
    );
}