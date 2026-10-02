import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mt-10 sm:mt-12">
      <div className="border-t border-dashed border-neutral-300 pt-6 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          EXPERIENCE [{experiences.length}]
        </p>

        <div className="mt-5 space-y-10">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.year}`}>
              <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                {experience.year}
              </p>

              <h2 className="mt-2 font-medium">
                {experience.position}
              </h2>

              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {experience.company}
                {experience.location && ` · ${experience.location}`}
              </p>

              {experience.description && (
                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  {experience.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}