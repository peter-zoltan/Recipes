import Container from "react-bootstrap/Container";
import type {Favourite} from "./Favourite.tsx";
import {useState} from "react";

/**
 * Contains the expanded view of a recipe, allows for saving notes and saving the recipe as a favourite.
 * @param recipe The recipe to be viewed.
 * @param setSearchState Signifies whether this is the view that should be shown, is shown when it's false.
 * @param favourites The list of recipes and their notes save as favourites.
 * @param saveFavourites The function to save a recipe as a favourite along with it's note.
 * @constructor
 */
export default function ExpandedRecipe({recipe, setSearchState, favourites, saveFavourites} :
{recipe: object, setSearchState : (state: boolean) => void, favourites: Favourite[], saveFavourites: () => void }) {
    function getNotesByName() {
        for (let i = 0; i < favourites.length; i++) {
            if (favourites[i].recipe.title == recipe.title) {
                return favourites[i].notes;
            }
        }
    }
    const [notes, setNotes] = useState<string>("");
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column col-8 col-lg-6 p-2">
            <div><img src={recipe.image} alt="" /></div>
            <div>{recipe.title}</div>
            <div><a href={recipe.sourceUrl}>Source: {recipe.sourceName}</a></div>
            {getNotesByName() && <p>Notes: {getNotesByName()}</p>}
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            <Container className="d-flex">
                <button onClick={() => { setSearchState(true); setSearchState(true); }} className="btn btn-primary">
                    Back
                </button>
                <input type="text" value={notes} onChange={e => setNotes(e.currentTarget.value)}
                       className="form-control" placeholder="Notes" />
                <button onClick={() => { favourites.push({recipe: recipe, notes: notes}); saveFavourites() }}
                        className="btn btn-primary">
                    Save to favourites
                </button>
            </Container>
        </Container>
    );
}