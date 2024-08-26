import { c as create_ssr_component, v as validate_component, d as escape, e as each, f as compute_rest_props, a as subscribe, h as spread, k as escape_object, l as add_attribute, s as setContext, g as getContext } from './ssr-Diu9wf_y.js';
import { I as Input } from './input-PCpax9Gz.js';
import { L as Label } from './label-DaPESR9e.js';
import { B as Button, c as cn, o as omit, m as makeElement, y as disabledAttr, e as executeCallbacks, b as addMeltEventListener, k as kbd, s as styleToString } from './index3-Dowwk4Sl.js';
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell } from './table-row-_Cz92cPb.js';
import { T as Table_caption } from './table-caption-DwwVrWCO.js';
import 'clsx';
import { G as GamerSchema, T as TeamNameSchema, a as TransactionSchema, R as RiotIdSchema, D as DiscordIdSchema, b as CollegeNameSchema } from './types-nSWFzZyp.js';
import './client-BUusD8wq.js';
import { I as Icon, r as removeUndefined, g as getOptionUpdater, t as toWritableStores, o as overridable } from './Icon-DHjjESmy.js';
import { d as derived, w as writable } from './ssr2-BVSVb7LX.js';
import { c as createDispatcher, a as createBitAttrs } from './events-C0RY9zfz.js';
import { C as Check } from './check-WB572iDI.js';
import './create-Q0paD_VI.js';
import 'tailwind-merge';
import 'tailwind-variants';
import 'zod';
import './exports-BGi7-Rnc.js';

