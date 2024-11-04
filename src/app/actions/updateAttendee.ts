'use server'
import { PartialUserSummary } from "../components/Types";
import supabase from "@/app/lib/supabase";

export async function updateAttendee(attendee: PartialUserSummary) {
    const { data, error } = await supabase
    .from('attendee')
    .update({dish_type: attendee.dish_type, dish_name: attendee.dish_name , dish_description: attendee.dish_description })
    .eq('user_email',attendee.user_email)
    .select()

    if (error) {
        console.log("error", error);
        return false;
    } else {
        console.log("data", data);
        return true;
    }
}