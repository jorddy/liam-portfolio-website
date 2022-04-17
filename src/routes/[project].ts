import { getMarkdown, getSingleMarkdown } from "$lib/utils/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ params }) => {
  const content = await getSingleMarkdown("site");
  const project = await getSingleMarkdown(`projects/${params.project}`);
  const projects = await getMarkdown("projects");
  const randomProject = projects[Math.floor(Math.random() * projects.length)];

  return {
    status: 200,
    body: { content, project, randomProject }
  };
};
