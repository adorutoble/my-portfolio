import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <a
        href="/"
        className="font-mono text-sm transition-opacity hover:opacity-60"
      >
        saby.dev
      </a>

      <ThemeToggle />
    </header>
  );
}