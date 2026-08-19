import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Navbar, Footer, Reveal, OrbBackground } from "./components.js";
const CONTACTS = [
  { icon: "\u2709", label: "Email", value: "hello@veldport.net", sub: "General & bookings", href: "mailto:hello@veldport.net" },
  { icon: "\u260E", label: "Phone", value: "+420 555 0138", sub: "24/7 booking line", href: "tel:+4205550138" },
  { icon: "\u25C9", label: "HQ", value: "Orbit Ring 4, Prague 7", sub: "Central Terminal, Gate 0", href: "map.html" },
  { icon: "\u2301", label: "Ops floor", value: "ops@veldport.net", sub: "Technical & cargo", href: "mailto:ops@veldport.net" }
];
const HOURS = [
  ["Mon \u2013 Fri", "06:00 \u2013 24:00"],
  ["Saturday", "07:00 \u2013 23:00"],
  ["Sunday", "08:00 \u2013 22:00"],
  ["Freight desk", "24 / 7"]
];
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden py-14", children: [
    /* @__PURE__ */ jsxDEV(OrbBackground, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto max-w-6xl px-5", children: [
      /* @__PURE__ */ jsxDEV(Reveal, { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "chip", children: "\u25C6 Contact" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl", children: [
          "Talk to a ",
          /* @__PURE__ */ jsxDEV("span", { className: "grad-text", children: "human." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 max-w-2xl text-lg text-[var(--muted)]", children: "Windows open fast, but people answer even faster. Reach us however you like \u2014 we're stationed at hubs on four continents." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 grid gap-6 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxDEV(Reveal, { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: CONTACTS.map((c, i) => /* @__PURE__ */ jsxDEV("a", { href: c.href, className: "glass ring-grad p-5 transition-transform duration-300 hover:-translate-y-1.5", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "grid h-10 w-10 place-items-center rounded-xl text-lg", style: { background: "rgba(139,92,246,0.15)", color: "#a78bfa" }, children: c.icon }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 51,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-4 text-xs uppercase tracking-widest text-[var(--muted)]", children: c.label }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 54,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "font-bold text-white", children: c.value }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 55,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-[var(--muted)]", children: c.sub }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 56,
              columnNumber: 21
            }, this)
          ] }, c.label, true, {
            fileName: "<stdin>",
            lineNumber: 50,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "glass mt-4 p-6", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold uppercase tracking-widest text-white/70", children: "Hub hours" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 62,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-2 text-sm", children: HOURS.map(([d, h]) => /* @__PURE__ */ jsxDEV("li", { className: "flex justify-between border-b border-white/[0.06] pb-2", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--muted)]", children: d }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 66,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-[var(--text)]", children: h }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 67,
                columnNumber: 23
              }, this)
            ] }, d, true, {
              fileName: "<stdin>",
              lineNumber: 65,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 63,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Reveal, { delay: 120, className: "lg:col-span-3", children: /* @__PURE__ */ jsxDEV("div", { className: "glass ring-grad p-6 sm:p-8", children: sent ? /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-[380px] flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid h-20 w-20 place-items-center rounded-full", style: { background: "var(--grad-brand)", boxShadow: "0 0 40px rgba(139,92,246,0.6)" }, children: /* @__PURE__ */ jsxDEV("span", { className: "text-3xl font-black text-[#0a0b1a]", children: "\u2713" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 80,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 79,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "mt-6 text-2xl font-extrabold grad-text", children: "Window received." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 82,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-2 max-w-sm text-[var(--muted)]", children: [
            "Thanks ",
            name || "traveller",
            " \u2014 our team will reply to ",
            email || "your inbox",
            " within the hour."
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 83,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: () => setSent(false), className: "btn-ghost mt-6 text-sm", children: "Send another" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 86,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 78,
          columnNumber: 19
        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold", children: "Book a window or ask anything" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 90,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: submit, className: "mt-6 space-y-5", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid gap-5 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-[var(--muted)]", children: "Name" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 94,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    required: true,
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    className: "mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/25 focus:border-violet-400/50 focus:outline-none",
                    placeholder: "Ada Lovelace"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 95,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 93,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("label", { className: "block", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-[var(--muted)]", children: "Email" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 100,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    required: true,
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    className: "mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/25 focus:border-violet-400/50 focus:outline-none",
                    placeholder: "you@example.com"
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 101,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 99,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 92,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("label", { className: "block", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-[var(--muted)]", children: "Route (optional)" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 107,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  className: "mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/25 focus:border-violet-400/50 focus:outline-none",
                  placeholder: "e.g. Prague \u2192 Dubai"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 108,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 106,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("label", { className: "block", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-[var(--muted)]", children: "Message" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 112,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  required: true,
                  value: msg,
                  onChange: (e) => setMsg(e.target.value),
                  rows: "5",
                  className: "mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/25 focus:border-violet-400/50 focus:outline-none",
                  placeholder: "Tell us about your trip\u2026"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 113,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 111,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn-primary w-full justify-center sm:w-auto", children: "Send message" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 117,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 91,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 89,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 76,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function Shell() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Navbar, { active: "contact.html" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ContactPage, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 135,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 132,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Shell, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 140,
  columnNumber: 52
}));
