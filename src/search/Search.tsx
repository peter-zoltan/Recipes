import SearchBar, {type SearchBarProps} from "./SearchBar.tsx";
import Intolerances from "./Intolerances.tsx";
import MealType, {type MealTypeProps} from "./MealType.tsx";

type SearchProps = {
    searchBar: SearchBarProps;
    mealType: MealTypeProps;
}

export default function Search({searchBar, mealType}: SearchProps) {
    return (
        <>
            <SearchBar name={searchBar.name} setName={searchBar.setName}
                       ingredients={searchBar.ingredients} setIngredients={searchBar.setIngredients} />
            <MealType type={mealType.type} setType={mealType.setType} />
            <Intolerances />
        </>
    );
}