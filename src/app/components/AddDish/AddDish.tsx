"use client"
import Swal from 'sweetalert2';
import { addAttendee } from '@/app/actions/addAttendee';
import { useState } from "react";
import { UserSummary } from "../Types";
import { customAlphabet } from 'nanoid';
import DishTypeSelection from "../DishTypeSelection/DishTypeSelection";
import UserInput from "../UserInput/UserInput";

export default function AddDish() {
    const nanoid = customAlphabet('1234567890', 16); // Generate a 16-digit numeric ID
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

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        userSummary.id = Number(nanoid());
        const success = await addAttendee({ attendee: userSummary });

        if (success) {
            Swal.fire(`Thank you ${userSummary.user_name}. My mouth is watering for some ${userSummary.dish_name}`, '', 'success');    
        } else {
            Swal.fire(`Sorry ${userSummary.user_name}. There was a problem adding ${userSummary.dish_name}`, '', 'error');
        }

        // Clear the form
        setUserSummary({
            id: 0,
            user_name: '',
            user_email: '',
            dish_type: '',
            dish_name: '',
            dish_description: '',
        });

    }

    const enableSubmit = () => {
        if (userSummary.user_name && userSummary.user_email && userSummary.dish_name && userSummary.dish_description && userSummary.dish_type) {
            return true
        } else {
            return false
        }
    }

    return (
        <section className="flex-1 px-4 pb-4 bg-white  border-t border-primaryBrown border-solid">
            <div className="lg:w-1/2 lg:mx-auto">
                <h2 className="text-primaryBrown font-bold text-left text-2xl pt-4">What&apos;cha Bringing</h2>
                <p className="text-blackaccent1">Well, y&apos;all, I&apos;m mighty curious—what kinda dish are you bringing&apos; to the potluck?</p>
                <form className="my-4">
                    <div className="border border-primaryBrown rounded-md p-4 mb-4 relative">
                        <label className="blackaccent2 absolute -top-3.5 text-primaryBrown bg-white px-1">Attendee Information</label>
                        <UserInput value={userSummary.user_name} getValue={(e) => handleChange(e)} inputName="user_name" content="Attendee Name" description="Seen by other attendees."/>
                        <UserInput value={userSummary.user_email} getValue={(e) => handleChange(e)} inputName="user_email" content="Email Address" description="Only seen by the host to identify the chef." />
                    </div>
                    <div className="border border-primaryBrown rounded-md p-4 mb-4 relative">
                        <label className="blackaccent2 absolute -top-3.5 text-primaryBrown bg-white px-1">Dish</label>
                        <UserInput value={userSummary.dish_name} getValue={(e) => handleChange(e)} inputName="dish_name" content="Name of the Dish" description />
                        <UserInput value={userSummary.dish_description} getValue={(e) => handleChange(e)} inputName="dish_description" content="Dish’s Description" description />
                        <DishTypeSelection section="add dish" value={userSummary.dish_type} getValue={(e) => handleChange(e)}/>
                        <button disabled={!enableSubmit()} onClick={(e) => handleSubmit(e)} type="submit" className="bg-accentRed text-white py-2 px-4 rounded-md mt-4 w-full disabled:opacity-75">Submit</button>
                    </div>
                </form>            
            </div>
        </section>
    )   
}