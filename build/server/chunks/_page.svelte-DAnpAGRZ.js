import { c as create_ssr_component, a as subscribe, y as set_store_value, v as validate_component, l as add_attribute, e as each, d as escape } from './ssr-Diu9wf_y.js';
import { g as globals, c as createTable, R as Root$1, S as Select_trigger, V as Value, a as Select_content, b as Select_item, d as Root, T as Trigger, C as Chevron_down, D as Dropdown_menu_content, e as Dropdown_menu_checkbox_item, f as Subscribe, h as Render, i as addHiddenColumns } from './postcss-W62CLXpL.js';
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell } from './table-row-_Cz92cPb.js';
import 'clsx';
import { B as Button } from './index3-Dowwk4Sl.js';
import { w as writable } from './ssr2-BVSVb7LX.js';
import './client-BUusD8wq.js';
import './index7-Dvo7XaLg.js';
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
    table.column({ accessor: (a) => a.name, header: "Name" }),
    table.column({
      accessor: (a) => a.college,
      header: "College"
    }),
    table.column({ accessor: (a) => a.email, header: "Email" }),
    table.column({ accessor: (a) => a.phone, header: "Phone" })
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
  const hidableCols = ["Name", "College", "Email", "Phone"];
  data.limit;
  data.page;
  let selected = {
    value: data.limit,
    label: "" + data.limit
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
        tableData.set(data.participants);
      }
    }
    set_store_value(hiddenColumnIds, $hiddenColumnIds = Object.entries(hideForId).filter(([, hide]) => !hide).map(([id]) => id), $hiddenColumnIds);
    $$rendered = `<main class="bg-white min-h-[90svh] text-black"> <div class="w-[90%] mx-auto mt-10 mb-2 flex items-center gap-3">${validate_component(Root$1, "Select.Root").$$render(
      $$result,
      {
        onSelectedChange: (v) => {
          data.limit = v?.value;
        },
        selected
      },
      {
        selected: ($$value) => {
          selected = $$value;
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
    )} <a${add_attribute("href", "non-participants?page=1&limit=" + data.limit, 0)}>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Apply`;
      }
    })}</a> ${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
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
      data.page > 1 ? "non-participants?page=" + (data.page - 1) + "&limit=" + data.limit : "",
      0
    )} class="p-1 border mx-4 flex"><span class="material-symbols-outlined" data-svelte-h="svelte-19z8hyk">chevron_left</span></a> <div class="">Page ${escape(data.page)}/ ${escape(Math.ceil(data.count / data.limit))}</div> <a${add_attribute(
      "href",
      data.page < Math.ceil(data.count / data.limit) ? "non-participants?page=" + (data.page + 1) + "&limit=" + data.limit : "",
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
//# sourceMappingURL=_page.svelte-DAnpAGRZ.js.map
