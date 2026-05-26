import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="px-8 pt-40 pb-24 max-w-150 mx-auto">
      <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent mb-4">
        Contact
      </p>
      <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-10">
        Let&apos;s Work Together
      </h1>

      <p className="font-body text-base text-secondary leading-[1.7] mb-12">
        Available for concert coverage, accreditation shoots, and editorial
        projects. Response within 24–48 hours.
      </p>

      {/* Contact form — wire to WP Contact Form 7 REST API or Formspree */}
      <div className="flex flex-col gap-5">
        {["Name", "Email", "Subject"].map((field) => {
          const fieldId = field.toLowerCase();
          return (
            <div key={field}>
              <label
                htmlFor={fieldId}
                className="block font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-2"
              >
                {field}
              </label>
              <input
                id={fieldId}
                name={fieldId}
                type={field === "Email" ? "email" : "text"}
                className="w-full bg-surface border border-border py-3 px-4 text-foreground font-body text-[0.9rem] outline-none"
                placeholder={`Your ${field.toLowerCase()}`}
              />
            </div>
          );
        })}

        <div>
          <label
            htmlFor="message"
            className="block font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full bg-surface border border-border py-3 px-4 text-foreground font-body text-[0.9rem] outline-none resize-y"
            placeholder="Tell me about the project..."
          />
        </div>

        <button
          type="button"
          className="font-mono text-xs tracking-[0.15em] uppercase text-base bg-accent border-0 py-[0.85rem] px-8 cursor-pointer self-start"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
