import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="mt-10 sm:mt-12">
      <div className="border-t border-dashed border-neutral-300 pt-6 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          CERTIFICATIONS [{certifications.length}]
        </p>

        <div className="mt-8 divide-y divide-neutral-200 dark:divide-neutral-800">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-sm font-medium">
                  {certification.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {certification.description}
                </p>
              </div>

              <a
                href={certification.file}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-mono text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}