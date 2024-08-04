<script>
	import About from '$lib/components/LandingPage/About.svelte';
	import Banner from '$lib/components/LandingPage/Banner.svelte';
	import DevDParallax from '$lib/components/LandingPage/DevD-Parallax.svelte';
	import Rules from '$lib/components/LandingPage/Rules.svelte';
	import Sponsors from '$lib/components/LandingPage/Sponsors.svelte';
</script>

<svelte:head>
	<title>RCSS | EUPHORIA</title>
	<meta name="EUFORIA" content="EUFORIA-respawn-2k24" />
</svelte:head>

<Banner />
<About />
<Sponsors />
<Rules />
<DevDParallax />

<style>
</style>
