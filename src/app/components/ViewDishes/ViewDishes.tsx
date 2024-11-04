'use client'
import { useState, useEffect } from "react";
import FoodToggle from "../FoodToggle/FoodToggle";
import { UserSummary } from "../Types";
import supabase from "@/app/lib/supabase";

export default function ViewDishes({ data }: { data: UserSummary[] }) {
    const [UserSummaries, setUserSummaries] = useState<UserSummary[]>(data);

    useEffect(() => {
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
                const ifExists = UserSummaries.find((userSummary) => userSummary.id == newAttendee.id);
                if(ifExists !== undefined) {
                    const index = UserSummaries.indexOf(ifExists);
                    setUserSummaries((prevState) => [...prevState.slice(0, index), newAttendee, ...prevState.slice(index + 1)]);
                } else {
                    setUserSummaries((prevState) => [...prevState, newAttendee]);
                }
            }
        )
        .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [UserSummaries]);
    
    return (
        <section className="flex-1 px-4 pb-8 bg-backgroundSunsetOrange lg:min-h-80">
            <div className="lg:w-1/2 lg:mx-auto">
                <h2 className="text-primaryBrown font-bold text-left text-2xl pt-2">We going Whole Hog tonight</h2>
                <p className="text-blackaccent1"> I reckon we&apos;ll have ourselves a fine spread, so let&apos;s read what&apos;s on the menu!</p>
                
                <div className="flex flex-col gap-4 mt-2">
                    {
                        UserSummaries.length == 0 ? <p className="text-blackaccent1">No attendees yet</p> :
                        UserSummaries.map((userSummary) => {
                            return <FoodToggle key={userSummary.id} details={userSummary}/>
                        })
                    }                
                </div>

            </div>
        </section>
    )
}