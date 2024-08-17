<script lang="ts">
    import { PRICE } from "$lib/constants/constants";
    import Button from "$lib/shardcn/ui/button/button.svelte";
    import Input from "$lib/shardcn/ui/input/input.svelte";
    import Label from "$lib/shardcn/ui/label/label.svelte";
    import { TransactionSchema } from "$lib/zod/types.js";
    import type { ActionData } from "../../$types.js";
    import { qr } from '@svelte-put/qr/svg';
    import { fade, fly } from 'svelte/transition';

    export let data;
    export let form: ActionData;

    let count = 1;
    let countError = "";
    let fileError = "";
    let file: File | null = null;
    let transactionId = "";
    let transactionError = "";

    // Validate the transaction ID using the TransactionSchema
    $: transactionError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || '';

    // Validate the count to ensure it's a positive number
    $: countError = count < 1 ? "Enter a valid positive number" : "";

    // Calculate the total amount payable
    $: totalAmount = countError ? "__" : count * PRICE;

    // Handle file input change event and validate file size
    function fileChanged(e: Event) {
        const target = e.target as HTMLInputElement;
        if (!target.files) return;

        file = target.files[0];
        if (file.size > 400000) fileError = 'File size must be less than 400KB';
        else fileError = '';
    }
</script>

