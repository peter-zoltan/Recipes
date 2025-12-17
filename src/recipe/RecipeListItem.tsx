export default function RecipeListItem({name, image} : { name: string, image: string }) {
    return (
        <div>Ez egy recept: {name}, {image}</div>
    );
}