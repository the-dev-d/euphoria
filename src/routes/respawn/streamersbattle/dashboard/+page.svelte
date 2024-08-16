<script lang="ts">
	import { PRICE } from "$lib/constants/constants";
	import Button from "$lib/shardcn/ui/button/button.svelte";
	import Input from "$lib/shardcn/ui/input/input.svelte";
	import Label from "$lib/shardcn/ui/label/label.svelte";
	import { TransactionSchema } from "$lib/zod/types.js";
	import type { ActionData } from "../../$types.js";
    import { qr } from '@svelte-put/qr/svg';


    export let data;
    let count = 1;
    let countError = "";
    let fileError = "";
    let file: File | null = null;
    let transactionId = "";
    let transactionError = "";

    $: transactionError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || '';

    export let form: ActionData;

    $: countError = count < 1 ? "Enter a valid positive number" : "";

    function fileChanged(e: FormInputEvent) {
		if (!e.target.files) return;

		file = e.target.files[0];
		if (file.size > 400000) fileError = 'File size must be less than 400KB';
		else fileError = '';
	}

</script>

<main class="container mx-auto mt-6">
    <div class="flex h-fit mb-5 justify-between">
        {#if data.viewer}
            <h2 class="font-fugaz text-viper text-4xl gl:text-6xl uppercase">Welcome {data.viewer.name} !</h2> 
            <form method="POST" action="?/logout">
                <button class="fa-solid fa-right-from-bracket my-auto ml-6 scale-105 hover:bg-slate-500 p-3 rounded-full border" type="submit" ></button>
            </form>
        {/if}
    </div>
    {#if !data.ticket}
    <form enctype="multipart/form-data" action="?/book" method="post">
        <div>
            <Label>How many tickets</Label>
            <Input bind:value={count} name="count" type="number" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);" placeholder="Ticker Count" />
            {#if countError}
                <p class="text-red-400 text-xs mt-2">{countError}</p>
            {/if}
        </div>

        <div class="mt-3">
			<h2 class="text-lg font-bold text-green-500">Amount Payable</h2>
			<h1 class="my-1 text-2xl font-semibold">
				Rs. {countError ? "__" : count * PRICE.battle} /-
			</h1>
		</div>
        <div>
            <Label>Payment Screenshot</Label>
            <Input
                on:change={fileChanged}
                required
                accept=".jpg, .jpeg, .png"
                type="file"
                name="payment-screenshot"
                placeholder="email"
                class="max-w-xs bg-transparent text-white"
            />
            <p class="my-1 text-sm text-red-400">{fileError}</p>
        </div>
        <div>
            <Label>UPI transaction id</Label>
            <Input
                bind:value={transactionId}
                required
                type="number"
                name="upi-transaction-id"
                placeholder="UPI Transaction id"
                class="max-w-xs bg-transparent"
            />
            {#if transactionId !== ''}
                <p class="mt-2 text-xs text-red-400">{transactionError}</p>
            {/if}
        </div>
        {#if form && !form.success}
			<p class="my-1 text-sm text-red-400">
				{form.message}
			</p>
		{:else if form}
			<p class="my-1 text-sm text-green-500">
				{form.message}
			</p>
		{/if}
		<Button
			disabled={
				transactionId == '' ||
				transactionError !== '' ||
				fileError !== '' ||
                countError !== ''}
			class=" rounded-xl border-2 border-btn-main bg-btn-main mt-5"
			type="submit">Book Tickets</Button
		>
    </form>
    {:else}
    <div class="container max-w-96">
        <svg
            use:qr={{
                data: `https://euphoria.rlabz.in/verify/viewer/` + data.ticket.uuid,
                logo: '/images/logos/euphoria.png',
                shape: 'circle',
            }}
            />
    </div>      
    {/if}
</main>