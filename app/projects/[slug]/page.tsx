
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const sectionLabel =
  "font-mono text-[11px] font-medium uppercase text-neutral-500 dark:text-neutral-400";

const sectionBorder =
  "border-t border-dashed border-neutral-300/80 pt-6 dark:border-neutral-700/80";

const bodyText =
  "text-sm leading-7 text-neutral-600 dark:text-neutral-400";

const highlightCard =
  "rounded-lg border border-neutral-200/80 bg-neutral-50/60 p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/30";

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-7 sm:px-8 sm:py-10">
      <Header />

      {/* Navigation */}
      <nav className="mt-8 sm:mt-10" aria-label="Breadcrumb">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <span aria-hidden="true">←</span>
          <span className="underline underline-offset-4">
            Back to Projects
          </span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="mt-8 sm:mt-10">
        <span className="inline-flex rounded-md border border-neutral-200 px-2.5 py-1 font-mono text-[11px] text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          {project.type}
        </span>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl md:text-[2.75rem] dark:text-neutral-50">
          {project.title}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base dark:text-neutral-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="rounded border border-neutral-200/80 bg-neutral-50/70 px-2.5 py-1 font-mono text-[11px] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(project.demo || project.github) && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3.5 py-2 font-mono text-xs text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3.5 py-2 font-mono text-xs text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </section>

      {/* Project Details */}
      <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
        {/* Overview & Background */}
        <section className={highlightCard}>
          <h2 className={sectionLabel}>Overview</h2>

          <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
            {project.overview}
          </p>

          {project.background && (
            <div className="mt-5 border-t border-dashed border-neutral-200 pt-5 dark:border-neutral-800">
              <h3 className={sectionLabel}>Background</h3>

              <p className={`mt-3 ${bodyText}`}>
                {project.background}
              </p>
            </div>
          )}
        </section>

        {/* Interface Gallery */}
        <section>
          <h2 className={`${sectionLabel} mb-5`}>
            Interface Preview
          </h2>

          <ProjectGallery
            images={project.images}
            title={project.title}
          />
        </section>

        {/* Role & Contributions */}
        {(project.role || project.contributions) && (
          <section className={sectionBorder}>
            <h2 className={sectionLabel}>
              My Role & Contributions
            </h2>

            {project.role && (
              <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {project.role}
              </p>
            )}

            {project.contributions && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.contributions.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-md border border-neutral-200/80 p-4 dark:border-neutral-800"
                  >
                    <span className="shrink-0 pt-0.5 font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-xs leading-6 text-neutral-600 sm:text-sm dark:text-neutral-400">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* Development Process */}
        {project.process && project.process.length > 0 && (
          <section className={sectionBorder}>
            <h2 className={sectionLabel}>Development Process</h2>

            <ol className="relative mt-6 space-y-6 border-l border-neutral-300 pl-5 dark:border-neutral-700">
              {project.process.map((item, index) => (
                <li key={index} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[25px] top-2 size-2.5 rounded-full bg-neutral-400 ring-4 ring-white dark:bg-neutral-500 dark:ring-neutral-950"
                  />

                  <p className={bodyText}>{item}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Outcome & Learnings */}
        {project.outcome && (
          <section className={highlightCard}>
            <h2 className={sectionLabel}>
              Outcome & Learnings
            </h2>

            <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              {project.outcome}
            </p>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-14 border-t border-dashed border-neutral-300/80 pt-5 sm:mt-16 dark:border-neutral-700/80">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
            © 2026 Saby
          </p>

          <Link
            href="/projects"
            className="font-mono text-[11px] text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            All Projects ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
