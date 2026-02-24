import SearchBar, {type SearchBarProps} from "./SearchBar.tsx";
import Intolerances, {type IntolerancesProps} from "./Intolerances.tsx";
import MealType, {type MealTypeProps} from "./MealType.tsx";

/**
 * Separates the props to be passed down to different children.
 */
type SearchProps = {
    searchBar: SearchBarProps;
    mealType: MealTypeProps;
    intolerances: IntolerancesProps;
}

/**
 * Contains all components related to using the APi to search for a recipe.
 * @param searchBar Searchbars for name and ingredients, as well as the search button.
 * @param mealType Dropdown menu for selecting the type if meal.
 * @param intolerances Checkbox buttons for setting intolerances.
 */
export default function Search({searchBar, mealType, intolerances}: SearchProps) {
    return (
        <>
            <SearchBar name={searchBar.name} setName={searchBar.setName}
                       ingredients={searchBar.ingredients} setIngredients={searchBar.setIngredients}
                       onSearch={searchBar.onSearch} />
            <MealType type={mealType.type} setType={mealType.setType} />
            <Intolerances intolerances={intolerances.intolerances} setIntolerances={intolerances.setIntolerances}
                          intoleranceNames={intolerances.intoleranceNames} />
        </>
    );
}