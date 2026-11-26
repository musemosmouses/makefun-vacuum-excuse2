import { mkdirSync, writeFileSync } from "node:fs";

// A robot vacuum that treats one rug as a legal adversary and obeys the
// restraining order it imagines against it. One line, 86 characters.
const excuse =
  "I did not miss it. I have a restraining order against that rug and I am respecting it.";

// The program writes exactly that one line, deterministically: no clock,
// no randomness, no network, no reading of anything before the write.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, excuse, "utf8");
