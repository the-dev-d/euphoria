import { c as create_ssr_component, d as escape, e as each, l as add_attribute, v as validate_component } from './ssr-Diu9wf_y.js';
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
  return `<main class="container mx-auto"><div><h2 data-svelte-h="svelte-25g0ql">Participant</h2> <ul><li><span class="capitalize" data-svelte-h="svelte-1e6v6gc">name :</span> <span>${escape(data.participant.name)}</span></li> <li><span class="capitalize" data-svelte-h="svelte-1y57dix">email :</span> <span>${escape(data.participant.email)}</span></li> <li><span class="capitalize" data-svelte-h="svelte-o7i1e8">college :</span> <span>${escape(data.participant.college)}</span></li> <li><span class="capitalize" data-svelte-h="svelte-ssw651">phone :</span> <span>${escape(data.participant.phone)}</span></li> <li><span class="capitalize" data-svelte-h="svelte-1hhpnsa">entry left :</span> <span>${escape(data.participation.filter((p) => !p.used).length)}/${escape(data.participation.length)}</span></li></ul></div> <div class="mt-6"><h3 data-svelte-h="svelte-1szbcke">Participations</h3> ${each(data.participation, (p) => {
    return `<form class="border p-3 rounded-md shadow-sm flex items-center justify-between" action="?/complete" method="post"><input type="hidden" name="participation"${add_attribute("value", p.event_participant_id, 0)}> <div class="flex gap-6"><div><span data-svelte-h="svelte-8m7c80">Event :</span> <span>${escape(p.event_code)}</span></div> ${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(p.verified ? "verified" : "verification pending")} `;
      }
    })}</div> ${p.used ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `Used`;
      }
    })}` : `${validate_component(Button, "Button").$$render($$result, { type: "submit", disabled: !p.verified }, {}, {
      default: () => {
        return `Mark as used
                    `;
      }
    })}`} </form>`;
  })}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B9keLHvp.js.map
