export type MealTypeProps = {
    type: string;
    setType: (name: string) => void;
}

export default function MealType({type, setType}: MealTypeProps) {
    const types = ["Main course", "Side dish", "Dessert", "Appetizer", "Salad", "Bread", "Breakfast", "Soup", "Beverage", "Sauce", "Marinade", "Fingerfood", "Snack", "Drink"];
    const items = [];
    for (let i = 0; i < types.length; i++) {
        items.push(
            <li key={i}>
                <button className="dropdown-item" type="button" onClick={() => setType(types[i])}>
                    {types[i]}
                </button>
            </li>
        )
    }
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Meal type: {type}
            </button>
            <ul className="dropdown-menu overflow-auto" style={{maxHeight: "200px"}}>
                {items}
            </ul>
        </div>
    );
}