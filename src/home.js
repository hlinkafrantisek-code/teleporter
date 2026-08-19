import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { createRoot } from "react-dom/client";
import { Navbar, Footer, Reveal, OrbBackground, Stat, PAGES } from "./components.js";
const ROUTES = [
  ["Prague", "London"],
  ["Brno", "New York"],
  ["Plze\u0148", "Dubai"],
  ["Prague", "Tokyo"],
  ["London", "Dubai"],
  ["Brno", "Paris"],
  ["Plze\u0148", "New York"],
  ["Prague", "Reykjav\xEDk"]
];
function PortalVisual() {
  return /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto w-full max-w-md", children: [
    /* @__PURE__ */ jsxDEV(OrbBackground, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "animate-spin-slow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full border border-dashed", style: { borderColor: "rgba(34,211,238,0.4)" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "animate-spin-slow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] w-[240px] rounded-full border", style: { borderColor: "rgba(139,92,246,0.5)", animationDirection: "reverse", animationDuration: "18s" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-0 rounded-full", style: { background: "var(--grad-brand)", opacity: 0.35, filter: "blur(18px)" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-0 rounded-full bg-[radial-gradient(circle,#0a0b1e,transparent_65%)]" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-2 rounded-full", style: { background: "radial-gradient(circle at 35% 30%,#67e8f9,#8b5cf6 45%,#ec4899)", boxShadow: "0 0 60px rgba(139,92,246,0.7)" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "relative text-sm font-mono font-bold tracking-[0.3em] text-white/80", style: { transform: "rotate(-12deg)" }, children: "MATTER LOCK" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "animate-floaty absolute -right-2 top-4", children: /* @__PURE__ */ jsxDEV("div", { className: "glass px-3 py-2 text-xs font-semibold text-[var(--green)]", children: "\u25CF Online \xB7 214 hubs" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "animate-floaty absolute -left-4 bottom-10", style: { animationDelay: "1.2s" }, children: /* @__PURE__ */ jsxDEV("div", { className: "glass px-3 py-2 text-xs font-mono text-[var(--cyan)]", children: "\u2265 0.03s transit" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { className: "absolute -left-6 top-1/4 h-2 w-2 rounded-full bg-cyan-300", style: { boxShadow: "0 0 12px #22d3ee", animation: "twinkle 2.4s ease-in-out infinite" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { className: "absolute right-0 top-1/3 h-2 w-2 rounded-full bg-fuchsia-300", style: { boxShadow: "0 0 12px #ec4899", animation: "twinkle 3s ease-in-out infinite .5s" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { className: "absolute -bottom-2 left-1/3 h-2 w-2 rounded-full bg-violet-300", style: { boxShadow: "0 0 12px #8b5cf6", animation: "twinkle 2s ease-in-out infinite .8s" } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function RouteCard({ from, to, i }) {
  return /* @__PURE__ */ jsxDEV(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxDEV("div", { className: "relative flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[rgba(16,18,42,0.5)] px-5 py-4 transition-all duration-300 hover:border-violet-400/40 hover:bg-[rgba(139,92,246,0.12)] group", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col text-sm font-semibold", children: [
      /* @__PURE__ */ jsxDEV("span", { children: from }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-normal text-[var(--muted)]", children: [
        "\u2192 ",
        to
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative h-px flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h-px w-full", style: { background: "var(--grad-brand)", opacity: 0.5 } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-y-0 h-full w-10", style: { background: "linear-gradient(90deg,transparent,var(--grad-brand),transparent)", boxShadow: "0 0 10px rgba(139,92,246,0.8)", animation: "marquee 0.8s linear infinite", marginLeft: "-40px" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold grad-text", children: [
      Math.round(9 + i * 1.7),
      "s"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function Home() {
  return /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: [
    /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden pt-16 pb-24 lg:pt-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-40" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(OrbBackground, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Reveal, { children: /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "\u25C6 Global Teleportation Network" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Reveal, { delay: 80, children: /* @__PURE__ */ jsxDEV("h1", { className: "mt-5 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl", children: [
            "Step in.",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 78,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "shimmer", children: "Step out." }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 79,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 79,
              columnNumber: 59
            }, this),
            "Anywhere",
            /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "." }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 80,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 77,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Reveal, { delay: 160, children: /* @__PURE__ */ jsxDEV("p", { className: "mt-6 max-w-md text-lg text-[var(--muted)]", children: "Veldport moves people and cargo between cities by folding space. No airports, no layovers, no luggage carousels \u2014 just a doorway from here to there. From Prague to London, Brno to New York, Plze\u0148 to Dubai." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 84,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Reveal, { delay: 240, className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "contact.html", className: "btn-primary", children: "Book a window" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 89,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "weight.html", className: "btn-ghost", children: "See rates & limits" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 90,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Reveal, { delay: 320, className: "mt-10 flex items-center gap-8 text-sm", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-extrabold grad-text", children: "214" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 93,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-[var(--muted)]", children: "hubs online" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 93,
                columnNumber: 80
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 93,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-extrabold grad-text", children: "4.2M" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 94,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-[var(--muted)]", children: "transits / month" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 94,
                columnNumber: 81
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-extrabold grad-text", children: "0.03s" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 95,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-[var(--muted)]", children: "avg window open" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 95,
                columnNumber: 82
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 95,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Reveal, { delay: 200, className: "relative", children: /* @__PURE__ */ jsxDEV(PortalVisual, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 99,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden border-y border-white/[0.07] bg-[rgba(7,8,20,0.5)] py-4", children: /* @__PURE__ */ jsxDEV("div", { className: "hide-scroll marquee-track flex w-max gap-10", children: [...ROUTES, ...ROUTES].map(([a, b], i) => /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-3 whitespace-nowrap font-mono text-sm text-[var(--muted)]", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "text-white/80", children: a }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 109,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "\u2727" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 110,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("span", { children: b }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 111,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-white/20", children: "|" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 112,
        columnNumber: 15
      }, this)
    ] }, i, true, {
      fileName: "<stdin>",
      lineNumber: 108,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "relative mx-auto max-w-6xl px-5 py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV(Reveal, { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "relative flex h-48 items-end justify-center bg-[radial-gradient(circle_at_50%_20%,#1b2a6b,#0a0d22_70%)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-6 h-16 w-16 rounded-full border-2 border-dashed border-cyan-300/60 animate-spin-slow" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 125,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-6 h-16 w-16 rounded-full bg-[radial-gradient(circle,#22d3ee,#8b5cf6)] opacity-60 blur-md" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 126,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "relative m-3 rounded-lg bg-black/40 px-2 py-1 font-mono text-[10px] text-cyan-200", children: "Central Terminal \xB7 Prague" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 127,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 124,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad mt-8 overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "flex h-48 items-end justify-center bg-[radial-gradient(circle_at_60%_25%,#3b0a5e,#0a0d1e_70%)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 grid grid-cols-4 gap-2 opacity-90", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsxDEV("div", { className: "h-2 w-2 rounded-full bg-[#ec4899]", style: { boxShadow: "0 0 8px #ec4899", animation: `twinkle ${1.6 + i * 0.2}s ease-in-out infinite` } }, i, false, {
            fileName: "<stdin>",
            lineNumber: 134,
            columnNumber: 23
          }, this)) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 132,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "relative z-3 m-3 rounded-lg bg-black/40 px-2 py-1 font-mono text-[10px] text-fuchsia-200", children: "Nexus 1 \xB7 New York" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 137,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 131,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "flex h-32 flex-col justify-center gap-2 bg-[radial-gradient(circle_at_30%_50%,#0a3a5e,#0a0d1e_70%)] px-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-1.5 w-3/4 rounded bg-gradient-to-r from-cyan-400 to-violet-500" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 142,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "h-1.5 w-1/2 rounded bg-white/20" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 143,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "h-1.5 w-2/3 rounded bg-white/25" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 144,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "mt-1 font-mono text-[10px] text-cyan-200", children: "Meridian Spire \xB7 Dubai" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 145,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 141,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 140,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass mt-8 overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "flex h-32 items-center justify-center bg-[radial-gradient(circle_at_60%_50%,#5e0a2a,#0a0d1e_70%)]", children: /* @__PURE__ */ jsxDEV("div", { className: "animate-floaty h-14 w-14 rounded-full border border-fuchsia-400/50", style: { background: "radial-gradient(circle,#ec4899,transparent 70%)", boxShadow: "0 0 24px rgba(236,72,153,0.6)" } }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 150,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 149,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 148,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 122,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Reveal, { delay: 120, className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "\u25C6 The Network" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "mt-4 text-4xl font-extrabold leading-tight sm:text-5xl", children: [
          "Distance is an ",
          /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "opinion." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 159,
            columnNumber: 30
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 158,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-lg text-[var(--muted)]", children: "Founded in Prague, Veldport rebuilt how the planet travels. Our hubs are paired by matter-folding apertures that link two points of space for a fraction of a second \u2014 long enough for you, your suitcase, and your nerves to cross over." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-lg text-[var(--muted)]", children: "Today the network spans every continent with cargo-grade windows and civilian lines to 214 cities. Booking takes minutes. Arriving takes milliseconds." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--muted)]", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "h-2 w-2 rounded-full bg-emerald-400" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 168,
              columnNumber: 57
            }, this),
            " Carbon-neutral"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "h-2 w-2 rounded-full bg-cyan-400" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 169,
              columnNumber: 57
            }, this),
            " 0 baggage lost"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "h-2 w-2 rounded-full bg-violet-400" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 170,
              columnNumber: 57
            }, this),
            " ISO 9-billion"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 170,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 167,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 156,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "relative mx-auto max-w-6xl px-5 py-10", children: [
      /* @__PURE__ */ jsxDEV(Reveal, { className: "mb-10 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "Live Routes" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 180,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "mt-3 text-3xl font-extrabold sm:text-4xl", children: "Where are you going?" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 181,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "map.html", className: "btn-ghost text-sm", children: "Open the map \u2192" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 183,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: ROUTES.slice(0, 8).map(([a, b], i) => /* @__PURE__ */ jsxDEV(RouteCard, { from: a, to: b, i }, i, false, {
        fileName: "<stdin>",
        lineNumber: 187,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "relative mx-auto max-w-5xl px-5 py-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: [
        /* @__PURE__ */ jsxDEV(Stat, { value: "56K", label: "windows opened daily" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Stat, { value: "8", label: "world regions linked" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Stat, { value: "99.998%", label: "arrival accuracy" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 197,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Stat, { value: "214", label: "active hubs" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 198,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Reveal, { className: "mt-16", children: /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad relative overflow-hidden p-10 text-center sm:p-14", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { background: "var(--grad-brand)" }, className: "absolute inset-0 opacity-15" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-5xl font-extrabold", children: /* @__PURE__ */ jsxDEV("span", { className: "shimmer", children: "The world is one step away." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 205,
            columnNumber: 67
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 205,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mx-auto mt-4 max-w-xl text-[var(--muted)]", children: "Book a window at your nearest hub. The other side is waiting." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "contact.html", className: "btn-primary mt-8", children: "Reserve a window" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 204,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 202,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 193,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function Shell() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Navbar, { active: "index.html" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 219,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 220,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 221,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 218,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Shell, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 226,
  columnNumber: 52
}));
