'use server'
import supabase from "@/app/lib/supabase";

export async function getRealTimeAttendence() {
    const channel = supabase
    .channel('schema-db-changes')
    .on(
        'postgres_changes',
        {
        event: '*',
        schema: 'public',
        table: 'attendee',
        },
        (payload) => console.log(payload)
    )
    .subscribe()

    return channel;
}