

const Selection = ({type}: {type: string}) => {
    return (
        <div className="my-2 flex flex-row gap-4 items-center">
            <input className="border-primaryBrown h-6 w-6" type="radio" id={type} name="dishType" value={type} />
            <label htmlFor={type}>{type}</label>
        </div>
    )
}


export default function DishTypeSelection() {
    return (
        <div>
            <p className="text-primaryBrown font-bold">Dish Type</p>
            <div className="flex flex-row flex-wrap gap-4 text-primaryBrown">
                <Selection type="Meat" />
                <Selection type="Vegetable" />
                <Selection type="Bread" />
                <Selection type="Drink" />
                <Selection type="Dessert" />
            </div>
        </div>
    )
}