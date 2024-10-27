import UserInput from "../UserInput/UserInput";

export default function AddDish() {

    return (
        <section className="flex-1 px-4">
            <h2 className="text-primaryBrown font-bold text-left text-2xl pt-2">What’cha Bringing</h2>
            <p className="text-blackaccent1">Well, y'all, I’m mighty curious—what kinda dish are you bringing' to the potluck?</p>
            <div className="my-4">
                <UserInput inputName="dish1" />
                <UserInput inputName="dish2" />
                <UserInput inputName="dish3"  />
            </div>
        </section>
    )   
}