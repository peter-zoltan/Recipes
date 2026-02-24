import Container from "react-bootstrap/Container";

/**
 * Contains the view of a single recipe in a list, can be clicked to go to it's expanded view.
 * @param name Name of the recipe.
 * @param image Image to be displayed alongside the recipe.
 * @param recipes The list of recipes.
 * @param onClick The function that brings up it's extended view.
 * @constructor
 */
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