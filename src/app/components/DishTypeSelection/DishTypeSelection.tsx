

const Selection = ({type, getValue}: {type: string, getValue: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <div className="my-2 flex flex-row gap-4 items-center">
            <input onChange={getValue} className="border-primaryBrown h-6 w-6 accent-primaryBrown active:accent-primaryBrown" type="radio" id={type} name="dish_type" value={type} />
            <label htmlFor={type}>{type}</label>
        </div>
    )
}


export default function DishTypeSelection({getValue}: Readonly<{getValue: (e: React.ChangeEvent<HTMLInputElement>) => void}>) {
    return (
        <div className="">
            <p className="text-primaryBrown font-bold">Dish Type</p>
            <div className="flex flex-row flex-wrap gap-4 text-primaryBrown">
                <Selection getValue={getValue} type="Meat" />
                <Selection getValue={getValue} type="Vegetable" />
                <Selection getValue={getValue} type="Bread" />
                <Selection getValue={getValue} type="Drink" />
                <Selection getValue={getValue} type="Dessert" />
            </div>
        </div>
    )
}