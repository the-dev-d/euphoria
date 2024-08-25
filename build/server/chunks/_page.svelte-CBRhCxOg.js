import { c as create_ssr_component, d as escape, v as validate_component, l as add_attribute } from './ssr-Diu9wf_y.js';
import { B as Button } from './index3-Dowwk4Sl.js';
import './index7-Dvo7XaLg.js';
import { B as Badge } from './badge-lwfzRdxY.js';
import 'clsx';
import 'tailwind-merge';
import 'tailwind-variants';
import './ssr2-BVSVb7LX.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<main class="container mx-auto"><div><h2 data-svelte-h="svelte-25g0ql">Participant</h2> <ul><li><span class="capitalize" data-svelte-h="svelte-1e6v6gc">name :</span> <span>${escape(data.viewer.name)}</span></li> <li><span class="capitalize" data-svelte-h="svelte-1y57dix">email :</span> <span>${escape(data.viewer.email)}</span></li> <li><span class="capitalize" data-svelte-h="svelte-ssw651">phone :</span> <span>${escape(data.viewer.phone)}</span></li> <li><span class="capitalize" data-svelte-h="svelte-wfmw60">Ticket for :</span> ${escape(data.ticket.count)} <span></span></li> <li><span class="capitalize">${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(data.ticket.verified ? "Verified" : "Verification Pending")}`;
    }
  })}</span></li></ul> <form class="my-6" action="?/complete" method="post"><input type="hidden" name="uuid"${add_attribute("value", data.uuid, 0)}> ${data.ticket.used ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
    default: () => {
      return `Used`;
    }
  })}` : `${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      disabled: !data.ticket.verified
    },
    {},
    {
      default: () => {
        return `Mark as used`;
      }
    }
  )}`}</form></div> <div class="mt-6" data-svelte-h="svelte-9k4kdu"> </div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CBRhCxOg.js.map
