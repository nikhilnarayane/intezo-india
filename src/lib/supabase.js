import { createClient } from "@supabase/supabase-js";

/**
 * @returns {import("@supabase/supabase-js").SupabaseClient | null}
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getSupabaseClient = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    "";

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    "";

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
};

export const supabase = null;
