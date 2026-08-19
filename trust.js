import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { createRoot } from "react-dom/client";
import { Navbar, Footer, Reveal, OrbBackground } from "./components.js";
const PILLARS = [
  {
    icon: "\u25CE",
    title: "Decade of zero failures",
    color: "#22d3ee",
    desc: "Since our first Prague\u2013Brno test fold in 2014, Veldport has completed over 300 million passenger transits without a single reconvergence error."
  },
  {
    icon: "\u271B",
    title: "Triple-redundant field locks",
    color: "#8b5cf6",
    desc: "Every aperture is held by three independent phase-locks. If any two disagree, the window refuses to open. Safety is the default, not an override."
  },
  {
    icon: "\u25C8",
    title: "Human watch, around the clock",
    color: "#ec4899",
    desc: "Algorithms open the windows, but humans own the decision. A live ops floor at the Prague hub monitors every pulse in real time."
  },
  {
    icon: "\u260D",
    title: "Open telemetry, public audit",
    color: "#34d399",
    desc: "Our fold telemetry is published quarterly and audited by independent physicists. Trust should withstand inspection \u2014 and it does."
  },
  {
    icon: "\u25A4",
    title: "Matter-accounting guarantee",
    color: "#fbbf24",
    desc: "Whatever leaves one aperture is accounted for at the other. If anything ever fails to reconverge, we find it or reimburse its full value."
  },
  {
    icon: "\u2726",
    title: "Backed by 214 municipalities",
    color: "#a78bfa",
    desc: "Hubs are co-governed with the cities they serve. Veldport can't operate in a place that doesn't want us \u2014 that keeps us honest."
  }
];
const NUMBERS = [
  ["12 yrs", "of continuous operation"],
  ["314M", "transits completed"],
  ["214", "cities, one network"],
  ["4", "time zones, zero jet lag"]
];
function TrustPage() {
  return /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden py-14", children: [
    /* @__PURE__ */ jsxDEV(OrbBackground, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto max-w-6xl px-5", children: [
      /* @__PURE__ */ jsxDEV(Reveal, { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "\u25C6 Why Veldport" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl", children: [
          "We'd stake our ",
          /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "matter" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 30
          }, this),
          " on it."
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-2xl text-lg text-[var(--muted)]", children: "You're asking the universe to take you apart and put you back together. It's reasonable to want proof. Here is ours." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: PILLARS.map((p, i) => /* @__PURE__ */ jsxDEV(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad h-full p-7 transition-transform duration-300 hover:-translate-y-2", children: [
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: "grid h-12 w-12 place-items-center rounded-2xl text-xl",
            style: { background: `${p.color}1f`, color: p.color, boxShadow: `0 0 20px ${p.color}33` },
            children: p.icon
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 48,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("h3", { className: "mt-5 text-lg font-bold", children: p.title }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 52,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-[var(--muted)]", children: p.desc }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 53,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 17
      }, this) }, p.title, false, {
        fileName: "<stdin>",
        lineNumber: 46,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-14", children: /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: NUMBERS.map(([v, l], i) => /* @__PURE__ */ jsxDEV(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxDEV("div", { className: "glass p-6 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-3xl font-extrabold shimmer", children: v }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 65,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-1 text-sm text-[var(--muted)]", children: l }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 66,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 19
      }, this) }, l, false, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Reveal, { className: "mt-16", children: /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad relative overflow-hidden p-10 text-center sm:p-14", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { background: "var(--grad-brand)" }, className: "absolute inset-0 opacity-10" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-5xl font-bold grad-text", children: '"' }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mx-auto max-w-2xl text-xl font-medium leading-relaxed sm:text-2xl", children: "We fold space for a living. The one thing we never fold is the truth about what we do." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-sm text-[var(--muted)]", children: "\u2014 Dr. Elena Veldov\xE1, Founder & Chief Field Officer" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 82,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function Shell() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Navbar, { active: "trust.html" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(TrustPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Shell, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 102,
  columnNumber: 52
}));
