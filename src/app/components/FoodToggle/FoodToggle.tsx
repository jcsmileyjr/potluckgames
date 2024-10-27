import { UserSummary } from "../Types";
import Image from "next/image";
import Cavet from '../../assets/images/caret.png';

export default function FoodToggle({details}: Readonly<{details: UserSummary}>) {
    return (
        <details>
            <summary className="flex flex-row justify-between items-center text-primaryBrown">
                <p>{details.userName}</p>
                <p>{details.dishType}: {details.dishName}</p>
                <Image className="h-4" src={Cavet} width={20} height={5} alt="rotating cavet"/>
            </summary>
            <p className="text-blackaccent1 pl-4">{details.dishdescription}</p>
        </details>
    )
}