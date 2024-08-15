import { c as create_ssr_component, v as validate_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object } from './ssr-BPpBco92.js';
import { B as Button, c as cn } from './index3-B3GebGGx.js';
import { R as Root, T as Trigger, C as Close, s as sheetTransitions, a as sheetVariants, D as Dialog_close, f as fly, b as fade } from './index6-CwU3zv22.js';
import 'clsx';
import './client-BUusD8wq.js';
import { I as Icon } from './Icon-Cvl7DYRt.js';
import { D as Dialog_content, X, a as Dialog_title, b as Dialog_description, c as Dialog_portal, d as Dialog_overlay } from './x-BM7FqkIZ.js';
import 'tailwind-merge';
import 'tailwind-variants';
import './index4-BsPMz3xn.js';
import './events-CynsnKEM.js';
import './exports-BGi7-Rnc.js';

const Sheet_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Dialog_portal, "SheetPrimitive.Portal").$$render($$result, Object.assign({}, { class: cn(className) }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sheet_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = fade } = $$props;
  let { transitionConfig = { duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Dialog_overlay, "SheetPrimitive.Overlay").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm ", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Sheet_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "side",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig"
  ]);
  let { class: className = void 0 } = $$props;
  let { side = "right" } = $$props;
  let { inTransition = fly } = $$props;
  let { inTransitionConfig = sheetTransitions[side ?? "right"].in } = $$props;
  let { outTransition = fly } = $$props;
  let { outTransitionConfig = sheetTransitions[side ?? "right"].out } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0) $$bindings.side(side);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  return `${validate_component(Sheet_portal, "SheetPortal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Sheet_overlay, "SheetOverlay").$$render($$result, {}, {}, {})} ${validate_component(Dialog_content, "SheetPrimitive.Content").$$render(
        $$result,
        Object.assign(
          {},
          { inTransition },
          { inTransitionConfig },
          { outTransition },
          { outTransitionConfig },
          {
            class: cn(sheetVariants({ side }), className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``} ${validate_component(Dialog_close, "SheetPrimitive.Close").$$render(
              $$result,
              {
                class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
              },
              {},
              {
                default: () => {
                  return `${validate_component(X, "X").$$render($$result, { class: "h-4 w-4" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1pewzs3">Close</span>`;
                }
              }
            )}`;
          }
        }
      )}`;
    }
  })}`;
});
const Sheet_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col space-y-2 text-center sm:text-left", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Sheet_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Dialog_title, "SheetPrimitive.Title").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-foreground text-lg font-semibold", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Sheet_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Dialog_description, "SheetPrimitive.Description").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-muted-foreground text-sm", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    ],
    ["polyline", { "points": "16 17 21 12 16 7" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "log-out" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="bg-white min-h-[90svh] text-black"><div class="flex items-center w-[90%] mx-auto gap-3">${validate_component(Root, "Sheet.Root").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Trigger, "Sheet.Trigger").$$render($$result, { asChild: true }, {}, {
            default: ({ builder }) => {
              return `${validate_component(Button, "Button").$$render($$result, { builders: [builder] }, {}, {
                default: () => {
                  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}`;
                }
              })}`;
            }
          })} ${validate_component(Sheet_content, "Sheet.Content").$$render($$result, { side: "left" }, {}, {
            default: () => {
              return `${validate_component(Sheet_header, "Sheet.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Sheet_title, "Sheet.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Menu`;
                    }
                  })} ${validate_component(Sheet_description, "Sheet.Description").$$render($$result, {}, {}, {})}`;
                }
              })} <div class="grid gap-4 py-4 w-full">${validate_component(Close, "Sheet.Close").$$render($$result, { asChild: true }, {}, {
                default: ({ builder }) => {
                  return `${validate_component(Button, "Button").$$render($$result, { class: "text-black", variant: "outline" }, {}, {
                    default: () => {
                      return `Participations`;
                    }
                  })} ${validate_component(Button, "Button").$$render($$result, { class: "text-black", variant: "outline" }, {}, {
                    default: () => {
                      return `Non participants`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      }
    )} <form class="flex flex-1 items-center justify-between mx-auto text-sm my-6 rounded-md text-slate-800 gap-3" action="/beprofessional/admin?/logout" method="post"><p class="border p-2 px-4 flex-1 text-center border-red-400 border-opacity-45 bg-red-100" data-svelte-h="svelte-1knqdqq">Please logout as soon as you are done with the admin panel. Do not leave it signed in</p> ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
      default: () => {
        return `${validate_component(Log_out, "LogOut").$$render($$result, {}, {}, {})}`;
      }
    })}</form></div> ${slots.default ? slots.default({}) : ` `}</main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-CKCTAEtd.js.map
