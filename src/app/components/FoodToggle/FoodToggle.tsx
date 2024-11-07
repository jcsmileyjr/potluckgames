"use client"
import { useState } from "react";
import { UserSummary } from "../Types";
import Image from "next/image";
import Cavet from '../../assets/images/caret.png';

export default function FoodToggle({details}: Readonly<{details: UserSummary}>) {
    const [open, setOpen] = useState(false);
    return (
        <details open={open} onToggle={() => setOpen(!open)}>
            <summary className="flex flex-row items-center text-primaryBrown cursor-pointer">
                <p className="w-1/3">{details.user_name}</p>
                <p className="flex-1">{details.dish_type}: {details.dish_name}</p>
                <Image className={`h-4  ${open ? 'rotate-0 transition duration-800' : 'rotate-180 transition duration-800'}`}  src={Cavet} width={20} height={5} alt="rotating cavet"/>
            </summary>
            <p className="text-blackaccent1 pl-4">{details.dish_description}</p>
        </details>
    )
}