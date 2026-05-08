export default function HeroPortraitImg({ className }) {
  return (
    <img
      src="/images/alex/alex-02.jpg"
      alt="Alex Jeal, independent celebrant and wedding DJ"
      loading="eager"
      decoding="async"
      className={`block ${className ?? "h-full w-full object-cover object-top"}`}
    />
  );
}
