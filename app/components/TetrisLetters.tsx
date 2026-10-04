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
  H: { src: '/tetris-letters/h.svg', pieces: ['stem-left', 'upper-right', 'lower-right'] },
  J: { src: '/tetris-letters/j.svg', pieces: ['hook', 'stem'] },
  K: { src: '/tetris-letters/k.svg', pieces: ['upper', 'stem', 'lower'] },
  N: { src: '/tetris-letters/n.svg', pieces: ['hook', 'stem'] },
  O: { src: '/tetris-letters/o.svg', pieces: ['hook', 'stem'] },
  S: { src: '/tetris-letters/s.svg', pieces: ['hook', 'stem'] },
  W: { src: '/tetris-letters/w.svg', pieces: ['hook', 'stem'] },
};

async function getTetrisLetterViewBox(src: string) {
  const svg = await readFile(join(process.cwd(), 'public', src.slice(1)), 'utf8');
  const root = svg.match(/<svg\b([^>]*)>/)?.[1];

  if (!root) {
    throw new Error(`Could not read SVG root element for ${src}`);
  }

  const viewBox = root.match(/\bviewBox="([^"]+)"/)?.[1];

  if (!viewBox) {
    throw new Error(`Missing viewBox in ${src}`);
  }

  return viewBox;
}

export default async function TetrisLetters({
  rows,
}: {
  rows: readonly (readonly TetrisLetter[])[];
}) {
  const usedLetters = [...new Set(rows.flat())];
  const letterViewBoxes = await Promise.all(
    usedLetters.map(
      async (letter) => [letter, await getTetrisLetterViewBox(tetrisLetters[letter].src)] as const
    )
  );
  const viewBoxes = new Map(letterViewBoxes);
  let nextDelay = 0;

  return (
    <>
      {rows.map((letters, rowIndex) => (
        <span className="name-tetris-letter-row" key={rowIndex} aria-hidden="true">
          {letters.map((letter, index) => {
            const definition = tetrisLetters[letter];
            const viewBox = viewBoxes.get(letter);

            if (!viewBox) {
              throw new Error(`Missing viewBox for Tetris letter ${letter}`);
            }

            return (
              <span className="name-tetris-letter" key={`${letter}-${index}`}>
                <svg className="name-tetris-letter-svg" viewBox={viewBox} aria-hidden="true">
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