const defaults = {
  disabled: false,
  required: false,
  name: void 0,
  value: "on",
  defaultChecked: false
};
function createCheckbox(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "checked", "defaultChecked"));
  const { disabled, name, required, value } = options;
  const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked);
  const checked = overridable(checkedWritable, withDefaults?.onCheckedChange);
  const root = makeElement("checkbox", {
    stores: [checked, disabled, required],
    returned: ([$checked, $disabled, $required]) => {
      return {
        "data-disabled": disabledAttr($disabled),
        disabled: disabledAttr($disabled),
        "data-state": $checked === "indeterminate" ? "indeterminate" : $checked ? "checked" : "unchecked",
        type: "button",
        role: "checkbox",
        "aria-checked": $checked === "indeterminate" ? "mixed" : $checked,
        "aria-required": $required
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
        if (e.key === kbd.ENTER)
          e.preventDefault();
      }), addMeltEventListener(node, "click", () => {
        if (disabled.get())
          return;
        checked.update((value2) => {
          if (value2 === "indeterminate")
            return true;
          return !value2;
        });
      }));
      return {
        destroy: unsub
      };
    }
  });
  const input = makeElement("checkbox-input", {
    stores: [checked, name, value, required, disabled],
    returned: ([$checked, $name, $value, $required, $disabled]) => {
      return {
        type: "checkbox",
        "aria-hidden": true,
        hidden: true,
        tabindex: -1,
        name: $name,
        value: $value,
        checked: $checked === "indeterminate" ? false : $checked,
        required: $required,
        disabled: disabledAttr($disabled),
        style: styleToString({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)"
        })
      };
    }
  });
  const isIndeterminate = derived(checked, ($checked) => $checked === "indeterminate");
  const isChecked = derived(checked, ($checked) => $checked === true);
  return {
    elements: {
      root,
      input
    },
    states: {
      checked
    },
    helpers: {
      isIndeterminate,
      isChecked
    },
    options
  };
}
function getCheckboxData() {
  const NAME = "checkbox";
  const PARTS = ["root", "input", "indicator"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getCheckboxData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const checkbox = { ...createCheckbox(removeUndefined(props)), getAttrs };
  setContext(NAME, checkbox);
  return {
    ...checkbox,
    updateOption: getOptionUpdater(checkbox.options)
  };
}
function getCtx() {
  const { NAME } = getCheckboxData();
  return getContext(NAME);
}
const Checkbox$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attrs;
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "checked",
    "disabled",
    "name",
    "required",
    "value",
    "onCheckedChange",
    "asChild",
    "el"
  ]);
  let $root, $$unsubscribe_root;
  let { checked = false } = $$props;
  let { disabled = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { required = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { onCheckedChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, states: { checked: localChecked }, updateOption, getAttrs } = setCtx({
    defaultChecked: checked,
    disabled,
    name,
    required,
    value,
    onCheckedChange: ({ next }) => {
      if (checked !== next) {
        onCheckedChange?.(next);
        checked = next;
      }
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  createDispatcher();
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.onCheckedChange === void 0 && $$bindings.onCheckedChange && onCheckedChange !== void 0) $$bindings.onCheckedChange(onCheckedChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  attrs = {
    ...getAttrs("root"),
    disabled: disabled ? true : void 0
  };
  checked !== void 0 && localChecked.set(checked);
  {
    updateOption("disabled", disabled);
  }
  {
    updateOption("name", name);
  }
  {
    updateOption("required", required);
  }
  {
    updateOption("value", value);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
function getStateAttr(state) {
  if (state === "indeterminate") return "indeterminate";
  if (state) return "checked";
  return "unchecked";
}
const Checkbox_indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attrs;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $checked, $$unsubscribe_checked;
  let $isChecked, $$unsubscribe_isChecked;
  let $isIndeterminate, $$unsubscribe_isIndeterminate;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { helpers: { isChecked, isIndeterminate }, states: { checked }, getAttrs } = getCtx();
  $$unsubscribe_isChecked = subscribe(isChecked, (value) => $isChecked = value);
  $$unsubscribe_isIndeterminate = subscribe(isIndeterminate, (value) => $isIndeterminate = value);
  $$unsubscribe_checked = subscribe(checked, (value) => $checked = value);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  attrs = {
    ...getAttrs("indicator"),
    "data-state": getStateAttr($checked)
  };
  $$unsubscribe_checked();
  $$unsubscribe_isChecked();
  $$unsubscribe_isIndeterminate();
  return `${asChild ? `${slots.default ? slots.default({
    attrs,
    isChecked: $isChecked,
    isIndeterminate: $isIndeterminate
  }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({
    attrs,
    isChecked: $isChecked,
    isIndeterminate: $isIndeterminate
  }) : ``}</div>`}`;
});
const Minus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "minus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "checked"]);
  let { class: className = void 0 } = $$props;
  let { checked = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Checkbox$1, "CheckboxPrimitive.Root").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cn("peer box-content h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[disabled=true]:opacity-50", className)
        },
        $$restProps,
        { checked }
      ),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Checkbox_indicator, "CheckboxPrimitive.Indicator").$$render(
            $$result,
            {
              class: cn("flex h-4 w-4 items-center justify-center text-current")
            },
            {},
            {
              default: ({ isChecked, isIndeterminate }) => {
                return `${isChecked ? `${validate_component(Check, "Check").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}` : `${isIndeterminate ? `${validate_component(Minus, "Minus").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}` : ``}`}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let members = [];
  let teamName = "";
  let transactionId = "";
  let screenshot = null;
  let leaderRiotId = "";
  let leaderDiscrodId = "";
  let name = "";
  let phone = "";
  let email = "";
  let riotId = "";
  let discordId = "";
  let collegeName = "";
  let substitute = false;
  let student = true;
  let saving = false;
  let teamNameError = "";
  let transactionIdError = "";
  let leaderRiotError = "";
  let leaderDiscordError = "";
  let collegeNameError = "";
  let nameError = "";
  let phoneError = "";
  let emailError = "";
  let discordError = "";
  let riotError = "";
  let genericError = "";
  let teamNameAvailable = null;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    nameError = GamerSchema.shape.name.safeParse(name).error?.format()._errors[0] || "";
    emailError = GamerSchema.shape.email.safeParse(email).error?.format()._errors[0] || "";
    phoneError = GamerSchema.shape.phone.safeParse(phone).error?.format()._errors[0] || "";
    teamNameError = TeamNameSchema.safeParse(teamName).error?.format()._errors[0] || "";
    transactionIdError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || "";
    riotError = RiotIdSchema.safeParse(riotId).error?.format()._errors[0] || "";
    discordError = DiscordIdSchema.safeParse(discordId).error?.format()._errors[0] || "";
    leaderRiotError = RiotIdSchema.safeParse(leaderRiotId).error?.format()._errors[0] || "";
    leaderDiscordError = DiscordIdSchema.safeParse(leaderDiscrodId).error?.format()._errors[0] || "";
    {
      student ? "" : collegeName = "";
    }
    collegeNameError = CollegeNameSchema.safeParse(collegeName).error?.format()._errors[0] || "";
    {
      members.forEach((member) => {
        if (member.email === email) {
          emailError = "Email already used";
        }
      });
    }
    $$rendered = `<section class="mb-10 grid w-full place-items-center"><div class="order-2 m-4 w-11/12 rounded-md border border-btn-main bg-valorant-bg p-8 text-white shadow-md shadow-btn-main" data-svelte-h="svelte-ewo37z"><div class="p-4 text-xs"><ul class="list-disc"><li>Add your team members here</li> <li>No need to add your details</li> <li>2 Substitute players (optional) &amp; 5 live players required</li> <li>None of the members should be leader or member of other Respawn Battle</li> <li>Any violation of terms &amp; conditions will lead to disqualification with no refunds</li></ul></div></div> <form class="order-2 my-4 w-11/12 rounded-md border border-btn-main bg-valorant-bg md:p-8 text-white shadow-md shadow-btn-main"><div class="grid grid-rows-[auto_1fr]"><div class="grid grid-rows-[auto_1fr] gl:grid-cols-2 gl:gap-0 gap-5"><div class="grid content-start gap-5 p-4"><h2 class="mb-1 font-valorant font-bold text-2xl gl:text-4xl" data-svelte-h="svelte-1xmlzrx">Brace for Impact</h2> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "team_name" }, {}, {
      default: () => {
        return `Team Name`;
      }
    })} <div class="flex w-full items-center space-x-2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        type: "text",
        id: "team_name",
        placeholder: "Team Name",
        class: "bg-transparent",
        value: teamName
      },
      {
        value: ($$value) => {
          teamName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "rounded-xl border-2 border-btn-main bg-btn-main"
      },
      {},
      {
        default: () => {
          return `Check`;
        }
      }
    )}</div> ${teamName !== "" ? `<p class="text-xs text-red-400">${escape(teamNameError)}</p> ${`${``}`}` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "transaction_id" }, {}, {
      default: () => {
        return `Transaction ID`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        required: true,
        type: "number",
        id: "transaction_id",
        placeholder: "UPI transaction ID",
        value: transactionId
      },
      {
        value: ($$value) => {
          transactionId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${transactionId !== "" ? `<p class="text-xs text-red-400">${escape(transactionIdError)}</p>` : ``}</div> <div data-svelte-h="svelte-1hdlbbx"><div><img src="/images/payment.png" class="w-4/6 m-auto my-2 text-sm md:w-1/2 lg:w-1/3" alt=""> <p class="text-center text-sm">rajagiricss@sbi</p></div></div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "screenshot" }, {}, {
      default: () => {
        return `Payment Screenshot`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "text-black",
        required: true,
        accept: ".jpg, .jpeg, .png",
        type: "file",
        id: "screenshot",
        placeholder: "Payment Screenshot"
      },
      {},
      {}
    )} ${``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "leader_riot_id" }, {}, {
      default: () => {
        return `Team Leader Riot ID`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "leader_riot_id",
        placeholder: "Leader Riot ID",
        class: "bg-transparent",
        value: leaderRiotId
      },
      {
        value: ($$value) => {
          leaderRiotId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${leaderRiotId !== "" ? `<p class="text-xs text-red-400">${escape(leaderRiotError)}</p>` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "leader_discord_id" }, {}, {
      default: () => {
        return `Team Leader Discord ID`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        id: "leader_discord_id",
        placeholder: "Leader Discord ID",
        value: leaderDiscrodId
      },
      {
        value: ($$value) => {
          leaderDiscrodId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${leaderDiscrodId !== "" ? `<p class="text-xs text-red-400">${escape(leaderDiscordError)}</p>` : ``}</div></div> <div class="grid gap-5 border-btn-main p-4 md:p-6 py-4 gl:border-l gl:border-t-0 border-t"><h2 class="mb-1 font-bold text-2xl font-valorant" data-svelte-h="svelte-5vmz60">Register your players</h2> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "member_name" }, {}, {
      default: () => {
        return `Name`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        name: "name",
        required: true,
        type: "text",
        id: "member_name",
        placeholder: "Member Name",
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${name !== "" ? `<p class="text-xs text-red-400">${escape(nameError)}</p>` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "member_phone" }, {}, {
      default: () => {
        return `Phone`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        name: "phone",
        required: true,
        type: "text",
        id: "member_phone",
        placeholder: "Member Phone",
        value: phone
      },
      {
        value: ($$value) => {
          phone = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${phone !== "" ? `<p class="text-xs text-red-400">${escape(phoneError)}</p>` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "member_email" }, {}, {
      default: () => {
        return `Email`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        name: "email",
        required: true,
        type: "email",
        id: "member_email",
        placeholder: "Member Email",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${email !== "" ? `<p class="text-xs text-red-400">${escape(emailError)}</p>` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "riot_id" }, {}, {
      default: () => {
        return `Member Riot ID`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        name: "riot_id",
        required: true,
        type: "text",
        id: "riot_id",
        placeholder: "Member Riot ID",
        value: riotId
      },
      {
        value: ($$value) => {
          riotId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${riotId !== "" ? `<p class="text-xs text-red-400">${escape(riotError)}</p>` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "discord_id" }, {}, {
      default: () => {
        return `Member Discord ID`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        name: "discord_id",
        required: true,
        type: "text",
        id: "discord_id",
        placeholder: "Member Discord ID",
        value: discordId
      },
      {
        value: ($$value) => {
          discordId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${discordId !== "" ? `<p class="text-xs text-red-400">${escape(discordError)}</p>` : ``} <a target="_blank" href="https://www.remote.tools/remote-work/how-to-find-discord-id" class="text-xs text-indigo-400 hover:underline" data-svelte-h="svelte-yvcoau">How to find your discord ID ?</a></div> <div class="items-top flex items-center space-x-2">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        disabled: members.filter((m) => m.substitute).length == 2,
        name: "substitute",
        id: "substitute",
        class: "bg-white",
        checked: substitute
      },
      {
        checked: ($$value) => {
          substitute = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="grid gap-1.5 leading-none">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "substitute",
        class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      },
      {},
      {
        default: () => {
          return `Substitute player`;
        }
      }
    )}</div></div> <div class="items-top flex items-center space-x-2">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        name: "student",
        id: "student",
        class: "bg-white",
        checked: student
      },
      {
        checked: ($$value) => {
          student = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="grid gap-1.5 leading-none">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "student",
        class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      },
      {},
      {
        default: () => {
          return `Student player`;
        }
      }
    )}</div></div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "college_name" }, {}, {
      default: () => {
        return `College Name`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "bg-transparent",
        name: "college_name",
        disabled: !student,
        required: true,
        type: "text",
        id: "college_name",
        placeholder: "College Name",
        value: collegeName
      },
      {
        value: ($$value) => {
          collegeName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${collegeName !== "" ? `<p class="text-xs text-red-400">${escape(collegeNameError)}</p>` : ``} <p class="text-xs my-2" data-svelte-h="svelte-4ty4ae">Please use full form as it will be used in your certificates.</p></div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "mt-8 w-full rounded-xl border-2 border-btn-main bg-btn-main",
        disabled: !(nameError == "" && phoneError == "" && emailError == "" && riotError == "" && discordError == "" && (student && collegeNameError == "" || !student)) || members.length == 6
      },
      {},
      {
        default: () => {
          return `Add`;
        }
      }
    )}</div></div> <div class="flex flex-col overflow-x-scroll p-4"><div>${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Table_caption, "Table.Caption").$$render($$result, {}, {}, {
          default: () => {
            return `<p class="text-red-400">${escape(genericError)}</p>`;
          }
        })} ${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `No`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Name`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Email`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Phone`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Riot ID`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Discord ID`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Substitute`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `College Name`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Remove`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(members, (member, i) => {
              return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(i + 1)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.name)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.email)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.phone)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.riotId)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.discordId)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.substitute ? "YES" : "NO")}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.college || "")}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: " text-red-400" }, {}, {
                    default: () => {
                      return `<button type="button" class="fa-solid fa-user-xmark rounded-full p-3 hover:bg-slate-200"></button> `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "mt-8 w-full rounded-xl border-2 border-btn-main bg-btn-main",
        disabled: members.length < 4 || members.length > 6 || members.filter((m) => m.substitute).length > 2 || !teamNameAvailable || saving || screenshot === null || transactionIdError || !(leaderRiotError == "" && leaderDiscordError == "")
      },
      {},
      {
        default: () => {
          return `${`<span data-svelte-h="svelte-l126tb">Save</span>`}`;
        }
      }
    )}</div></div></form></section>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B0xjTKk7.js.map
