import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Navbar, Footer, Reveal, OrbBackground } from "./components.js";
const CITIES = {
  Prague: { x: 505, y: 232, hub: "Central Terminal" },
  Brno: { x: 522, y: 240, hub: "South Arrival Pod" },
  Plze\u0148: { x: 492, y: 235, hub: "West Platform 3" },
  London: { x: 462, y: 210, hub: "King's Gate" },
  Paris: { x: 470, y: 228, hub: "Eiffel Aperture" },
  "New York": { x: 350, y: 208, hub: "Nexus 1" },
  Dubai: { x: 645, y: 278, hub: "Meridian Spire" },
  Tokyo: { x: 790, y: 258, hub: "Ginza Ring" },
  "Reykjav\xEDk": { x: 380, y: 170, hub: "Borealis Dock" },
  Sydney: { x: 800, y: 392, hub: "Harbour Fold" }
};
const LINKS = [
  ["Prague", "London"],
  ["Brno", "New York"],
  ["Plze\u0148", "Dubai"],
  ["Prague", "Tokyo"],
  ["London", "Dubai"],
  ["London", "Reykjav\xEDk"],
  ["Dubai", "Sydney"],
  ["Paris", "New York"],
  ["Brno", "Paris"]
];
const FOCUS = ["Prague", "London", "Brno", "New York", "Plze\u0148", "Dubai"];
function pos(name) {
  return CITIES[name];
}
function MapPage() {
  const [active, setActive] = useState(null);
  const [searched, setSearched] = useState("");
  const matches = searched ? Object.keys(CITIES).filter((c) => c.toLowerCase().includes(searched.toLowerCase())) : [];
  const isLit = (c) => !active || active === c;
  const linkLit = (a, b) => !active || active === a || active === b;
  return /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden py-14", children: [
    /* @__PURE__ */ jsxDEV(OrbBackground, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto max-w-6xl px-5", children: [
      /* @__PURE__ */ jsxDEV(Reveal, { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "\u25C6 World Network" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "mt-4 text-4xl font-extrabold sm:text-5xl", children: [
          "Pick a point. ",
          /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "We'll fold the space." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 47,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-2xl text-lg text-[var(--muted)]", children: "Tap a hub to highlight its routes, or search for a city. Every line is a live matter window." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Reveal, { delay: 100, className: "mt-6 max-w-md", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "glass flex items-center gap-3 px-4 py-2", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-cyan-300", children: "\u2315" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              value: searched,
              onChange: (e) => setSearched(e.target.value),
              placeholder: "Search hubs\u2026 e.g. Prague, Dubai",
              className: "w-full bg-transparent py-2 text-white placeholder:text-white/30 focus:outline-none"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 58,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        matches.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "glass mt-2 flex flex-wrap gap-2 p-3", children: matches.map((m) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              setSearched("");
              setActive(m);
            },
            className: "rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-sm hover:bg-cyan-300/20",
            children: m
          },
          m,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 68,
            columnNumber: 19
          },
          this
        )) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Reveal, { delay: 160, className: "mt-8", children: /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad relative overflow-hidden p-2 sm:p-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-30" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("svg", { viewBox: "0 0 920 460", className: "relative w-full", children: [
          /* @__PURE__ */ jsxDEV("defs", { children: [
            /* @__PURE__ */ jsxDEV("radialGradient", { id: "hubg", cx: "50%", cy: "50%", r: "50%", children: [
              /* @__PURE__ */ jsxDEV("stop", { offset: "0%", stopColor: "#fff" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 87,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("stop", { offset: "100%", stopColor: "#22d3ee" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 88,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("linearGradient", { id: "beam", x1: "0", y1: "0", x2: "1", y2: "0", children: [
              /* @__PURE__ */ jsxDEV("stop", { offset: "0%", stopColor: "#22d3ee" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 91,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("stop", { offset: "50%", stopColor: "#8b5cf6" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 92,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("stop", { offset: "100%", stopColor: "#ec4899" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 93,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 90,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          [100, 200, 300, 400].map((y) => /* @__PURE__ */ jsxDEV("line", { x1: "0", x2: "920", y1: y, y2: y, stroke: "rgba(120,130,255,0.08)", strokeWidth: "1" }, y, false, {
            fileName: "<stdin>",
            lineNumber: 99,
            columnNumber: 19
          }, this)),
          [200, 400, 600, 800].map((x) => /* @__PURE__ */ jsxDEV("line", { x1: x, x2: x, y1: "0", y2: "460", stroke: "rgba(120,130,255,0.08)", strokeWidth: "1" }, x, false, {
            fileName: "<stdin>",
            lineNumber: 102,
            columnNumber: 19
          }, this)),
          LINKS.map(([a, b]) => {
            const pa = pos(a), pb = pos(b);
            const mx = (pa.x + pb.x) / 2;
            const my = (pa.y + pb.y) / 2 - Math.max(14, Math.abs(pa.x - pb.x) * 0.18);
            const lit = linkLit(a, b);
            return /* @__PURE__ */ jsxDEV("g", { opacity: lit ? 1 : 0.12, style: { transition: "opacity .4s ease" }, children: [
              /* @__PURE__ */ jsxDEV(
                "path",
                {
                  d: `M ${pa.x} ${pa.y} Q ${mx} ${my} ${pb.x} ${pb.y}`,
                  fill: "none",
                  stroke: "url(#beam)",
                  strokeWidth: "1.6",
                  strokeLinecap: "round",
                  strokeDasharray: "6 8",
                  style: { animation: "dashFlow 6s linear infinite" }
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 113,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("circle", { r: "3", fill: "#fff", style: { filter: "drop-shadow(0 0 6px #22d3ee)" }, children: /* @__PURE__ */ jsxDEV(
                "animateMotion",
                {
                  dur: "3s",
                  repeatCount: "indefinite",
                  path: `M ${pa.x} ${pa.y} Q ${mx} ${my} ${pb.x} ${pb.y}`
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 120,
                  columnNumber: 25
                },
                this
              ) }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 119,
                columnNumber: 23
              }, this)
            ] }, a + b, true, {
              fileName: "<stdin>",
              lineNumber: 112,
              columnNumber: 21
            }, this);
          }),
          Object.entries(CITIES).map(([name, c]) => {
            const lit = isLit(name);
            const focus = FOCUS.includes(name);
            return /* @__PURE__ */ jsxDEV(
              "g",
              {
                className: "cursor-pointer",
                onClick: () => setActive(active === name ? null : name),
                children: [
                  /* @__PURE__ */ jsxDEV("circle", { cx: c.x, cy: c.y, r: "20", fill: "transparent", children: [
                    /* @__PURE__ */ jsxDEV("animate", { attributeName: "r", values: "16;24;16", dur: "2.6s", repeatCount: "indefinite" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 138,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("animate", { attributeName: "opacity", values: "0.5;0.1;0.5", dur: "2.6s", repeatCount: "indefinite" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 139,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 137,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "circle",
                    {
                      cx: c.x,
                      cy: c.y,
                      r: focus ? 5 : 3.4,
                      fill: lit ? "url(#hubg)" : "#4a5078",
                      style: { transition: "fill .3s ease", filter: lit ? "drop-shadow(0 0 6px #22d3ee)" : "none" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "<stdin>",
                      lineNumber: 141,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "text",
                    {
                      x: c.x,
                      y: c.y - 10,
                      textAnchor: "middle",
                      fontSize: "11",
                      fontWeight: "700",
                      fill: lit ? "#e9ecff" : "#6a7099",
                      style: { transition: "fill .3s ease" },
                      children: name
                    },
                    void 0,
                    false,
                    {
                      fileName: "<stdin>",
                      lineNumber: 143,
                      columnNumber: 23
                    },
                    this
                  )
                ]
              },
              name,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 132,
                columnNumber: 21
              },
              this
            );
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 82,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-8 grid gap-6 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV(Reveal, { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV("div", { className: "glass p-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold uppercase tracking-widest text-white/70 text-xs", children: "Legend" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 158,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-3 text-sm text-[var(--muted)]", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 160,
                columnNumber: 59
              }, this),
              " Active hub"
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 160,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "h-px w-8", style: { background: "var(--grad-brand)" } }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 161,
                columnNumber: 59
              }, this),
              " Live matter window"
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 161,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "h-2.5 w-2.5 rounded-full bg-white/60" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 162,
                columnNumber: 59
              }, this),
              " Travel pulse"
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 162,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 159,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 rounded-xl border border-white/[0.07] bg-black/20 p-4 font-mono text-xs", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-[var(--green)]", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "h-2 w-2 animate-pulse rounded-full bg-emerald-400" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 165,
                columnNumber: 80
              }, this),
              " All windows operational"
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 165,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-2 text-[var(--muted)]", children: "42,900 pulses en route" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 166,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 164,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 157,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Reveal, { delay: 80, className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV("div", { className: "glass p-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold uppercase tracking-widest text-white/70 text-xs", children: active ? `${active} \u2014 ${CITIES[active].hub}` : "Network status" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 173,
            columnNumber: 17
          }, this),
          active ? /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-[var(--muted)]", children: [
            active,
            " is linked to",
            " ",
            LINKS.filter(([a, b]) => a === active || b === active).map(([a, b]) => a === active ? b : a).join(", ") || "no other hubs",
            ". Transit time to each hub is under a second."
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 177,
            columnNumber: 19
          }, this) : /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-[var(--muted)]", children: "The Veldport grid folds 8 regions. Our flagships run Prague\u2192London, Brno\u2192New York and Plze\u0148\u2192Dubai. Tap any glowing dot to trace its routes across the world." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 184,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex flex-wrap gap-2", children: FOCUS.map((c) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setActive(active === c ? null : c),
              className: `rounded-full border px-3 py-1.5 text-sm transition-all ${active === c ? "border-violet-400/60 bg-violet-400/20 text-white" : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/30"}`,
              children: c
            },
            c,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 191,
              columnNumber: 21
            },
            this
          )) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 189,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 172,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 171,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 155,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function Shell() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Navbar, { active: "map.html" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(MapPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 211,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 208,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Shell, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 216,
  columnNumber: 52
}));
