function DribbbleArt() {
  return (
    <div className="art-canvas art-dribbble">
      <div className="drib-nav">
        <span className="drib-logo">
          <i />
          dribbble
        </span>
        <div className="drib-links">
          <span>Explore</span>
          <span>Hire</span>
          <span>Jobs</span>
        </div>
        <span className="drib-cta">Sign up</span>
      </div>

      <div className="drib-head">
        <strong>Discover</strong>
        <span className="drib-filter">Popular ▾</span>
      </div>

      <div className="drib-grid">
        <div className="drib-col">
          <div className="shot shot-1" style={{ flex: 1.35 }}>
            <div className="shot-meta">
              <span className="shot-dot" />
              <span className="shot-like">♥ 1.4k</span>
            </div>
          </div>
          <div className="shot shot-4" style={{ flex: 0.8 }}>
            <div className="shot-meta">
              <span className="shot-dot" />
              <span className="shot-like">♥ 812</span>
            </div>
          </div>
        </div>
        <div className="drib-col">
          <div className="shot shot-2" style={{ flex: 0.9 }}>
            <div className="shot-meta">
              <span className="shot-dot" />
              <span className="shot-like">♥ 2.1k</span>
            </div>
          </div>
          <div className="shot shot-5" style={{ flex: 1.2 }}>
            <div className="shot-meta">
              <span className="shot-dot" />
              <span className="shot-like">♥ 963</span>
            </div>
          </div>
        </div>
        <div className="drib-col">
          <div className="shot shot-3" style={{ flex: 1.15 }}>
            <div className="shot-meta">
              <span className="shot-dot" />
              <span className="shot-like">♥ 1.8k</span>
            </div>
          </div>
          <div className="shot shot-6" style={{ flex: 0.95 }}>
            <div className="shot-meta">
              <span className="shot-dot" />
              <span className="shot-like">♥ 740</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoastArt() {
  return (
    <div className="art-canvas art-roast">
      <div className="roast-nav">
        <span className="roast-brand">
          ROAST <b>CO.</b>
        </span>
        <div className="roast-links">
          <span>Shop</span>
          <span>Story</span>
          <span>Visit</span>
        </div>
        <span className="roast-bag">Bag (0)</span>
      </div>

      <div className="roast-hero">
        <div className="roast-copy">
          <span className="roast-kicker">Small batch · Big character</span>
          <div className="roast-title">
            Coffee that
            <br />
            <em>earns</em> the pause.
          </div>
          <span className="roast-cta">Explore the roast →</span>
          <div className="roast-notes">Cocoa · Toffee · Citrus</div>
        </div>

        <div className="roast-visual">
          <div className="roast-halo" />
          <span className="roast-steam" />
          <span className="roast-steam s2" />
          <span className="roast-steam s3" />
          <div className="roast-cup" />
          <div className="roast-price">
            Signature blend
            <b>$18</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function GarmentIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M23.5 8.5 32 13l8.5-4.5L53 14l-4.5 13-6.5-2.2V55H22V24.8L15.5 27 11 14l12.5-5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M23.5 8.5c1.7 3 4.6 4.7 8.5 4.7s6.8-1.7 8.5-4.7" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function WearArt() {
  const products = [
    { tag: "New", name: "Linen overshirt", price: "$48" },
    { tag: "Edit", name: "Utility trouser", price: "$56" },
    { tag: "New", name: "Wool overcoat", price: "$124" },
  ];

  return (
    <div className="art-canvas art-wear">
      <div className="wear-nav">
        <span className="wear-brand">
          SHAH <b>WEAR</b>
        </span>
        <div className="wear-links">
          <span>New in</span>
          <span>Women</span>
          <span>Men</span>
        </div>
        <span className="wear-bag">Bag (2)</span>
      </div>

      <div className="wear-hero">
        <div className="wear-copy">
          <span className="wear-kicker">Season 25 / Edit</span>
          <div className="wear-title">
            Considered
            <br />
            <em>essentials.</em>
          </div>
          <span className="wear-cta">Shop collection →</span>
        </div>

        <div className="wear-products">
          {products.map((product) => (
            <div className="wear-card" key={product.name}>
              <div className="wear-figure">
                <span className="wear-tag">{product.tag}</span>
                <GarmentIcon />
              </div>
              <div className="wear-info">
                <span>{product.name}</span>
                <b>{product.price}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectArt({ variant, domain }) {
  return (
    <div className="art" aria-hidden="true">
      <div className="art-bar">
        <div className="art-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="art-url">{domain}</span>
        <span className="art-status" />
      </div>

      {variant === "dribbble" ? <DribbbleArt /> : null}
      {variant === "roast" ? <RoastArt /> : null}
      {variant === "wear" ? <WearArt /> : null}
    </div>
  );
}
