"use client"
import { useState } from "react";
import { UserSummary } from "../Types";
import DishTypeSelection from "../DishTypeSelection/DishTypeSelection";
import UserInput from "../UserInput/UserInput";

export default function AddDish() {

    const [userSummary, setUserSummary] = useState<UserSummary>({
        id: 0,
        user_name: '',
        user_email: '',
        dish_type: '',
        dish_name: '',
        dish_description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserSummary((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(userSummary);
    }

    return (
        <section className="flex-1 px-4 pb-4 bg-white  border-t border-primaryBrown border-solid">
            <div className="lg:w-1/2 lg:mx-auto">
                <h2 className="text-primaryBrown font-bold text-left text-2xl pt-4">What&apos;cha Bringing</h2>
                <p className="text-blackaccent1">Well, y&apos;all, I&apos;m mighty curious—what kinda dish are you bringing' to the potluck?</p>
                <form className="my-4">
                    <UserInput getValue={(e) => handleChange(e)} inputName="user_name" content="Attendee Name" description="Seen by other attendees."/>
                    <UserInput getValue={(e) => handleChange(e)} inputName="user_email" content="Email Address" description="Only seen by the host to identify the chef." />
                    <UserInput getValue={(e) => handleChange(e)} inputName="dish_name" content="Name of the Dish" description />
                    <UserInput getValue={(e) => handleChange(e)} inputName="dish_description" content="Dish’s Description" description />
                    <DishTypeSelection section="add dish" getValue={(e) => handleChange(e)}/>
                    <button onClick={(e) => handleSubmit(e)} type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md mt-4 w-full sm:w-1/2">Submit</button>
                </form>            
            </div>
        </section>
    )   
}