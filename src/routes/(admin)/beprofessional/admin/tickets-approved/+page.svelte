<script lang="ts">
    import * as Table from "$lib/shardcn/ui/table";
    import * as AlertDialog from "$lib/shardcn/ui/alert-dialog";
    import { Button } from "$lib/shardcn/ui/button/index";
    import * as Dialog from "$lib/shardcn/ui/dialog/index";
    import { invalidate, invalidateAll } from "$app/navigation";
    import Badge from "$lib/shardcn/ui/badge/badge.svelte";
    import { createRender, createTable, Render, Subscribe } from "svelte-headless-table";
    import * as Pagination from "$lib/shardcn/ui/pagination";
    import * as Select from "$lib/shardcn/ui/select";
	  import { readable, writable } from "svelte/store";
    import { Root } from "postcss";
    import * as Sheet from "$lib/shardcn/ui/sheet/index";
    import {
      addHiddenColumns,
	  addPagination,
    } from "svelte-headless-table/plugins";
    import * as DropdownMenu from "$lib/shardcn/ui/dropdown-menu";
	  import ButtonWrapper from "$lib/components/shardcn-wrappers/ButtonWrapper.svelte";
	  import { ChevronDown, LogOut, Menu, Sandwich } from "lucide-svelte";
    import type { Selected } from "bits-ui";
    import { Label } from "$lib/shardcn/ui/label/index";
    import { Input } from "$lib/shardcn/ui/input/index";

    export let data;
    
    const tableData = writable([]);
    const table = createTable(tableData, {
      hide: addHiddenColumns(),
    });
    $:{
      tableData.set(data.tickets);
    }


    const columns = table.createColumns([
      table.column({
        accessor: (a) => a.viewer.name,
        header: "Name"
      }),

      table.column({
        accessor: (a) => a.viewer.email,
        header: "Email"
      }),

      table.column({
        accessor: (a) => a.viewer.phone,
        header: "Phone"
      }),

      table.column({
        accessor: (a) => a.upi_transaction_id,
        header: "UPI Transaction ID"
      }),

      table.column({
        accessor: (a) => a.screenshot,
        header: "Screenshot",
        cell: ({value}) => {
          return createRender(ButtonWrapper, {label: "View", click: () => {handleScreenshotShow(value)}})
        }
      })
    ]);

    const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns } = table.createViewModel(columns);
    const { hiddenColumnIds } = pluginStates.hide;

    const ids = flatColumns.map((col) => col.id);
    let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
    
    $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);

    const hidableCols = ["Name", "Email","Phone", "UPI Transaction ID"];

    let currentParticipation = 0;
    let currentScreenshot = "";

    let pageSize = data.limit;
    let pageNumber = data.pageNumber;

    let open = false;
    let ssopen = false;

    function handleScreenshotShow(screenshot: string) {
        currentScreenshot = screenshot;
        ssopen = true;
    }

    let limitSelected:Selected<number> = {
      value: data.limit,
      label: ""+data.limit
    };

    let filterSelected:Selected<number> = {
      value: data.filter || null,
      label: data.filter ? ""+data.filter : "Select filter"
    };
</script>

<main class="bg-white min-h-[90svh] text-black">
  <div>  
      <Dialog.Root bind:open={ssopen}>
      <Dialog.Content>
          <Dialog.Header>
          <Dialog.Title>
              <span class="text-black">Screenshot</span>
          </Dialog.Title>
          <Dialog.Description>
              <img class="max-h-[70svh] mx-auto" src={currentScreenshot.replace("static", "")} alt={currentScreenshot.replace("static", "")}>
          </Dialog.Description>
          </Dialog.Header>
      </Dialog.Content>
      </Dialog.Root>
  </div>
  <!-- {JSON.stringify(participation)} -->
  <div class="w-[90%] mx-auto mt-10 mb-2 flex items-center gap-3">
      <Select.Root bind:selected={limitSelected} onSelectedChange={(v) => {data.limit = v?.value;}}>
          <Select.Trigger  class="w-[180px]">
            <Select.Value placeholder="Page Size" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="2">2</Select.Item>
            <Select.Item value="10">10</Select.Item>
            <Select.Item value="20">20</Select.Item>
            <Select.Item value="30">30</Select.Item>
            <Select.Item value="40">40</Select.Item>
            <Select.Item value="50">50</Select.Item>
          </Select.Content>
        </Select.Root>
        <a href={"verified?page=1&limit="+data.limit+"&filter="+data.filter}>
          <Button>Apply</Button>
        </a>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button variant="outline" class="ml-auto" builders={[builder]}>
              Columns <ChevronDown class="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {#each flatColumns as col}
              {#if hidableCols.includes(col.id)}
                <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
                  {col.header}
                </DropdownMenu.CheckboxItem>
              {/if}
            {/each}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
  </div>
  <div class="w-[90%] mx-auto border rounded-md">
    <!-- {JSON.stringify($tableData)} -->
      <Table.Root {...$tableAttrs}>
        <Table.Header>
          {#each $headerRows as headerRow}
            <Subscribe rowAttrs={headerRow.attrs()}>
              <Table.Row>
                {#each headerRow.cells as cell (cell.id)}
                  <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
                    <Table.Head {...attrs}>
                      <Render of={cell.render()} />
                    </Table.Head>
                  </Subscribe>
                {/each}
              </Table.Row>
            </Subscribe>
          {/each}
        </Table.Header>
        <Table.Body {...$tableBodyAttrs}>
          {#each $pageRows as row (row.id)}
            <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
              <Table.Row {...rowAttrs}>
                {#each row.cells as cell (cell.id)}
                  <Subscribe attrs={cell.attrs()} let:attrs>
                    <Table.Cell {...attrs}>
                      <Render of={cell.render()} />
                    </Table.Cell>
                  </Subscribe>
                {/each}
              </Table.Row>
            </Subscribe>
          {/each}
        </Table.Body>
      </Table.Root>
  </div>
  <div class="w-[90%] mx-auto flex items-center justify-end text-xs my-4">
      <div>
        Total {data.count} records
      </div>
      <div class="flex items-center justify-center">
        <a href={data.pageNumber > 1 ? "verified?page="+(data.pageNumber - 1)+"&limit="+data.limit : ""} class="p-1 border mx-4 flex">
          <span class="material-symbols-outlined">
              chevron_left
          </span>
        </a>
        <div class="">
            Page {data.pageNumber}/ {Math.ceil(data.count/data.limit)}
        </div>
        <a href="{data.pageNumber < Math.ceil(data.count/data.limit) ? "verified?page="+(data.pageNumber + 1)+"&limit="+data.limit : ""}" class="p-1 border mx-4 flex">
            <span class="material-symbols-outlined">
                chevron_right
            </span>
        </a>
      </div>
  </div>
</main>