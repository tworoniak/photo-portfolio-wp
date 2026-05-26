export function Footer() {
  return (
    <footer className="border-t border-border mt-24 px-8 py-10 flex items-center justify-between">
      <p className="font-mono text-[0.7rem] text-muted tracking-[0.08em] m-0">
        © {new Date().getFullYear()} Thomas Woroniak Photography
      </p>
      <p className="font-mono text-[0.7rem] text-muted tracking-[0.08em] m-0">
        Kansas City, MO · All rights reserved
      </p>
    </footer>
  );
}
