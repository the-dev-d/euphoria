import { c as create_ssr_component, v as validate_component, d as escape } from './ssr-Diu9wf_y.js';
import { I as Input } from './input-PCpax9Gz.js';
import { B as Button } from './index3-Dowwk4Sl.js';
import 'clsx';
import 'tailwind-merge';
import 'tailwind-variants';
import './ssr2-BVSVb7LX.js';

const css = {
  code: ".image-logo.svelte-nfbg89,.image-typeface.svelte-nfbg89{transform:scale(0.8)}.spacing.svelte-nfbg89{margin-bottom:-45px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Input } from \\"$lib/shardcn/ui/input/index\\";\\nimport { Label } from \\"$lib/shardcn/ui/label/index\\";\\nimport { Button } from \\"$lib/shardcn/ui/button/index\\";\\nexport let form;\\n<\/script>\\n\\n<main class=\\"w-full h-screen flex items-center justify-center\\">\\n    <div class=\\"w-[800px] h-[400px] m-2 flex bg-[#1E1E1E] rounded-md overflow-hidden  shadow-md border border-[#3BE4C4]\\" >\\n        <div class=\\"w-full md:w-1/2 p-8 flex flex-col justify-center\\">\\n            <form method=\\"POST\\" class=\\"w-full\\">\\n                <h1 class=\\"text-3xl text-center font-anton mb-8 text-white\\">LOGIN</h1>\\n                <div class=\\"space-y-4\\">\\n                    <Input name=\\"email\\" class=\\"w-full border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\"placeholder=\\"E-MAIL\\" />\\n                    <Input name=\\"password\\" type=\\"password\\" class=\\"w-full bg-[#2C3E50] border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\" placeholder=\\"PASSWORD\\" />\\n                    <Button type=\\"submit\\" class=\\"w-full bg-[#3BE4C4] hover:bg-[#33D1B3] text-white py-2 \\">LOGIN</Button>\\n                    <!-- <Button type=\\"button\\" class=\\"w-full bg-transparent border border-[#3BE4C4] text-[#3BE4C4] hover:bg-[#3BE4C4] hover:text-white py-2 focus:ring-opacity-50\\">REGISTER</Button> -->\\n                </div>\\n                <div class=\\"mt-3\\">\\n                    {#if form && !form.success && form.message}\\n                        <p class=\\"text-sm text-red-400\\">{form.message}</p>\\n                    {/if}\\n                </div>\\n            </form>\\n        </div>\\n        <div class=\\"w-0 md:w-1/2 bg-[#0F2027] flex flex-col items-center justify-center\\" style=\\"background-image: url('/images/forms/fggaming.jpg'); background-size: cover; background-position: center;\\">\\n            \\n            <img \\n            src=\\"/images/forms/Logoc.png\\" \\n            alt=\\"Logo\\" \\n            class=\\"image-logo spacing w-80 h-auto\\" \\n            style=\\"max-width: 100%; height: auto;\\"\\n          />\\n          <img \\n            src=\\"/images/forms/Typeface.png\\" \\n            alt=\\"Typeface\\" \\n            class=\\"image-typeface w-50 h-auto\\" \\n            style=\\"max-width: 100%; height: auto;\\"\\n          />\\n    </div>\\n</div>\\n</main>\\n\\n<style>\\n    .background {\\n      background-image: url('/images/forms/fbgarcade.jpg');\\n      background-size: cover;\\n      background-position: center;\\n    }\\n    .image-logo,\\n    .image-typeface {\\n      transform: scale(0.8);\\n    }\\n    .spacing {\\n      margin-bottom: -45px; /* Adds 20px distance between images */\\n    }\\n  </style>\\n"],"names":[],"mappings":"AAgDI,yBAAW,CACX,6BAAgB,CACd,SAAS,CAAE,MAAM,GAAG,CACtB,CACA,sBAAS,CACP,aAAa,CAAE,KACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  $$result.css.add(css);
  return `<main class="w-full h-screen flex items-center justify-center"><div class="w-[800px] h-[400px] m-2 flex bg-[#1E1E1E] rounded-md overflow-hidden shadow-md border border-[#3BE4C4]"><div class="w-full md:w-1/2 p-8 flex flex-col justify-center"><form method="POST" class="w-full"><h1 class="text-3xl text-center font-anton mb-8 text-white" data-svelte-h="svelte-1dik293">LOGIN</h1> <div class="space-y-4">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "email",
      class: "w-full border-none text-white placeholder-roboto",
      style: "background-color: rgba(60, 72, 81, 0.3);",
      placeholder: "E-MAIL"
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
      placeholder: "PASSWORD"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      class: "w-full bg-[#3BE4C4] hover:bg-[#33D1B3] text-white py-2 "
    },
    {},
    {
      default: () => {
        return `LOGIN`;
      }
    }
  )} </div> <div class="mt-3">${form && !form.success && form.message ? `<p class="text-sm text-red-400">${escape(form.message)}</p>` : ``}</div></form></div> <div class="w-0 md:w-1/2 bg-[#0F2027] flex flex-col items-center justify-center" style="background-image: url('/images/forms/fggaming.jpg'); background-size: cover; background-position: center;" data-svelte-h="svelte-1e32sh0"><img src="/images/forms/Logoc.png" alt="Logo" class="image-logo spacing w-80 h-auto svelte-nfbg89" style="max-width: 100%; height: auto;"> <img src="/images/forms/Typeface.png" alt="Typeface" class="image-typeface w-50 h-auto svelte-nfbg89" style="max-width: 100%; height: auto;"></div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bmhd6tmf.js.map
