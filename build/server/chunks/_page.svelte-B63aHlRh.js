import { c as create_ssr_component, v as validate_component, a as escape } from './ssr-BPpBco92.js';
import { I as Input } from './input-Dne7LwgS.js';
import { B as Button } from './index3-B3GebGGx.js';
import 'clsx';
import 'tailwind-merge';
import 'tailwind-variants';
import './index4-BsPMz3xn.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<main class="w-full h-screen flex items-center justify-center"><div class="w-[800px] h-[400px] m-2 flex bg-[#1E1E1E] rounded-md overflow-hidden shadow-md border border-emerald-500"><div class="w-full p-8 flex flex-col justify-center"><form method="POST" class="w-full"><h1 class="text-3xl text-center font-anton mb-8 text-white" data-svelte-h="svelte-jvsd1m">ADMIN LOGIN</h1> <div class="space-y-4">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "username",
      class: "w-full border-none text-white placeholder-roboto",
      style: "background-color: rgba(60, 72, 81, 0.3);",
      placeholder: "Username"
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "password",
      type: "password",
      class: "w-full bg-[#2C3E50] border-none text-white placeholder-roboto",
      style: "background-color: rgba(60, 72, 81, 0.3);",
      placeholder: "Password"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      class: "w-full bg-emerald-500 hover:bg-emerald-300 text-white py-2 "
    },
    {},
    {
      default: () => {
        return `LOGIN`;
      }
    }
  )} </div> <div class="mt-3">${form && !form.success && form.message ? `<p class="text-sm text-red-400">${escape(form.message)}</p>` : ``}</div></form></div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B63aHlRh.js.map
