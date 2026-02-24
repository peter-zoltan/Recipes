import type {JSX} from "react";

/**
 * A type containing a recipe object, and the respective notes.
 */
export type Favourite = {
    recipe: object,
    notes: string,
}

/**
 * Contains the dropdown menu used to select saved favourite.
 * @param favourites The list of recipes and their notes save as favourites.
 * @param setSearchState Decides which view is shown, the search menu or a single recipe.
 * @param setCurrentRecipe Sets the recipe to be shown in the single recipe view.
 * @constructor
 */
export default function Favourites({favourites, setSearchState, setCurrentRecipe}: 
{favourites: Favourite[], setSearchState: (state: boolean) => void, setCurrentRecipe: (recipe: object) => void } ) {
    const items: JSX.Element[] = [];

    /**
     * Transforms the list of favourites into an array of elements for the dropdown menu.
     */
    function getFavourites() {
        if (favourites.length == 0) {
            items.push(
                <li key={0}>
                    <button className="dropdown-item" type="button">
                        Nothing saved yet
                    </button>
                </li>
            );
        } else {
            items.splice(0, items.length);
        }
        for (let i = 0; i < favourites.length; i++) {
            items.push(
                <li key={i}>
                    <button className="dropdown-item" type="button" 
                            onClick={() => { setCurrentRecipe(favourites[i].recipe); {setSearchState(false) } }}>
                        {favourites[i].recipe.title}
                    </button>
                </li>
            );
        }
    }
    getFavourites();
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Favourites
            </button>
            <ul className="dropdown-menu overflow-auto" style={{maxHeight: "200px"}}>
                {items}
            </ul>
        </div>
    );
}