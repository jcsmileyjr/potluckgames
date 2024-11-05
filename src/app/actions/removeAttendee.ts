'use server'
import supabase from "@/app/lib/supabase";

export async function removeAttendee(email: string) {
    console.log("email", email);
    const { data, error } = await supabase
    .from('attendee')
    .delete()
    .eq('user_email', email)
    .select()

    if (error) {
        console.log("error", error);
        return false;
    } else {
        console.log("data", data);
        return true;
    }   
}