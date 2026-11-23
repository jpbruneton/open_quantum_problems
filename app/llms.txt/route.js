import { llmsTxt, textResponse } from "../llms";

export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsTxt());
}
