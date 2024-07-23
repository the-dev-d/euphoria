<script>
	import { onMount } from 'svelte';
	import Parallax from '../Parallax.svelte';
	import CountDown from '../LandingPage/CountDown.svelte';

	const Agents = ['/images/agents/viper/viper.png', '/images/agents/clove/clove.png'];
	const Colors = ['/images/agents/viper/bg.png', '/images/agents/clove/bg.png'];
	const Names = ['/images/agents/viper/type.png', '/images/agents/clove/type.png'];

	let currentIndex = 0;
	let agentImage;
	let agentBg;
	let agentName;

	function slideShow() {
		if (agentImage && agentBg && agentName) {
			agentImage.src = Agents[currentIndex];
			agentBg.src = Colors[currentIndex];
			agentName.src = Names[currentIndex];

			currentIndex = (currentIndex + 1) % Agents.length;
		}
	}

	onMount(() => {
		slideShow();
		const interval = setInterval(slideShow, 6000);
		return () => clearInterval(interval);
	});
</script>

<section class="relative w-full h-[90svh] mb-10 max-h-[1080px] min-h-[740px]">
	<section class=" absolute top-0 left-0 w-full h-full overflow-hidden">
		<div class="w-full h-full">
			<div class="h-full grid grid-rows-2 gl:grid-cols-2 gl:grid-rows-1 place-items-center">
				<Parallax>
					<div class="relative h-full w-full parallax-scene">
						<div class="absolute top-0 left-0 w-full h-full" data-depth="0.2">
							<img
								src="/images/main/v-transparent.png"
								alt="V"
								class=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain h-full gl:h-[80%]"
							/>
						</div>
					</div>
				</Parallax>
				<Parallax>
					<div class="relative h-full w-full parallax-scene overflow-hidden">
						<div data-depth="0.6" class="absolute top-0 left-0 h-full w-full">
							<img
								id="aname"
								bind:this={agentName}
								alt="Vname"
								class="absolute top-0 right-0 object-contain h-full"
							/>
						</div>
						<div  data-depth="0.3" class="absolute top-0 left-0 h-full w-full">
							<img
								id="abg"
								bind:this={agentBg}
								alt="Vbg"
								class="absolute top-0 right-[10%] opacity-80 object-contain h-full"
							/>
						</div>
						<div data-depth="0.1" class="absolute top-0 left-0 h-full w-full">
							<img
								id="agent"
								bind:this={agentImage}
								alt="Viper"
								class="absolute top-0 right-[15%] object-contain h-full"
							/>
						</div>
					</div>
				</Parallax>
			</div>
		</div>
	</section>
	<section
		class="absolute top-0 left-0 grid grid-cols-1 place-items-start lg:grid-cols-banner gap-10 py-8 sm:py-14 gl:place-items-center h-full p-0 md:p-10"
	>
		<div class="flex flex-col lg:justify-center text-center lg:text-left">
			<h1 class="animate-fly-left font-equinox uppercase font-bold text-3xl sm:text-4xl md:text-5xl">
				Rajagairi College of Social Sciences
				<br /><span class="text-base sm:text-xl md:text-2xl">In collaboration with</span><span
					class="tracking-widest ml-2">AKEF</span
				>
			</h1>
			<div
				class=" animate-fly-left-slow bg-gradient-to-br from-green-900 to-green-500 bg-clip-text text-transparent"
			>
				<h1 class="text-6xl sm:text-8xl font-valorant">EUPHORIA 2K24</h1>
			</div>
		</div>
	</section>
	<CountDown />
</section>

<style>
</style>
