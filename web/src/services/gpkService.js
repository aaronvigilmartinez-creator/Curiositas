import { supabase } from "./supabaseClient";

export async function getGpkCards() {
  const pageSize = 1000;
  let from = 0;
  let allCards = [];

  while (true) {
    const { data, error } = await supabase
      .from("artifacts")
      .select(`
        id,
        title,
        subtitle,
        description,
        manufacturer,
        brand,
        release_year,
        series,
        set_name,
        card_number,
        variant,
        artist,
        subject,
        canonical_status,
        notes
      `)
      .eq("artifact_type", "trading_card")
      .eq("brand", "Garbage Pail Kids")
      .order("release_year", { ascending: true })
      .order("series", { ascending: true })
      .order("card_number", { ascending: true })
      .range(from, from + pageSize - 1);

    if (error) {
      console.error("Error loading GPK cards:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      break;
    }

    allCards = [...allCards, ...data];

    if (data.length < pageSize) {
      break;
    }

    from += pageSize;
  }

  return allCards;
}