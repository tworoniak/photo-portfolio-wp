export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "6rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} Thomas Woroniak Photography
      </p>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
          margin: 0,
        }}
      >
        Kansas City, MO · All rights reserved
      </p>
    </footer>
  );
}
