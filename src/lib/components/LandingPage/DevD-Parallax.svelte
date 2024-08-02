<script>
	import Parallax from '../Parallax.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class=" relative mb-10 mt-10 h-[88svh] min-h-[740px] w-full">
	<Parallax>
		<div class=" parallax-scene absolute left-0 top-0 h-full w-full overflow-hidden">
			<img
				data-caliberate-x="true"
				data-scalar-y="0.5"
				data-depth="0.4"
				class="anim-studder absolute left-0 top-0 h-full max-h-full w-full object-cover object-bottom"
				src="/images/main/content-glitch.png"
				alt=""
			/>
			<div data-depth="0.25" class="grid h-[35%] w-full content-end">
				<div
					class="bg-gradient-to-br from-red-500 to-red-400 bg-clip-text text-center font-valorant text-5xl text-transparent gl:text-9xl"
				>
					SOUTH INDIAS <br />BIGGEST
				</div>
			</div>
			<img
				data-caliberate-x="true"
				data-scalar-y="0.5"
				data-depth="0.35"
				id="glitch"
				class="anim-studder absolute left-0 top-0 h-full max-h-full w-full object-cover object-bottom"
				src="/images/main/glitch.png"
				alt=""
			/>
			<img
				data-caliberate-x="true"
				data-scalar-y="0.5"
				data-depth="0.0"
				id="floor"
				class="absolute left-0 top-0 h-full max-h-full w-full object-cover object-bottom"
				src="/images/main/floor.png"
				alt=""
			/>
			<img
				data-caliberate-x="true"
				data-scalar-y="0.5"
				data-depth="0.15"
				id="agents"
				class="absolute left-0 top-0 h-full max-h-full w-full object-cover object-bottom opacity-0 md:opacity-100"
				src="/images/main/agents-3.png"
				alt=""
			/>
			<img
				data-caliberate-x="true"
				data-scalar-y="0.5"
				data-depth="0.2"
				id="agents"
				class="absolute left-0 top-0 h-full max-h-full w-full object-cover object-bottom"
				src="/images/main/agents-2.png"
				alt=""
			/>
			<img
				data-caliberate-x="true"
				data-scalar-y="0.5"
				data-depth="0.1"
				id="agents"
				class="absolute left-0 top-0 h-full max-h-full w-full object-cover object-bottom"
				src="/images/main/agents.png"
				alt=""
			/>
			<div data-depth="0.08" class="grid h-full w-full content-end">
				<div class="text-center font-valorant text-5xl font-bold text-valorant-bg gl:text-9xl">
					LAN TOURNAMENT
				</div>
			</div>
		</div>
	</Parallax>
</section>

<style lang="postcss">
	@keyframes glow {
		0%,
		20%,
		40%,
		55%,
		90%,
		100% {
			filter: brightness(100%);
			opacity: 0.6;
		}

		10%,
		45%,
		92% {
			filter: brightness(300%);
			opacity: 1;
		}
	}
	.anim-studder {
		animation: glow 3s linear infinite;
	}
</style>
