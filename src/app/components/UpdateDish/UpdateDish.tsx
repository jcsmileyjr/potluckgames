"use client"
import { useState } from "react";
import UserInput from "../UserInput/UserInput";
import DishTypeSelection from "../DishTypeSelection/DishTypeSelection";

export default function UpdateDish() {

    const [userSummary, setUserSummary] = useState({
        user_email: "",
        dish_name: "",
        dish_description: "",
    })
    const [removeUserEmail, setRemoveUserEmail] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserSummary((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleUpdateSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(userSummary);
    }

    const handleRemoveSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(removeUserEmail);
    }
    return (
        <section className="flex-1 px-4 bg-backgroundYellow">
            <div className="lg:w-1/2 lg:mx-auto">
                <h2 className="text-primaryBrown font-bold text-left text-2xl pt-2">Potluck Flexibility and Understanding</h2>
                <p className="text-blackaccent1"> Oh, honey, we completely understand if you need to switch up what you&apos;re bringing—or if plans change and you can&apos;t make it. </p>

                <p className="text-xl font-bold text-primaryBrown mt-4 mt-2">Change the Dish you are Bringing</p>
                <div className="pb-4 border-b border-primaryBrown border-solid">
                    <UserInput getValue={(e) => handleChange(e)}  inputName="user_email" content="Email" description />
                    <UserInput getValue={(e) => handleChange(e)}  inputName="dish_name" content="Name of the Dish" description />
                    <UserInput getValue={(e) => handleChange(e)}  inputName="dish_description" content="Dish’s Description" description  />
                    <DishTypeSelection section="update dish" getValue={(e) => handleChange(e)} />
                    <button onClick={(e) => handleUpdateSubmit(e)} type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md mt-4 w-full sm:w-1/2">Submit</button>
                </div>
                
                <p className="text-xl font-bold text-primaryBrown mt-4 mt-2 divide-y">Remove Your Dish from the Menu</p> 
                <div>
                    <UserInput getValue={(e) => setRemoveUserEmail(e.target.value)} inputName="email" content="Email" description />
                    <button onClick={(e) => handleRemoveSubmit(e)} type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md my-4 w-full sm:w-1/2">Submit</button>
                </div>
            </div>
        </section>
    )
}