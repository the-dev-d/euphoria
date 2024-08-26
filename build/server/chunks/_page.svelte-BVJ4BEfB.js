import { c as create_ssr_component, v as validate_component, d as escape } from './ssr-Diu9wf_y.js';
import { I as Input } from './input-PCpax9Gz.js';
import { L as Label } from './label-DaPESR9e.js';
import { B as Button } from './index3-Dowwk4Sl.js';
import { C as ContestantSchema } from './types-nSWFzZyp.js';
import './create-Q0paD_VI.js';
import './events-C0RY9zfz.js';
import 'clsx';
import 'tailwind-merge';
import 'tailwind-variants';
import './ssr2-BVSVb7LX.js';
import 'zod';

const css = {
  code: ".image-logo.svelte-fo2ykd,.image-typeface.svelte-fo2ykd{filter:brightness(0) invert(1)}.spacing.svelte-fo2ykd{margin-bottom:18px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Input } from \\"$lib/shardcn/ui/input/index\\";\\nimport { Label } from \\"$lib/shardcn/ui/label/index\\";\\nimport { Button } from \\"$lib/shardcn/ui/button/index\\";\\nimport { ContestantSchema } from \\"$lib/zod/types\\";\\nimport { onMount } from \\"svelte\\";\\nlet name = \\"\\";\\nlet email = \\"\\";\\nlet password = \\"\\";\\nlet phone = \\"\\";\\nlet confirmPassword = \\"\\";\\nlet college = \\"\\";\\nlet nameError = \\"\\";\\nlet emailError = \\"\\";\\nlet passwordError = \\"\\";\\nlet phoneError = \\"\\";\\nlet collegeError = \\"\\";\\nexport let form;\\n$: {\\n  nameError = form?.error?.name?._errors[0];\\n  emailError = form?.error?.email?._errors[0];\\n  phoneError = form?.error?.phone?._errors[0];\\n  passwordError = form?.error?.password?._errors[0];\\n  collegeError = form?.error?.college?._errors[0];\\n}\\n$: {\\n  nameError = ContestantSchema.shape.name.safeParse(name).error?.format()._errors[0];\\n  emailError = ContestantSchema.shape.email.safeParse(email).error?.format()._errors[0];\\n  passwordError = ContestantSchema.shape.password.safeParse(password).error?.format()._errors[0];\\n  phoneError = ContestantSchema.shape.phone.safeParse(phone).error?.format()._errors[0];\\n  collegeError = ContestantSchema.shape.college.safeParse(college).error?.format()._errors[0];\\n}\\nonMount(() => {\\n});\\n<\/script>\\n\\n\\n<main class=\\"w-full h-screen  flex items-center justify-center\\">\\n    <div class=\\"w-[800px] h-[auto] flex bg-[#1E1E1E] rounded-md overflow-hidden shadow-md border border-[#3BE4C4] m-3\\">\\n        <div class=\\" w-full md:w-1/2 p-8 flex flex-col justify-center\\">\\n            <form method=\\"POST\\" class=\\"w-full space-y-4\\"> <!-- Added space-y-4 for vertical spacing -->\\n                <h1 class=\\"text-3xl text-center font-anton mb-8 text-white\\">REGISTRATION</h1>\\n                <div class=\\"flex flex-col gap-2\\">\\n                    <Label for=\\"name\\">Name</Label>\\n                    <Input required name=\\"name\\" type=\\"text\\" bind:value={name} id=\\"name\\" placeholder=\\"Enter your name\\" class=\\"w-full border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\"/>\\n                    {#if name && nameError}\\n                        <p class=\\"text-red-400 text-xs\\">{nameError}</p>\\n                    {/if}\\n                </div>\\n                <div class=\\"flex flex-col gap-2\\">\\n                    <Label for=\\"college\\">College Name </Label>\\n                    <Input required name=\\"college\\" type=\\"text\\" bind:value={college} id=\\"college\\" placeholder=\\"Enter your college\\" class=\\"w-full border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\"/>\\n                    {#if college && collegeError}\\n                        <p class=\\"text-red-400 text-xs\\">{collegeError}</p>\\n                    {/if}\\n                    <p class=\\"text-xs my-2\\">Please use full form as it will be used in your certificates.</p>\\n                </div>\\n                <div class=\\"flex flex-col gap-2\\">\\n                    <Label for=\\"email\\">Email</Label>\\n                    <Input required name=\\"email\\" type=\\"email\\" id=\\"email\\" bind:value={email} placeholder=\\"Enter your email address\\" class=\\"w-full border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\"/>\\n                    {#if email && emailError}\\n                        <p class=\\"text-red-400 text-xs\\">{emailError}</p>\\n                    {/if}\\n                </div>\\n                <div class=\\"flex flex-col gap-2\\">\\n                    <Label for=\\"phone\\">Phone</Label>\\n                    <div class=\\"flex items-center gap-3\\">\\n                        <span class=\\"text-sm\\">+91</span>\\n                        <Input required name=\\"phone\\" type=\\"phone\\" id=\\"phone\\" bind:value={phone} placeholder=\\"Enter your phone number\\" class=\\"w-full border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\"/>\\n                    </div>\\n                    {#if phone && phoneError}\\n                        <p class=\\"text-red-400 text-xs\\">{phoneError}</p>\\n                    {/if}\\n                </div>\\n                <div class=\\"flex flex-col gap-2\\">\\n                    <Label for=\\"password\\">Password</Label>\\n                    <Input required name=\\"password\\" type=\\"password\\" id=\\"password\\" bind:value={password} placeholder=\\"Enter your password\\" class=\\"w-full border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\"/>\\n                    {#if password && passwordError}\\n                        <p class=\\"text-red-400 text-xs\\">{passwordError}</p>\\n                    {/if}\\n                </div>\\n                <div class=\\"flex flex-col gap-2\\">\\n                    <Label for=\\"confirm_password\\">Confirm Password</Label>\\n                    <Input required name=\\"confirm_password\\" type=\\"password\\" id=\\"confirm_password\\" bind:value={confirmPassword} placeholder=\\"Confirm Password\\" class=\\"w-full border-none text-white placeholder-roboto\\" style=\\"background-color: rgba(60, 72, 81, 0.3);\\"/>\\n                    {#if confirmPassword && confirmPassword !== password}\\n                        <p class=\\"text-red-400 text-xs\\">Password does not match</p>\\n                    {/if}\\n                </div>\\n                <div class=\\"flex flex-col gap-2\\">\\n                    <Button  class=\\" bg-[#3BE4C4]\\" disabled={(nameError != undefined || emailError != undefined || phoneError != undefined || passwordError != undefined || password !== confirmPassword)} type=\\"submit\\">Register</Button>\\n                    <p class=\\"text-sm flex gap-3 mt-2\\"><span>Already Registered? </span> <a href=\\"/login\\" class=\\"text-[#3BE4C4]\\">Login</a> </p>\\n                </div>\\n                {#if form?.success}\\n                    <p class=\\"text-sm text-green-500\\">Registration successfull</p>\\n                {:else if form && !form.success && form.message}\\n                    <p class=\\"text-sm text-red-400 my-2\\">{form.message}</p>\\n            {/if}\\n            </form>\\n        </div>\\n        <div class=\\"w-1/2 hidden bg-[#0F2027] md:flex flex-col items-center justify-center bg-cover bg-center\\" style=\\"background-image: url('/images/forms/fbgarcade.jpg');\\">\\n            <img \\n            src=\\"/images/forms/logoeuph.png\\" \\n            alt=\\"Logo\\" \\n            class=\\"image-logo spacing w-80 h-auto\\" \\n            style=\\"max-width: 100%; height: auto;\\"\\n          />\\n          <img \\n            src=\\"/images/forms/Typeface.png\\" \\n            alt=\\"Typeface\\" \\n            class=\\"image-typeface w50 h-auto\\" \\n            style=\\"max-width: 100%; height: auto;\\"\\n          />\\n        </div>\\n    </div>\\n</main>\\n<style>\\n    .background {\\n      background-image: url('/images/forms/fbgarcade.jpg');\\n      background-size: cover;\\n      background-position: center;\\n    }\\n    .image-logo,\\n    .image-typeface {\\n      filter: brightness(0) invert(1); /* Makes the image white */\\n    }\\n    .spacing {\\n      margin-bottom: 18px; /* Adds 20px distance between images */\\n    }\\n  </style>"],"names":[],"mappings":"AAwHI,yBAAW,CACX,6BAAgB,CACd,MAAM,CAAE,WAAW,CAAC,CAAC,CAAC,OAAO,CAAC,CAChC,CACA,sBAAS,CACP,aAAa,CAAE,IACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  let password = "";
  let phone = "";
  let confirmPassword = "";
  let college = "";
  let nameError = "";
  let emailError = "";
  let passwordError = "";
  let phoneError = "";
  let collegeError = "";
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        nameError = form?.error?.name?._errors[0];
        emailError = form?.error?.email?._errors[0];
        phoneError = form?.error?.phone?._errors[0];
        passwordError = form?.error?.password?._errors[0];
        collegeError = form?.error?.college?._errors[0];
      }
    }
    {
      {
        nameError = ContestantSchema.shape.name.safeParse(name).error?.format()._errors[0];
        emailError = ContestantSchema.shape.email.safeParse(email).error?.format()._errors[0];
        passwordError = ContestantSchema.shape.password.safeParse(password).error?.format()._errors[0];
        phoneError = ContestantSchema.shape.phone.safeParse(phone).error?.format()._errors[0];
        collegeError = ContestantSchema.shape.college.safeParse(college).error?.format()._errors[0];
      }
    }
    $$rendered = `<main class="w-full h-screen flex items-center justify-center"><div class="w-[800px] h-[auto] flex bg-[#1E1E1E] rounded-md overflow-hidden shadow-md border border-[#3BE4C4] m-3"><div class="w-full md:w-1/2 p-8 flex flex-col justify-center"><form method="POST" class="w-full space-y-4"> <h1 class="text-3xl text-center font-anton mb-8 text-white" data-svelte-h="svelte-19xcgaf">REGISTRATION</h1> <div class="flex flex-col gap-2">${validate_component(Label, "Label").$$render($$result, { for: "name" }, {}, {
      default: () => {
        return `Name`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        name: "name",
        type: "text",
        id: "name",
        placeholder: "Enter your name",
        class: "w-full border-none text-white placeholder-roboto",
        style: "background-color: rgba(60, 72, 81, 0.3);",
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${name && nameError ? `<p class="text-red-400 text-xs">${escape(nameError)}</p>` : ``}</div> <div class="flex flex-col gap-2">${validate_component(Label, "Label").$$render($$result, { for: "college" }, {}, {
      default: () => {
        return `College Name`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        name: "college",
        type: "text",
        id: "college",
        placeholder: "Enter your college",
        class: "w-full border-none text-white placeholder-roboto",
        style: "background-color: rgba(60, 72, 81, 0.3);",
        value: college
      },
      {
        value: ($$value) => {
          college = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${college && collegeError ? `<p class="text-red-400 text-xs">${escape(collegeError)}</p>` : ``} <p class="text-xs my-2" data-svelte-h="svelte-4ty4ae">Please use full form as it will be used in your certificates.</p></div> <div class="flex flex-col gap-2">${validate_component(Label, "Label").$$render($$result, { for: "email" }, {}, {
      default: () => {
        return `Email`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        name: "email",
        type: "email",
        id: "email",
        placeholder: "Enter your email address",
        class: "w-full border-none text-white placeholder-roboto",
        style: "background-color: rgba(60, 72, 81, 0.3);",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${email && emailError ? `<p class="text-red-400 text-xs">${escape(emailError)}</p>` : ``}</div> <div class="flex flex-col gap-2">${validate_component(Label, "Label").$$render($$result, { for: "phone" }, {}, {
      default: () => {
        return `Phone`;
      }
    })} <div class="flex items-center gap-3"><span class="text-sm" data-svelte-h="svelte-1e3ofcu">+91</span> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        name: "phone",
        type: "phone",
        id: "phone",
        placeholder: "Enter your phone number",
        class: "w-full border-none text-white placeholder-roboto",
        style: "background-color: rgba(60, 72, 81, 0.3);",
        value: phone
      },
      {
        value: ($$value) => {
          phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${phone && phoneError ? `<p class="text-red-400 text-xs">${escape(phoneError)}</p>` : ``}</div> <div class="flex flex-col gap-2">${validate_component(Label, "Label").$$render($$result, { for: "password" }, {}, {
      default: () => {
        return `Password`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        name: "password",
        type: "password",
        id: "password",
        placeholder: "Enter your password",
        class: "w-full border-none text-white placeholder-roboto",
        style: "background-color: rgba(60, 72, 81, 0.3);",
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${password && passwordError ? `<p class="text-red-400 text-xs">${escape(passwordError)}</p>` : ``}</div> <div class="flex flex-col gap-2">${validate_component(Label, "Label").$$render($$result, { for: "confirm_password" }, {}, {
      default: () => {
        return `Confirm Password`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        name: "confirm_password",
        type: "password",
        id: "confirm_password",
        placeholder: "Confirm Password",
        class: "w-full border-none text-white placeholder-roboto",
        style: "background-color: rgba(60, 72, 81, 0.3);",
        value: confirmPassword
      },
      {
        value: ($$value) => {
          confirmPassword = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${confirmPassword && confirmPassword !== password ? `<p class="text-red-400 text-xs" data-svelte-h="svelte-89de70">Password does not match</p>` : ``}</div> <div class="flex flex-col gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: " bg-[#3BE4C4]",
        disabled: nameError != void 0 || emailError != void 0 || phoneError != void 0 || passwordError != void 0 || password !== confirmPassword,
        type: "submit"
      },
      {},
      {
        default: () => {
          return `Register`;
        }
      }
    )} <p class="text-sm flex gap-3 mt-2" data-svelte-h="svelte-1e2ajw7"><span>Already Registered?</span> <a href="/login" class="text-[#3BE4C4]">Login</a></p></div> ${form?.success ? `<p class="text-sm text-green-500" data-svelte-h="svelte-z2yv6r">Registration successfull</p>` : `${form && !form.success && form.message ? `<p class="text-sm text-red-400 my-2">${escape(form.message)}</p>` : ``}`}</form></div> <div class="w-1/2 hidden bg-[#0F2027] md:flex flex-col items-center justify-center bg-cover bg-center" style="background-image: url('/images/forms/fbgarcade.jpg');" data-svelte-h="svelte-128cvql"><img src="/images/forms/logoeuph.png" alt="Logo" class="image-logo spacing w-80 h-auto svelte-fo2ykd" style="max-width: 100%; height: auto;"> <img src="/images/forms/Typeface.png" alt="Typeface" class="image-typeface w50 h-auto svelte-fo2ykd" style="max-width: 100%; height: auto;"></div></div> </main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BVJ4BEfB.js.map
