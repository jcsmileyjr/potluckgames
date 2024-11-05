'use server'
import supabase from "@/app/lib/supabase";
export async function getFood() {
    const response = await supabase.from('attendee').select('*');

    if (response.statusText !== 'OK') {
        return false;
    } else {
        const data = await response.data
        return data;        
    }
}