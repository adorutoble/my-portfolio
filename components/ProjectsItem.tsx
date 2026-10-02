import type { Project } from "@/data/projects";

type ProjectItemProps = {
  project: Project;
  index?: number;
};

export default function ProjectItem({
  project,
  index,
}: ProjectItemProps) {
  return (
    <article className="group">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          {index !== undefined && (
            <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </p>
          )}

          <h2 className="mt-2 font-medium">
            {project.title}
          </h2>

          <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
            {project.type}
          </p>
        </div>

        <a
          href={`/projects/${project.slug}`}
          className="w-fit font-mono text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          View →
        </a>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
        {project.description}
      </p>

      <p className="mt-4 font-mono text-xs text-neutral-400 dark:text-neutral-500">
        {project.stack.join(" · ")}
      </p>
    </article>
  );
}