<script>
	import { onDestroy } from 'svelte';

	let targetDate = new Date('2024-08-30T00:00:00');
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


<section class="relative grid w-full content-end">
	<div class="flex w-full items-center justify-center gap-5 bg-counter bg-opacity-70 gl:gap-10">
		<h1 class="text-2xl font-bold text-white gl:text-7xl">IN</h1>
		<time
			class="grid h-full w-2/3 grid-cols-7 place-items-center p-3 text-6xl font-bold text-white"
		>
			<div
				class="flex animate-pulse flex-col items-center justify-center text-xs text-red-700 md:text-2xl gl:text-6xl"
			>
				<div>{timeRemaining.days.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-[0.5rem] md:text-2xl gl:text-3xl">Day</div>
			</div>
			<div class="flex flex-col items-center justify-center text-xs md:text-2xl gl:text-6xl">
				<div>:</div>
			</div>
			<div class="flex flex-col items-center justify-center text-xs md:text-2xl gl:text-6xl">
				<div>{timeRemaining.hours.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-[0.5rem] md:text-2xl gl:text-3xl">Hours</div>
			</div>
			<div class="flex flex-col items-center justify-center text-xs md:text-2xl gl:text-6xl">
				<div>:</div>
			</div>
			<div class="flex flex-col items-center justify-center text-xs md:text-2xl gl:text-6xl">
				<div>{timeRemaining.minutes.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-[0.5rem] md:text-2xl gl:text-3xl">Minutes</div>
			</div>
			<div class="flex flex-col items-center justify-center text-xs md:text-2xl gl:text-6xl">
				<div>:</div>
			</div>
			<div class="flex flex-col items-center justify-center text-xs md:text-2xl gl:text-6xl">
				<div>{timeRemaining.seconds.toString().padStart(2, '0')}</div>
				<div class="font-valorant text-[0.5rem] md:text-2xl gl:text-3xl">Seconds</div>
			</div>
		</time>
	</div>
</section>


