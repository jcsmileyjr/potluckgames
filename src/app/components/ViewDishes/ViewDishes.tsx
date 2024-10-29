import FoodToggle from "../FoodToggle/FoodToggle";
import { UserSummary } from "../Types";
const UserSummaries: UserSummary[] = [
    {
        userName: "John Doe",
        userEmail: "8VHs8@example.com",
        dishType: "Meat",
        dishName: "Turkey N Dressing",
        dishdescription: "Slow cooked rotisserie  turkey with buttery, savory, melt-in-your-mouth stuffing"
    },
    {
        userName: "Jane Doe",
        userEmail: "8VHs8@example.com",
        dishType: "Bread",
        dishName: "Butter rolls",
        dishdescription: "This is a description of the dish"
    }
]

export default function ViewDishes() {
    return (
        <section className="flex-1 px-4 pb-8 bg-backgroundSunsetOrange lg:w-1/2 lg:mx-auto">
            <h2 className="text-primaryBrown font-bold text-left text-2xl pt-2">We going Whole Hog tonight</h2>
            <p className="text-blackaccent1"> I reckon we’ll have ourselves a fine spread, so let’s read what’s on the menu!</p>
            <div className="flex flex-col gap-4 mt-2">
                {
                    UserSummaries.map((userSummary) => {
                        return <FoodToggle details={userSummary}/>
                    })
                }                
            </div>
        </section>
    )
}