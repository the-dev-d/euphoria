import { c as create_ssr_component, v as validate_component, d as escape, e as each } from './ssr-Diu9wf_y.js';
import { I as Input } from './input-PCpax9Gz.js';
import { L as Label } from './label-DaPESR9e.js';
import { B as Button } from './index3-Dowwk4Sl.js';
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell } from './table-row-_Cz92cPb.js';
import { T as Table_caption } from './table-caption-DwwVrWCO.js';
import 'clsx';
import { H as HuntMemberSchema, T as TeamNameSchema, a as TransactionSchema } from './types-nSWFzZyp.js';
import './client-BUusD8wq.js';
import './create-Q0paD_VI.js';
import './events-C0RY9zfz.js';
import 'tailwind-merge';
import 'tailwind-variants';
import './ssr2-BVSVb7LX.js';
import 'zod';
import './exports-BGi7-Rnc.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let members = [];
  let teamName = "";
  let transactionId = "";
  let screenshot = null;
  let name = "";
  let phone = "";
  let email = "";
  let saving = false;
  let teamNameError = "";
  let transactionIdError = "";
  let nameError = "";
  let phoneError = "";
  let emailError = "";
  let genericError = "";
  let teamNameAvailable = null;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    nameError = HuntMemberSchema.shape.name.safeParse(name).error?.format()._errors[0] || "";
    emailError = HuntMemberSchema.shape.email.safeParse(email).error?.format()._errors[0] || "";
    phoneError = HuntMemberSchema.shape.phone.safeParse(phone).error?.format()._errors[0] || "";
    teamNameError = TeamNameSchema.safeParse(teamName).error?.format()._errors[0] || "";
    transactionIdError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || "";
    {
      members.forEach((member) => {
        if (member.email === email) {
          emailError = "Email already used";
        }
      });
    }
    $$rendered = `<section class="mb-10 grid w-full place-items-center"><div class="m-4 w-11/12 md:w-5/6 rounded-xl border border-btn-main bg-valorant-bg p-4 text-white shadow-md shadow-btn-main" data-svelte-h="svelte-k86gtt"><div class="p-4 text-xs"><ul class="list-disc"><li>Add your 3 team members</li> <li>No need to add leader again</li> <li>None of the members should be leader or member of other Treasure Hunt</li> <li>Any violation of terms &amp; conditions will lead to disqualification with no refunds</li></ul></div></div> <form class="w-11/12 md:w-5/6 rounded-md border border-btn-main bg-valorant-bg p-4 md:p-6 text-white shadow-btn-main"><div class="grid grid-rows-[auto_1fr] gap-6"><div class="relative grid gap-10 gl:grid-cols-2 gl:gap-0"><div class="grid gap-5 border-btn-main gl:border-r gl:px-5 jus"><h2 class="mb-1 mt-4 font-valorant text-2xl font-bold gl:text-4xl" data-svelte-h="svelte-1kujjuq">Register for the Hunt</h2> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "team_name" }, {}, {
      default: () => {
        return `Team Name`;
      }
    })} <div class="flex w-full items-center space-x-2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: " bg-transparent",
        required: true,
        type: "text",
        id: "team_name",
        placeholder: "Team Name",
        value: teamName
      },
      {
        value: ($$value) => {
          teamName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: " rounded-xl border-2 border-btn-main bg-btn-main"
      },
      {},
      {
        default: () => {
          return `Check`;
        }
      }
    )}</div> ${teamName !== "" ? `<p class="text-xs text-red-400">${escape(teamNameError)}</p> ${`${``}`}` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "transaction_id" }, {}, {
      default: () => {
        return `Transaction ID`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: " bg-transparent",
        required: true,
        type: "number",
        id: "transaction_id",
        placeholder: "UPI transaction ID",
        value: transactionId
      },
      {
        value: ($$value) => {
          transactionId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${transactionId !== "" ? `<p class="text-xs text-red-400">${escape(transactionIdError)}</p>` : ``}</div> <div data-svelte-h="svelte-cnbw3u"><img src="/images/payment.png" class="w-4/6 m-auto my-2 text-sm md:w-1/2 lg:w-1/3" alt=""> <p class="text-center text-sm">rajagiricss@sbi</p></div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "screenshot" }, {}, {
      default: () => {
        return `Payment Screenshot`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "text-black",
        required: true,
        accept: ".jpg, .jpeg, .png",
        type: "file",
        id: "screenshot",
        placeholder: "Payment Screenshot"
      },
      {},
      {}
    )} ${``}</div></div> <div class="grid content-start gap-5 border-t border-btn-main gl:border-l gl:border-t-0 gl:px-5"><h2 class="mb-1 mt-4 font-valorant text-2xl font-bold" data-svelte-h="svelte-d4p3qr">Register your members</h2> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "member_name" }, {}, {
      default: () => {
        return `Name`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: " bg-transparent",
        required: true,
        type: "text",
        id: "member_name",
        placeholder: "Member Name",
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${name !== "" ? `<p class="text-xs text-red-400">${escape(nameError)}</p>` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "member_phone" }, {}, {
      default: () => {
        return `Phone`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: " bg-transparent",
        required: true,
        type: "text",
        id: "member_phone",
        placeholder: "Member Phone",
        value: phone
      },
      {
        value: ($$value) => {
          phone = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${phone !== "" ? `<p class="text-xs text-red-400">${escape(phoneError)}</p>` : ``}</div> <div class="flex w-full flex-col gap-1.5">${validate_component(Label, "Label").$$render($$result, { for: "member_email" }, {}, {
      default: () => {
        return `Email`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: " bg-transparent",
        required: true,
        type: "email",
        id: "member_email",
        placeholder: "Member Email",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${email !== "" ? `<p class="text-xs text-red-400">${escape(emailError)}</p>` : ``}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: " rounded-xl border-2 border-btn-main bg-btn-main",
        disabled: !(nameError == "" && phoneError == "" && emailError == "") || members.length == 3
      },
      {},
      {
        default: () => {
          return `Add`;
        }
      }
    )}</div></div> <div class="relative grid gap-5 overflow-x-scroll"><div>${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Table_caption, "Table.Caption").$$render($$result, {}, {}, {
          default: () => {
            return `<p class="text-red-400">${escape(genericError)}</p>`;
          }
        })} ${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `No`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Name`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Email`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Phone`;
                  }
                })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `Remove`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(members, (member, i) => {
              return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(i + 1)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.name)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.email)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(member.phone)}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-red-400" }, {}, {
                    default: () => {
                      return `<button type="button" class="fa-solid fa-user-xmark rounded-full p-3 hover:bg-slate-200"></button> `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div></div></div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "mt-8 w-full rounded-xl border-2 border-btn-main bg-btn-main",
        disabled: members.length !== 3 || !teamNameAvailable || saving || screenshot === null || transactionIdError
      },
      {},
      {
        default: () => {
          return `${`<span data-svelte-h="svelte-l126tb">Save</span>`}`;
        }
      }
    )}</form></section>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BzEG70QX.js.map
