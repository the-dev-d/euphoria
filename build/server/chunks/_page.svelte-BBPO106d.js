import { c as create_ssr_component, b as subscribe, j as set_store_value, v as validate_component, k as add_attribute, e as each, a as escape, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, s as setContext, g as getContext } from './ssr-BPpBco92.js';
import { g as globals, c as createTable, R as Root$1$1, S as Select_trigger, V as Value, a as Select_content, b as Select_item, d as Root$2, T as Trigger, C as Chevron_down, D as Dropdown_menu_content, e as Dropdown_menu_checkbox_item, f as Subscribe, h as Render, i as addHiddenColumns } from './postcss-BWBkhg9_.js';
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell } from './table-row-DeCHEnCY.js';
import 'clsx';
import { B as Button, c as cn, b as buttonVariants, i as is_void, f as flyAndScale } from './index3-B3GebGGx.js';
import { w as writable, d as derived } from './index4-BsPMz3xn.js';
import { D as Dialog_close, c as Dialog, d as createDialog, b as fade } from './index6-CwU3zv22.js';
import { c as createDispatcher, a as createBitAttrs } from './events-CynsnKEM.js';
import { r as removeUndefined, g as getOptionUpdater } from './Icon-Cvl7DYRt.js';
import './client-BUusD8wq.js';
import './index5-4H_RKGxQ.js';
import { a as Dialog_title$1, D as Dialog_content$1, X, b as Dialog_description$1, c as Dialog_portal$1, d as Dialog_overlay$1 } from './x-BM7FqkIZ.js';
import './check-B7hBTfZC.js';
import './create-CrKYczZ2.js';
import 'tty';
import 'path';
import 'url';
import 'fs';
import 'tailwind-merge';
import 'tailwind-variants';
import './exports-BGi7-Rnc.js';

