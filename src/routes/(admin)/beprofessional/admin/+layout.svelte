<script lang="ts">

    import { Button } from "$lib/shardcn/ui/button/index";
    import * as Sheet from "$lib/shardcn/ui/sheet/index";
	  import {LogOut, Menu } from "lucide-svelte";
    import { Label } from "$lib/shardcn/ui/label/index";
    import { Input } from "$lib/shardcn/ui/input/index";
	  import { goto } from "$app/navigation";

    let open = false;

</script>

<main class="bg-white min-h-[90svh] text-black">
  <div class="flex items-center w-[90%] mx-auto gap-3">
    <Sheet.Root bind:open>
      <Sheet.Trigger asChild let:builder>
        <Button builders={[builder]} >
          <Menu></Menu>
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <Sheet.Header>
          <Sheet.Title>Menu</Sheet.Title>
          <Sheet.Description>
          </Sheet.Description>
        </Sheet.Header>
        <div class="grid gap-4 py-4 w-full">
          <Sheet.Close asChild let:builder>
            <Button class="text-black" variant="outline" on:click={() => { open=false; goto("/beprofessional/admin") }} >Participations</Button>
            <Button class="text-black" variant="outline" on:click={() => { open=false; goto("/beprofessional/admin/non-participants") }}>Non participants</Button>
            <Button class="text-black" variant="outline" on:click={() => { open=false; goto("/beprofessional/admin/verified") }}>Verified</Button>
            <Button class="text-black" variant="outline" on:click={() => { open=false; goto("/beprofessional/admin/tickets") }}>Tickets</Button>
            <Button class="text-black" variant="outline" on:click={() => { open=false; goto("/beprofessional/admin/tickets-approved") }}>Tickets Approved</Button>
            <Button class="text-black" variant="outline" on:click={() => { open=false; goto("/beprofessional/admin/treasure-hunt") }}>Treasure Hunt</Button>
          </Sheet.Close>
        </div>
      </Sheet.Content>
    </Sheet.Root>
    <form class="flex flex-1 items-center justify-between mx-auto text-sm my-6 rounded-md text-slate-800 gap-3" action="/beprofessional/admin?/logout" method="post">
      <p class="border p-2 px-4 flex-1 text-center border-red-400 border-opacity-45 bg-red-100">Please logout as soon as you are done with the admin panel. Do not leave it signed in</p>
      <Button type="submit">
        <LogOut></LogOut>
      </Button>
    </form>
</div>

<slot>

</slot>

</main>