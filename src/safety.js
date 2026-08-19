import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Navbar, Footer, Reveal, OrbBackground } from "./components.js";
const RULES = [
  {
    icon: "\u25C6",
    title: "No organic matter beyond living humans",
    color: "#22d3ee",
    desc: "The aperture is tuned for living travellers and inert cargo. Plants, animals and unsealed biomatter require a specialist window. Your body is safe \u2014 the field simply recalibrates."
  },
  {
    icon: "\u271A",
    title: "Liquids travel in sealed containers",
    color: "#34d399",
    desc: "Anything pourable must be capped and inside your bag. A spill mid-fold would end up across a city block, which delights nobody."
  },
  {
    icon: "\u26A1",
    title: "No electronics above 40\xB0C",
    color: "#fbbf24",
    desc: "Tuck phones, laptops and vapes against your body, not in outer pockets. Magnetic pulses are mild, but warm batteries waste your window's energy budget."
  },
  {
    icon: "\u25CE",
    title: "One passenger per window, unless paired",
    color: "#8b5cf6",
    desc: "Standard windows carry one traveller. Families may link windows so you arrive together. Never force two people through a single aperture."
  },
  {
    icon: "\u26A0",
    title: "Remove loose items before stepping through",
    color: "#ec4899",
    desc: "Keys, coins and jewellery can scatter on reconvergence. Empty your pockets into the provided tray \u2014 we return everything at the far side."
  },
  {
    icon: "\u25A3",
    title: "Follow the glow lane, no running",
    color: "#a78bfa",
    desc: "Approach the aperture along the marked lane. A clear, unhurried entry gives the field time to read you. No last-second dashes, ever."
  },
  {
    icon: "\u21AF",
    title: "Never open a window during transit",
    color: "#f472b6",
    desc: "Once locked, the window is inert until the countdown clears. The control room handles everything \u2014 all you do is step out when the light turns green."
  },
  {
    icon: "\u263C",
    title: "Declare anything over 50 kg",
    color: "#67e8f9",
    desc: "Heavier loads shift the energy curve. Declaring them early lets the grid reserve the correct window and keeps arrivals smooth."
  }
];
const GUARANTEES = [
  ["99.998%", "arrival accuracy across 2025"],
  ["0", "unplanned mid-fold events in our history"],
  ["2s", "max window-hold for emergencies"],
  ["24/7", "human ops watch on every aperture"]
];
function SafetyPage() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden py-14", children: [
    /* @__PURE__ */ jsxDEV(OrbBackground, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto max-w-6xl px-5", children: [
      /* @__PURE__ */ jsxDEV(Reveal, { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "\u25C6 Safety Rules" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl", children: [
          "The rules keep you ",
          /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "whole." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 41,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-2xl text-lg text-[var(--muted)]", children: "Teleportation is safe because it is boring \u2014 and it stays boring when everyone follows the same eight rules." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 space-y-3", children: RULES.map((r, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxDEV(Reveal, { delay: i * 40, children: /* @__PURE__ */ jsxDEV("div", { className: `glass overflow-hidden transition-all duration-300 ${isOpen ? "ring-grad" : ""}`, children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setOpen(isOpen ? null : i),
              className: "flex w-full items-center gap-4 px-6 py-5 text-left",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl text-lg",
                    style: { background: `${r.color}1f`, color: r.color, boxShadow: `0 0 18px ${r.color}44` },
                    children: r.icon
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 57,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "flex-1 font-bold", children: r.title }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 61,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: `text-2xl text-[var(--muted)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`, children: "+" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 62,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 55,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "grid transition-all duration-300", style: { gridTemplateRows: isOpen ? "1fr" : "0fr" }, children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV("p", { className: "px-6 pb-5 pl-[5.5rem] text-[var(--muted)]", children: r.desc }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 66,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 65,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 64,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 54,
          columnNumber: 19
        }, this) }, i, false, {
          fileName: "<stdin>",
          lineNumber: 53,
          columnNumber: 17
        }, this);
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-14", children: [
        /* @__PURE__ */ jsxDEV(Reveal, { className: "mb-6", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-extrabold", children: "Safety in numbers." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: GUARANTEES.map(([v, l], i) => /* @__PURE__ */ jsxDEV(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad p-6 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-3xl font-extrabold grad-text", children: v }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 84,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-1 text-sm text-[var(--muted)]", children: l }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 85,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 83,
          columnNumber: 19
        }, this) }, l, false, {
          fileName: "<stdin>",
          lineNumber: 82,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function Shell() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Navbar, { active: "safety.html" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SafetyPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Shell, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 107,
  columnNumber: 52
}));
