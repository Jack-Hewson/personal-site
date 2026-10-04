import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
import Link from 'next/link';
import TetrisLetters from './components/TetrisLetters';

const tetrisLetterRows = [
  ['J', 'A', 'C', 'K'],
  ['K', 'A', 'C', 'J', 'A', 'C'],
] as const;

export default async function Home() {
  return (
    <main className="home-page">
      <section className="home-visual" aria-label="London skyline">
        <Image
          src="/to-be-filled-later.jpg"
          alt="coming soon"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 75vw"
          className="home-photo"
        />
        <div className="visual-meta visual-meta-top" aria-hidden="true">
          <span>JH / PORTFOLIO</span>
          <span>51°30&apos; N&nbsp;&nbsp; 0°04&apos; W</span>
        </div>
        <div className="visual-meta visual-meta-bottom" aria-hidden="true">
          <span>RIVER THAMES, LONDON</span>
          <span>01 — 03</span>
        </div>
      </section>

      <aside className="home-panel">
        <header className="home-header">
          <Link className="home-wordmark" href="/" aria-label="Jack Hewson, home">
            <span className="wordmark-symbol">JH</span>
            <span className="wordmark-name">JACK HEWSON</span>
          </Link>
          <span className="availability">
            <span className="availability-dot" />
            OPEN TO OPPORTUNITIES
          </span>
        </header>

        <section className="home-intro" aria-labelledby="home-title">
          <p className="intro-eyebrow">DEVELOPER / LONDON, UK</p>
          <h1 id="home-title" aria-label="Jack">
            <TetrisLetters rows={tetrisLetterRows} />
          </h1>
          <p className="intro-copy">
            I build thoughtful digital experiences, with care for the details and the people who use
            them.
          </p>
          <nav className="home-actions" aria-label="Main navigation">
            <Link className="home-action home-action-primary" href="/about">
              About me <ArrowOutward aria-hidden="true" fontSize="small" />
            </Link>
            <a
              className="home-action home-action-secondary"
              href="https://github.com/Jack-Hewson"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowOutward aria-hidden="true" fontSize="small" />
            </a>
          </nav>
        </section>

        <footer className="home-footer">
          <span>INDEPENDENT PRACTICE</span>
          <span>© 2026</span>
        </footer>
      </aside>
    </main>
  );
}
