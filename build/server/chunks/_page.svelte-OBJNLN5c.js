import { c as create_ssr_component, v as validate_component, d as escape } from './ssr-Diu9wf_y.js';
import { B as Button } from './index3-Dowwk4Sl.js';
import 'clsx';
import { I as Input } from './input-PCpax9Gz.js';
import { L as Label } from './label-DaPESR9e.js';
import { a as TransactionSchema } from './types-nSWFzZyp.js';
import 'tailwind-merge';
import 'tailwind-variants';
import './ssr2-BVSVb7LX.js';
import './create-Q0paD_VI.js';
import './events-C0RY9zfz.js';
import 'zod';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileError = "";
  let transactionError = "";
  let transactionId = "";
  let event = "";
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    transactionError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || "";
    {
      console.log(transactionId);
    }
    $$rendered = `<main class="grid h-[88svh] w-full place-items-center px-5 gl:px-0"><form method="POST" class="md-px-0 grid w-full gap-6 rounded-xl border-2 border-btn-main bg-valorant-bg p-8 text-white shadow-md shadow-btn-main lg:w-1/3" enctype="multipart/form-data"><div class="grid lg:grid-cols-2 items-center gap-6"><div class="grid gap-6"><div class="flex items-center space-x-2"><input type="radio" name="event" id="codingUG" value="cug" aria-labelledby="coding-ug"${""}> ${validate_component(Label, "Label").$$render(
      $$result,
      {
        id: "coding-ug",
        for: "codingUG",
        class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      },
      {},
      {
        default: () => {
          return `Coding (UG)`;
        }
      }
    )}</div> <div class="flex items-center space-x-2"><input type="radio" name="event" id="codingPG" value="cpg" aria-labelledby="coding-pg"${""}> ${validate_component(Label, "Label").$$render(
      $$result,
      {
        id: "coding-pg",
        for: "codingPG",
        class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      },
      {},
      {
        default: () => {
          return `Coding (PG)`;
        }
      }
    )}</div> <div class="flex items-center space-x-2"><input type="radio" name="event" id="webDesigning" value="web" aria-labelledby="web_designing"${""}> ${validate_component(Label, "Label").$$render(
      $$result,
      {
        id: "web_designing",
        for: "webDesigning",
        class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      },
      {},
      {
        default: () => {
          return `Web Designing`;
        }
      }
    )}</div></div> <div class="grid" data-svelte-h="svelte-1t0jhbu"><img src="/images/payment.png" class="w-4/6 m-auto my-2 text-sm md:w-3/5" alt=""> <p class="text-center text-sm">rajagiricss@sbi</p></div></div> <div data-svelte-h="svelte-n06dhe"><h2 class="text-lg font-bold text-green-500">Amount Payable</h2> <h1 class="my-1 text-2xl font-semibold">Rs.150/-</h1></div> <div class="mt-4 grid gap-4 text-white"><div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Payment Screenshot`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        accept: ".jpg, .jpeg, .png",
        type: "file",
        name: "payment-screenshot",
        placeholder: "email",
        class: "max-w-xs bg-transparent text-white"
      },
      {},
      {}
    )} <p class="my-1 text-sm text-red-400">${escape(fileError)}</p></div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `UPI transaction id`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        type: "number",
        name: "upi-transaction-id",
        placeholder: "UPI Transaction id",
        class: "max-w-xs bg-transparent",
        value: transactionId
      },
      {
        value: ($$value) => {
          transactionId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${transactionId !== "" ? `<p class="mt-2 text-xs text-red-400">${escape(transactionError)}</p>` : ``}</div></div> ${form && !form.success ? `<p class="my-1 text-sm text-red-400">${escape(form.message)}</p>` : `${form ? `<p class="my-1 text-sm text-green-500">${escape(form.message)}</p>` : ``}`} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: !event,
        class: " rounded-xl border-2 border-btn-main bg-btn-main",
        type: "submit"
      },
      {},
      {
        default: () => {
          return `Register`;
        }
      }
    )}</form></main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-OBJNLN5c.js.map
