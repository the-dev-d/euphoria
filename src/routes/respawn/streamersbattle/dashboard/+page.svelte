<script lang="ts">
	import { PRICE } from '$lib/constants/constants';
	import Button from '$lib/shardcn/ui/button/button.svelte';
	import Input from '$lib/shardcn/ui/input/input.svelte';
	import Label from '$lib/shardcn/ui/label/label.svelte';
	import { TransactionSchema } from '$lib/zod/types.js';
	import type { ActionData } from '../../$types.js';
	import { qr } from '@svelte-put/qr/svg';
	import { fade, fly } from 'svelte/transition';

	export let data;
	export let form: ActionData;

	let count = 1;
	let countError = '';
	let fileError = '';
	let file: File | null = null;
	let transactionId = '';
	let transactionError = '';

	// Validate the transaction ID using the TransactionSchema
	$: transactionError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || '';

	// Validate the count to ensure it's a positive number
	$: countError = count < 1 ? 'Enter a valid positive number' : '';

	// Calculate the total amount payable
	$: totalAmount = countError ? '__' : count * PRICE;

	// Handle file input change event and validate file size
	function fileChanged(e: Event) {
		const target = e.target as HTMLInputElement;
		if (!target.files) return;

		file = target.files[0];
		if (file.size > 400000) fileError = 'File size must be less than 400KB';
		else fileError = '';
	}
</script>

<main class="container mx-auto mt-6 max-w-6xl p-4">
	<section
		id="ticket"
		class="border-[#63BDC2]overflow-hidden relative mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
	>
		<div
			class="absolute inset-0 bg-cover bg-center opacity-20"
			style="background-image: url('/images/agents/img.webp');"
		></div>

		<div
			class="relative flex flex-col items-center bg-gradient-to-r from-[#D4566C] to-[#63BDC2] px-4 py-6 text-white sm:px-6 md:flex-row md:justify-between md:px-8"
		>
			<h1 class="text-center font-fugaz text-3xl uppercase tracking-wider md:text-left md:text-4xl">
				Euphoria Respawn
			</h1>

			{#if data.viewer}
				<div class="mt-4 flex items-center md:mt-0">
					<span class="mr-4 text-base font-semibold md:text-lg">Welcome, {data.viewer.name}!</span>
					<form method="POST" action="?/logout">
						<button
							aria-label="Log out"
							class="text-white transition-colors duration-300 hover:text-red-300"
							type="submit"
						>
							<i class="fa-solid fa-right-from-bracket text-lg md:text-xl"></i>
						</button>
					</form>
				</div>
			{/if}
		</div>

		<div class="item-center relative flex flex-col justify-center p-8 md:flex-row">
			<!-- Right Section: Booking Form or Ticket QR -->
			<div class="relative mt-6 w-full pl-0 md:mt-0 md:w-2/3 md:pl-6">
				{#if !data.ticket}
					<div class="text-center">
						<h2 class="mb-4 text-2xl font-bold text-[#63BDC2]">Your Ticket</h2>
						<p class="mt-4 text-left text-lg font-semibold text-[#63BDC2] gl:text-center">
							You havent Booked any tickets yet! Dont worry, spot registrations available at the
							venue
						</p>
					</div>
				{:else}
					<div class="text-center">
						<h2 class="mb-4 text-2xl font-bold text-[#63BDC2]">Your Ticket</h2>
						<svg
							class="mx-auto w-2/3"
							use:qr={{
								data:
									`https://euphoria.rlabz.in/beprofessional/admin/verify/viewer/` +
									data.ticket.uuid,
								logo: '/images/logos/euphoria.png',
								shape: 'circle'
							}}
						/>
						<p class="mt-4 text-lg font-semibold text-[#63BDC2]">Ticket #: {data.ticket.uuid}</p>
						<p class="">Status: {data.ticket.verified ? 'Verified' : 'Verification Pending'}</p>
					</div>
				{/if}
			</div>
		</div>

		<!-- Important Notes Section -->
		<div
			class="relative border-t border-gray-600 bg-gradient-to-r from-[#D4566C]/10 to-[#63BDC2]/10 p-6"
		>
			<h2 class="mb-3 text-xl font-bold text-[#D4566C]">Important Notes</h2>
			<ul class="list-inside list-disc space-y-2 text-white">
				<li>Please bring a valid ID proof for entry.</li>
				<li>Keep your ticket QR code handy for quick access.</li>
				<li>Arrive at least 30 minutes before the event start time.</li>
				<li>Outside food and beverages are not permitted.</li>
			</ul>
		</div>

		<!-- Ticket Footer -->
		<div
			class="relative bg-gradient-to-r from-[#D4566C] to-[#63BDC2] px-8 py-4 text-center text-white"
		>
			{#if !data.ticket}
				<p class="text-lg font-semibold">Book Your tickets from the couters.</p>
			{:else}
				<p class="text-lg font-semibold">
					Present this ticket at the entrance. Have an unforgettable experience!
				</p>
			{/if}
		</div>
	</section>
</main>

<style>
	:global(body) {
		background-color: #1a1a2e;
		font-family: 'Inter', sans-serif;
	}
</style>
