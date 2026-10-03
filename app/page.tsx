import ArrowOutward from '@mui/icons-material/ArrowOutward'
import Image from 'next/image'
import Link from 'next/link'

const tetrominoClasses = [
  'tetromino-i',
  'tetromino-o',
  'tetromino-t',
  'tetromino-s',
  'tetromino-z',
  'tetromino-j',
  'tetromino-l',
]
const firstNameLetters = Array.from('Jack')
const lastNameLetters = Array.from('Hewson.')
const jPieceDropDuration = 560
const aPieceStartDelay = jPieceDropDuration * 3
const cPieceStartDelay = jPieceDropDuration * 6
const kPieceStartDelay = jPieceDropDuration * 8
const remainingFirstNameDelay = jPieceDropDuration * 11
const lastNameStartDelay = remainingFirstNameDelay

export default function Home() {
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
          <h1 id="home-title" aria-label="Jack Hewson">
            <span className="name-line name-line-first" aria-hidden="true">
              {firstNameLetters.map((letter, index) => (
                letter === 'J' ? (
                  <span className="name-letter name-letter-j" key={`jack-${index}`}>
                    <span className="letter-piece-grid">
                      <span
                        className="falling-piece j-piece-horizontal tetromino-i"
                        style={{ animationDelay: `${jPieceDropDuration * 2}ms` }}
                      >
                        {Array.from({ length: 4 }, (_, blockIndex) => (
                          <span className="piece-cell" key={`top-${blockIndex}`} />
                        ))}
                      </span>
                      <span
                        className="falling-piece j-piece-vertical tetromino-i"
                        style={{ animationDelay: `${jPieceDropDuration}ms` }}
                      >
                        {Array.from({ length: 4 }, (_, blockIndex) => (
                          <span className="piece-cell" key={`right-${blockIndex}`} />
                        ))}
                      </span>
                      <span
                        className="falling-piece j-piece-hook tetromino-j"
                        style={{ animationDelay: '0ms' }}
                      >
                        <span className="piece-cell hook-top" />
                        <span className="piece-cell hook-bottom-left" />
                        <span className="piece-cell hook-bottom-middle" />
                        <span className="piece-cell hook-bottom-right" />
                      </span>
                    </span>
                  </span>
                ) : letter === 'a' ? (
                  <span className="name-letter name-letter-a" key={`jack-${index}`}>
                    <span className="letter-piece-grid">
                      <span
                        className="falling-piece a-piece-cap tetromino-t"
                        style={{ animationDelay: `${aPieceStartDelay}ms` }}
                      >
                        <span className="piece-cell cap-top" />
                        <span className="piece-cell cap-left" />
                        <span className="piece-cell cap-center" />
                        <span className="piece-cell cap-right" />
                      </span>
                      <span
                        className="falling-piece a-piece-left tetromino-t"
                        style={{ animationDelay: `${aPieceStartDelay + jPieceDropDuration}ms` }}
                      >
                        <span className="piece-cell left-top" />
                        <span className="piece-cell left-middle" />
                        <span className="piece-cell left-arm" />
                        <span className="piece-cell left-bottom" />
                      </span>
                      <span
                        className="falling-piece a-piece-right tetromino-l"
                        style={{ animationDelay: `${aPieceStartDelay + jPieceDropDuration * 2}ms` }}
                      >
                        <span className="piece-cell right-top" />
                        <span className="piece-cell right-middle" />
                        <span className="piece-cell right-foot" />
                        <span className="piece-cell right-bottom" />
                      </span>
                    </span>
                  </span>
                ) : letter === 'c' ? (
                  <span className="name-letter name-letter-c" key={`jack-${index}`}>
                    <span className="letter-piece-grid">
                      <span
                        className="falling-piece c-piece-top tetromino-j"
                        style={{ animationDelay: `${cPieceStartDelay}ms` }}
                      >
                        <span className="piece-cell c-top-left" />
                        <span className="piece-cell c-top-middle" />
                        <span className="piece-cell c-top-right" />
                        <span className="piece-cell c-top-stem" />
                      </span>
                      <span
                        className="falling-piece c-piece-bottom tetromino-j"
                        style={{ animationDelay: `${cPieceStartDelay + jPieceDropDuration}ms` }}
                      >
                        <span className="piece-cell c-bottom-stem" />
                        <span className="piece-cell c-bottom-left" />
                        <span className="piece-cell c-bottom-middle" />
                        <span className="piece-cell c-bottom-right" />
                      </span>
                    </span>
                  </span>
                ) : letter === 'k' ? (
                  <span className="name-letter name-letter-k" key={`jack-${index}`}>
                    <span className="letter-piece-grid">
                      <span
                        className="falling-piece k-piece-stem tetromino-i"
                        style={{ animationDelay: `${kPieceStartDelay}ms` }}
                      >
                        {Array.from({ length: 5 }, (_, blockIndex) => (
                          <span className="piece-cell" key={`k-stem-${blockIndex}`} />
                        ))}
                      </span>
                      <span
                        className="falling-piece k-piece-upper tetromino-s"
                        style={{ animationDelay: `${kPieceStartDelay + jPieceDropDuration}ms` }}
                      >
                        <span className="piece-cell upper-top-left" />
                        <span className="piece-cell upper-top-right" />
                        <span className="piece-cell upper-bottom-left" />
                        <span className="piece-cell upper-bottom-right" />
                      </span>
                      <span
                        className="falling-piece k-piece-lower tetromino-z"
                        style={{ animationDelay: `${kPieceStartDelay + jPieceDropDuration * 2}ms` }}
                      >
                        <span className="piece-cell lower-top-left" />
                        <span className="piece-cell lower-top-right" />
                        <span className="piece-cell lower-bottom-left" />
                        <span className="piece-cell lower-bottom-right" />
                      </span>
                    </span>
                  </span>
                ) : (
                  <span
                    className={`name-letter ${tetrominoClasses[index % tetrominoClasses.length]}`}
                    key={`jack-${index}`}
                    style={{ animationDelay: `${remainingFirstNameDelay + (index - 2) * 90}ms` }}
                  >
                    {letter}
                  </span>
                )
              ))}
            </span>
            <br />
            <span className="name-line name-line-last" aria-hidden="true">
              {lastNameLetters.map((letter, index) => (
                <span
                  className={`name-letter ${tetrominoClasses[(index + firstNameLetters.length) % tetrominoClasses.length]}`}
                  key={`hewson-${index}`}
                  style={{ animationDelay: `${lastNameStartDelay + index * 90}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>
          <p className="intro-copy">
            I build thoughtful digital experiences, with care for the details and the people who use them.
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
  )
}
