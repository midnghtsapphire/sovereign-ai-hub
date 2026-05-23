import { readFile, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const requiredFiles = [
  "README.md",
  "CHANGELOG.md",
  "DEPLOYMENT_GUIDE.md",
  "GO_TO_MARKET.md",
  "BRAND_GUIDELINES.md",
  "SECURITY.md",
  ".env.example",
  "package.json",
  "package-lock.json",
];

const missing = [];
for (const relativePath of requiredFiles) {
  const absolutePath = path.join(projectRoot, relativePath);
  try {
    await access(absolutePath);
  } catch {
    missing.push(relativePath);
  }
}

if (missing.length > 0) {
  console.error("Baseline validation failed. Missing required files:");
  for (const relativePath of missing) console.error(`- ${relativePath}`);
  process.exit(1);
}

const gitignorePath = path.join(projectRoot, ".gitignore");
const gitignore = await readFile(gitignorePath, "utf8");
if (!gitignore.split(/\r?\n/).some((line) => line.trim() === ".env")) {
  console.error("Baseline validation failed: .gitignore must ignore `.env`.");
  process.exit(1);
}

console.log("Baseline validation OK.");

