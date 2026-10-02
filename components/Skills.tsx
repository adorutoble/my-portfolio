import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mt-10 sm:mt-12">
      <div className="border-t border-dashed border-neutral-300 pt-6 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          SKILLS [{totalSkills}]
        </p>

        <div className="mt-8 space-y-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-2 md:grid-cols-[160px_1fr]"
            >
              <h3 className="text-sm font-medium">
                {group.category}
              </h3>

              <p className="font-mono text-xs leading-6 text-neutral-500 dark:text-neutral-400">
                {group.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const totalSkills = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0
);