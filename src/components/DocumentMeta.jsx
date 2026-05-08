import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_META, SITE } from "@/data/siteContent.js";

const defaultMeta = ROUTE_META["/"];

export default function DocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? {
      title: "Page not found | Alex Jeal Celebrant",
      description: defaultMeta.description,
    };
    document.title = meta.title;

    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", meta.description);

    const known = Boolean(ROUTE_META[pathname]);
    const canonical = known
      ? `https://${SITE.domain}${pathname === "/" ? "" : pathname}`
      : `https://${SITE.domain}/`;

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [pathname]);

  return null;
}
