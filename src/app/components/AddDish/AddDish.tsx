import DishTypeSelection from "../DishTypeSelection/DishTypeSelection";
import UserInput from "../UserInput/UserInput";

export default function AddDish() {

    return (
        <section className="flex-1 px-4 pb-4 bg-white lg:w-1/2 lg:mx-auto border-t border-primaryBrown border-solid">
            <h2 className="text-primaryBrown font-bold text-left text-2xl pt-4">What’cha Bringing</h2>
            <p className="text-blackaccent1">Well, y'all, I’m mighty curious—what kinda dish are you bringing' to the potluck?</p>
            <div className="my-4">
                <UserInput inputName="emailAddress" content="Email Address" description="Only seen by the host to identify the chef." />
                <UserInput inputName="dishName" content="Name of the Dish" description />
                <UserInput inputName="dishDescription" content="Dish’s Description" description />
                <DishTypeSelection />
                <button type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md mt-4 w-full sm:w-1/2">Submit</button>
            </div>
        </section>
    )   
}