import "./App.css";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <main className="coming-soon">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <nav className="navbar">
        <a className="brand" href="/" aria-label="Luna Perfumes">
          LUNA
          <span>PERFUMES</span>
        </a>

        <a
          className="instagram-link"
          href="https://instagram.com/lunaperfumes.official"
          target="_blank"
          rel="noreferrer"
        >
          Follow the story ↗
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            YOU FOUND US BEFORE THE FIRST SPRAY
          </p>

          <h1>
            Become the
            <span>memory they replay.</span>
          </h1>

          <p className="description">
            Luna isn’t simply worn. It arrives before you, stays after
            you, and turns ordinary nights into unfinished stories.
          </p>

          <div className="cta-area">
            <a
              className="access-button"
              href="https://instagram.com/lunaperfumes.official"
              target="_blank"
              rel="noreferrer"
            >
              Enter the inner circle
              <span>↗</span>
            </a>

            <p className="access-note">
              Private launch access · Limited first release
            </p>
          </div>
        </div>

        <div className="product-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="image-glow" />

          <span className="edition-mark">
            01
            <small>THE BEGINNING</small>
          </span>

          <img
            src={heroImage}
            alt="The first fragrance by Luna Perfumes"
          />

          <p className="floating-note note-one">Felt once</p>
          <p className="floating-note note-two">Wanted twice</p>
          <p className="floating-note note-three">Remembered after</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Luna Perfumes</p>
        <p>Some scents fade. Luna follows.</p>
      </footer>
    </main>
  );
}

export default App;