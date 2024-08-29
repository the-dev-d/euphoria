<script>
	import { onDestroy } from 'svelte';

	let targetDate = new Date('2024-08-31T00:00:00');
	let timeRemaining = calculateTimeRemaining(targetDate);
	let isTimeUp = false;

	function calculateTimeRemaining(target) {
		const now = new Date();
		const difference = target - now;
		const secondsInMinute = 60;
		const secondsInHour = 3600;
		const secondsInDay = 86400;

		const days = Math.floor(difference / (secondsInDay * 1000));
		const hours = Math.floor((difference % (secondsInDay * 1000)) / (secondsInHour * 1000));
		const minutes = Math.floor((difference % (secondsInHour * 1000)) / (secondsInMinute * 1000));
		const seconds = Math.floor((difference % (secondsInMinute * 1000)) / 1000);

		return { days, hours, minutes, seconds };
	}

	function updateTimer() {
		timeRemaining = calculateTimeRemaining(targetDate);
		if (
			timeRemaining.days <= 0 &&
			timeRemaining.hours <= 0 &&
			timeRemaining.minutes <= 0 &&
			timeRemaining.seconds <= 0
		) {
			clearInterval(timerInterval);
			isTimeUp = true;
		}
	}

	let timerInterval = setInterval(updateTimer, 1000);

	onDestroy(() => {
		clearInterval(timerInterval);
	});
</script>

<section
	class="absolute left-0 top-0 grid h-full w-full grid-cols-none grid-rows-2 content-end gl:grid-cols-1 gl:grid-rows-none"
>
	<div
		class=" z-[-1] hidden w-full items-center justify-start gap-10 bg-counter bg-opacity-70 gl:flex"
	>
		{#if !isTimeUp}
			<h1 class="ml-20 text-6xl font-bold text-white">IN</h1>
			<time
				class="grid h-full w-2/3 grid-cols-8 place-items-center p-3 text-6xl font-bold text-white"
			>
				<div class="flex animate-pulse flex-col items-center justify-center gap-4 text-red-700">
					<div>{timeRemaining.days.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-3xl">Days</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-4">
					<div>:</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-4">
					<div>{timeRemaining.hours.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-3xl">Hours</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-4">
					<div>:</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-4">
					<div>{timeRemaining.minutes.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-3xl">Minutes</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-4">
					<div>:</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-4">
					<div>{timeRemaining.seconds.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-3xl">Seconds</div>
				</div>
			</time>
		{:else}
			<div
				class=" w-full py-4 text-left px-20 font-valorant text-xl font-bold uppercase text-white gl:text-5xl"
			>
				It's go time! Welcome to <span class=" text-red-500 drop-shadow-2xl">RESPAWN!</span>
			</div>
		{/if}
	</div>
	<div></div>
	<div
		class=" relative flex h-full w-full flex-col items-center justify-center bg-counter bg-opacity-20 pt-5 backdrop-brightness-50 gl:hidden"
	>
		{#if !isTimeUp}
			<h1 class="text-4xl font-bold text-white">IN</h1>
			<time
				class="grid h-full w-full grid-cols-7 place-items-center p-3 text-4xl font-bold text-white"
			>
				<div class="grid animate-pulse grid-rows-2 place-items-center text-red-700">
					<div>{timeRemaining.days.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-base">Days</div>
				</div>
				<div class="grid grid-rows-2 place-items-center">
					<div>:</div>
				</div>
				<div class="grid grid-rows-2 place-items-center">
					<div>{timeRemaining.hours.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-base">Hours</div>
				</div>
				<div class="grid grid-rows-2 place-items-center">
					<div>:</div>
				</div>
				<div class="grid grid-rows-2 place-items-center">
					<div>{timeRemaining.minutes.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-base">Minutes</div>
				</div>
				<div class="grid grid-rows-2 place-items-center">
					<div>:</div>
				</div>
				<div class="grid grid-rows-2 place-items-center">
					<div>{timeRemaining.seconds.toString().padStart(2, '0')}</div>
					<div class="font-valorant text-base">Seconds</div>
				</div>
			</time>
		{:else}
			<div
				class="py-4 w-full text-center font-valorant text-2xl font-bold uppercase text-white"
			>
				It's go time! Welcome to <span class=" text-red-500 drop-shadow-2xl">RESPAWN!</span>
			</div>
		{/if}
	</div>
</section>

<style>
</style>
