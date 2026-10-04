import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
import Link from 'next/link';

const firstNameLetters = [
  {
    letter: 'J',
    src: '/name-glyphs/j.svg',
    pieces: [
      { id: 'hook', delay: 0 },
      { id: 'stem', delay: 560 },
      { id: 'cap', delay: 1120 },
    ],
  },
  {
    letter: 'A',
    src: '/name-glyphs/a.svg',
    pieces: [
      { id: 'cap', delay: 1680 },
      { id: 'left', delay: 2240 },
      { id: 'right', delay: 2800 },
    ],
  },
  {
    letter: 'C',
    src: '/name-glyphs/c.svg',
    pieces: [
      { id: 'top', delay: 3360 },
      { id: 'bottom', delay: 3920 },
    ],
  },
  {
    letter: 'K',
    src: '/name-glyphs/k.svg',
    pieces: [
      { id: 'stem', delay: 4480 },
      { id: 'upper', delay: 5040 },
      { id: 'lower', delay: 5600 },
    ],
  },
];

async function getGlyphDimensions(src: string) {
  const svg = await readFile(join(process.cwd(), 'public', src.slice(1)), 'utf8');
  const root = svg.match(/<svg\b([^>]*)>/)?.[1];

  if (!root) {
    throw new Error(`Could not read SVG root element for ${src}`);
  }

  const getAttribute = (name: string) => root.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1];
  const width = Number.parseFloat(getAttribute('width') ?? '');
  const height = Number.parseFloat(getAttribute('height') ?? '');
  const viewBox = getAttribute('viewBox');

  if (!Number.isFinite(width) || !Number.isFinite(height) || !viewBox) {
    throw new Error(`Missing valid width, height, or viewBox in ${src}`);
  }

  return { width, height, viewBox };
}

export default async function Home() {
  const glyphs = await Promise.all(
    firstNameLetters.map(async (glyph) => ({
      ...glyph,
      ...(await getGlyphDimensions(glyph.src)),
    }))
  );

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
            <span className="name-line name-line-first" aria-hidden="true">
              {glyphs.map((glyph) => (
                <span className="name-glyph" key={glyph.letter}>
                  <svg
                    className="name-glyph-svg"
                    width={glyph.width}
                    height={glyph.height}
                    viewBox={glyph.viewBox}
                    aria-hidden="true"
                  >
                    {glyph.pieces.map((piece) => (
                      <use
                        href={`${glyph.src}#${piece.id}`}
                        className="name-glyph-piece"
                        key={piece.id}
                        style={{ animationDelay: `${piece.delay}ms` }}
                      />
                    ))}
                  </svg>
                </span>
              ))}
            </span>
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
