<script>
	import { onDestroy } from 'svelte';

	let targetDate = new Date('2024-08-27T00:00:00');
	let timeRemaining = calculateTimeRemaining(targetDate);

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
		}
	}

	let timerInterval = setInterval(updateTimer, 1000);

	onDestroy(() => {
		clearInterval(timerInterval);
	});
</script>

<section
	class="absolute top-0 left-0 w-full h-full content-end grid grid-rows-2 grid-cols-none gl:grid-cols-1 gl:grid-rows-none"
>
	<div class=" hidden gl:flex bg-counter w-full items-center justify-start gap-10 bg-opacity-70">
		<h1 class="ml-20 text-6xl font-bold text-white">IN</h1>
		<time class="h-full w-2/3 text-white grid grid-cols-8 font-bold text-6xl">
			<div class="grid grid-rows-2 place-items-center">
				<div>{timeRemaining.days.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-3xl">Days</div>
			</div>
			<div class="grid grid-rows-2 place-items-center">
				<div>:</div>
			</div>
			<div class="grid grid-rows-2 place-items-center">
				<div>{timeRemaining.hours.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-3xl">Hours</div>
			</div>
			<div class="grid grid-rows-2 place-items-center">
				<div>:</div>
			</div>
			<div class="grid grid-rows-2 place-items-center">
				<div>{timeRemaining.minutes.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-3xl">Minutes</div>
			</div>
			<div class="grid grid-rows-2 place-items-center">
				<div>:</div>
			</div>
			<div class="grid grid-rows-2 place-items-center">
				<div>{timeRemaining.seconds.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-3xl">Seconds</div>
			</div>
		</time>
	</div>
	<div></div>
	<div
		class=" relative flex flex-col gl:hidden bg-counter backdrop-brightness-50 h-full w-full justify-center items-center bg-opacity-20 pt-5"
	>
		<h1 class="text-4xl font-bold text-white">IN</h1>
		<time
			class="h-full w-full text-white grid grid-cols-7 place-items-center font-bold text-4xl p-3"
		>
			<div class="grid grid-rows-2 place-items-center">
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
	</div>
</section>

<style>
</style>
