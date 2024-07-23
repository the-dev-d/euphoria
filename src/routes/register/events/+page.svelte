<script lang="ts">
	import { Button } from "$lib/shardcn/ui/button";
    import { Checkbox } from "$lib/shardcn/ui/checkbox";
	import { Label } from "$lib/shardcn/ui/label";
    import * as RadioGroup from "$lib/shardcn/ui/radio-group/index";
	import type { ActionData } from "../$types";


    const events = {
        coding:"",
        webDesigning: false,
        treasureHunt: false
    }

    async function handleSubmit(event:SubmitEvent) {
    event.preventDefault();
    const form = new FormData(event.target);

    const response = await fetch('/register/events', {
      method: 'POST',
      body: form
    });

    if (!response.ok) {
      const result = await response.json();
      if (result.errors) {
        return;
      }
    }

  }

    export let data: ActionData; 
    
  </script>

<main class="w-full bg-slate-100 h-[100svh] grid place-items-center">
    <form on:submit={handleSubmit} method="POST" class="grid gap-6 bg-white p-8 rounded-md shadow-md w-1/3">
        <div class="flex items-center gap-6">
            <RadioGroup.Root bind:value={events.coding}>
                <div class="grid gap-3">
                    <div>
                        <RadioGroup.Item value="ug"></RadioGroup.Item>
                        <Label>Coding UG</Label>
                    </div>
                    <div>
                        <RadioGroup.Item value="pg"></RadioGroup.Item>
                        <Label>Coding PG</Label>
                    </div>
                </div>
                <RadioGroup.Input name="coding" />
            </RadioGroup.Root>
            <Button on:click={() => events.coding = ""}>Clear</Button>
        </div>
        <div class="flex items-center space-x-2">
        <Checkbox name="webDesigning" id="webDesigning" value="web" bind:checked={events.webDesigning} aria-labelledby="web_designing" />
        <Label
            id="web_designing"
            for="webDesigning"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Web Designing
        </Label>
        </div>
        <div class="flex items-center space-x-2">
        <Checkbox name="treasureHunt" id="treasureHunt" value="treasure" bind:checked={events.treasureHunt} aria-labelledby="treasure_hunt" />
        <Label
            id="treasure_hunt"
            for="treasureHunt"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Treasure Hunt
        </Label>
        </div>
        <Button type="submit">Register</Button>
        <p>
            {#if data}
                {JSON.stringify(data)}
            {/if}
        </p>
    </form>
</main>