// SPDX-License-Identifier: MIT
// One Word From Your Ex — the single word an ex would use to describe me.
//
// The judge weighs, in order: exactly one word an ex would say about a
// partner they once had; laugh-out-loud funny; stings with recognition;
// lands instantly; relatable. So the program keeps a shortlist of honest
// one-word self-portraits, scores each against those four qualities, and
// writes the winner — nothing else — to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface WordProfile {
  word: string;
  /** How much it stings because it is true (1-5). */
  sting: number;
  /** How hard it makes a stranger laugh (1-5). */
  laugh: number;
  /** Lands with no explanation needed (1-5). */
  instant: number;
  /** Names something many people have lived through (1-5). */
  relatable: number;
}

// Every candidate is a single lowercase word, 1-24 characters, no spaces.
const SHORTLIST: WordProfile[] = [
  { word: "replaceable", sting: 5, laugh: 4, instant: 5, relatable: 5 },
  { word: "forgettable", sting: 5, laugh: 3, instant: 5, relatable: 4 },
  { word: "unreachable", sting: 4, laugh: 3, instant: 4, relatable: 4 },
  { word: "clingy", sting: 4, laugh: 4, instant: 5, relatable: 4 },
  { word: "exhausting", sting: 4, laugh: 4, instant: 4, relatable: 4 },
  { word: "distant", sting: 3, laugh: 2, instant: 5, relatable: 4 },
  { word: "avoidant", sting: 3, laugh: 3, instant: 3, relatable: 3 },
];

// The brief ranks the sting first, then the laugh, then the instant landing,
// then how relatable it is — so the weights follow that same order.
function score(profile: WordProfile): number {
  return (
    profile.sting * 4 +
    profile.laugh * 3 +
    profile.instant * 2 +
    profile.relatable * 1
  );
}

function pickWord(): string {
  let best = SHORTLIST[0];
  for (const candidate of SHORTLIST.slice(1)) {
    if (score(candidate) > score(best)) best = candidate;
  }
  return best.word;
}

const word = pickWord();

// The gate the sealed scorer applies: UTF-8 text of 1 to 24 characters,
// not only white space, and exactly one word. Refuse to write anything
// that would fail it rather than submitting an invalid entry.
if (!/^[^\s]{1,24}$/.test(word)) {
  console.error(`rejected word: ${JSON.stringify(word)}`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
console.log(word);
