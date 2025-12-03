import ProjectDetailPage from "@/components/project-detail-page";
import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = DATA.projects.find(
    (p) => p.href === `/projects/${params.slug}`
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}

export async function generateStaticParams() {
  return DATA.projects
    .filter((p) => p.href)
    .map((project) => ({
      slug: project.href?.split("/").pop() || "",
    }));
}
