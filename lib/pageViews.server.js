import { Redis } from "@upstash/redis";

/**
 * Silent view counter, stored in Upstash Redis (needs UPSTASH_REDIS_REST_URL and
 * UPSTASH_REDIS_REST_TOKEN in the environment). Never surfaced in the UI —
 * see docs/page-views.md for how to read the count.
 */
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

/** No-ops (and never throws) when Redis isn't configured, so local dev keeps working. */
export async function incrementPageView(slug) {
  if (!redis) return;
  try {
    await redis.incr(`oqm:views:${slug}`);
  } catch {
    // A visit counter must never break the page it's counting.
  }
}
