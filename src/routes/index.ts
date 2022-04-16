import { getMarkdown, getSingleMarkdown } from "$lib/utils/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => {
  const content = getSingleMarkdown("site");
  const projects = getMarkdown("projects");

  const featured = projects.filter(project => project.data.featured);

  return {
    status: 200,
    body: { content, featured: featured[0] }
  };
};
