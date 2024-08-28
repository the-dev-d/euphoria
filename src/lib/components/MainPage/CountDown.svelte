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

<div class="relative my-32 flex w-full flex-col items-center justify-center gap-[10%] p-5 gl:p-10">
	<h1
		class="relative mt-10 text-center font-fugaz text-2xl uppercase text-white md:text-4xl gl:mx-10 gl:text-6xl"
	>
		WITNESS THE <span class=" text-red-500">IMPACT</span>
		<span
			class="relative text-center font-valorant text-xl uppercase text-white md:text-2xl gl:mx-10"
		>
			<span class="flicker-fast">#</span><span class="flicker-slowxl">STREAMERS</span><span
				class="flicker-slow">BATTLE</span
			>
		</span>
	</h1>
	<a
		href="/respawn/streamersbattle"
		class="mybtn tex mb-2 grid h-full w-11/12 place-items-center py-5 text-center text-sm text-white hover:scale-105 hover:bg-neon-violet hover:bg-opacity-10"
	>
		<span> </span>
		<span> </span>
		<span> </span>
		<span> </span>
		<span class="font-fugas">BOOK YOUR TICKETS NOW</span></a
	>
</div>
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

<style lang="postcss">
	.mybtn {
		position: relative;
		overflow: hidden;
	}

	.mybtn span:nth-child(1) {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(to right, #ff0000, rgba(252, 58, 58, 0.5));
		animation: animate1 4s linear infinite;
	}

	@keyframes animate1 {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.mybtn span:nth-child(2) {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 3px;
		background: linear-gradient(to right, #ff0000, rgba(252, 58, 58, 0.5));
		animation: animate2 4s linear infinite;
		animation-delay: 2s;
	}
	@keyframes animate2 {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100%);
		}
	}

	.mybtn span:nth-child(3) {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(to right, #ff0000, rgba(252, 58, 58, 0.5));
		animation: animate3 4s linear infinite;
	}

	@keyframes animate3 {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.mybtn span:nth-child(4) {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 3px;
		background: linear-gradient(to right, #ff0000, rgba(252, 58, 58, 0.5));
		animation: animate4 4s linear infinite;
		animation-delay: 2s;
	}

	@keyframes animate4 {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(-100%);
		}
	}
	.flicker-slowxl {
		animation: flicker 5s linear infinite;
	}
	.flicker-slow {
		animation: flicker 3s linear infinite;
	}

	.flicker-fast {
		animation: flicker 1s linear infinite;
	}

	@keyframes flicker {
		0%,
		19.999%,
		22%,
		62.999%,
		64%,
		64.999%,
		70%,
		100% {
			opacity: 0.99;
		}
		20%,
		21.999%,
		63%,
		63.999%,
		65%,
		69.999% {
			opacity: 0.4;
		}
	}
	.btn {
		@apply block w-full px-4 py-3 text-center text-sm font-bold uppercase transition-all duration-300;
	}
	.btn-primary {
		@apply bg-btn-main text-black hover:bg-opacity-90;
	}
	.btn-outline {
		@apply border border-btn-main bg-transparent hover:bg-btn-main hover:bg-opacity-10;
	}
	.btn-neon {
		@apply bg-neon-violet bg-opacity-10 text-white hover:scale-105 hover:bg-opacity-20;
	}
</style>
