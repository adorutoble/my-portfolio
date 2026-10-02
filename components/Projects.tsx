import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectItem from "@/components/ProjectsItem";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="mt-10 sm:mt-12">
      <div className="border-t border-dashed border-neutral-300 pt-6 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          PROJECTS [{projects.length}]
        </p>

        <div className="mt-8 space-y-10">
          {featuredProjects.map((project, index) => (
            <ProjectItem
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-10 inline-block font-mono text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          See all projects →
        </Link>
      </div>
    </section>
  );
}