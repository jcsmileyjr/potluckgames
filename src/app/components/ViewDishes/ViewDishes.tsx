'use client'
import { useState, useEffect } from "react";
import { getFood } from "@/app/actions/getFood";
import FoodToggle from "../FoodToggle/FoodToggle";
import { UserSummary } from "../Types";
const UserSummaries: UserSummary[] = [
    {
        id: 1,
        user_name: "John Doe",
        user_email: "8VHs8@example.com",
        dish_type: "Meat",
        dish_name: "Turkey N Dressing",
        dish_description: "Slow cooked rotisserie  turkey with buttery, savory, melt-in-your-mouth stuffing"
    },
    {
        id: 2,
        user_name: "Jane Doe",
        user_email: "8VHs8@example.com",
        dish_type: "Bread",
        dish_name: "Butter rolls",
        dish_description: "This is a description of the dish"
    }
]

export default function ViewDishes() {
    const [UserSummaries, setUserSummaries] = useState<UserSummary[]>([]);

    useEffect(() => {
        getFood().then((data) => {
            if (!data) return;
            setUserSummaries(data as UserSummary[]);
        });
    }, []);
    // getFood();
    return (
        <section className="flex-1 px-4 pb-8 bg-backgroundSunsetOrange lg:min-h-80">
            <div className="lg:w-1/2 lg:mx-auto">
                <h2 className="text-primaryBrown font-bold text-left text-2xl pt-2">We going Whole Hog tonight</h2>
                <p className="text-blackaccent1"> I reckon we&apos;ll have ourselves a fine spread, so let&apos;s read what&apos;s on the menu!</p>
                
                <div className="flex flex-col gap-4 mt-2">
                    {
                        UserSummaries.map((userSummary) => {
                            return <FoodToggle key={userSummary.id} details={userSummary}/>
                        })
                    }                
                </div>

            </div>
        </section>
    )
}