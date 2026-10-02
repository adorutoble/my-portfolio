import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="mt-10 sm:mt-12">
      <div className="border-t border-dashed border-neutral-300 pt-6 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          EDUCATION [{education.length}]
        </p>

        <div className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
          {education.map((item) => (
            <div
              key={item.institution}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-sm font-medium">
                  {item.degree}
                </h3>

                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {item.institution}
                </p>
              </div>

              <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}