import GpkCollection from "./GpkCollection";

const collections = [
  {
    name: "Garbage Pail Kids",
    description:
      "A canonical catalog transformed into a personal collection — discovered, curated, preserved, and given meaning.",
    symbol: "🃏",
    type: "Collection",
    themes: [
      {
        name: "Art",
        description:
          "Artifacts connected through art, artists, and artistic expression.",
        symbol: "🎨",
      },
      {
        name: "Childhood Games",
        description:
          "Artifacts connected to the games, play, and memories of childhood.",
        symbol: "🎲",
      },
      {
        name: "Presidential",
        description:
          "Artifacts connected to presidents, politics, and American history.",
        symbol: "🇺🇸",
      },
    ],
  },
];

const familyGalleries = [
  {
    name: "Aaron",
    symbol: "👤",
  },
  {
    name: "Harrison",
    symbol: "👤",
  },
  {
    name: "Harry",
    symbol: "👤",
  },
  {
    name: "Madeline",
    symbol: "👤",
  },
  {
    name: "Maddie",
    symbol: "👤",
  },
  {
    name: "Katherine",
    symbol: "👤",
  },
  {
    name: "Katie",
    symbol: "👤",
  },
];

export default function Curiositas() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #f8f6ff 0%, #ffffff 42%, #f5f3f9 100%)",
        color: "#17141f",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Curiositas Header */}
      <header
        style={{
          padding: "28px 40px 20px",
          borderBottom: "1px solid rgba(80, 70, 100, 0.12)",
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#756b82",
                marginBottom: "4px",
              }}
            >
              Curiositas
            </div>

            <div
              style={{
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              The Collection
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              color: "#756b82",
              fontSize: "14px",
            }}
          >
            <span>Discover</span>
            <span>•</span>
            <span>Curate</span>
            <span>•</span>
            <span>Preserve</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 40px 55px",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#756b82",
              marginBottom: "18px",
            }}
          >
            First Collection
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 84px)",
              lineHeight: 0.95,
              letterSpacing: "-0.065em",
              margin: 0,
              fontWeight: 750,
            }}
          >
            Garbage
            <br />
            Pail Kids
          </h1>

          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.55,
              color: "#6e6678",
              marginTop: "28px",
              maxWidth: "650px",
            }}
          >
            A canonical catalog transformed into a personal collection —
            discovered, curated, preserved, and given meaning.
          </p>
        </div>

        {/* Collection Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          <StatCard label="Canonical Artifacts" value="1,830" />
          <StatCard label="Collection" value="Garbage Pail Kids" />
          <StatCard label="Themes & Galleries" value="10" />
        </div>
      </section>

      {/* Collections & Themes */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 70px",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#756b82",
            }}
          >
            Your Curations
          </div>

          <h2
            style={{
              fontSize: "38px",
              letterSpacing: "-0.04em",
              margin: "8px 0 0",
            }}
          >
            Organized by meaning.
          </h2>

          <p
            style={{
              color: "#756b82",
              fontSize: "17px",
              marginTop: "10px",
            }}
          >
            Not merely by number.
          </p>
        </div>

        {collections.map((collection) => (
          <div
            key={collection.name}
            style={{
              padding: "32px",
              borderRadius: "22px",
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(80, 70, 100, 0.12)",
              boxShadow: "0 12px 40px rgba(50, 40, 70, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "38px",
                }}
              >
                {collection.symbol}
              </div>

              <div>
                <div
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#81778b",
                    marginBottom: "5px",
                  }}
                >
                  {collection.type}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "28px",
                    letterSpacing: "-0.035em",
                  }}
                >
                  {collection.name}
                </h3>
              </div>
            </div>

            <p
              style={{
                color: "#756b82",
                lineHeight: 1.55,
                marginTop: 0,
                maxWidth: "760px",
              }}
            >
              {collection.description}
            </p>

            <div
              style={{
                marginTop: "28px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#81778b",
                  marginBottom: "14px",
                }}
              >
                Themes
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(3, minmax(0, 1fr))",
                  gap: "16px",
                }}
              >
                {collection.themes.map((theme) => (
                  <div
                    key={theme.name}
                    style={{
                      padding: "24px",
                      borderRadius: "18px",
                      background: "#faf9fc",
                      border:
                        "1px solid rgba(80, 70, 100, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "30px",
                        marginBottom: "14px",
                      }}
                    >
                      {theme.symbol}
                    </div>

                    <h4
                      style={{
                        margin: 0,
                        fontSize: "21px",
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {theme.name}
                    </h4>

                    <p
                      style={{
                        color: "#756b82",
                        lineHeight: 1.5,
                        marginTop: "9px",
                        marginBottom: 0,
                        fontSize: "14px",
                      }}
                    >
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Family Museum */}
      <section
        style={{
          borderTop: "1px solid rgba(80, 70, 100, 0.12)",
          background: "rgba(255,255,255,0.72)",
          padding: "70px 0 75px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                fontSize: "40px",
              }}
            >
              🏛️
            </div>

            <div>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#756b82",
                }}
              >
                Museum
              </div>

              <h2
                style={{
                  fontSize: "38px",
                  letterSpacing: "-0.04em",
                  margin: "5px 0 0",
                }}
              >
                Family Museum
              </h2>
            </div>
          </div>

          <p
            style={{
              color: "#756b82",
              fontSize: "17px",
              maxWidth: "720px",
              lineHeight: 1.55,
              marginTop: "18px",
            }}
          >
            A living museum of the people, memories, objects, and stories
            that make this collection uniquely ours.
          </p>

          <div
            style={{
              marginTop: "34px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#81778b",
                marginBottom: "14px",
              }}
            >
              Galleries
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(4, minmax(0, 1fr))",
                gap: "14px",
              }}
            >
              {familyGalleries.map((gallery) => (
                <div
                  key={gallery.name}
                  style={{
                    padding: "22px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.9)",
                    border:
                      "1px solid rgba(80, 70, 100, 0.1)",
                    boxShadow:
                      "0 8px 25px rgba(50, 40, 70, 0.05)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "26px",
                      marginBottom: "10px",
                    }}
                  >
                    {gallery.symbol}
                  </div>

                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 650,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {gallery.name}
                  </div>

                  <div
                    style={{
                      marginTop: "5px",
                      fontSize: "12px",
                      color: "#81778b",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Gallery
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Canonical Catalog */}
      <section
        style={{
          borderTop: "1px solid rgba(80, 70, 100, 0.12)",
          background: "rgba(255,255,255,0.65)",
          padding: "60px 0 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px 35px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#756b82",
            }}
          >
            Discover
          </div>

          <h2
            style={{
              fontSize: "38px",
              letterSpacing: "-0.04em",
              margin: "8px 0 0",
            }}
          >
            Canonical Catalog
          </h2>

          <p
            style={{
              color: "#756b82",
              fontSize: "17px",
              maxWidth: "650px",
              lineHeight: 1.5,
            }}
          >
            The documented universe of Garbage Pail Kids artifacts.
          </p>
        </div>

        <GpkCollection />
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "50px 20px 70px",
          color: "#756b82",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Every object has a story.
        </div>

        <div
          style={{
            marginTop: "14px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#4f465a",
          }}
        >
          CURIOSITAS SUPRA OMNIA.
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div
      style={{
        padding: "22px 24px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.82)",
        border: "1px solid rgba(80, 70, 100, 0.1)",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#81778b",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: "20px",
          fontWeight: 650,
        }}
      >
        {value}
      </div>
    </div>
  );
}