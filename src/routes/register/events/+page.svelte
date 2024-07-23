<script lang="ts">
	import { Button } from "$lib/shardcn/ui/button";
    import { Checkbox } from "$lib/shardcn/ui/checkbox";
	import { Label } from "$lib/shardcn/ui/label";
    import * as RadioGroup from "$lib/shardcn/ui/radio-group/index";
	import type { ActionData } from "../$types";


    const events = {
        coding:"",
        webDesigning: false,
    }

    export let data: ActionData; 
    
  </script>

<main class="w-full bg-slate-100 h-[100svh] grid place-items-center">
    <form method="POST" class="grid gap-6 bg-white p-8 rounded-md shadow-md w-1/3">
        <div class="grid items-center grid-cols-2">
            <div class="grid gap-6">
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
                <div class="flex items-center space-x-2">
                    <input type="checkbox" name="web-designing" id="webDesigning" value="web" bind:checked={events.webDesigning} aria-labelledby="web_designing" />
                    <Label
                        id="web_designing"
                        for="webDesigning"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Web Designing
                    </Label>
                </div>
            </div>
            <Button on:click={() => { events.coding = ""; events.webDesigning = false; }}>Clear</Button>

        </div>
        <Button disabled={events.coding === "" && !events.webDesigning } type="submit">Register</Button>
    </form>
</main>