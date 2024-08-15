import { c as create_ssr_component, a as escape, e as each, k as add_attribute } from './ssr-BPpBco92.js';
import './index5-4H_RKGxQ.js';
import 'tailwind-variants';
import 'clsx';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const assets = {
    CUG: "coding.gif",
    CPG: "coding.gif",
    TH: "th.gif",
    WEB: "web.gif",
    RP: "gaming.gif"
  };
  const names = {
    CUG: "Coding UG",
    CPG: "Coding PG",
    WEB: "Web Designing",
    TH: "Treasure Hunt",
    RP: "Respawn"
  };
  const urls = {
    CUG: "/solo",
    CPG: "/solo",
    WEB: "/solo",
    TH: "/team/treasurehunt",
    RP: "/team/respawn"
  };
  const participated = data.events.map((e) => e.event_code);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="mb-10 mt-20 min-h-[80svh] w-full text-white px-5"><div class="mx-auto gl:mx-12 grid gap-2 relative"><div class="flex h-fit mb-5 justify-between">${data.user ? `<h2 class="font-fugaz text-viper text-4xl gl:text-6xl uppercase">Welcome ${escape(data.user.name)} !</h2> <form method="POST" action="?/logout" data-svelte-h="svelte-1lew3an"><button class="fa-solid fa-right-from-bracket my-auto ml-6 scale-105 hover:bg-slate-500 p-3 rounded-full border" type="submit"></button></form>` : ``}</div> <div><h2 class="mb-10 mt-14 w-full font-Ubuntu text-2xl gl:text-4xl uppercase" data-svelte-h="svelte-1579an6">Registered Events</h2> <div class="grid grid-cols-2 gap-3 md:grid-cols-4 gl:grid-cols-6">${each(data.events, (event) => {
    return `<div class="transition-all shadow-white">${event.verified ? `<a href="profile"><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400"><div class="w-full text-center uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold"><span>${escape(names[event.event_code])} </span></div> <div class="bottom-0 absolute m-1 text-xs bg-green-600 border p-0 md:p-1 px-3 rounded-full" data-svelte-h="svelte-1p8kzpo"><span>Verified</span></div> <img class="absolute top-0 left-0 w-full h-full brightness-50 z-10"${add_attribute("src", "/images/covers/" + assets[event.event_code], 0)}${add_attribute("alt", event.event_code, 0)}></div> </a>` : `<div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400"><div class="w-full text-center uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold"><span>${escape(names[event.event_code])} </span></div> <div class="bottom-0 absolute m-1 text-xs border-yellow-600 border md:p-1 p-0 px-3 rounded-full" data-svelte-h="svelte-e2muwz"><span>Verification Pending</span></div> <img class="absolute top-0 left-0 w-full h-full brightness-50 z-10"${add_attribute("src", "/images/covers/" + assets[event.event_code], 0)}${add_attribute("alt", event.event_code, 0)}> </div>`} </div>`;
  })} ${!data.events || data.events.length == 0 ? `<p class="text-sm opacity-70" data-svelte-h="svelte-1jqea3m">No events yet</p>` : ``}</div> <ul class="my-8 text-base list-disc font-sans" data-svelte-h="svelte-1vje2cs"><li>Verifications will start from <span class="text-xl">10th Aug </span>. Your registration will be verified within 5-6 working days after registration.</li> <li class="text-destructive">Participation in parallel events is not allowed.</li></ul></div> <div class="mb-16"><h2 class="mb-10 mt-20 w-full font-Ubuntu text-2xl gl:text-4xl uppercase" data-svelte-h="svelte-1hqa4du">Other Events</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-3 gl:grid-cols-6">${each(Object.keys(names), (key) => {
    return `${!participated.includes(key) ? `<a class="hover:scale-105 transition-all shadow-white"${add_attribute("href", "/events" + urls[key], 0)}><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400"><div class="w-full uppercase text-center h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold"><span>${escape(names[key])}</span></div> <img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src="${"/images/covers/" + escape(assets[key], true)}"${add_attribute("alt", key, 0)}> </div></a>` : ``}`;
  })}</div></div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6msvUS8d.js.map
