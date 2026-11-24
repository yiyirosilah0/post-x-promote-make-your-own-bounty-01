// post-x-promote-make-your-own-bounty-01 — entry program (Node 22, standard library only).
//
// The entry itself is the X post: one post of our own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own, make.fun / @makefunai and our play code in its text.
// This program only hands the post's address to the grader: it reads POST.json
// from the repository root and writes it to the output directory, where the
// gate picks it up and reads the post's replies, reposts and quotes from X.
// Nothing this program writes is scored — the post's score decides the places.
// The score is replies + reposts + quotes, each counting 1; views and likes move nothing.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally, the two env vars
// below let you point them anywhere.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(SOURCE)) {
  console.error(`POST.json not found in ${BOT_DIR} — write it with the post's address first.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);
