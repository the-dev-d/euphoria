<script>
	import glitch from "$lib/images/main/glitch.png"
	import contentglitch from "$lib/images/main/content-glitch.png"
	import logo from "$lib/images/main/logo.png"
	import agents from "$lib/images/main/agents.png"
	import floor from "$lib/images/main/floor.png"

	import { onMount } from "svelte";
	import Parallax from "$lib/images/components/Parallax.svelte";


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<header class="w-full h-[100svh] max-h-[100svh] overflow-hidden bg-valorant-bg relative">
		<Parallax>
			<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.4" id="content-glitch" class="w-full h-full object-cover anim-studder" src={contentglitch} alt="">
			<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.35" id="glitch" class="w-full h-full object-cover anim-studder" src={glitch} alt="">
			<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.3" id="logo" class="w-full h-full object-cover" src={logo} alt="">
			<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.0" id="floor" class="w-full h-full object-cover" src={floor} alt="">
			<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.2" id="agents" class="w-full h-full object-cover" src={agents} alt="">
		</Parallax>
		<div class="absolute p-3 top-0 left-0 text-white h-[95%] grid w-2/5 place-items-center content-center">
			<div>
				<div class="mb-6">
					<h3 class="font-equinox uppercase text-2xl font-bold">Rajagairi College of Social Sciences</h3>
					<h3 class="font-equinox font-semibold">In collaboration with <span class="text-2xl tracking-widest ml-2">AKEF</span></h3>
				</div>
				<div class="bg-gradient-to-br from-red-500 to-red-300 bg-clip-text text-transparent">
					<h1 class="text-8xl font-valorant -ml-2">
						EUPHORIA
					</h1>
					<h4 class="flex justify-between font-equinox text-xl w-[95%] font-semibold">
						<span>R</span>
						<span>E</span>
						<span>S</span>
						<span>P</span>
						<span>A</span>
						<span>W</span>
						<span>N</span>
					</h4>
				</div>
			</div>
		</div>
	</header>
</main>

<style lang="postcss">
	@keyframes glow {
		0%, 20%, 40%, 55%, 90%, 100% {
			filter: brightness(100%);
			opacity: 0.6;
		}

		10%, 45%, 92% {
			filter: brightness(300%);
			opacity: 1;
		}
	}
	.anim-studder {
		animation: glow 3s linear infinite ;
	}
</style>