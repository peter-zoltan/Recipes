import RecipeListItem from "./RecipeListItem.tsx";
import Container from "react-bootstrap/Container";

export default function RecipeList() {
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column col-8 col-lg-6 p-2">
            <RecipeListItem name="példarecept" image="url"/>
        </Container>
    )
}