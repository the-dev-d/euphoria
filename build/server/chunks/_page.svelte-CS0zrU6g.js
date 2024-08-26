import { c as create_ssr_component, a as subscribe, y as set_store_value, v as validate_component, l as add_attribute, e as each, d as escape } from './ssr-Diu9wf_y.js';
import { g as globals, c as createTable, R as Root$1$1, S as Select_trigger, V as Value, a as Select_content, b as Select_item, d as Root$2, T as Trigger, C as Chevron_down, D as Dropdown_menu_content, e as Dropdown_menu_checkbox_item, f as Subscribe, h as Render, i as addHiddenColumns } from './postcss-W62CLXpL.js';
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell } from './table-row-_Cz92cPb.js';
import 'clsx';
import { R as Root, A as Alert_dialog_content, a as Alert_dialog_header, b as Alert_dialog_title, c as Alert_dialog_description, d as Alert_dialog_footer, e as Alert_dialog_cancel, f as Alert_dialog_action } from './index6-B37ibPnS.js';
import { B as Button } from './index3-Dowwk4Sl.js';
import { c as createRender, B as ButtonWrapper, R as Root$1, D as Dialog_content, a as Dialog_header, b as Dialog_title, d as Dialog_description } from './ButtonWrapper-t3l30B86.js';
import './client-BUusD8wq.js';
import './index7-Dvo7XaLg.js';
import { w as writable } from './ssr2-BVSVb7LX.js';
import './index4-Cho_Ljls.js';
import './check-WB572iDI.js';
import './Icon-DHjjESmy.js';
import './events-C0RY9zfz.js';
import './create-Q0paD_VI.js';
import 'tty';
import 'path';
import 'url';
import 'fs';
import 'tailwind-merge';
import 'tailwind-variants';
import './x-BPk24jmO.js';
import './exports-BGi7-Rnc.js';

