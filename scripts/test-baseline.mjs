import { spawnSync } from "node:child_process";

const npmBin = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(npmBin, ["test"], { stdio: "inherit" });

process.exit(result.status ?? 1);

