import "./App.css";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <main className="coming-soon">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <nav className="navbar">
        <a className="brand" href="/">
          LUNA
          <span>PERFUMES</span>
        </a>

        <a
          className="instagram-link"
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A NEW FRAGRANCE EXPERIENCE</p>

          <h1>
            Your next
            <span>signature scent.</span>
          </h1>

          <p className="description">
            A collection created to linger—on your skin, in the room and in
            someone’s memory.
          </p>

          <div className="launch">
            <span className="launch-line" />
            <p>LAUNCHING SOON</p>
          </div>
        </div>

        <div className="product-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="image-glow" />

          <img src={heroImage} alt="Luna perfume coming soon" />

          <p className="floating-note note-one">Floral</p>
          <p className="floating-note note-two">Warm</p>
          <p className="floating-note note-three">Unforgettable</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Luna Perfumes</p>
        <p>Made for unforgettable moments.</p>
      </footer>
    </main>
  );
}

export default App;