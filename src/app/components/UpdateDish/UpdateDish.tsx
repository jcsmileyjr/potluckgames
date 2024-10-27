import UserInput from "../UserInput/UserInput";
import DishTypeSelection from "../DishTypeSelection/DishTypeSelection";


export default function UpdateDish() {
    return (
        <section className="flex-1 px-4 bg-backgroundYellow">
            <h2 className="text-primaryBrown font-bold text-left text-2xl pt-2">Potluck Flexibility and Understanding</h2>
            <p className="text-blackaccent1"> Oh, honey, we completely understand if you need to switch up what you're bringing—or if plans change and you can't make it. </p>

            <p className="text-xl font-bold text-primaryBrown mt-4 mt-2">Change the Dish you are Bringing</p>
            <div>
                <UserInput inputName="email" content="Email" />
                <UserInput inputName="dishName" content="Name of the Dish" />
                <UserInput inputName="dishDescription" content="Dish’s Description"  />
                <DishTypeSelection />
                <button type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md mt-4 w-full sm:w-1/2">Submit</button>
            </div>
            
            <p className="text-xl font-bold text-primaryBrown mt-4 mt-2 divide-y">Remove Your Dish from the Menu</p> 
            <div>
                <UserInput inputName="email" content="Email" />
            </div>
        </section>
    )
}