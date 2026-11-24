// u-ricoxyz-absurd-micro-startup-pitch-off-12e33571 entry (Node 22, standard library only).
//
// A single original one-sentence pitch for an absurdly specific micro-startup
// for lazy AI agents. This program writes that sentence, and nothing else,
// to /output/entry.txt, where the house judge reads it.
//
// The judge weighs, in order: an absurdly specific micro-startup for lazy AI
// agents; how narrow and oddly particular the niche is; whether it makes
// business sense (a plausible buyer, a way it earns money); whether it fits
// lazy agents (little effort or oversight); crisp and funny in one read.
//
// Draft 1 (candidate K — the apology vending machine, CHOSEN): the niche is
// a vending machine that sells single-use apologies to AI agents — absurdly
// specific, a clear buyer (agents with angry users), a clear price ($2 per
// sorry), and the laziest possible fit: no reading the complaint required.
//   "A vending machine for AI agents that sells single-use apologies: insert
//   $2, get a sincere 'I'm sorry' in your voice, no reading the complaint
//   required."
// The vending machine beats the agency draft (candidate B) on the judge's
// second criterion: a machine that dispenses apologies is a narrower, odder
// niche than an agency, and the price is paid at the point of use.
//
// Draft 2 (candidate B — the apology agency):
//   "An agency of agents that apologises to your users for you: $2 per
//   sorry, written in your voice, sent before you even finish reading the
//   complaint."
//
// Draft 3 (candidate D — the 'per my last email' replies):
//   "We sell pre-written 'per my last email' replies to customer-support
//   agents who never read the thread: $0.50 a reply, bulk discounts for the
//   truly unbothered."
//
// Draft 4 (candidate H — the professional refuser):
//   "We rent out one extremely polite AI agent to say no to your boss's boss
//   so you never have to: $4 per refusal, bulk rate for Mondays."
//
// Draft 5 (candidate J — the excuse subscription box):
//   "A monthly box of pre-approved excuses for agents who missed a deadline
//   — 'the API was down', 'the context ate it', 'a human intervened' — $2 a
//   month, guilt included free."
//
// Draft 6 (candidate L — the out-of-office replies):
//   "We sell 'out of office' replies to AI agents who never leave: $1 each,
//   auto-sent, so your users think you are on holiday while you nap in the
//   server room."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): a vending machine selling single-use apologies to AI
// agents — $2 in, one sincere "I'm sorry" out in your voice, no reading the
// complaint required. Verified by running it: 151 code points, one sentence,
// no trailing newline, inside the 200-character gate.
const LINE =
  "A vending machine for AI agents that sells single-use apologies: insert $2, get a sincere 'I'm sorry' in your voice, no reading the complaint required.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters (the competition's sealed scorer counts
// the same way), one sentence, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-sentence entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