<main class="container mx-auto mt-6 p-4 max-w-6xl">
    <section id="ticket" class="relative relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto border border-[#63BDC2]overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('/images/agents/img.webp');"></div>
        
        <div class="relative bg-gradient-to-r from-[#D4566C] to-[#63BDC2] text-white py-6 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-center">
    <h1 class="font-fugaz text-3xl md:text-4xl uppercase tracking-wider text-center md:text-left">Euphoria Respawn</h1>

    {#if data.viewer}
        <div class="mt-4 md:mt-0 flex items-center">
            <span class="mr-4 text-base md:text-lg font-semibold">Welcome, {data.viewer.name}!</span>
            <form method="POST" action="?/logout">
                <button aria-label="Log out" class="text-white hover:text-red-300 transition-colors duration-300" type="submit">
                    <i class="fa-solid fa-right-from-bracket text-lg md:text-xl"></i>
                </button>
            </form>
        </div>
    {/if}
</div>


        <div class="relative flex flex-col md:flex-row p-8">
            <!-- Left Section: Event Details -->
            <div class="w-full md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0 border-b md:border-b-0 md:border-r border-gray-200">
                <h2 class="text-2xl font-bold mb-4 text-[#63BDC2]">Event Details</h2>
                <p class="mb-2">Rajagiri Sports and Cultural Centre</p>
                <p class="mb-4">Rajagiri College of Social Sciences</p>
                <p class="text-2xl font-bold mt-6 text-yellow-400">31.08.2024</p>
                <p class="text-lg text-white-600 mb-6">DOORS OPEN: 9:00 AM</p>

                <div class="bg-[#D4566C]/20 rounded-lg p-4 mb-4">
                    <p class="text-xl font-semibold text-[#D4566C]">Ticket Price</p>
                    <p class="text-3xl font-bold text-[#63BDC2]">₹{PRICE.battle}</p>
                </div>
                <div class="bg-[#63BDC2]/20 rounded-lg p-4">
                    <h3 class="text-lg font-semibold mb-2 text-[#63BDC2]">Scan to Pay</h3>
                    <div class=" rounded-lg grid">
                            <img src="/images/payment.png" class="w-4/6 m-auto my-2 text-sm md:w-3/5" alt="">
                    </div>
                    <p class="mt-2 text-sm font-semibold">UPI ID: rajagiricss@sbi</p>
                </div>
            </div>

            <!-- Right Section: Booking Form or Ticket QR -->
            <div class="w-full md:w-2/3 pl-0 md:pl-6 mt-6 md:mt-0 relative">
                {#if !data.ticket}
                    <form enctype="multipart/form-data" action="?/book" method="post" class="space-y-6" transition:fade>
                        <h2 class="text-2xl font-bold mb-4 text-[#D4566C]">Book Your Tickets</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label for="count" class="block text-sm font-medium mb-1 text-[#63BDC2]">Number of Tickets</Label>
                                <Input 
                                    id="count"
                                    bind:value={count} 
                                    name="count" 
                                    type="number" 
                                    class="w-full px-3 py-2 border bg-white/10  border-[#63BDC2] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#D4566C] focus:border-transparent" 
                                    placeholder="Enter ticket count" 
                                />
                                {#if countError}
                                    <p class="text-red-500 text-xs mt-1">{countError}</p>
                                {/if}
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-[#D4566C] mb-2">Amount Payable</h2>
                                <p class="text-3xl font-semibold text-green-400">
                                    ₹ Rs. {countError ? "__" : count * PRICE.battle}
                                </p>
                            </div>
                        </div>
                        <div>
                            <Label for="upi-transaction-id" class="block text-sm font-medium mb-1 text-[#63BDC2]">UPI Transaction ID</Label>
                            <Input
                                id="upi-transaction-id"
                                bind:value={transactionId}
                                required
                                type="text"
                                name="upi-transaction-id"
                                placeholder="Enter UPI Transaction ID"
                                class="w-full px-3 py-2 border bg-white/10 border border-[#63BDC2] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#D4566C] focus:border-transparent"
                                    />
                                    {#if transactionId !== '' && transactionError}
                                        <p class="text-[#D4566C] text-xs mt-1">{transactionError}</p>
                                    {/if}

                        </div>
                        <div>
                            <Label for="payment-screenshot" class="block text-sm font-medium mb-1 text-[#63BDC2]">Payment Screenshot</Label>
                            <Input
                                id="payment-screenshot"
                                on:change={fileChanged}
                                required
                                accept=".jpg, .jpeg, .png"
                                type="file"
                                name="payment-screenshot"
                                class="w-full px-3 py-2 border bg-white/10 border border-[#63BDC2] rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4566C] file:text-white hover:file:bg-[#63BDC2]"
                                />
                                {#if fileError}
                                    <p class="text-[#D4566C] text-xs mt-1">{fileError}</p>
                                {/if}
                            </div>
                            {#if form}
                                <p class="text-sm {form.success ? 'text-[#63BDC2]' : 'text-[#D4566C]'} font-semibold">
                                    {form.message}
                                </p>
                            {/if}

                        <Button
                            disabled={!transactionId || transactionError || fileError || countError}
                            class="w-full py-3 px-6 bg-gradient-to-r from-[#63BDC2] to-[#D4566C] hover:from-[#D4566C] hover:to-[#63BDC2] text-white text-lg font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                        >
                            Book Tickets
                        </Button>
                    </form>
                {:else}
                    <div class="text-center" >
                        <h2 class="text-2xl font-bold mb-4 text-[#63BDC2]">Your Ticket</h2>
                        <svg
                        class="w-2/3 mx-auto"
                            use:qr={{
                                data: `https://euphoria.rlabz.in/verify/viewer/` + data.ticket.uuid,
                                logo: '/images/logos/euphoria.png',
                                shape: 'circle',
                            }}
                        />
                        <p class="mt-4 text-lg font-semibold text-[#63BDC2]">Ticket #: {data.ticket.uuid}</p>
                        <p class="">Status: {data.ticket.verified ? "Verified" : "Verification Pending"}</p>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Important Notes Section -->
        <div class="relative bg-gradient-to-r from-[#D4566C]/10 to-[#63BDC2]/10 p-6 border-t border-gray-600">
            <h2 class="text-xl font-bold mb-3 text-[#D4566C]">Important Notes</h2>
            <ul class="list-disc list-inside text-white space-y-2">
                <li>Please bring a valid ID proof for entry.</li>
                <li>Keep your ticket QR code handy for quick access.</li>
                <li>Arrive at least 30 minutes before the event start time.</li>
                <li>Outside food and beverages are not permitted.</li>
            </ul>
        </div>

        <!-- Ticket Footer -->
        <div class="relative bg-gradient-to-r from-[#D4566C] to-[#63BDC2] text-white py-4 px-8 text-center">
            <p class="text-lg font-semibold">Present this ticket at the entrance. Have an unforgettable experience!</p>
        </div>
    </section>
</main>

<style>
    :global(body) {
        background-color: #1a1a2e;
        font-family: 'Inter', sans-serif;
    }
</style>
