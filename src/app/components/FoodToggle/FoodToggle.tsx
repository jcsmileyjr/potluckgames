"use client"
import { useState } from "react";
import { UserSummary } from "../Types";
import Image from "next/image";
import Cavet from '../../assets/images/caret.png';
// transform rotate-180 transition duration-200
export default function FoodToggle({details}: Readonly<{details: UserSummary}>) {
    const [open, setOpen] = useState(false);
    return (
        <details open={open} onClick={() => setOpen(!open)}>
            <summary className="flex flex-row gap-8 justify-between items-center text-primaryBrown ">
                <div className="flex-3 flex flex-row gap-8 sm:gap-16">
                    <p>{details.userName}</p>
                    <p>{details.dishType}: {details.dishName}</p>
                </div>
                <Image className={`h-4 ${!open ? 'rotate-0 transition duration-800' : 'rotate-180 transition duration-800'}`}  src={Cavet} width={20} height={5} alt="rotating cavet"/>
            </summary>
            <p className="text-blackaccent1 pl-4">{details.dishdescription}</p>
        </details>
    )
}