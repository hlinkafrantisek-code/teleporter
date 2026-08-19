import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Navbar, Footer, Reveal, OrbBackground } from "./components.js";
const ROUTES = [
  { from: "Prague", to: "London", dist: 1036, rate: 4.2 },
  { from: "Brno", to: "New York", dist: 6580, rate: 9.4 },
  { from: "Plze\u0148", to: "Dubai", dist: 4650, rate: 7.8 },
  { from: "Prague", to: "Tokyo", dist: 9090, rate: 12.5 },
  { from: "London", to: "Dubai", dist: 5470, rate: 8.6 },
  { from: "Brno", to: "Paris", dist: 900, rate: 3.9 }
];
const BASE = 20;
const LIMITS = [
  { label: "Carry-on", mass: "8 kg", note: "Hand items, laptops, small bags. Free with every window." },
  { label: "Standard", mass: "20 kg", note: "One checked bag. The most common tier." },
  { label: "Heavy", mass: "50 kg", note: "Sports gear, instrument cases, bulkier luggage." },
  { label: "Cargo", mass: "100 kg", note: "Crates, equipment \u2014 requires pre-approval." }
];
function fmt(n) {
  return "$" + n.toFixed(2);
}
function Calculator() {
  const [route, setRoute] = useState(ROUTES[0]);
  const [weight, setWeight] = useState(20);
  const over = weight > 100;
  const extra = Math.max(0, weight - 100);
  const baseCost = BASE + route.dist * route.rate / 100;
  const overCost = extra * 0.9;
  const total = Math.round((baseCost + overCost) * 100) / 100;
  const meter = Math.min(100, weight / 100 * 100);
  return /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold", children: "Cost calculator" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-[var(--muted)]", children: "Estimate your window before you book." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-6 grid gap-2 sm:grid-cols-2", children: ROUTES.map((r) => /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => setRoute(r),
        className: `rounded-xl border px-4 py-3 text-left text-sm transition-all ${route === r ? "border-violet-400/60 bg-violet-400/15 text-white" : "border-white/10 bg-white/5 text-[var(--muted)] hover:border-white/30"}`,
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-white", children: r.from }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          " \u2192 ",
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-white", children: r.to }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 46,
            columnNumber: 74
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "block text-xs text-[var(--muted)]", children: [
            r.dist.toLocaleString(),
            " km apart"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        ]
      },
      r.from + r.to,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-7", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("label", { className: "text-sm text-[var(--muted)]", children: "Payload weight" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-xl font-bold grad-text", children: [
          weight,
          " kg"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "range",
          min: "0",
          max: "150",
          value: weight,
          onChange: (e) => setWeight(Number(e.target.value)),
          className: "mt-3 w-full accent-violet-500"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 58,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxDEV("div", { className: "h-full rounded-full", style: { width: `${meter}%`, background: weight > 100 ? "#ec4899" : "var(--grad-brand)" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 62,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-1 flex justify-between font-mono text-[10px] text-[var(--muted)]", children: [
        /* @__PURE__ */ jsxDEV("span", { children: "0 kg" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "20 kg" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 28
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "50 kg" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 46
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: weight > 100 ? "text-pink-400" : "", children: "100 kg limit" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 64
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-7 space-y-3 border-t border-white/10 pt-5 text-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--muted)]", children: "Booking base" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 71,
          columnNumber: 47
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: fmt(BASE) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 71,
          columnNumber: 104
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--muted)]", children: [
          "Distance surcharge (",
          route.from,
          "\u2192",
          route.to,
          ")"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 47
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: fmt(baseCost - BASE) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 136
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      over > 0 && /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-pink-300", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "", children: [
          "Excess payload (+",
          extra,
          " kg @ $0.90/kg)"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 74,
          columnNumber: 63
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: fmt(overCost) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 74,
          columnNumber: 128
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between border-t border-white/10 pt-3", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: "Estimated total" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-2xl font-extrabold grad-text", children: fmt(total) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      over > 0 && /* @__PURE__ */ jsxDEV("p", { className: "rounded-lg bg-pink-500/10 px-3 py-2 text-xs text-pink-300", children: "\u26A0 Exceeds the 100 kg cargo limit \u2014 payloads above limit require a freight appointment." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function WeightPage() {
  return /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden py-14", children: [
    /* @__PURE__ */ jsxDEV(OrbBackground, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto max-w-6xl px-5", children: [
      /* @__PURE__ */ jsxDEV(Reveal, { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "\u25C6 Weight & Cost" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl", children: [
          "What weighs, ",
          /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "what costs." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 99,
            columnNumber: 28
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-2xl text-lg text-[var(--muted)]", children: "Folding space consumes energy proportional to the mass you send and the distance between the apertures. Simple in principle \u2014 we've made the bill simple too." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV(Reveal, { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsxDEV(Calculator, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 109,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Reveal, { delay: 120, className: "order-1 lg:order-2", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold", children: "Weight limits" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-[var(--muted)]", children: "The lighter you are, the further we can throw you." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-5 space-y-3", children: LIMITS.map((l, i) => /* @__PURE__ */ jsxDEV("div", { className: "glass flex items-center gap-5 p-4", children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-mono text-sm font-bold",
                style: { background: "var(--grad-brand)", boxShadow: "0 6px 20px -6px rgba(139,92,246,0.6)" },
                children: l.mass
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 118,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-bold", children: l.label }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 123,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-[var(--muted)]", children: l.note }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 124,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 122,
              columnNumber: 21
            }, this)
          ] }, l.label, true, {
            fileName: "<stdin>",
            lineNumber: 117,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Reveal, { delay: 200, children: /* @__PURE__ */ jsxDEV("div", { className: "mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/5 p-4 text-sm text-[var(--muted)]", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-cyan-200", children: "Everything beyond 100 kg" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 131,
              columnNumber: 19
            }, this),
            " moves via the freight division. Oversized or hazardous matter is never routed through passenger windows."
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 130,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 112,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Reveal, { className: "mt-16", children: /* @__PURE__ */ jsxDEV("div", { className: "glass overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/10 p-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold", children: "Route pricing" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 142,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-[var(--muted)]", children: "Flat per-window rates for a standard 20 kg payload." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 143,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid divide-y divide-white/[0.07] sm:grid-cols-3 sm:divide-x sm:divide-y-0", children: ROUTES.map((r) => /* @__PURE__ */ jsxDEV("div", { className: "p-6 text-center transition-colors hover:bg-white/[0.03]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-lg font-bold text-white", children: [
            r.from,
            " \u2192 ",
            r.to
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 148,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-[var(--muted)]", children: [
            r.dist.toLocaleString(),
            " km"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 149,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 font-mono text-3xl font-extrabold grad-text", children: fmt(Math.round((BASE + r.dist * r.rate / 100) * 100) / 100) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 150,
            columnNumber: 21
          }, this)
        ] }, r.from + r.to, true, {
          fileName: "<stdin>",
          lineNumber: 147,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 145,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 140,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 139,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
function Shell() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Navbar, { active: "weight.html" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(WeightPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 169,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Shell, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 174,
  columnNumber: 52
}));
