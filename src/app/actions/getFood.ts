'use server'
import { createClient } from '@supabase/supabase-js';
 
export async function getFood() {
    console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const response = await supabase.from('attendee').select('*');
    console.log("response", response);
    if (response.statusText !== 'OK') {
        return false;
    } else {
        const data = await response.data
        console.log(data);
        return data;        
    }
}