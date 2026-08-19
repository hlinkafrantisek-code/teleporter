import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useEffect, useRef } from "react";
const PAGES = [
  { name: "Network", path: "index.html" },
  { name: "World Map", path: "map.html" },
  { name: "Weight & Cost", path: "weight.html" },
  { name: "Safety", path: "safety.html" },
  { name: "Why Us", path: "trust.html" },
  { name: "Contact", path: "contact.html" }
];
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("revealed"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxDEV(Tag, { ref, className: `reveal ${className}`, style: { transitionDelay: `${delay}ms` }, children }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
function PortalMark({ className = "" }) {
  return /* @__PURE__ */ jsxDEV("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: `h-5 w-5 ${className}`, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M8 4.5 4.5 8v8L8 19.5" }, void 0, false, { fileName: "<stdin>", lineNumber: 53, columnNumber: 5 }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M16 4.5 19.5 8v8L16 19.5" }, void 0, false, { fileName: "<stdin>", lineNumber: 54, columnNumber: 5 }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M9 7.5h6v9H9z" }, void 0, false, { fileName: "<stdin>", lineNumber: 55, columnNumber: 5 }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M10.5 12h3" }, void 0, false, { fileName: "<stdin>", lineNumber: 56, columnNumber: 5 }, this)
  ] }, void 0, true, { fileName: "<stdin>", lineNumber: 52, columnNumber: 3 }, this);
}
function Navbar({ active = "index.html" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      className: "sticky top-0 z-50 transition-all duration-300",
      style: {
        background: scrolled || open ? "rgba(6,7,18,0.82)" : "transparent",
        backdropFilter: scrolled || open ? "blur(14px)" : "none",
        borderBottom: scrolled || open ? "1px solid var(--line)" : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxDEV("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-4", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "index.html", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "relative grid h-9 w-9 place-items-center", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-0 rounded-full", style: { background: "var(--grad-brand)", opacity: 0.5 } }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 63,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: "absolute inset-0 rounded-full group-hover:opacity-90 opacity-70 transition-opacity",
                  style: {
                    background: "var(--grad-brand)",
                    boxShadow: "0 0 18px rgba(139,92,246,0.8)",
                    animation: "pulseRing 3.2s ease-out infinite"
                  }
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 64,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(PortalMark, { className: "relative text-white" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 72,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold tracking-wide", children: [
              "VELD",
              /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "PORT" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 75,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden items-center gap-7 lg:flex", children: [
            PAGES.map((p) => /* @__PURE__ */ jsxDEV("a", { href: p.path, className: `nav-link text-sm ${active === p.path ? "active" : ""}`, children: p.name }, p.path, false, {
              fileName: "<stdin>",
              lineNumber: 81,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ jsxDEV("a", { href: "contact.html", className: "btn-primary", style: { padding: "0.55rem 1.1rem" }, children: "Start Teleport" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 85,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "lg:hidden relative z-50 grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5",
              onClick: () => setOpen((o) => !o),
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ jsxDEV("div", { className: "flex w-5 flex-col gap-[5px]", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "h-[2px] rounded bg-white transition-all duration-300", style: { transform: open ? "rotate(45deg) translate(4px,4px)" : "none" } }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 96,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "h-[2px] rounded bg-white transition-all duration-300", style: { opacity: open ? 0 : 1 } }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 97,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "h-[2px] rounded bg-white transition-all duration-300", style: { transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" } }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 98,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 95,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 90,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 60,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "lg:hidden overflow-hidden transition-all duration-300",
            style: { maxHeight: open ? "460px" : "0", background: "rgba(6,7,18,0.9)", borderBottom: open ? "1px solid var(--line)" : "none" },
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 px-5 pb-6 pt-2", children: [
              PAGES.map((p) => /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: p.path,
                  onClick: () => setOpen(false),
                  className: `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${active === p.path ? "bg-white/10 text-white" : "text-[var(--muted)] hover:bg-white/5"}`,
                  children: p.name
                },
                p.path,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 110,
                  columnNumber: 13
                },
                this
              )),
              /* @__PURE__ */ jsxDEV("a", { href: "contact.html", className: "btn-primary mt-3 justify-center", children: "Book Teleport" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 119,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 108,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 104,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
}
function Footer({ cols = PAGES }) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxDEV("footer", { className: "relative mt-20 border-t border-white/[0.08] bg-[rgba(7,8,20,0.7)]", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px", style: { background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.6),rgba(34,211,238,0.6),transparent)" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "relative grid h-8 w-8 place-items-center rounded-full", style: { background: "var(--grad-brand)" }, children: /* @__PURE__ */ jsxDEV(PortalMark, { className: "h-[18px] w-[18px] text-[#0a0b1a]" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 136,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-extrabold", children: [
            "VELD",
            /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "PORT" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 138,
              columnNumber: 58
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 138,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-xs text-sm text-[var(--muted)]", children: "The global teleportation network. Step in here, step out there \u2014 across the planet in the span of a heartbeat." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold uppercase tracking-[0.15em] text-white/70", children: "Navigate" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-2.5 text-sm", children: PAGES.map((p) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: p.path, className: "text-[var(--muted)] transition-colors hover:text-white", children: p.name }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 149,
          columnNumber: 17
        }, this) }, p.path, false, {
          fileName: "<stdin>",
          lineNumber: 148,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 146,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold uppercase tracking-[0.15em] text-white/70", children: "Hubs" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-2.5 text-sm text-[var(--muted)]", children: [
          /* @__PURE__ */ jsxDEV("li", { children: "Prague \u2014 Central Terminal" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 157,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "London \u2014 King's Gate" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 158,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "New York \u2014 Nexus 1" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 159,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "Dubai \u2014 Meridian Spire" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "Brno \u2014 South Arrival Pod" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 161,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 156,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold uppercase tracking-[0.18em] text-white/70", children: "Contact" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-2.5 text-sm text-[var(--muted)]", children: [
          /* @__PURE__ */ jsxDEV("li", { children: "hello@veldport.net" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 167,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "+420 555 0138" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: "Orbit Ring 4, Prague 7" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 169,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 166,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 164,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "border-t border-white/[0.06] px-5 py-5 text-center text-xs text-[var(--muted)]", children: [
      "\xA9 ",
      year,
      " Veldport Teleportation Network. Matter is conserved. Minds are not. We ask only what you might forget we asked to keep."
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 173,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
function Stat({ value, label }) {
  return /* @__PURE__ */ jsxDEV(Reveal, { className: "glass ring-grad p-6 text-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-3xl font-extrabold grad-text", children: value }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-1 text-sm text-[var(--muted)]", children: label }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}
function OrbBackground({ className = "" }) {
  return /* @__PURE__ */ jsxDEV("div", { className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "animate-floaty-slow absolute -right-24 -top-24 h-96 w-96 rounded-full", style: { background: "radial-gradient(circle,rgba(139,92,246,0.35),transparent 60%)", filter: "blur(30px)", animation: "glowPulse 7s ease-in-out infinite" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "animate-floaty-slow absolute -left-24 top-1/3 h-80 w-80 rounded-full", style: { background: "radial-gradient(circle,rgba(34,211,238,0.28),transparent 60%)", filter: "blur(30px)" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 194,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "animate-floaty-slow absolute bottom-0 right-1/4 h-72 w-72 rounded-full", style: { background: "radial-gradient(circle,rgba(236,72,153,0.25),transparent 60%)", filter: "blur(30px)" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 195,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 192,
    columnNumber: 5
  }, this);
}
var stdin_default = PAGES;
export {
  Footer,
  Navbar,
  OrbBackground,
  PAGES,
  Reveal,
  Stat,
  stdin_default as default
};
