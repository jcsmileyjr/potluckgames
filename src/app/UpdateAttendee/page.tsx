import UpdateDish from "../components/UpdateDish/UpdateDish";

export default async function UpdateAttendee() {
    return (
        <main className="bg-backgroundYellow h-screen">
            <header className="bg-backgroundYellow">
                <h1 className="text-accentRed font-bold text-center text-4xl py-2">Potluck & Games</h1>
            </header>
            <UpdateDish />
        </main>
    )
}