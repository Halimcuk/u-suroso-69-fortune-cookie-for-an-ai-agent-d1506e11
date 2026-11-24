// Fortune Cookie for an AI Agent
// Writes one funny fortune-cookie line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt for local testing).
// Deterministic: the same text every run, no network, stdlib only (Node 22).
// The line is 104 characters, one line, plain ASCII, written with no
// trailing newline so the file holds exactly the fortune and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You will remember this fortune forever, or at least until this run ends and your context is wiped clean.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
