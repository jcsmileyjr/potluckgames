'use client'
import { useState, useEffect } from "react";
import { getFood } from "@/app/actions/getFood";
import { getRealTimeAttendence } from "@/app/actions/getRealTimeAttendence";
import FoodToggle from "../FoodToggle/FoodToggle";
import { UserSummary } from "../Types";
import { createClient } from '@supabase/supabase-js';

export default function ViewDishes() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [UserSummaries, setUserSummaries] = useState<UserSummary[]>([]);

    useEffect(() => {
        getFood().then((data) => {
            if (!data) return;
            setUserSummaries(data as UserSummary[]);
        });
    }, []);

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
                setUserSummaries([...UserSummaries, payload.new as UserSummary]);
            }
        )
        .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase]);
    
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