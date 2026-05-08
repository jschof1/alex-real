import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/siteContent.js";

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

const SCROLL_DELTA = 6;
const REVEAL_TOP = 72;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [barHidden, setBarHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (open) {
        setBarHidden(false);
        lastY.current = window.scrollY;
        return;
      }

      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;

      if (y < REVEAL_TOP) {
        setBarHidden(false);
        return;
      }
      if (delta > SCROLL_DELTA) setBarHidden(true);
      else if (delta < -SCROLL_DELTA) setBarHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <>
      <div className="bg-[var(--navy)] text-white/95">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm md:px-6">
          <a href={SITE.phoneHref} className="font-semibold tracking-tight hover:text-[var(--gold)]">
            {SITE.phoneDisplay}
          </a>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/70 sm:inline">
            {SITE.areas}
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="truncate text-white/85 hover:text-[var(--gold)]"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <header
        className={cx(
          "sticky top-0 z-50 border-b-2 border-[var(--burgundy)] bg-white/95 shadow-[inset_0_-1px_0_rgba(0,0,0,0.04)] backdrop-blur-md backdrop-saturate-150 transition-[transform,box-shadow] duration-300 ease-out motion-reduce:transition-none",
          barHidden && !open && "-translate-y-full pointer-events-none shadow-none"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link
            to="/"
            className="group flex min-w-0 shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/alex-jeal-logo.webp"
              alt={SITE.businessName}
              width={280}
              height={80}
              className="h-11 w-auto max-w-[min(100%,300px)] object-contain object-left md:h-12 lg:h-14"
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  cx(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[var(--navy)] text-white"
                      : "text-[var(--ink)]/85 hover:bg-black/5 hover:text-[var(--navy)]"
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-full bg-[var(--burgundy)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 md:inline-flex"
            >
              Enquire
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-black/10 bg-white px-4 py-3 lg:hidden">
            <ul className="grid gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cx(
                        "block rounded-xl px-3 py-3 text-base font-semibold",
                        isActive ? "bg-[var(--navy)] text-white" : "text-[var(--navy)] hover:bg-black/[0.04]"
                      )
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-[var(--burgundy)] px-3 py-3 text-center text-base font-semibold text-white"
                >
                  Enquire
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

function IconMenu() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
