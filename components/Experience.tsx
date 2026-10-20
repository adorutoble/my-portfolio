import Link from "next/link";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mt-10 sm:mt-12">
      <div className="border-t border-dashed border-neutral-300 pt-6 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          EXPERIENCE [{experiences.length}]
        </p>

        <div className="mt-5 space-y-8">
          {experiences.map((experience) => {
            // Gunakan type assertion aman agar TypeScript tidak error
            const exp = experience as typeof experience & {
              projectSlug?: string;
              projectName?: string;
            };

            const projectSlug =
              exp.projectSlug ||
              (exp.position.toLowerCase().includes("front-end developer intern")
                ? "project-one"
                : null);

            const projectName = exp.projectName || "Dynamic Skill Matrix";

            return (
              <article
                key={`${experience.company}-${experience.year}`}
                className="group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                    {experience.position}
                  </h2>
                  <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500 sm:text-right">
                    {experience.year}
                  </p>
                </div>

                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {experience.company}
                  {experience.location && ` · ${experience.location}`}
                </p>

                {experience.description && (
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {experience.description}
                  </p>
                )}

                {projectSlug && (
                  <div className="mt-3 flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="text-neutral-400 dark:text-neutral-600">↳</span>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      Project:
                    </span>
                    <Link
                      href={`/projects/${projectSlug}`}
                      className="inline-flex items-center gap-1 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:decoration-neutral-700 dark:hover:text-neutral-100"
                    >
                      {projectName} ↗
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}