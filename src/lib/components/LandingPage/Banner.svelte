<script>
	import { onMount } from 'svelte';
	import Parallax from '../Parallax.svelte';
	import CountDown from '../LandingPage/CountDown.svelte';

	const Agents = [
		'/images/agents/viper/viper.png',
		'/images/agents/clove/clove.png',
		'/images/agents/sova/sova.png',
		'/images/agents/sage/sage.png',
		'/images/agents/omen/omen.png'
	];

	const Colors = [
		'/images/agents/viper/bg.png',
		'/images/agents/clove/bg.png',
		'/images/agents/sova/bg.png',
		'/images/agents/sage/bg.png',
		'/images/agents/omen/bg.png'
	];

	const Names = [
		'/images/agents/viper/type.png',
		'/images/agents/clove/type.png',
		'/images/agents/sova/type.png',
		'/images/agents/sage/type.png',
		'/images/agents/omen/type.png'
	];

	const vStorke = ['#0B6F30', '#BB6496', '#4BBEE8', '#3BE4C4', '#3F3858'];
	let currentIndex = 0;
	let agentImage;
	let agentBg;
	let agentName;
	let vColor;

	function slideShow() {
		if (agentImage && agentBg && agentName && vColor) {
			agentImage.src = Agents[currentIndex];
			agentBg.src = Colors[currentIndex];
			agentName.src = Names[currentIndex];
			vColor.setAttribute('stroke', vStorke[currentIndex]);
			currentIndex = (currentIndex + 1) % Agents.length;
		}
	}

	onMount(() => {
		slideShow();
		const interval = setInterval(slideShow, 6000);
		return () => clearInterval(interval);
	});
</script>

<section class="relative mb-10 h-[88svh] min-h-[600px] w-full">
	<section class=" absolute left-0 top-0 h-full w-full overflow-hidden">
		<div class="h-full w-full">
			<div class="grid h-full grid-rows-2 place-items-center gl:grid-cols-2 gl:grid-rows-1">
				<Parallax>
					<div class="parallax-scene relative z-[-2] h-full w-full">
						<div
							class="absolute left-0 top-0 h-full w-full"
							data-depth="0.2"
							data-caliberate-x="true"
							data-caliberate-y="true"
						>
							<svg
								width="668"
								height="554"
								viewBox="0 0 668 554"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class=" absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-contain gl:h-[80%]"
							>
								<g style="mix-blend-mode:hard-light">
									<path
										d="M229.687 551L2.5 272.609V7.13073L437.301 551H229.687ZM665.5 272.587L589.337 363H381.692L665.5 7.14415V272.587Z"
										bind:this={vColor}
										stroke-width="5"
									/>
								</g>
							</svg>

							<!-- <img
								src="/images/main/v-transparent.png"
								alt="V"
								class=" absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform object-contain gl:h-[80%]"
							/> -->
						</div>
					</div>
				</Parallax>
				<Parallax>
					<div class="parallax-scene relative h-full w-full overflow-hidden">
						<div
							data-depth="0.6"
							data-caliberate-x="true"
							data-caliberate-y="true"
							class="fly-right-to-left absolute left-0 top-0 h-full w-full"
						>
							<img
								id="aname"
								bind:this={agentName}
								alt="Vname"
								class="absolute right-0 top-0 h-full object-contain"
							/>
						</div>
						<div
							data-depth="0.3"
							data-caliberate-x="true"
							data-caliberate-y="true"
							class="fly-top-to-bottom absolute left-0 top-0 h-full w-full"
						>
							<img
								id="abg"
								bind:this={agentBg}
								alt="Vbg"
								class="absolute right-[10%] top-0 h-full object-contain opacity-80"
							/>
						</div>
						<div
							data-depth="0.1"
							data-caliberate-x="true"
							data-caliberate-y="true"
							class="fly-right-to-left absolute left-0 top-0 h-full w-full"
						>
							<img
								id="agent"
								bind:this={agentImage}
								alt="Viper"
								class="absolute right-[15%] top-0 h-full object-contain"
							/>
						</div>
					</div>
				</Parallax>
			</div>
		</div>
	</section>
	<section
		class="absolute left-0 top-0 grid h-full grid-cols-1 place-items-start gap-10 p-0 py-8 sm:py-14 md:p-10 lg:grid-cols-banner gl:place-items-center"
	>
		<div class="flex flex-col text-center lg:justify-center lg:text-left">
			<h1
				class="animate-fly-left font-equinox text-3xl font-bold uppercase sm:text-4xl md:text-5xl"
			>
				Rajagiri College of Social Sciences (Autonomous)
				<br /><span class="text-base sm:text-xl md:text-2xl">In collaboration with</span><span
					class="ml-2 tracking-widest">AKEF</span
				>
			</h1>
			<div
				class=" animate-fly-left-slow bg-gradient-to-br from-green-900 to-green-500 bg-clip-text text-transparent"
			>
				<h1 class="font-valorant text-6xl sm:text-8xl">EUPHORIA 2K24</h1>
			</div>
		</div>
	</section>
	<CountDown />
</section>

<style lang="postcss">
	@keyframes flyInRightToLeft {
		0% {
			transform: translateX(100%);
			opacity: 0;
		}
		25% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes flyOutLeft {
		0% {
			transform: translateX(0);
			opacity: 1;
		}
		50% {
			transform: translateX(-100%);
			opacity: 0;
		}
	}
	@keyframes flyInTopToBottom {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}
		15% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes flyOutTop {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		15% {
			transform: translateY(-100%);
			opacity: 0;
		}
	}
	/* .fly-right-to-left {
		animation:
			flyInRightToLeft 1s ease-in-out forwards,
			flyOutLeft 1s ease-in-out forwards;
		animation-delay: 0s, 5s;
		animation-duration: 6s;
		animation-iteration-count: infinite;
	} */
	/* .fly-top-to-bottom {
		animation: flyInTopToBottom 1s forwards;
		animation: flyOutTop 1s forwards;
		animation-delay: 0s;
		animation-duration: 5.8s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	} */
</style>
