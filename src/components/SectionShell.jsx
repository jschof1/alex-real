import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

/** Section wrapper; backgrounds are CSS only (no raster images). */
export default function SectionShell({ as: Tag = "section", children, className = "" }) {
  return (
    <Tag className={`relative overflow-hidden ${SECTION_TOP_ACCENT} ${className}`}>
      <div className="relative z-[1]">{children}</div>
    </Tag>
  );
}
