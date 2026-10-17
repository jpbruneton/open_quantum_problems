import { NextResponse } from "next/server";
import { incrementPageView } from "../../../lib/pageViews.server";

// Silent counter endpoint: callers (sendBeacon) never read the response.
export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (body?.slug !== "home") return new NextResponse(null, { status: 400 });
  await incrementPageView("home");
  return new NextResponse(null, { status: 204 });
}
