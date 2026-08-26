import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-1 px-page py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-foreground">DBCE Coders Club</p>
        <p className="text-muted">Don Bosco College of Engineering</p>
      </Container>
    </footer>
  );
}
