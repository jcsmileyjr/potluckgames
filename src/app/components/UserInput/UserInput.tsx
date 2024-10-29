

export default function UserInput({inputName, content, description}: Readonly<{inputName: string, content: string, description: string | boolean}>) {
    console.log(`Description is ${description} and of type ${typeof description}`)
    return (
        <div className="mb-4">
            <label htmlFor={inputName} className="block text-base font-bold text-primaryBrown">{content}</label>
            <input id={inputName} type="text" className="w-full my-1 p-2 border border-black rounded-md" />
            {description !== true &&
                <p className="text-blackaccent2 text-sm">{description} </p>
            }
        </div>
    )   
}                   