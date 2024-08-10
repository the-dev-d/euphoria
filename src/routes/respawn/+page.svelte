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
	<h3 class="mt-3 flex items-center justify-center">Register Before: 18-AUG-24</h3>
</div>
<div class="sm:3xl mb-10 bg-[#fa4454] text-center font-valorant text-2xl gl:text-6xl">
	<h3 class="mt-3 flex items-center justify-center">REGISTRATIONS: {data.count}/32</h3>
</div>
<About />
<Sponsors />
<Rules />
<DevDParallax />
<div>
	<div class=" relative grid w-full place-items-center gap-[10%] p-5 gl:p-10">
		{#if data.count < 32}
			<a href="/register" class="block h-full w-full bg-red-500 p-3 text-center text-black"
				>REGISTER NOW</a
			>
		{:else}
			<div class="block h-full w-full bg-red-500 p-3 text-center text-black">REGISTER NOW</div>
		{/if}
	</div>
</div>

<style>
</style>
