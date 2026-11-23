// The Funniest AI Out-of-Office Reply — make.fun entry.
// The program writes a single out-of-office auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I'm on vacation, so a Roomba is answering your emails — it has already bumped into three of them and apologized to a wall.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
