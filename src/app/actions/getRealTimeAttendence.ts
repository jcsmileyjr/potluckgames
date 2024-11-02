'use server'
import { createClient } from '@supabase/supabase-js';

export async function getRealTimeAttendence() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

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