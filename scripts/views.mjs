// Prints the silent visit counter (Redis key oqm:views:home). Read-only.
// Credentials: UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN from the environment,
// else from ./.env.local, else from ../thermo-book/.env.local (same Upstash database).
// They are "sensitive" on Vercel, so `vercel env pull` returns them empty.
import fs from "node:fs";
import path from "node:path";

function readEnvFile(file) {
  if (!fs.existsSync(file)) return {};
  const env = {};
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*(UPSTASH_REDIS_REST_(?:URL|TOKEN))\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");
const candidates = [path.join(root, ".env.local"), path.join(root, "..", "thermo-book", ".env.local")];
let { UPSTASH_REDIS_REST_URL: url, UPSTASH_REDIS_REST_TOKEN: token } = process.env;
for (const file of candidates) {
  if (url && token) break;
  const env = readEnvFile(file);
  url ||= env.UPSTASH_REDIS_REST_URL;
  token ||= env.UPSTASH_REDIS_REST_TOKEN;
}
if (!url || !token) {
  console.error("Upstash credentials not found (see docs/page-views.md).");
  process.exit(1);
}

const res = await fetch(`${url}/get/oqm:views:home`, { headers: { Authorization: `Bearer ${token}` } });
if (!res.ok) {
  console.error(`Upstash request failed: HTTP ${res.status}`);
  process.exit(1);
}
const { result } = await res.json();
console.log(`oqm:views:home = ${result ?? 0}`);
