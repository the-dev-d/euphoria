import { c as create_ssr_component, d as escape, e as each } from './ssr-Diu9wf_y.js';
import { b as base } from './paths-CYDIOyak.js';
import './qrcode-CLsQYWL4.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(base);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<main class="my-24 text-base"><div class="container grid gap-3 mx-auto md:grid-cols-2"><div class="grid gap-4 h-fit"><div><span data-svelte-h="svelte-m2peuz">Name:</span> ${escape(data.participant.name)}</div> <div><span data-svelte-h="svelte-1kdvsf">College:</span> ${escape(data.participant.college)}</div> <div><span data-svelte-h="svelte-gq3kxk">Phone:</span> ${escape(data.participant.phone)}</div> <div><span data-svelte-h="svelte-1s4kc5o">Email:</span> ${escape(data.participant.email)}</div></div> <div><div class="container max-w-96"> ${each(data.verified, (verified) => {
    return `<svg></svg>`;
  })}</div></div></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D4ZjC-om.js.map
