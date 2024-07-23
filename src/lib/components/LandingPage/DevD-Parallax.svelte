<script>

import Parallax from "../Parallax.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section class=" relative w-full h-[100svh] mt-8 mb-8 max-h-[1080px] min-h-[740px]">

	<Parallax>
	<div class=" absolute left-0 top-0 w-full h-full parallax-scene overflow-hidden">
		<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.4" class="absolute top-0 left-0 w-full h-full max-h-full object-cover object-bottom anim-studder" src='/images/main/content-glitch.png' alt="">
		<div data-depth="0.25" class="w-full h-[25%] grid content-end">
			<div class="font-valorant text-center text-9xl from-red-500 to-red-400 bg-gradient-to-br bg-clip-text text-transparent">SOUTH INDIAS BIGGEST</div>
		</div>
		<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.35" id="glitch" class="absolute top-0 left-0 w-full h-full max-h-full object-cover object-bottom anim-studder" src='/images/main/glitch.png' alt="">
		<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.0" id="floor" class="absolute top-0 left-0 w-full h-full max-h-full object-cover object-bottom" src='/images/main/floor.png' alt="">
		<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.15" id="agents" class="absolute top-0 left-0 w-full h-full max-h-full object-cover object-bottom" src='/images/main/agents-3.png' alt="">
		<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.2" id="agents" class="absolute top-0 left-0 w-full h-full max-h-full object-cover object-bottom" src='/images/main/agents-2.png' alt="">
		<img data-caliberate-x="true" data-scalar-y="0.5" data-depth="0.1" id="agents" class="absolute top-0 left-0 w-full h-full max-h-full object-cover object-bottom" src='/images/main/agents.png' alt="">
		<div data-depth="0.08" class="w-full h-full grid content-end">
			<div class="font-valorant text-center text-black stroke-transparent stroke-[3rem] text-9xl from-green-500 to-green-400 bg-gradient-to-br bg-clip-text">LAN TOURNAMENT</div>
		</div>
	</div>
	</Parallax>
</section>

<style lang="postcss">

	.text-border {
		text-shadow: 0px 0px 0px 1px white;
	}
	.container-inline {
		container-type: inline-size;
	}
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