import Link from "next/link";
import Image from "next/image"; // Menggunakan Image Next.js untuk performa & responsivitas lebih baik
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-4 py-6 sm:px-6 sm:py-8 md:py-10">
      <Header />

      {/* Navigation */}
      <section className="mt-6 sm:mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center font-mono text-xs text-neutral-500 underline underline-offset-4 transition-opacity hover:opacity-60 dark:text-neutral-400"
        >
          ← Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mt-6 sm:mt-8">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            {project.type}
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl dark:text-neutral-100">
            {project.title}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded border border-neutral-200 px-2 py-0.5 text-[11px] dark:border-neutral-800"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mt-8 sm:mt-10">
        <div className="border-t border-dashed border-neutral-300 pt-4 dark:border-neutral-700">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            OVERVIEW
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mt-8 sm:mt-10">
        <div className="border-t border-dashed border-neutral-300 pt-4 dark:border-neutral-700">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            INTERFACE
          </p>

                <div className="mt-6">
                    <ProjectGallery
                    images={project.images}
                    title={project.title}
                    />
                </div>
            </div>
      </section>

      {/* Links */}
      <section className="mt-8 sm:mt-10">
        <div className="border-t border-dashed border-neutral-300 pt-4 dark:border-neutral-700">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            LINKS
          </p>

          <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs sm:text-sm">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                GitHub ↗
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-dashed border-neutral-300 pt-4 sm:mt-16 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          © 2026 Saby
        </p>
      </footer>
    </main>
  );
}