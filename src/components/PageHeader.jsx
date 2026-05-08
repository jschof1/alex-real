export default function PageHeader({ eyebrow, title, subtitle, align = "left", tone = "light" }) {
  const wrap = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const isNavy = tone === "navy";
  const isBurgundy = tone === "burgundy";

  const rule =
    align === "center"
      ? `mx-auto mt-3 h-px w-16 ${isNavy || isBurgundy ? "bg-[var(--gold)]/90" : "bg-[var(--burgundy)]/80"}`
      : `mt-3 h-px w-16 ${isNavy || isBurgundy ? "bg-[var(--gold)]/90" : "bg-[var(--burgundy)]/80"}`;

  const shell =
    isNavy || isBurgundy
      ? "border border-white/15 bg-[var(--navy)]/95 shadow-lg shadow-black/25 ring-1 ring-white/10"
      : "border border-black/[0.07] bg-white/80 shadow-sm ring-1 ring-black/[0.04]";

  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] ${shell}`}>
      {!isNavy && !isBurgundy && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--surface-warm)] via-white to-[var(--surface)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--burgundy) 0px, var(--burgundy) 1px, transparent 1px, transparent 14px)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/88" />
        </>
      )}
      {isNavy && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-soft)] to-[var(--navy-deep)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 18px)",
            }}
          />
        </>
      )}
      {isBurgundy && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--burgundy)] via-[var(--ruby)]/90 to-[var(--burgundy-soft)]"
        />
      )}
      <div className={`relative px-5 py-8 md:px-8 md:py-10 ${wrap}`}>
        {eyebrow && (
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] ${
              isNavy || isBurgundy ? "text-[var(--gold)]" : "text-[var(--burgundy)]"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={`mt-2 font-serif text-4xl tracking-tight md:text-5xl ${
            isNavy || isBurgundy ? "text-white" : "text-[var(--navy)]"
          }`}
        >
          {title}
        </h1>
        <div className={rule} />
        {subtitle && (
          <p
            className={`mt-4 text-lg leading-relaxed ${
              isNavy || isBurgundy ? "text-white/80" : "text-[var(--muted)]"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
