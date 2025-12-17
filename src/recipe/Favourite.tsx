import type {JSX} from "react";

export type Favourite = {
    recipe: object,
    notes: string,
}

export default function Favourites({favourites, setSearchState, setCurrentRecipe}: 
{favourites: Favourite[], setSearchState: (state: boolean) => void, setCurrentRecipe: (recipe: object) => void } ) {
    const items: JSX.Element[] = [];
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