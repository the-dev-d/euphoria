<script>
	import About from '$lib/components/LandingPage/About.svelte';
	import Banner from '$lib/components/LandingPage/Banner.svelte';
	import DevDParallax from '$lib/components/LandingPage/DevD-Parallax.svelte';
	import Rules from '$lib/components/LandingPage/Rules.svelte';
	import Sponsors from '$lib/components/LandingPage/Sponsors.svelte';

	export let data;
</script>

<svelte:head>
	<title>RCSS | EUPHORIA</title>
	<meta name="EUPHORIA" content="EUPHORIA-RESPAWN-2k24" />
</svelte:head>

<Banner />
<div class="sm:3xl mt-20 bg-[#fa4454] text-center font-valorant text-2xl gl:text-6xl">
	<h3 class="mt-3 flex items-center justify-center">Register Before: 23-AUG-24</h3>
</div>
<div class="sm:3xl mb-10 bg-[#fa4454] text-center font-valorant text-2xl gl:text-6xl">
	<h3 class="mt-3 flex items-center justify-center">REGISTRATIONS: {data.count}/16</h3>
</div>
<About />
<Sponsors />
<Rules />
<DevDParallax />
<div>
	<div class=" relative grid w-full place-items-center gap-[10%] p-5 gl:p-10">
		{#if data.count < 16}
			<a href="/register" class="block h-full w-full bg-red-500 p-3 text-center text-black"
				>REGISTER NOW</a
			>
		{:else}
			<div class="block h-full w-full bg-red-500 p-3 text-center text-black">
				REGISTRATION CLOSED
			</div>
		{/if}
	</div>
</div>
<div class="relative grid w-full place-items-center gap-[10%] p-5 gl:p-10">
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
		<span class="font-fugas mb-4">BOOK YOUR TICKETS NOW</span></a
	>
</div>

<style>
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
		@apply bg-red-500;
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
		@apply bg-red-500;
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
		@apply bg-red-500;
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
		@apply bg-red-500;
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
</style>