const { Object: Object_1 } = globals;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenColumnIds, $$unsubscribe_hiddenColumnIds;
  let $tableAttrs, $$unsubscribe_tableAttrs;
  let $headerRows, $$unsubscribe_headerRows;
  let $tableBodyAttrs, $$unsubscribe_tableBodyAttrs;
  let $pageRows, $$unsubscribe_pageRows;
  let { data } = $$props;
  const tableData = writable([]);
  const table = createTable(tableData, { hide: addHiddenColumns() });
  const columns = table.createColumns([
    table.column({
      accessor: (a) => a.participant.name,
      header: "Name"
    }),
    table.column({
      accessor: (a) => a.participant.college,
      header: "College"
    }),
    table.column({
      accessor: (a) => a.participant.email,
      header: "Email"
    }),
    table.column({
      accessor: (a) => a.participant.phone,
      header: "Phone"
    }),
    table.column({
      accessor: (a) => a.created_at.toLocaleString(),
      header: "Created At"
    }),
    table.column({
      accessor: (a) => a.event_code,
      header: "Event Code"
    }),
    table.column({
      accessor: (a) => a.event_payment.amount + " Rs",
      header: "Amount"
    }),
    table.column({
      accessor: (a) => a.event_payment.upi_transaction_id,
      header: "UPI Transaction ID"
    }),
    table.column({
      accessor: (a) => a.event_payment.screenshot,
      header: "Screenshot",
      cell: ({ value }) => {
        return createRender(ButtonWrapper, {
          label: "View",
          click: () => {
            handleScreenshotShow(value);
          }
        });
      }
    }),
    table.column({
      accessor: (a) => a.event_participant_id,
      header: "Verify",
      cell: ({ value }) => {
        return createRender(ButtonWrapper, {
          label: "Verify",
          click: () => {
            handleSwitchChange();
          }
        });
      }
    })
  ]);
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns } = table.createViewModel(columns);
  $$unsubscribe_headerRows = subscribe(headerRows, (value) => $headerRows = value);
  $$unsubscribe_pageRows = subscribe(pageRows, (value) => $pageRows = value);
  $$unsubscribe_tableAttrs = subscribe(tableAttrs, (value) => $tableAttrs = value);
  $$unsubscribe_tableBodyAttrs = subscribe(tableBodyAttrs, (value) => $tableBodyAttrs = value);
  const { hiddenColumnIds } = pluginStates.hide;
  $$unsubscribe_hiddenColumnIds = subscribe(hiddenColumnIds, (value) => $hiddenColumnIds = value);
  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
  const hidableCols = [
    "Name",
    "College",
    "Email",
    "Phone",
    "Created At",
    "Event Code",
    "Amount",
    "UPI Transaction ID"
  ];
  let currentScreenshot = "";
  data.limit;
  let pageNumber = data.pageNumber;
  let open = false;
  let ssopen = false;
  function handleScreenshotShow(screenshot) {
    currentScreenshot = screenshot;
    ssopen = true;
  }
  async function handleSwitchChange(id) {
    open = true;
  }
  let limitSelected = {
    value: data.limit,
    label: "" + data.limit
  };
  let filterSelected = {
    value: data.filter || null,
    label: data.filter ? "" + data.filter : "Select filter"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        tableData.set(data.participations);
      }
    }
    set_store_value(hiddenColumnIds, $hiddenColumnIds = Object.entries(hideForId).filter(([, hide]) => !hide).map(([id]) => id), $hiddenColumnIds);
    $$rendered = `<main class="bg-white min-h-[90svh] text-black"><div>${validate_component(Root, "AlertDialog.Root").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Alert_dialog_content, "AlertDialog.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Alert_dialog_header, "AlertDialog.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Alert_dialog_title, "AlertDialog.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Are you absolutely sure?`;
                    }
                  })} ${validate_component(Alert_dialog_description, "AlertDialog.Description").$$render($$result, {}, {}, {
                    default: () => {
                      return `This will mark the entry as verified and will unlock new privileges to the participant. 
                <p class="my-3" data-svelte-h="svelte-1qqdx8y"><span class="font-semibold">Warning :</span> This action is irreversible.</p>`;
                    }
                  })}`;
                }
              })} ${validate_component(Alert_dialog_footer, "AlertDialog.Footer").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Alert_dialog_cancel, "AlertDialog.Cancel").$$render($$result, {}, {}, {
                    default: () => {
                      return `<span class="text-black" data-svelte-h="svelte-1iqd6f8">Cancel</span>`;
                    }
                  })} ${validate_component(Alert_dialog_action, "AlertDialog.Action").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                        default: () => {
                          return `Continue`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div> <div>${validate_component(Root$1, "Dialog.Root").$$render(
      $$result,
      { open: ssopen },
      {
        open: ($$value) => {
          ssopen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Dialog_content, "Dialog.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Dialog_header, "Dialog.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Dialog_title, "Dialog.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `<span class="text-black" data-svelte-h="svelte-1htp7zi">Screenshot</span>`;
                    }
                  })} ${validate_component(Dialog_description, "Dialog.Description").$$render($$result, {}, {}, {
                    default: () => {
                      return `<img class="max-h-[70svh] mx-auto"${add_attribute("src", currentScreenshot.replace("static", ""), 0)}${add_attribute("alt", currentScreenshot.replace("static", ""), 0)}>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div>  <div class="w-[90%] mx-auto mt-10 mb-2 flex items-center gap-3">${validate_component(Root$1$1, "Select.Root").$$render(
      $$result,
      {
        onSelectedChange: (v) => {
          data.limit = v?.value;
        },
        selected: limitSelected
      },
      {
        selected: ($$value) => {
          limitSelected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { class: "w-[180px]" }, {}, {
            default: () => {
              return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Page Size" }, {}, {})}`;
            }
          })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Select_item, "Select.Item").$$render($$result, { value: "2" }, {}, {
                default: () => {
                  return `2`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "10" }, {}, {
                default: () => {
                  return `10`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "20" }, {}, {
                default: () => {
                  return `20`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "30" }, {}, {
                default: () => {
                  return `30`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "40" }, {}, {
                default: () => {
                  return `40`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "50" }, {}, {
                default: () => {
                  return `50`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Root$1$1, "Select.Root").$$render(
      $$result,
      {
        onSelectedChange: (v) => {
          data.filter = v?.value;
        },
        selected: filterSelected
      },
      {
        selected: ($$value) => {
          filterSelected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { class: "w-[180px]" }, {}, {
            default: () => {
              return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Event" }, {}, {})}`;
            }
          })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Select_item, "Select.Item").$$render($$result, { value: "" }, {}, {
                default: () => {
                  return `All`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "CUG" }, {}, {
                default: () => {
                  return `CUG`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "CPG" }, {}, {
                default: () => {
                  return `CPG`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "RP" }, {}, {
                default: () => {
                  return `RP`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "WEB" }, {}, {
                default: () => {
                  return `WEB`;
                }
              })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "TH" }, {}, {
                default: () => {
                  return `TH`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} <a${add_attribute("href", "admin?page=1&limit=" + data.limit + "&filter=" + data.filter, 0)}>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Apply`;
      }
    })}</a> ${validate_component(Root$2, "DropdownMenu.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, { asChild: true }, {}, {
          default: ({ builder }) => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "outline",
                class: "ml-auto",
                builders: [builder]
              },
              {},
              {
                default: () => {
                  return `Columns ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "ml-2 h-4 w-4" }, {}, {})}`;
                }
              }
            )}`;
          }
        })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, {}, {}, {
          default: () => {
            return `${each(flatColumns, (col) => {
              return `${hidableCols.includes(col.id) ? `${validate_component(Dropdown_menu_checkbox_item, "DropdownMenu.CheckboxItem").$$render(
                $$result,
                { checked: hideForId[col.id] },
                {
                  checked: ($$value) => {
                    hideForId[col.id] = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${escape(col.header)} `;
                  }
                }
              )}` : ``}`;
            })}`;
          }
        })}`;
      }
    })}</div> <div class="w-[90%] mx-auto border rounded-md"> ${validate_component(Table, "Table.Root").$$render($$result, Object_1.assign({}, $tableAttrs), {}, {
      default: () => {
        return `${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
          default: () => {
            return `${each($headerRows, (headerRow) => {
              return `${validate_component(Subscribe, "Subscribe").$$render($$result, { rowAttrs: headerRow.attrs() }, {}, {
                default: () => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(headerRow.cells, (cell) => {
                        return `${validate_component(Subscribe, "Subscribe").$$render($$result, { attrs: cell.attrs(), props: cell.props() }, {}, {
                          default: ({ attrs }) => {
                            return `${validate_component(Table_head, "Table.Head").$$render($$result, Object_1.assign({}, attrs), {}, {
                              default: () => {
                                return `${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})} `;
                              }
                            })} `;
                          }
                        })}`;
                      })} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })} ${validate_component(Table_body, "Table.Body").$$render($$result, Object_1.assign({}, $tableBodyAttrs), {}, {
          default: () => {
            return `${each($pageRows, (row) => {
              return `${validate_component(Subscribe, "Subscribe").$$render($$result, { rowAttrs: row.attrs() }, {}, {
                default: ({ rowAttrs }) => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, Object_1.assign({}, rowAttrs), {}, {
                    default: () => {
                      return `${each(row.cells, (cell) => {
                        return `${validate_component(Subscribe, "Subscribe").$$render($$result, { attrs: cell.attrs() }, {}, {
                          default: ({ attrs }) => {
                            return `${validate_component(Table_cell, "Table.Cell").$$render($$result, Object_1.assign({}, attrs), {}, {
                              default: () => {
                                return `${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})} `;
                              }
                            })} `;
                          }
                        })}`;
                      })} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div> <div class="w-[90%] mx-auto flex items-center justify-end text-xs my-4"><div>Total ${escape(data.count)} records</div> <div class="flex items-center justify-center"><a${add_attribute(
      "href",
      pageNumber > 1 ? "admin?page=" + (data.pageNumber - 1) + "&limit=" + data.limit : "",
      0
    )} class="p-1 border mx-4 flex"><span class="material-symbols-outlined" data-svelte-h="svelte-19z8hyk">chevron_left</span></a> <div class="">Page ${escape(data.pageNumber)}/ ${escape(Math.ceil(data.count / data.limit))}</div> <a${add_attribute(
      "href",
      pageNumber < Math.ceil(data.count / data.limit) ? "admin?page=" + (data.pageNumber + 1) + "&limit=" + data.limit : "",
      0
    )} class="p-1 border mx-4 flex"><span class="material-symbols-outlined" data-svelte-h="svelte-18kgbq5">chevron_right</span></a></div></div></main>`;
  } while (!$$settled);
  $$unsubscribe_hiddenColumnIds();
  $$unsubscribe_tableAttrs();
  $$unsubscribe_headerRows();
  $$unsubscribe_tableBodyAttrs();
  $$unsubscribe_pageRows();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CS0zrU6g.js.map
