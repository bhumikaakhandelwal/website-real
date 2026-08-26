import Link from "next/link";
import { Container } from "./components/container";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="px-page py-section">
      <Container>
        <section className="max-w-2xl rounded-panel border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">
            404
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            The page you are looking for is not available.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-10 items-center rounded-card border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-background"
          >
            Return home
          </Link>
        </section>
      </Container>
    </main>
  );
}
