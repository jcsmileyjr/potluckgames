'use client'
import { useState, useEffect} from "react";
import Link from "next/link";
import FoodToggle from "../FoodToggle/FoodToggle";
import { UserSummary } from "../Types";
import supabase from "@/app/lib/supabase";
import { getFood } from "@/app/actions/getFood";

export default function ViewDishes() {
    const [UserSummaries, setUserSummaries] = useState<UserSummary[]>([]);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        async function getAttenddees() {
            const data: UserSummary[] = await getFood() as UserSummary[];
            setUserSummaries(data);
        }

        getAttenddees();
    }, [])

    useEffect(() => {
        const findIndex = (id: number) => {
            return UserSummaries.findIndex((userSummary) => userSummary.id == id);
        }
        
        const channel = supabase
        .channel('schema-db-changes')
        .on(
            'postgres_changes',
            {
            event: '*',
            schema: 'public',
            table: 'attendee',
            },
            (payload) => {
                const newAttendee = payload.new as UserSummary;
                if (payload.eventType === "INSERT") {
                    setUserSummaries((prevState) => [...prevState, newAttendee]);
                } else if (payload.eventType === "DELETE") {
                    const index = findIndex(payload.old.id);
                    setUserSummaries((prevState) => [...prevState.slice(0, index), ...prevState.slice(index + 1)]);
                } else {
                    const index = findIndex(payload.old.id);
                    setUserSummaries((prevState) => [...prevState.slice(0, index), newAttendee, ...prevState.slice(index + 1)]);
                }
            }
        )
        .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [UserSummaries]);
    
    return (
        <section className="flex-1 px-4 pb-8 bg-backgroundSunsetOrange lg:min-h-80 flex flex-col sm:block">
            <div className="lg:w-1/2 lg:mx-auto mb-8">
                <div onClick={() => setOpenMenu(!openMenu)} className="flex flex-row justify-between pt-2 text-primaryBrown font-bold text-left text-2xl cursor-pointer">
                    <h2 className="">We going Whole Hog tonight</h2>
                    <p className="underline ">Click to View Menu</p>
                </div>
                <p className="text-blackaccent1"> I reckon we&apos;ll have ourselves a fine spread, so let&apos;s read what&apos;s on the menu!</p>
                
                <div className={`flex flex-col gap-4 mt-2 transition duration-500 ease-in-out ${openMenu ? 'opacity-100 ' : 'opacity-0'}`}>
                    {
                        UserSummaries.length == 0 ? <p className="text-blackaccent1">No attendees yet</p> :
                        UserSummaries.map((userSummary) => {
                            return <FoodToggle key={userSummary.id} details={userSummary}/>
                        })
                    }                
                </div>
            </div>
            <Link className="sm:hidden bg-accentRed text-white py-2 px-4 rounded-md w-full text-center" href="/UpdateAttendee" >Update/Remove food item</Link>
        </section>
    )
}