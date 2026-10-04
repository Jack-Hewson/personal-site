import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

type TetrisLetter = 'A' | 'C' | 'E' | 'H' | 'J' | 'K' | 'N' | 'O' | 'S' | 'W';

type TetrisLetterDefinition = {
  src: string;
  pieces: string[];
};

const tetrisLetterDropDuration = 560;
const tetrisLetters: Record<TetrisLetter, TetrisLetterDefinition> = {
  A: { src: '/tetris-letters/a.svg', pieces: ['cap', 'left', 'right'] },
  C: { src: '/tetris-letters/c.svg', pieces: ['top', 'bottom'] },
  E: { src: '/tetris-letters/e.svg', pieces: ['upper', 'stem', 'lower'] },
  H: { src: '/tetris-letters/h.svg', pieces: ['hook', 'stem'] },
  J: { src: '/tetris-letters/j.svg', pieces: ['hook', 'stem'] },
  K: { src: '/tetris-letters/k.svg', pieces: ['upper', 'stem', 'lower'] },
  N: { src: '/tetris-letters/n.svg', pieces: ['hook', 'stem'] },
  O: { src: '/tetris-letters/o.svg', pieces: ['hook', 'stem'] },
  S: { src: '/tetris-letters/s.svg', pieces: ['hook', 'stem'] },
  W: { src: '/tetris-letters/w.svg', pieces: ['hook', 'stem'] },
};

async function getTetrisLetterDimensions(src: string) {
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

export default async function TetrisLetters({
  rows,
}: {
  rows: readonly (readonly TetrisLetter[])[];
}) {
  const usedLetters = [...new Set(rows.flat())];
  const letterDimensions = await Promise.all(
    usedLetters.map(
      async (letter) =>
        [letter, await getTetrisLetterDimensions(tetrisLetters[letter].src)] as const
    )
  );
  const dimensions = new Map(letterDimensions);
  let nextDelay = 0;

  return (
    <>
      {rows.map((letters, rowIndex) => (
        <span className="name-tetris-letter-row" key={rowIndex} aria-hidden="true">
          {letters.map((letter, index) => {
            const definition = tetrisLetters[letter];
            const letterSize = dimensions.get(letter);

            if (!letterSize) {
              throw new Error(`Missing dimensions for Tetris letter ${letter}`);
            }

            const { width, height, viewBox } = letterSize;

            return (
              <span className="name-tetris-letter" key={`${letter}-${index}`}>
                <svg
                  className="name-tetris-letter-svg"
                  width={width}
                  height={height}
                  viewBox={viewBox}
                  aria-hidden="true"
                >
                  {definition.pieces.map((id) => {
                    const delay = nextDelay;
                    nextDelay += tetrisLetterDropDuration;

                    return (
                      <use
                        href={`${definition.src}#${id}`}
                        className="tetris-letter-piece"
                        key={id}
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    );
                  })}
                </svg>
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}
