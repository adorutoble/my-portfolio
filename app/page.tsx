import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certification";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-10 sm:px-8 sm:py-12">
      <Header />

      <section className="mt-10 sm:mt-12">
        <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
          Hello, I'm
        </p>

        <h1 className="mt-2 text-4xl font-sans tracking-tight sm:text-5xl md:text-6xl">
          Shobrina Naila
        </h1>

        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Informatics Engineering Graduate
        </p>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
          An Informatics Engineering student with experience in
          frontend development, website management, and data
          operations. I build responsive and interactive web
          experiences.
        </p>

        <a
          href="/resume/CV-Woopy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          View Resume →
        </a>
      </section>

      <Experience />

      <Education />

      <Skills/>
      
      <Projects />

      <Certifications />

      <Contact />

      <footer className="mt-20 border-t border-dashed border-neutral-300 pt-6 sm:mt-24 dark:border-neutral-700">
        <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
          © 2026 Saby
        </p>
      </footer>
    </main>
  );
}