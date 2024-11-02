

const Selection = ({type, value, section, getValue}: {type: string, value: string, section:string, getValue: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <div className="my-2 flex flex-row gap-4 items-center">
            <input onChange={getValue} className="border-primaryBrown h-6 w-6 accent-primaryBrown active:accent-primaryBrown" type="radio" id={`${section} ${type}`} name="dish_type" value={type} />
            <label htmlFor={type}>{type}</label>
        </div>
    )
}


export default function DishTypeSelection({section, value, getValue}: Readonly<{section: string, value: string, getValue: (e: React.ChangeEvent<HTMLInputElement>) => void}>) {
    return (
        <div className="">
            <p className="text-primaryBrown font-bold">Dish Type</p>
            <div className="flex flex-row flex-wrap gap-4 text-primaryBrown">
                <Selection section={section} value={value} getValue={getValue} type="Meat" />
                <Selection section={section} value={value} getValue={getValue} type="Vegetable" />
                <Selection section={section} value={value} getValue={getValue} type="Bread" />
                <Selection section={section} value={value} getValue={getValue} type="Drink" />
                <Selection section={section} value={value} getValue={getValue} type="Dessert" />
            </div>
        </div>
    )
}