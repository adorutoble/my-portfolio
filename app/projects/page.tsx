import Link from "next/link";
import Header from "@/components/Header";
import ProjectItem from "@/components/ProjectsItem";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-10 sm:px-8 sm:py-12">
      <Header />

      <section className="mt-10 sm:mt-12">
        <Link
          href="/"
          className="font-mono text-xs text-neutral-500 underline underline-offset-4 transition-opacity hover:opacity-60 dark:text-neutral-400"
        >
          ← Back to Portfolio
        </Link>

        <p className="mt-12 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          ALL PROJECTS [{projects.length}]
        </p>

        <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
          Selected Work
        </h1>

        <p className="mt-4 text-sm italic text-neutral-500 dark:text-neutral-400">
          A collection of things I've built and experimented with.
        </p>
      </section>

      <section className="mt-12">
        <div className="divide-y divide-dashed divide-neutral-300 border-y border-dashed border-neutral-300 dark:divide-neutral-700">
          {projects.map((project, index) => (
            <div key={project.slug} className="py-8">
              <ProjectItem
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-dashed border-neutral-300 pt-6 sm:mt-24 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          © 2026 Saby
        </p>
      </footer>
    </main>
  );
}