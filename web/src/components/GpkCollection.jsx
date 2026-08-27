import { useEffect, useMemo, useState } from "react";
import { getGpkCards } from "../services/gpkService";

export default function GpkCollection() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCards() {
      try {
        const data = await getGpkCards();
        setCards(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCards();
  }, []);

  const filteredCards = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return cards;

    return cards.filter((card) =>
      [
        card.title,
        card.subtitle,
        card.series,
        card.set_name,
        card.card_number,
        card.variant,
        card.artist,
        card.subject,
        card.release_year,
      ]
        .filter(Boolean)
        .some((value) =>
          String(value).toLowerCase().includes(query)
        )
    );
  }, [cards, search]);

  if (loading) {
    return (
      <main className="gpk-collection">
        <h1>Garbage Pail Kids</h1>
        <p>Loading canonical collection...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="gpk-collection">
        <h1>Garbage Pail Kids</h1>
        <p>Unable to load collection.</p>
        <pre>{error}</pre>
      </main>
    );
  }

  return (
    <main className="gpk-collection">
      <header>
        <p>CURiositas Collection</p>

        <h1>Garbage Pail Kids</h1>

        <p>
          Canonical catalog of{" "}
          {cards.length.toLocaleString()} artifacts.
        </p>
      </header>

      <section>
        <label htmlFor="gpk-search">
          Search the collection
        </label>

        <input
          id="gpk-search"
          type="search"
          placeholder="Search by name, card number, series, set, artist..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      <section>
        <p>
          Showing {filteredCards.length.toLocaleString()} of{" "}
          {cards.length.toLocaleString()} artifacts
        </p>

        <div>
          {filteredCards.map((card) => (
            <article key={card.id}>
              <p>
                {card.series || "Unknown Series"}{" "}
                {card.card_number
                  ? `• ${card.card_number}`
                  : ""}
              </p>

              <h2>
                {card.title || "Untitled Artifact"}
              </h2>

              {card.subtitle && (
                <p>{card.subtitle}</p>
              )}

              <dl>
                {card.release_year && (
                  <>
                    <dt>Year</dt>
                    <dd>{card.release_year}</dd>
                  </>
                )}

                {card.set_name && (
                  <>
                    <dt>Set</dt>
                    <dd>{card.set_name}</dd>
                  </>
                )}

                {card.variant && (
                  <>
                    <dt>Variant</dt>
                    <dd>{card.variant}</dd>
                  </>
                )}

                {card.artist && (
                  <>
                    <dt>Artist</dt>
                    <dd>{card.artist}</dd>
                  </>
                )}

                <dt>Status</dt>
                <dd>
                  {card.canonical_status ||
                    "Undocumented"}
                </dd>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}