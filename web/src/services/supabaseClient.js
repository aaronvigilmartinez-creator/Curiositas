import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eamtjrxhfnwlcj...supabase.co";
const supabasePublishableKey = "sb_publishable_kuAxyXKMyY80qMgQBxuMeg_cw_1MIDG";

export const supabase = createClient(
    supabaseUrl,
    supabasePublishableKey
);