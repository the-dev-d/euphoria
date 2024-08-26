import { c as create_ssr_component, d as escape, v as validate_component } from './ssr-Diu9wf_y.js';
import { P as PRICE } from './constants-BhslKoc5.js';
import { B as Button } from './index3-Dowwk4Sl.js';
import { I as Input } from './input-PCpax9Gz.js';
import { L as Label } from './label-DaPESR9e.js';
import { a as TransactionSchema } from './types-nSWFzZyp.js';
import './qrcode-CLsQYWL4.js';
import 'clsx';
import 'tailwind-merge';
import 'tailwind-variants';
import './ssr2-BVSVb7LX.js';
import './create-Q0paD_VI.js';
import './events-C0RY9zfz.js';
import 'zod';

const css = {
  code: "body{background-color:#1a1a2e;font-family:'Inter', sans-serif}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { PRICE } from \\"$lib/constants/constants\\";\\nimport Button from \\"$lib/shardcn/ui/button/button.svelte\\";\\nimport Input from \\"$lib/shardcn/ui/input/input.svelte\\";\\nimport Label from \\"$lib/shardcn/ui/label/label.svelte\\";\\nimport { TransactionSchema } from \\"$lib/zod/types.js\\";\\nimport { qr } from \\"@svelte-put/qr/svg\\";\\nimport { fade, fly } from \\"svelte/transition\\";\\nexport let data;\\nexport let form;\\nlet count = 1;\\nlet countError = \\"\\";\\nlet fileError = \\"\\";\\nlet file = null;\\nlet transactionId = \\"\\";\\nlet transactionError = \\"\\";\\n$: transactionError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || \\"\\";\\n$: countError = count < 1 ? \\"Enter a valid positive number\\" : \\"\\";\\n$: totalAmount = countError ? \\"__\\" : count * PRICE;\\nfunction fileChanged(e) {\\n  const target = e.target;\\n  if (!target.files) return;\\n  file = target.files[0];\\n  if (file.size > 4e5) fileError = \\"File size must be less than 400KB\\";\\n  else fileError = \\"\\";\\n}\\n<\/script>\\n\\n<main class=\\"container mx-auto mt-6 p-4 max-w-6xl\\">\\n    <section id=\\"ticket\\" class=\\"relative relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto border border-[#63BDC2]overflow-hidden\\">\\n        <div class=\\"absolute inset-0 bg-cover bg-center opacity-20\\" style=\\"background-image: url('/images/agents/img.webp');\\"></div>\\n        \\n        <div class=\\"relative bg-gradient-to-r from-[#D4566C] to-[#63BDC2] text-white py-6 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-center\\">\\n    <h1 class=\\"font-fugaz text-3xl md:text-4xl uppercase tracking-wider text-center md:text-left\\">Euphoria Respawn</h1>\\n\\n    {#if data.viewer}\\n        <div class=\\"mt-4 md:mt-0 flex items-center\\">\\n            <span class=\\"mr-4 text-base md:text-lg font-semibold\\">Welcome, {data.viewer.name}!</span>\\n            <form method=\\"POST\\" action=\\"?/logout\\">\\n                <button aria-label=\\"Log out\\" class=\\"text-white hover:text-red-300 transition-colors duration-300\\" type=\\"submit\\">\\n                    <i class=\\"fa-solid fa-right-from-bracket text-lg md:text-xl\\"></i>\\n                </button>\\n            </form>\\n        </div>\\n    {/if}\\n</div>\\n\\n\\n        <div class=\\"relative flex flex-col md:flex-row p-8\\">\\n            <!-- Left Section: Event Details -->\\n            <div class=\\"w-full md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0 border-b md:border-b-0 md:border-r border-gray-200\\">\\n                <h2 class=\\"text-2xl font-bold mb-4 text-[#63BDC2]\\">Event Details</h2>\\n                <p class=\\"mb-2\\">Rajagiri Sports and Cultural Centre</p>\\n                <p class=\\"mb-4\\">Rajagiri College of Social Sciences</p>\\n                <p class=\\"text-2xl font-bold mt-6 text-yellow-400\\">31.08.2024</p>\\n                <p class=\\"text-lg text-white-600 mb-6\\">DOORS OPEN: 9:00 AM</p>\\n\\n                <div class=\\"bg-[#D4566C]/20 rounded-lg p-4 mb-4\\">\\n                    <p class=\\"text-xl font-semibold text-[#D4566C]\\">Ticket Price</p>\\n                    <p class=\\"text-3xl font-bold text-[#63BDC2]\\">₹{PRICE.battle}</p>\\n                </div>\\n                <div class=\\"bg-[#63BDC2]/20 rounded-lg p-4\\">\\n                    <h3 class=\\"text-lg font-semibold mb-2 text-[#63BDC2]\\">Scan to Pay</h3>\\n                    <div class=\\" rounded-lg grid\\">\\n                            <img src=\\"/images/payment.png\\" class=\\"w-4/6 m-auto my-2 text-sm md:w-3/5\\" alt=\\"\\">\\n                    </div>\\n                    <p class=\\"mt-2 text-sm font-semibold\\">UPI ID: rajagiricss@sbi</p>\\n                </div>\\n            </div>\\n\\n            <!-- Right Section: Booking Form or Ticket QR -->\\n            <div class=\\"w-full md:w-2/3 pl-0 md:pl-6 mt-6 md:mt-0 relative\\">\\n                {#if !data.ticket}\\n                    <form enctype=\\"multipart/form-data\\" action=\\"?/book\\" method=\\"post\\" class=\\"space-y-6\\" transition:fade>\\n                        <h2 class=\\"text-2xl font-bold mb-4 text-[#D4566C]\\">Book Your Tickets</h2>\\n                        <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-6\\">\\n                            <div>\\n                                <Label for=\\"count\\" class=\\"block text-sm font-medium mb-1 text-[#63BDC2]\\">Number of Tickets</Label>\\n                                <Input \\n                                    id=\\"count\\"\\n                                    bind:value={count} \\n                                    name=\\"count\\" \\n                                    type=\\"number\\" \\n                                    class=\\"w-full px-3 py-2 border bg-white/10  border-[#63BDC2] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#D4566C] focus:border-transparent\\" \\n                                    placeholder=\\"Enter ticket count\\" \\n                                />\\n                                {#if countError}\\n                                    <p class=\\"text-red-500 text-xs mt-1\\">{countError}</p>\\n                                {/if}\\n                            </div>\\n                            <div>\\n                                <h2 class=\\"text-xl font-bold text-[#D4566C] mb-2\\">Amount Payable</h2>\\n                                <p class=\\"text-3xl font-semibold text-green-400\\">\\n                                    ₹ Rs. {countError ? \\"__\\" : count * PRICE.battle}\\n                                </p>\\n                            </div>\\n                        </div>\\n                        <div>\\n                            <Label for=\\"upi-transaction-id\\" class=\\"block text-sm font-medium mb-1 text-[#63BDC2]\\">UPI Transaction ID</Label>\\n                            <Input\\n                                id=\\"upi-transaction-id\\"\\n                                bind:value={transactionId}\\n                                required\\n                                type=\\"text\\"\\n                                name=\\"upi-transaction-id\\"\\n                                placeholder=\\"Enter UPI Transaction ID\\"\\n                                class=\\"w-full px-3 py-2 border bg-white/10 border border-[#63BDC2] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#D4566C] focus:border-transparent\\"\\n                                    />\\n                                    {#if transactionId !== '' && transactionError}\\n                                        <p class=\\"text-[#D4566C] text-xs mt-1\\">{transactionError}</p>\\n                                    {/if}\\n\\n                        </div>\\n                        <div>\\n                            <Label for=\\"payment-screenshot\\" class=\\"block text-sm font-medium mb-1 text-[#63BDC2]\\">Payment Screenshot</Label>\\n                            <Input\\n                                id=\\"payment-screenshot\\"\\n                                on:change={fileChanged}\\n                                required\\n                                accept=\\".jpg, .jpeg, .png\\"\\n                                type=\\"file\\"\\n                                name=\\"payment-screenshot\\"\\n                                class=\\"w-full h-full px-3 py-2 border bg-white/10  border-[#63BDC2] rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4566C] file:text-white hover:file:bg-[#63BDC2]\\"\\n                                />\\n                                {#if fileError}\\n                                    <p class=\\"text-[#D4566C] text-xs mt-1\\">{fileError}</p>\\n                                {/if}\\n                            </div>\\n                            {#if form}\\n                                <p class=\\"text-sm {form.success ? 'text-[#63BDC2]' : 'text-[#D4566C]'} font-semibold\\">\\n                                    {form.message}\\n                                </p>\\n                            {/if}\\n\\n                        <Button\\n                            disabled={!transactionId || transactionError || fileError || countError}\\n                            class=\\"w-full py-3 px-6 bg-gradient-to-r from-[#63BDC2] to-[#D4566C] hover:from-[#D4566C] hover:to-[#63BDC2] text-white text-lg font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed\\"\\n                            type=\\"submit\\"\\n                        >\\n                            Book Tickets\\n                        </Button>\\n                    </form>\\n                {:else}\\n                    <div class=\\"text-center\\" >\\n                        <h2 class=\\"text-2xl font-bold mb-4 text-[#63BDC2]\\">Your Ticket</h2>\\n                        <svg\\n                        class=\\"w-2/3 mx-auto\\"\\n                            use:qr={{\\n                                data: \`https://euphoria.rlabz.in/verify/viewer/\` + data.ticket.uuid,\\n                                logo: '/images/logos/euphoria.png',\\n                                shape: 'circle',\\n                            }}\\n                        />\\n                        <p class=\\"mt-4 text-lg font-semibold text-[#63BDC2]\\">Ticket #: {data.ticket.uuid}</p>\\n                        <p class=\\"\\">Status: {data.ticket.verified ? \\"Verified\\" : \\"Verification Pending\\"}</p>\\n                    </div>\\n                {/if}\\n            </div>\\n        </div>\\n\\n        <!-- Important Notes Section -->\\n        <div class=\\"relative bg-gradient-to-r from-[#D4566C]/10 to-[#63BDC2]/10 p-6 border-t border-gray-600\\">\\n            <h2 class=\\"text-xl font-bold mb-3 text-[#D4566C]\\">Important Notes</h2>\\n            <ul class=\\"list-disc list-inside text-white space-y-2\\">\\n                <li>Please bring a valid ID proof for entry.</li>\\n                <li>Keep your ticket QR code handy for quick access.</li>\\n                <li>Arrive at least 30 minutes before the event start time.</li>\\n                <li>Outside food and beverages are not permitted.</li>\\n            </ul>\\n        </div>\\n\\n        <!-- Ticket Footer -->\\n        <div class=\\"relative bg-gradient-to-r from-[#D4566C] to-[#63BDC2] text-white py-4 px-8 text-center\\">\\n            <p class=\\"text-lg font-semibold\\">Present this ticket at the entrance. Have an unforgettable experience!</p>\\n        </div>\\n    </section>\\n</main>\\n\\n<style>\\n    :global(body) {\\n        background-color: #1a1a2e;\\n        font-family: 'Inter', sans-serif;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAkLY,IAAM,CACV,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,OAAO,CAAC,CAAC,UAC1B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let count = 1;
  let countError = "";
  let fileError = "";
  let transactionId = "";
  let transactionError = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    transactionError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || "";
    countError = count < 1 ? "Enter a valid positive number" : "";
    $$rendered = `<main class="container mx-auto mt-6 p-4 max-w-6xl"><section id="ticket" class="relative relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto border border-[#63BDC2]overflow-hidden"><div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('/images/agents/img.webp');"></div> <div class="relative bg-gradient-to-r from-[#D4566C] to-[#63BDC2] text-white py-6 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-center"><h1 class="font-fugaz text-3xl md:text-4xl uppercase tracking-wider text-center md:text-left" data-svelte-h="svelte-1nvlj2h">Euphoria Respawn</h1> ${data.viewer ? `<div class="mt-4 md:mt-0 flex items-center"><span class="mr-4 text-base md:text-lg font-semibold">Welcome, ${escape(data.viewer.name)}!</span> <form method="POST" action="?/logout" data-svelte-h="svelte-oe5rpu"><button aria-label="Log out" class="text-white hover:text-red-300 transition-colors duration-300" type="submit"><i class="fa-solid fa-right-from-bracket text-lg md:text-xl"></i></button></form></div>` : ``}</div> <div class="relative flex flex-col md:flex-row p-8"> <div class="w-full md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0 border-b md:border-b-0 md:border-r border-gray-200"><h2 class="text-2xl font-bold mb-4 text-[#63BDC2]" data-svelte-h="svelte-hyvj95">Event Details</h2> <p class="mb-2" data-svelte-h="svelte-9ncf4h">Rajagiri Sports and Cultural Centre</p> <p class="mb-4" data-svelte-h="svelte-1j9kdo2">Rajagiri College of Social Sciences</p> <p class="text-2xl font-bold mt-6 text-yellow-400" data-svelte-h="svelte-1311yzt">31.08.2024</p> <p class="text-lg text-white-600 mb-6" data-svelte-h="svelte-1t4ltmk">DOORS OPEN: 9:00 AM</p> <div class="bg-[#D4566C]/20 rounded-lg p-4 mb-4"><p class="text-xl font-semibold text-[#D4566C]" data-svelte-h="svelte-n5u36a">Ticket Price</p> <p class="text-3xl font-bold text-[#63BDC2]">₹${escape(PRICE.battle)}</p></div> <div class="bg-[#63BDC2]/20 rounded-lg p-4" data-svelte-h="svelte-1ivuao8"><h3 class="text-lg font-semibold mb-2 text-[#63BDC2]">Scan to Pay</h3> <div class="rounded-lg grid"><img src="/images/payment.png" class="w-4/6 m-auto my-2 text-sm md:w-3/5" alt=""></div> <p class="mt-2 text-sm font-semibold">UPI ID: rajagiricss@sbi</p></div></div>  <div class="w-full md:w-2/3 pl-0 md:pl-6 mt-6 md:mt-0 relative">${!data.ticket ? `<form enctype="multipart/form-data" action="?/book" method="post" class="space-y-6"><h2 class="text-2xl font-bold mb-4 text-[#D4566C]" data-svelte-h="svelte-wc9e5q">Book Your Tickets</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div>${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "count",
        class: "block text-sm font-medium mb-1 text-[#63BDC2]"
      },
      {},
      {
        default: () => {
          return `Number of Tickets`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "count",
        name: "count",
        type: "number",
        class: "w-full px-3 py-2 border bg-white/10  border-[#63BDC2] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#D4566C] focus:border-transparent",
        placeholder: "Enter ticket count",
        value: count
      },
      {
        value: ($$value) => {
          count = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${countError ? `<p class="text-red-500 text-xs mt-1">${escape(countError)}</p>` : ``}</div> <div><h2 class="text-xl font-bold text-[#D4566C] mb-2" data-svelte-h="svelte-1aoppv3">Amount Payable</h2> <p class="text-3xl font-semibold text-green-400">₹ Rs. ${escape(countError ? "__" : count * PRICE.battle)}</p></div></div> <div>${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "upi-transaction-id",
        class: "block text-sm font-medium mb-1 text-[#63BDC2]"
      },
      {},
      {
        default: () => {
          return `UPI Transaction ID`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "upi-transaction-id",
        required: true,
        type: "text",
        name: "upi-transaction-id",
        placeholder: "Enter UPI Transaction ID",
        class: "w-full px-3 py-2 border bg-white/10 border border-[#63BDC2] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#D4566C] focus:border-transparent",
        value: transactionId
      },
      {
        value: ($$value) => {
          transactionId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${transactionId !== "" && transactionError ? `<p class="text-[#D4566C] text-xs mt-1">${escape(transactionError)}</p>` : ``}</div> <div>${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "payment-screenshot",
        class: "block text-sm font-medium mb-1 text-[#63BDC2]"
      },
      {},
      {
        default: () => {
          return `Payment Screenshot`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "payment-screenshot",
        required: true,
        accept: ".jpg, .jpeg, .png",
        type: "file",
        name: "payment-screenshot",
        class: "w-full h-full px-3 py-2 border bg-white/10  border-[#63BDC2] rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4566C] file:text-white hover:file:bg-[#63BDC2]"
      },
      {},
      {}
    )} ${``}</div> ${form ? `<p class="${"text-sm " + escape(form.success ? "text-[#63BDC2]" : "text-[#D4566C]", true) + " font-semibold"}">${escape(form.message)}</p>` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: !transactionId || transactionError || fileError || countError,
        class: "w-full py-3 px-6 bg-gradient-to-r from-[#63BDC2] to-[#D4566C] hover:from-[#D4566C] hover:to-[#63BDC2] text-white text-lg font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        type: "submit"
      },
      {},
      {
        default: () => {
          return `Book Tickets`;
        }
      }
    )}</form>` : `<div class="text-center"><h2 class="text-2xl font-bold mb-4 text-[#63BDC2]" data-svelte-h="svelte-13myp76">Your Ticket</h2> <svg class="w-2/3 mx-auto"></svg> <p class="mt-4 text-lg font-semibold text-[#63BDC2]">Ticket #: ${escape(data.ticket.uuid)}</p> <p class="">Status: ${escape(data.ticket.verified ? "Verified" : "Verification Pending")}</p></div>`}</div></div>  <div class="relative bg-gradient-to-r from-[#D4566C]/10 to-[#63BDC2]/10 p-6 border-t border-gray-600" data-svelte-h="svelte-xbwa6b"><h2 class="text-xl font-bold mb-3 text-[#D4566C]">Important Notes</h2> <ul class="list-disc list-inside text-white space-y-2"><li>Please bring a valid ID proof for entry.</li> <li>Keep your ticket QR code handy for quick access.</li> <li>Arrive at least 30 minutes before the event start time.</li> <li>Outside food and beverages are not permitted.</li></ul></div>  <div class="relative bg-gradient-to-r from-[#D4566C] to-[#63BDC2] text-white py-4 px-8 text-center" data-svelte-h="svelte-1eojbe3"><p class="text-lg font-semibold">Present this ticket at the entrance. Have an unforgettable experience!</p></div></section> </main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dn2MLh9t.js.map
