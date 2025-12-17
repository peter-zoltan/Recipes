import SearchBar, {type SearchBarProps} from "./SearchBar.tsx";
import Intolerances, {type IntolerancesProps} from "./Intolerances.tsx";
import MealType, {type MealTypeProps} from "./MealType.tsx";

type SearchProps = {
    searchBar: SearchBarProps;
    mealType: MealTypeProps;
    intolerances: IntolerancesProps;
}

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