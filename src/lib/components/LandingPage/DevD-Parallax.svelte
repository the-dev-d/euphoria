<script>
	import Parallax from '$lib/components/Parallax.svelte';
</script>

<Parallax>
	<section class="min-h-[740px] relative w-full max-h-[1080px] h-[100svh] mt-10 mb-10 parallax-scene overflow-hidden">
		<div data-depth="0.8" class="absolute top-0 right-0 w-full h-full">
			<img
				class=" object-contain w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 anim-studder"
				src="/images/main/content-glitch.png"
				alt=""
			/>
		</div>
		<div data-depth="0.5" class=" absolute top-0 right-0 w-full h-full">
			<img
				class=" object-contain w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 anim-studder"
				src="/images/main/glitch.png"
				alt=""
			/>
		</div>
		<div data-depth="0.3" class=" absolute top-0 right-0 w-full h-full">
			<img
				class=" object-contain w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				src="/images/main/logo.png"
				alt=""
			/>
		</div>
		<div data-depth="0.1" class=" absolute top-0 right-0 w-full h-full">
			<img
				class=" object-contain w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				src="/images/main/floor.png"
				alt=""
			/>
		</div>
		<div data-depth="0.2" class=" absolute top-0 right-0 w-full h-full">
			<img
				class=" object-contain w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				src="/images/main/agents.png"
				alt=""
			/>
		</div>
		<section
			class="absolute top-0 left-0 h-full w-full"
		>
			<div class="absolute top-1/2 left-0 gl:left-10 transform -translate-x-0 -translate-y-1/2 flex flex-col lg:justify-center text-center lg:text-left">
				<h1 class="animate-fly-left font-equinox uppercase font-bold text-2xl">
					Rajagairi College of Social Sciences
					<br /><span class="text-base">In collaboration with</span><span
						class="tracking-widest ml-2">AKEF</span
					>
				</h1>
				<div
					class=" animate-fly-left-slow bg-gradient-to-br from-red-500 to-red-300 bg-clip-text text-transparent flex flex-col justify-center items-center"
				>
					<h1 class="text-6xl sm:text-8xl font-valorant">EUPHORIA</h1>
					<h4 class="flex justify-between font-equinox text-xl w-full font-semibold">
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
		</section>
	</section>
</Parallax>

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
