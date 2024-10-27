

export default function UserInput({inputName, content}: Readonly<{inputName: string, content: string}>) {
    return (
        <div className="mb-4">
            <label htmlFor={inputName} className="block text-base font-bold text-primaryBrown">{content}</label>
            <input id={inputName} type="text" className="w-full my-1 p-2 border border-black rounded-md" />
            <p className="text-blackaccent2 text-sm">Only seen by the host to identify the chef. </p>
        </div>
    )   
}                   