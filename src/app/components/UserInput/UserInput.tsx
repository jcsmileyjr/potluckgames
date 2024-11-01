"use client"

export default function UserInput({inputName, content, description, getValue}: Readonly<{inputName: string, content: string, description: string | boolean, getValue: (e: React.ChangeEvent<HTMLInputElement>) => void}>) {
    return (
        <div className="mb-4">
            <label htmlFor={inputName} className="block text-base font-bold text-primaryBrown">{content}</label>
            <input name={inputName} onChange={(e) => getValue(e)} id={inputName} type="text" className="w-full my-1 p-2 border border-black rounded-md text-black" />
            {description !== true &&
                <p className="text-blackaccent2 text-sm">{description} </p>
            }
        </div>
    )   
}                   