import { projects } from "./lib/projects";

export default function sitemap() {
  const baseUrl = "https://austinmander.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
