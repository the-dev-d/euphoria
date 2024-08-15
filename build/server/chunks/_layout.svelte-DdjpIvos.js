import { c as create_ssr_component, v as validate_component, e as each, a as escape } from './ssr-BPpBco92.js';

const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { authenticated = false } = $$props;
  if ($$props.authenticated === void 0 && $$bindings.authenticated && authenticated !== void 0) $$bindings.authenticated(authenticated);
  return `<header class="sticky top-0 z-40 h-[10svh] max-h-[5svh] w-full bg-primary-dark gl:max-h-[10svh] gl:px-4" data-svelte-h="svelte-1r59q76"><nav class="flex h-full w-full items-center justify-between md:px-6"><div class="relative flex h-full w-fit items-center justify-center gap-3 gl:py-2"><div class="relative h-full w-fit p-1"><img src="/favicon.png" alt="Logo" class="aspect-square h-full object-contain"></div> <div class="relative flex items-center justify-start font-valorant text-xl sm:text-2xl gl:text-2xl"><a href="/">EUPHORIA&#39;24</a></div></div> <ul class="relative flex w-fit items-center justify-end gap-2 px-3 font-valorant text-sm uppercase sm:gap-3 sm:text-xl md:gap-5 gl:justify-start gl:gap-6"> </ul></nav> </header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const events = [
    {
      name: "UG CODING",
      coordinator: {
        name: "Dhaivath Lal",
        email: "mca2316@rajagri.edu",
        phone: "+91 9074768353"
      }
    },
    {
      name: "PG CODING",
      coordinator: {
        name: "Gracen K Shaji",
        email: "mca2319@rajagiri.edu",
        phone: "+91 7736705727"
      }
    },
    {
      name: "TREASURE HUNT",
      coordinator: {
        name: "Albin Joseph",
        email: "mca2305@rajagiri.edu",
        phone: "+91 920791308"
      }
    },
    {
      name: "RESPAWN",
      coordinator: {
        name: "Ivin Varghese George",
        email: "msccs2314@rajagiri.edu",
        phone: "+91 8078982842"
      }
    },
    {
      name: "WEB DESIGNING",
      coordinator: {
        name: "Hrishikesh U",
        email: "mca2323@rajagiri.edu",
        phone: "+91 9544360991"
      }
    }
  ];
  const coordinators = [
    {
      name: "FACULTY COORDINATOR",
      coordinator: {
        name: "Diljith K Benny",
        email: "diljith@rajagri.edu",
        phone: "+91 9567738713"
      }
    },
    {
      name: "STUDENT COORDINATOR",
      coordinator: {
        name: "Leo Thomas",
        email: "mca2329@rajagiri.edu",
        phone: "+91 9526438400"
      }
    },
    {
      name: "STUDENT COORDINATOR",
      coordinator: {
        name: "Krishnapriya KJ",
        email: "msccs2320@rajagiri.edu",
        phone: "+91 9562058307"
      }
    }
  ];
  return `<footer id="contact" class="relative bg-[#08072C] px-4 py-8 font-roboto text-white mt-5"><div class="gl:mx-8"><div class="mb-8 flex flex-col items-start justify-between gap-8 lg:flex-row"><div class="w-full lg:w-1/4" data-svelte-h="svelte-oa4jx"><h2 class="mb-2 font-fugaz text-2xl text-[#FD1C68]">EUPHORIA&#39;24</h2> <p class="font-Ubuntu mb-4 text-sm">Celebrating innovation and technology</p> <div class="mb-4 flex space-x-4"><a href="https://www.facebook.com/profile.php?id=61563435161368" class="text-white transition-colors duration-300 hover:text-[#FD1C68]"><i class="fab fa-facebook-f"></i></a> <a href="https://www.instagram.com/euphoria_.24._?igsh=MThqazkxbHYydTd3aA==" class="text-white transition-colors duration-300 hover:text-[#FD1C68]"><i class="fab fa-instagram"></i></a> <a href="http://linkedin.com/company/euphoria-24" class="text-white transition-colors duration-300 hover:text-[#FD1C68]"><i class="fab fa-linkedin-in"></i></a></div> <div class="w-full"><h3 class="mb-4 text-lg font-semibold">Event Location</h3> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5585722353653!2d76.31302237507876!3d10.053237090054912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dd2c4bfaed9%3A0x616d1c1cb927fe62!2sRajagiri%20College%20of%20Social%20Sciences%20(Autonomous)!5e0!3m2!1sen!2sin!4v1721826098545!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Event Location"></iframe></div></div> <div class="grid w-full gap-4"><div class="w-full"><div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">${each(coordinators, (event) => {
    return `<div class="rounded-lg bg-[#110F3D] p-4"><h4 class="mb-2 font-fugaz text-[#FD1C68]">${escape(event.name)}</h4> <p class="font-Ubuntu mb-1 text-sm">${escape(event.coordinator.name)}</p> <a href="${"mailto:" + escape(event.coordinator.email, true)}" class="font-Ubuntu mb-1 block text-sm hover:text-[#FD1C68]"><i class="fas fa-envelope mr-2"></i>${escape(event.coordinator.email)}</a> <a href="${"tel:" + escape(event.coordinator.phone, true)}" class="font-Ubuntu block text-sm hover:text-[#FD1C68]"><i class="fas fa-phone mr-2"></i>${escape(event.coordinator.phone)}</a> </div>`;
  })}</div></div> <div class="w-full"><h3 class="mb-4 mt-5 text-lg font-semibold gl:mt-0" data-svelte-h="svelte-mczc6w">Event Coordinators</h3> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">${each(events, (event) => {
    return `<div class="rounded-lg bg-[#110F3D] p-4"><h4 class="mb-2 font-fugaz text-[#FD1C68]">${escape(event.name)}</h4> <p class="font-Ubuntu mb-1 text-sm">${escape(event.coordinator.name)}</p> <a href="${"mailto:" + escape(event.coordinator.email, true)}" class="font-Ubuntu mb-1 block text-sm hover:text-[#FD1C68]"><i class="fas fa-envelope mr-2"></i>${escape(event.coordinator.email)}</a> <a href="${"tel:" + escape(event.coordinator.phone, true)}" class="font-Ubuntu block text-sm hover:text-[#FD1C68]"><i class="fas fa-phone mr-2"></i>${escape(event.coordinator.phone)}</a> </div>`;
  })}</div></div></div></div> <div class="flex flex-col items-center justify-between border-t border-gray-700 pt-4 md:flex-row" data-svelte-h="svelte-zz519"><p class="mb-4 text-sm md:mb-0">© 2024 EUPHORIA. All Rights Reserved.</p> <div class="flex space-x-4"> <a href="https://rajagiri.edu/" class="text-sm transition-colors duration-300 hover:text-[#FD1C68]">Rajagiri College of Social Sciences (Autonomous )</a></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex flex-col min-w-[360px] w-full text-sm sm:tesxt-base md:text-xl min-h-screen">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <main class="flex flex-col flex-1 mb-9">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DdjpIvos.js.map
