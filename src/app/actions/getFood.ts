'use server'
import { createClient } from '@supabase/supabase-js';
 
export async function getFood() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const response = await supabase.from('attendee').select('*');
 
    if (response.statusText !== 'OK') {
        return false;
    } else {
        const data = await response.data
        return data;        
    }
}