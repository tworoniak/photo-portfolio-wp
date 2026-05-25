import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div
      style={{
        paddingTop: "10rem",
        paddingBottom: "6rem",
        padding: "10rem 2rem 6rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          margin: "0 0 1rem",
        }}
      >
        Contact
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          lineHeight: 1,
          margin: "0 0 2.5rem",
        }}
      >
        Let&apos;s Work Together
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "3rem",
        }}
      >
        Available for concert coverage, accreditation shoots, and editorial
        projects. Response within 24–48 hours.
      </p>

      {/* Contact form — wire to WP Contact Form 7 REST API or Formspree */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {["Name", "Email", "Subject"].map((field) => (
          <div key={field}>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "0.5rem",
              }}
            >
              {field}
            </label>
            <input
              type={field === "Email" ? "email" : "text"}
              style={{
                width: "100%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "0.75rem 1rem",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                outline: "none",
              }}
              placeholder={`Your ${field.toLowerCase()}`}
            />
          </div>
        ))}

        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "0.5rem",
            }}
          >
            Message
          </label>
          <textarea
            rows={6}
            style={{
              width: "100%",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "0.75rem 1rem",
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              outline: "none",
              resize: "vertical",
            }}
            placeholder="Tell me about the project..."
          />
        </div>

        <button
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--bg)",
            background: "var(--accent)",
            border: "none",
            padding: "0.85rem 2rem",
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
