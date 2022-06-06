import { getSingleMarkdown } from "$lib/utils/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => {
  const content = getSingleMarkdown("site");

  return {
    status: 200,
    body: { content }
  };
};
