'use server'
import { createClient } from '@supabase/supabase-js';
import { UserSummary } from '../../app/components/Types';
export async function addAttendee({attendee}: {attendee: UserSummary}) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    
    const { data, error } = await supabase
    .from('attendee')
    .insert([attendee])
    .select();

    if (error) {
        return false;
    } else {
        return true;
    }
}