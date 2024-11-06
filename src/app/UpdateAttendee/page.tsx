import UpdateDish from "../components/UpdateDish/UpdateDish";
import Link from "next/link";

export default async function UpdateAttendee() {
    return (
        <main className="bg-backgroundYellow h-screen pt-4">
            <header className="bg-backgroundYellow flex justify-center">
                <Link href="/" className="text-accentRed font-bold text-4xl py-2">Potluck & Games</Link>
            </header>
            <UpdateDish />
        </main>
    )
}