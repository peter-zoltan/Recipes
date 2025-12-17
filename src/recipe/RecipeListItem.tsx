import Container from "react-bootstrap/Container";

export default function RecipeListItem({name, image, recipes, onClick} :
{ name: string, image: string, recipes: object, onClick: (recipe: object) => void}) {
    function findRecipeByName(name: string) {
        for (const recipe of recipes) {
            if (recipe.name === name) {
                return recipe;
            }
        }
    }
    return (
        <Container className="d-flex align-items-center p-1 border border-success rounded" style={{ cursor: "pointer" }}
                   onClick={() => onClick(findRecipeByName(name))}>
            <img src={image} alt="" style={{ height: "50px", width: "50px" }} className="justify-self-start"/>
            <span className="justify-self-end">{name}</span>
        </Container>
    );
}