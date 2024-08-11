<script lang="ts">
    import * as Table from "$lib/shardcn/ui/table";
    import * as AlertDialog from "$lib/shardcn/ui/alert-dialog";
    import { Button } from "$lib/shardcn/ui/button/index";
    import * as Dialog from "$lib/shardcn/ui/dialog/index";
	import { invalidate, invalidateAll } from "$app/navigation";
	import Badge from "$lib/shardcn/ui/badge/badge.svelte";
    import * as Pagination from "$lib/shardcn/ui/pagination";
    import * as Select from "$lib/shardcn/ui/select";

    export let data;
    let participation 
    
    $: participation = data.participations || []

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

    async function handleSwitchChange(id:number) {
        currentParticipation = id;
        open = true;

    }

    async function handleContinue(e:any) {
        e.preventDefault();
        const form = new FormData();
        form.append("participationId", ""+currentParticipation);
        const res = await fetch('?/verify', {
            method: 'POST',
            body: form
        });
        invalidateAll();
        open = false;
    }

    let selected:any;

</script>

<main class="bg-white min-h-[90svh] text-black">
    <div>
        <AlertDialog.Root bind:open={open}>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description>
                  This will mark the entry as verified and will unlock new privileges to the participant. 
                  <p class="my-3"><span class="font-semibold">Warning : </span> This action is irreversible.</p>
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>
                    <span class="text-black">Cancel</span>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                    <Button on:click={handleContinue}>Continue</Button>
                </AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Root>
    </div>
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
        <Select.Root onSelectedChange={(v) => {data.limit = v?.value; selected = v}}>
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

          <!-- <Select.Root onSelectedChange={(v) => {data.limit = v?.value; selected = v}}>
            <Select.Trigger  class="w-[180px]">
              <Select.Value placeholder="Verification" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="all">All</Select.Item>
              <Select.Item value="verified">Verified</Select.Item>
              <Select.Item value="pending">Pending</Select.Item>
            </Select.Content>
          </Select.Root> -->

          <a href={"admin?page=1&limit="+data.limit}>
            <Button>Apply</Button>
          </a>
    </div>
    <div class="w-[90%] mx-auto border rounded-md">
        <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>College</Table.Head>
                <Table.Head>Event Code</Table.Head>
                <Table.Head class="">Phone</Table.Head>
                <Table.Head class="">Email</Table.Head>
                <Table.Head class="text-center">Created At</Table.Head>
                <Table.Head class="">Amount</Table.Head>
                <Table.Head class="text-center">UPI Transaction ID</Table.Head>
                <Table.Head class="">Screenshot</Table.Head>
                <Table.Head class=""></Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {#each participation as p}
                <Table.Row>
                    <Table.Cell>{p.participant.name}</Table.Cell>
                    <Table.Cell>{p.participant.college}</Table.Cell>
                    <Table.Cell>{p.event_code}</Table.Cell>
                    <Table.Cell>{p.participant.phone}</Table.Cell>
                    <Table.Cell>{p.participant.email}</Table.Cell>
                    <Table.Cell class="text-center">{p.created_at.toLocaleString()}</Table.Cell>
                    <Table.Cell class="text-center">{p.event_payment.amount} Rs</Table.Cell>
                    <Table.Cell class="text-center">{p.event_payment.upi_transaction_id}</Table.Cell>
                    <Table.Cell class="text-center">
                        <Button on:click={() => handleScreenshotShow(p.event_payment.screenshot)}>Show</Button>
                    </Table.Cell>
                    <Table.Cell class="text-right">
                        {#if p.verified}
                            <Badge>Verified</Badge>

                        {:else}
                            <Button on:click={() => handleSwitchChange(p.event_participant_id)}>Verify</Button>
                        {/if}
                    </Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>
    </div>
    <div class="flex items-center justify-center text-sm my-4">
        <a href={pageNumber > 0 ? "admin?page="+(data.pageNumber - 1)+"&limit="+data.limit : ""} class="p-1 border mx-4 flex">
            <span class="material-symbols-outlined">
                chevron_left
            </span>
        </a>
        <div class="">
            Page {data.pageNumber}/ {Math.ceil(data.count/data.limit)}
        </div>
        <a href="{pageNumber < Math.ceil(data.count/data.limit) ? "admin?page="+(data.pageNumber + 1)+"&limit="+data.limit : ""}" class="p-1 border mx-4 flex">
            <span class="material-symbols-outlined">
                chevron_right
            </span>
        </a>
    </div>
    <div>
        
    </div>
</main>