function getAlertDialogData() {
  const NAME = "alert-dialog";
  const PARTS = [
    "action",
    "cancel",
    "content",
    "description",
    "overlay",
    "portal",
    "title",
    "trigger"
  ];
  return { NAME, PARTS };
}
function setCtx(props) {
  const { NAME, PARTS } = getAlertDialogData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const initAlertDialog = createDialog({
    ...removeUndefined(props),
    role: "alertdialog",
    forceVisible: true
  });
  const alertDialog = {
    ...initAlertDialog,
    getAttrs,
    updateOption: getOptionUpdater(initAlertDialog.options)
  };
  setContext(NAME, alertDialog);
  return {
    ...alertDialog,
    updateOption: getOptionUpdater(alertDialog.options),
    getAttrs
  };
}
function getCtx() {
  const { NAME } = getAlertDialogData();
  return getContext(NAME);
}
const Alert_dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { preventScroll = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = false } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    closeOnEscape,
    preventScroll,
    closeOnOutsideClick,
    portal,
    forceVisible: true,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.description, ids.title], ([$contentId, $descriptionId, $titleId]) => ({
    content: $contentId,
    description: $descriptionId,
    title: $titleId
  }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0) $$bindings.preventScroll(preventScroll);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0) $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0) $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0) $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0) $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0) $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0) $$bindings.closeFocus(closeFocus);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0) $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Alert_dialog_title$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["level", "asChild", "id", "el"]);
  let $title, $$unsubscribe_title;
  let { level = "h2" } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { title }, ids, getAttrs } = getCtx();
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  const attrs = getAttrs("title");
  if ($$props.level === void 0 && $$bindings.level && level !== void 0) $$bindings.level(level);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.title.set(id);
    }
  }
  builder = $title;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_title();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `${((tag) => {
    return tag ? `<${level}${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({ builder }) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(level)}`}`;
});
const Alert_dialog_action$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $close, $$unsubscribe_close;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { close }, getAttrs } = getCtx();
  $$unsubscribe_close = subscribe(close, (value) => $close = value);
  createDispatcher();
  const attrs = getAttrs("action");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $close;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_close();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Alert_dialog_cancel$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $close, $$unsubscribe_close;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { close }, getAttrs } = getCtx();
  $$unsubscribe_close = subscribe(close, (value) => $close = value);
  createDispatcher();
  const attrs = getAttrs("cancel");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $close;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_close();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Alert_dialog_portal$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $portalled, $$unsubscribe_portalled;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { portalled }, getAttrs } = getCtx();
  $$unsubscribe_portalled = subscribe(portalled, (value) => $portalled = value);
  const attrs = getAttrs("portal");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $portalled;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_portalled();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Alert_dialog_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "id",
    "asChild",
    "el"
  ]);
  let $content, $$unsubscribe_content;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_content();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Alert_dialog_overlay$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  let $overlay, $$unsubscribe_overlay;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { overlay }, states: { open }, getAttrs } = getCtx();
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("overlay");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $overlay;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_overlay();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : ``}`}`}`}`}`}`;
});
const Alert_dialog_description$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $description, $$unsubscribe_description;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { description }, ids, getAttrs } = getCtx();
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  const attrs = getAttrs("description");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.description.set(id);
    }
  }
  builder = $description;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_description();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Alert_dialog_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "level"]);
  let { class: className = void 0 } = $$props;
  let { level = "h3" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0) $$bindings.level(level);
  return `${validate_component(Alert_dialog_title$1, "AlertDialogPrimitive.Title").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-lg font-semibold", className)
      },
      { level },
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
const Alert_dialog_action = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Alert_dialog_action$1, "AlertDialogPrimitive.Action").$$render($$result, Object.assign({}, { class: cn(buttonVariants(), className) }, $$restProps), {}, {
    default: ({ builder }) => {
      return `${slots.default ? slots.default({ builder }) : ``}`;
    }
  })}`;
});
const Alert_dialog_cancel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Alert_dialog_cancel$1, "AlertDialogPrimitive.Cancel").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)
      },
      $$restProps
    ),
    {},
    {
      default: ({ builder }) => {
        return `${slots.default ? slots.default({ builder }) : ``}`;
      }
    }
  )}`;
});
const Alert_dialog_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(Alert_dialog_portal$1, "AlertDialogPrimitive.Portal").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Alert_dialog_footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Alert_dialog_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Alert_dialog_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = fade } = $$props;
  let { transitionConfig = { duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Alert_dialog_overlay$1, "AlertDialogPrimitive.Overlay").$$render(
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
const Alert_dialog_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transition", "transitionConfig", "class"]);
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Alert_dialog_portal, "AlertDialog.Portal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Alert_dialog_overlay, "AlertDialog.Overlay").$$render($$result, {}, {}, {})} ${validate_component(Alert_dialog_content$1, "AlertDialogPrimitive.Content").$$render(
        $$result,
        Object.assign(
          {},
          { transition },
          { transitionConfig },
          {
            class: cn("bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full", className)
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
    }
  })}`;
});
const Alert_dialog_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Alert_dialog_description$1, "AlertDialogPrimitive.Description").$$render(
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
const Root$1 = Alert_dialog;
const Dialog_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Dialog_title$1, "DialogPrimitive.Title").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-lg font-semibold leading-none tracking-tight", className)
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
const Dialog_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(Dialog_portal$1, "DialogPrimitive.Portal").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Dialog_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col space-y-1.5 text-center sm:text-left", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Dialog_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = fade } = $$props;
  let { transitionConfig = { duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Dialog_overlay$1, "DialogPrimitive.Overlay").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Dialog_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = { duration: 200 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Dialog_portal, "Dialog.Portal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Dialog_overlay, "Dialog.Overlay").$$render($$result, {}, {}, {})} ${validate_component(Dialog_content$1, "DialogPrimitive.Content").$$render(
        $$result,
        Object.assign(
          {},
          { transition },
          { transitionConfig },
          {
            class: cn("bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full", className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``} ${validate_component(Dialog_close, "DialogPrimitive.Close").$$render(
              $$result,
              {
                class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
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
const Dialog_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Dialog_description$1, "DialogPrimitive.Description").$$render(
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
const Root = Dialog;
class ComponentRenderConfig {
  component;
  props;
  constructor(component, props) {
    this.component = component;
    this.props = props;
  }
  eventHandlers = [];
  on(type, handler) {
    this.eventHandlers.push([type, handler]);
    return this;
  }
  children = [];
  slot(...children) {
    this.children = children;
    return this;
  }
}
function createRender(component, props) {
  return new ComponentRenderConfig(component, props);
}
const ButtonWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { click = () => {
  } } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.click === void 0 && $$bindings.click && click !== void 0) $$bindings.click(click);
  return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(label)}`;
    }
  })}`;
});
const { Object: Object_1 } = globals;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenColumnIds, $$unsubscribe_hiddenColumnIds;
  let $tableAttrs, $$unsubscribe_tableAttrs;
  let $headerRows, $$unsubscribe_headerRows;
  let $tableBodyAttrs, $$unsubscribe_tableBodyAttrs;
  let $pageRows, $$unsubscribe_pageRows;
  let { data } = $$props;
  const tableData = writable([]);
  const table = createTable(tableData, { hide: addHiddenColumns() });
  const columns = table.createColumns([
    table.column({
      accessor: (a) => a.participant.name,
      header: "Name"
    }),
    table.column({
      accessor: (a) => a.participant.college,
      header: "College"
    }),
    table.column({
      accessor: (a) => a.participant.email,
      header: "Email"
    }),
    table.column({
      accessor: (a) => a.participant.phone,
      header: "Phone"
    }),
    table.column({
      accessor: (a) => a.created_at.toLocaleString(),
      header: "Created At"
    }),
    table.column({
      accessor: (a) => a.event_code,
      header: "Event Code"
    }),
    table.column({
      accessor: (a) => a.event_payment.amount + " Rs",
      header: "Amount"
    }),
    table.column({
      accessor: (a) => a.event_payment.upi_transaction_id,
      header: "UPI Transaction ID"
    }),
    table.column({
      accessor: (a) => a.event_payment.screenshot,
      header: "Screenshot",
      cell: ({ value }) => {
        return createRender(ButtonWrapper, {
          label: "View",
          click: () => {
            handleScreenshotShow(value);
          }
        });
      }
    }),
    table.column({
      accessor: (a) => a.event_participant_id,
      header: "Verify",
      cell: ({ value }) => {
        return createRender(ButtonWrapper, {
          label: "Verify",
          click: () => {
            handleSwitchChange();
          }
        });
      }
    })
  ]);
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns } = table.createViewModel(columns);
  $$unsubscribe_headerRows = subscribe(headerRows, (value) => $headerRows = value);
  $$unsubscribe_pageRows = subscribe(pageRows, (value) => $pageRows = value);
  $$unsubscribe_tableAttrs = subscribe(tableAttrs, (value) => $tableAttrs = value);
  $$unsubscribe_tableBodyAttrs = subscribe(tableBodyAttrs, (value) => $tableBodyAttrs = value);
  const { hiddenColumnIds } = pluginStates.hide;
  $$unsubscribe_hiddenColumnIds = subscribe(hiddenColumnIds, (value) => $hiddenColumnIds = value);
  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
  const hidableCols = [
    "Name",
    "College",
    "Email",
    "Phone",
    "Created At",
    "Event Code",
    "Amount",
    "UPI Transaction ID"
  ];
  let currentScreenshot = "";
  data.limit;
  let pageNumber = data.pageNumber;
  let open = false;
  let ssopen = false;
  function handleScreenshotShow(screenshot) {
    currentScreenshot = screenshot;
    ssopen = true;
  }
  async function handleSwitchChange(id) {
    open = true;
  }
  let selected = {
    value: data.limit,
    label: "" + data.limit
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        tableData.set(data.participations);
      }
    }
    set_store_value(hiddenColumnIds, $hiddenColumnIds = Object.entries(hideForId).filter(([, hide]) => !hide).map(([id]) => id), $hiddenColumnIds);
    $$rendered = `<main class="bg-white min-h-[90svh] text-black"><div>${validate_component(Root$1, "AlertDialog.Root").$$render(
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
          return `${validate_component(Alert_dialog_content, "AlertDialog.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Alert_dialog_header, "AlertDialog.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Alert_dialog_title, "AlertDialog.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Are you absolutely sure?`;
                    }
                  })} ${validate_component(Alert_dialog_description, "AlertDialog.Description").$$render($$result, {}, {}, {
                    default: () => {
                      return `This will mark the entry as verified and will unlock new privileges to the participant. 
                <p class="my-3" data-svelte-h="svelte-1qqdx8y"><span class="font-semibold">Warning :</span> This action is irreversible.</p>`;
                    }
                  })}`;
                }
              })} ${validate_component(Alert_dialog_footer, "AlertDialog.Footer").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Alert_dialog_cancel, "AlertDialog.Cancel").$$render($$result, {}, {}, {
                    default: () => {
                      return `<span class="text-black" data-svelte-h="svelte-1iqd6f8">Cancel</span>`;
                    }
                  })} ${validate_component(Alert_dialog_action, "AlertDialog.Action").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                        default: () => {
                          return `Continue`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div> <div>${validate_component(Root, "Dialog.Root").$$render(
      $$result,
      { open: ssopen },
      {
        open: ($$value) => {
          ssopen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Dialog_content, "Dialog.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Dialog_header, "Dialog.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Dialog_title, "Dialog.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `<span class="text-black" data-svelte-h="svelte-1htp7zi">Screenshot</span>`;
                    }
                  })} ${validate_component(Dialog_description, "Dialog.Description").$$render($$result, {}, {}, {
                    default: () => {
                      return `<img class="max-h-[70svh] mx-auto"${add_attribute("src", currentScreenshot.replace("static", ""), 0)}${add_attribute("alt", currentScreenshot.replace("static", ""), 0)}>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div>  <div class="w-[90%] mx-auto mt-10 mb-2 flex items-center gap-3">${validate_component(Root$1$1, "Select.Root").$$render(
      $$result,
      {
        onSelectedChange: (v) => {
          data.limit = v?.value;
        },
        selected
      },
      {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { class: "w-[180px]" }, {}, {
            default: () => {
              return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Page Size" }, {}, {})}`;
            }
          })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Select_item, "Select.Item").$$render($$result, { value: "2" }, {}, {
                default: () => {
                  return `2`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "10" }, {}, {
                default: () => {
                  return `10`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "20" }, {}, {
                default: () => {
                  return `20`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "30" }, {}, {
                default: () => {
                  return `30`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "40" }, {}, {
                default: () => {
                  return `40`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "50" }, {}, {
                default: () => {
                  return `50`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} <a${add_attribute("href", "admin?page=1&limit=" + data.limit, 0)}>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Apply`;
      }
    })}</a> ${validate_component(Root$2, "DropdownMenu.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, { asChild: true }, {}, {
          default: ({ builder }) => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "outline",
                class: "ml-auto",
                builders: [builder]
              },
              {},
              {
                default: () => {
                  return `Columns ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "ml-2 h-4 w-4" }, {}, {})}`;
                }
              }
            )}`;
          }
        })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, {}, {}, {
          default: () => {
            return `${each(flatColumns, (col) => {
              return `${hidableCols.includes(col.id) ? `${validate_component(Dropdown_menu_checkbox_item, "DropdownMenu.CheckboxItem").$$render(
                $$result,
                { checked: hideForId[col.id] },
                {
                  checked: ($$value) => {
                    hideForId[col.id] = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${escape(col.header)} `;
                  }
                }
              )}` : ``}`;
            })}`;
          }
        })}`;
      }
    })}</div> <div class="w-[90%] mx-auto border rounded-md"> ${validate_component(Table, "Table.Root").$$render($$result, Object_1.assign({}, $tableAttrs), {}, {
      default: () => {
        return `${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
          default: () => {
            return `${each($headerRows, (headerRow) => {
              return `${validate_component(Subscribe, "Subscribe").$$render($$result, { rowAttrs: headerRow.attrs() }, {}, {
                default: () => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(headerRow.cells, (cell) => {
                        return `${validate_component(Subscribe, "Subscribe").$$render($$result, { attrs: cell.attrs(), props: cell.props() }, {}, {
                          default: ({ attrs }) => {
                            return `${validate_component(Table_head, "Table.Head").$$render($$result, Object_1.assign({}, attrs), {}, {
                              default: () => {
                                return `${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})} `;
                              }
                            })} `;
                          }
                        })}`;
                      })} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })} ${validate_component(Table_body, "Table.Body").$$render($$result, Object_1.assign({}, $tableBodyAttrs), {}, {
          default: () => {
            return `${each($pageRows, (row) => {
              return `${validate_component(Subscribe, "Subscribe").$$render($$result, { rowAttrs: row.attrs() }, {}, {
                default: ({ rowAttrs }) => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, Object_1.assign({}, rowAttrs), {}, {
                    default: () => {
                      return `${each(row.cells, (cell) => {
                        return `${validate_component(Subscribe, "Subscribe").$$render($$result, { attrs: cell.attrs() }, {}, {
                          default: ({ attrs }) => {
                            return `${validate_component(Table_cell, "Table.Cell").$$render($$result, Object_1.assign({}, attrs), {}, {
                              default: () => {
                                return `${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})} `;
                              }
                            })} `;
                          }
                        })}`;
                      })} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div> <div class="w-[90%] mx-auto flex items-center justify-end text-xs my-4"><div>Total ${escape(data.count)} records</div> <div class="flex items-center justify-center"><a${add_attribute(
      "href",
      pageNumber > 0 ? "admin?page=" + (data.pageNumber - 1) + "&limit=" + data.limit : "",
      0
    )} class="p-1 border mx-4 flex"><span class="material-symbols-outlined" data-svelte-h="svelte-19z8hyk">chevron_left</span></a> <div class="">Page ${escape(data.pageNumber)}/ ${escape(Math.ceil(data.count / data.limit))}</div> <a${add_attribute(
      "href",
      pageNumber < Math.ceil(data.count / data.limit) ? "admin?page=" + (data.pageNumber + 1) + "&limit=" + data.limit : "",
      0
    )} class="p-1 border mx-4 flex"><span class="material-symbols-outlined" data-svelte-h="svelte-18kgbq5">chevron_right</span></a></div></div></main>`;
  } while (!$$settled);
  $$unsubscribe_hiddenColumnIds();
  $$unsubscribe_tableAttrs();
  $$unsubscribe_headerRows();
  $$unsubscribe_tableBodyAttrs();
  $$unsubscribe_pageRows();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BBPO106d.js.map
