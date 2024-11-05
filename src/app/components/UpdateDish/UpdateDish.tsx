"use client"
import Swal from 'sweetalert2';
import { useState } from "react";
import UserInput from "../UserInput/UserInput";
import DishTypeSelection from "../DishTypeSelection/DishTypeSelection";
import { updateAttendee } from "@/app/actions/updateAttendee";
import { removeAttendee } from '@/app/actions/removeAttendee';
import { PartialUserSummary } from '../Types';

export default function UpdateDish() {

    const [userSummary, setUserSummary] = useState({
        user_email: "",
        dish_name: "",
        dish_description: "",
        dish_type: '',
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

        const data: PartialUserSummary = {
            user_email: userSummary.user_email,
            dish_name: userSummary.dish_name,
            dish_description: userSummary.dish_description,
            dish_type: userSummary.dish_type
        }
        updateAttendee(data);
        Swal.fire(`Thank you. The list is now updated as you bringing ${userSummary.dish_name}`, '', 'success');
        
        setUserSummary({
            user_email: "",
            dish_name: "",
            dish_description: "",
            dish_type: '',
        })
    }

    const handleRemoveSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeAttendee(removeUserEmail);
        setRemoveUserEmail("");
        Swal.fire(`Thank you. Your dish is no no longer on the list.`, '', 'success');
    }

    const enableUpdateSubmit = () => {
        if (userSummary.user_email && userSummary.dish_name && userSummary.dish_description && userSummary.dish_type) {
            return true
        } else {
            return false
        }
    }

    const enableRemoveSubmit = () => {
        if (removeUserEmail) {
            return true
        } else {
            return false
        }
    }

    return (
        <section className="flex-1 px-4 bg-backgroundYellow">
            <div className="lg:w-1/2 lg:mx-auto">
                <h2 className="text-primaryBrown font-bold text-left text-2xl pt-2">Potluck Flexibility and Understanding</h2>
                <p className="text-blackaccent1"> Oh, honey, we completely understand if you need to switch up what you&apos;re bringing—or if plans change and you can&apos;t make it. </p>

                <p className="text-xl font-bold text-primaryBrown mt-4 mt-2">Change the Dish you are Bringing</p>
                <div className="pb-4 border-b border-primaryBrown border-solid">
                    <UserInput value={userSummary.user_email} getValue={(e) => handleChange(e)}  inputName="user_email" content="Email" description />
                    <UserInput value={userSummary.dish_name} getValue={(e) => handleChange(e)}  inputName="dish_name" content="Name of the Dish" description />
                    <UserInput value={userSummary.dish_description} getValue={(e) => handleChange(e)}  inputName="dish_description" content="Dish’s Description" description  />
                    <DishTypeSelection value={userSummary.dish_type} section="update dish" getValue={(e) => handleChange(e)} />
                    <button disabled={!enableUpdateSubmit()} onClick={(e) => handleUpdateSubmit(e)} type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md mt-4 w-full sm:w-1/2 disabled:opacity-75">Submit</button>
                </div>
                
                <p className="text-xl font-bold text-primaryBrown mt-4 mt-2 divide-y">Remove Your Dish from the Menu</p> 
                <div>
                    <UserInput value={removeUserEmail} getValue={(e) => setRemoveUserEmail(e.target.value)} inputName="email" content="Email" description />
                    <button disabled={!enableRemoveSubmit()} onClick={(e) => handleRemoveSubmit(e)} type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md my-4 w-full sm:w-1/2 disabled:opacity-75">Submit</button>
                </div>
            </div>
        </section>
    )
}