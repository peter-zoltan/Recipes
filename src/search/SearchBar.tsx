import {useState} from "react";
import Container from "react-bootstrap/Container";

export default function SearchBar() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    return (
        <form className="d-flex justify-content-center align-items-center col-8 col-lg-6 flex-column">
            <Container className="d-flex justify-content-center align-items-center p-2">
                <input className="form-control me-2" type="search" placeholder="Name"
                       value={name} onChange={e => setName(e.currentTarget.value)}
                />
                <button className="btn btn-outline-success" type="button">
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