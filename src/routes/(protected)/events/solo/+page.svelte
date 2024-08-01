<script lang="ts">
	import { Button } from "$lib/shardcn/ui/button";
    import { Checkbox } from "$lib/shardcn/ui/checkbox";
	import { Input, type FormInputEvent } from "$lib/shardcn/ui/input";
	import { Label } from "$lib/shardcn/ui/label";
    import * as RadioGroup from "$lib/shardcn/ui/radio-group/index";
	import type { ActionData } from "./$types";
    import { PRICE } from "../../../../lib/constants/constants";
	import { TransactionSchema } from "$lib/zod/types";


    const events = {
        codingUG: {
            amount: PRICE.codingUG,
            status: false
        },
        codingPG: {
            amount: PRICE.codingPG,
            status: false
        },
        webDesigning: {
            amount: PRICE.webDesigning,
            status: false
        },
    }

    let file:File|null = null;
    let fileError = "";
    let transactionError = "";

    $: transactionError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || "";

    function fileChanged(e: FormInputEvent) {

        if(!e.target.files)
            return;
            
        file = e.target.files[0];
        if(file.size > 400000)
            fileError = "File size must be less than 400KB"
        else
            fileError = "";
        
    }
    let transactionId = "";

    let amountPayable = 0;
    $: amountPayable = (events.codingUG.status ? events.codingUG.amount : 0) + (events.codingPG.status ? events.codingPG.amount : 0) + (events.webDesigning.status ? events.webDesigning.amount : 0);

    export let form: ActionData;

  </script>

<main class="w-full bg-slate-100 h-[100svh] grid place-items-center">
    <form method="POST" class="grid text-black gap-6 bg-white p-8 rounded-md shadow-md w-1/3"   enctype="multipart/form-data">
        <div class="grid items-center grid-cols-2">
            <div class="grid gap-6">
                <div class="flex items-center space-x-2">
                    <input type="checkbox" on:change={(e) => {
                        if(e.target?.checked) {
                            events.codingPG.status = false;
                            events.codingUG.status = true
                        }else 
                            events.codingUG.status = false
                    }} name="coding-ug" id="codingUG" value="coding-ug" bind:checked={events.codingUG.status} aria-labelledby="coding-ug" />
                    <Label
                        id="web_designing"
                        for="codingUG"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Coding (UG)
                    </Label>
                </div>
                <div class="flex items-center space-x-2">
                    <input on:change={(e) => {
                        if(e.target?.checked) {
                            events.codingUG.status = false;
                            events.codingPG.status = true
                        }else 
                            events.codingPG.status = false
                    }} type="checkbox" name="coding-pg" id="codingPG" value="coding-pg" bind:checked={events.codingPG.status} aria-labelledby="coding-pg" />
                    <Label
                        id="coding-pg"
                        for="codingPG"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Coding (PG)
                    </Label>
                </div>
                <div class="flex items-center space-x-2">
                    <input type="checkbox" name="web-designing" id="webDesigning" value="web" bind:checked={events.webDesigning.status} aria-labelledby="web_designing" />
                    <Label
                        id="web_designing"
                        for="webDesigning"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Web Designing
                    </Label>
                </div>
            </div>
            <div class="h-full">
                <h2 class="text-lg">Amount Payable</h2>
                <h1 class="my-1 text-2xl font-semibold">
                    Rs.{amountPayable}
                </h1>
            </div>

        </div>
        <div class="grid gap-4 mt-4">
            <div>
                <Label>
                    Payment Screenshot
                </Label>
                <Input on:change={fileChanged} required accept=".jpg, .jpeg, .png" type="file" name="payment-screenshot" placeholder="email" class="max-w-xs" />
                <p class="text-red-400 text-sm my-1">{fileError}</p>
            </div>
            <div>
                <Label>
                    UPI transaction id
                </Label>
                <Input bind:value={transactionId} required type="number" name="upi-transaction-id" placeholder="UPI Transaction id" class="max-w-xs" />
                {#if transactionId !== ""}
                   <p class="text-red-400 text-xs mt-2"> {transactionError}</p>
                {/if}
            </div>
        </div>
        {#if form && !form.success }
            <p class="my-1 text-red-400 text-sm">
                {form.message}
            </p>
        {:else if form }
            <p class="my-1 text-green-500 text-sm">
                {form.message}
            </p>
        {/if}
        <Button disabled={ (!(events.codingPG.status || events.codingUG.status || events.webDesigning.status )) || transactionId == "" || fileError !== "" }  type="submit">Register</Button>
    </form>
</main>