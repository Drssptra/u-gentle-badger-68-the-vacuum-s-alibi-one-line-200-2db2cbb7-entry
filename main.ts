// The Vacuum's Alibi: one line, 200 characters or fewer.
// A robot vacuum explains why it missed a spot. Nothing else is printed.
//
// The competition's gate reads the entry from $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), so the program writes the exact entry text
// there with NO trailing newline (best effort: when the sandbox has no
// writable output dir, stdout still carries the line).

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const alibi =
  "I did not miss that spot. My sensors classified it as load-bearing, and I am not licensed to demolish crumbs.";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), alibi, "utf8");
} catch {
  // No writable output dir here (e.g. a local run); stdout is the entry.
}

console.log(alibi);
