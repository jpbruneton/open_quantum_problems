import { llmsFullTxt, textResponse } from "../llms";

export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsFullTxt());
}
