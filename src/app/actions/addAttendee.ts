'use server'
import { UserSummary } from '../../app/components/Types';
import supabase from "@/app/lib/supabase";
export async function addAttendee({attendee}: {attendee: UserSummary}) {
    const { error } = await supabase
    .from('attendee')
    .insert([attendee])
    .select();

    if (error) {
        return false;
    } else {
        return true;
    }
}