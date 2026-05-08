/**
 * Photography slot: optional real `src`, otherwise CSS gradient stand-in.
 */
export default function ImagePlaceholder({
  label = "Image placeholder",
  className = "",
  tone = "navy",
  src,
  alt,
  imgClassName = "",
}) {
  const hasObjectFit =
    /\bobject-(contain|cover|fill|none|scale-down)\b/.test(imgClassName);

  if (src) {
    return (
      <div className={`relative h-full min-h-[10rem] w-full overflow-hidden bg-black/5 ${className}`}>
        <img
          src={src}
          alt={alt ?? label}
          className={`absolute inset-0 h-full w-full ${hasObjectFit ? '' : 'object-cover'} ${imgClassName}`.trim()}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  const palette = {
    navy: "from-[var(--navy-soft)] via-[#1a3355] to-[var(--navy)] text-white/55",
    warm: "from-[#e4e9f2] via-white to-[var(--surface-warm)] text-[var(--muted)]",
    burgundy: "from-[var(--burgundy-soft)] via-[var(--burgundy)] to-[#5c0f26] text-white/55",
    gold: "from-[#1a2438] via-[var(--navy-soft)] to-[var(--navy)] text-[var(--gold)]/50",
    muted: "from-[var(--surface)] via-white to-[var(--surface-warm)] text-[var(--muted)]",
  };

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex h-full min-h-[10rem] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${palette[tone] ?? palette.navy} ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(125deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 11px)",
        }}
      />
      <span className="relative z-[1] max-w-[92%] px-3 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.18em]">
        {label}
      </span>
    </div>
  );
}
