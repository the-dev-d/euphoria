<script lang="ts">
	import Parallax from '../Parallax.svelte';
	export let authenticated: boolean = false;
</script>

<section class="relative mb-10 h-[88svh] max-h-[88svh] min-h-[740px] w-full overflow-hidden">
	<section class=" absolute right-0 top-0 h-full w-full overflow-hidden flex justify-center items-center">
		<div class="h-full w-full">
			<div class="grid h-full grid-rows-2 place-items-center gl:grid-cols-2 gl:grid-rows-1">
				<div></div>
				<Parallax>
					<div class="parallax-scene relative h-full w-full">
						<div class="absolute right-0 top-0 h-full w-full" data-depth="0.3">
							<img
								src="/images/main/back-glow.png"
								alt="V"
								class=" absolute right-0 top-0 h-full object-contain"
							/>
						</div>
						<div class="absolute right-0 top-0 h-full w-full" data-depth="0.1">
							<img
								src="/images/main/eventbanner.png"
								alt="V"
								class=" absolute right-0 top-0 h-full object-contain"
							/>
						</div>
						<div class="absolute right-0 top-0 h-full w-full" data-depth="0.3">
							<img
								src="/images/main/front-glow.png"
								alt="V"
								class=" absolute right-0 top-0 h-full object-contain"
							/>
						</div>
					</div>
				</Parallax>
			</div>
		</div>
	</section>
	<section
		class="absolute left-0 top-0 grid h-full grid-cols-1  w-full gap-10 p-0 py-8 sm:py-14 md:p-10 lg:grid-cols-banner place-items-center"
	>
		<div class="flex flex-col text-right lg:justify-center">
			<h1
				class="font-fugas relative text-6xl font-bold uppercase sm:text-6xl md:text-9xl gl:text-9xl text-center"
			>
				EUPHORIA'24
				<Parallax>
					<div class="parallax-scene absolute left-0 top-0 z-[-1] h-full w-full opacity-40">
						<div class="absolute right-0 top-0 h-full w-full" data-depth="0.6">
							<img
								src="/images/main/euforia.png"
								alt="V"
								class="absolute left-0 top-[50%] h-full object-contain"
							/>
						</div>
						<div class="absolute right-0 top-0 h-full w-full" data-depth="0.5">
							<img
								src="/images/main/euforia.png"
								alt="V"
								class="absolute bottom-[50%] left-0 h-full object-contain"
							/>
						</div>
					</div>
				</Parallax>
			</h1>
			<div class=" animate-fly-left-slow mt-4">
				<h1 class="font-fugaz text-2xl drop-shadow-lg">AUGUST 30-31</h1>
			</div>
			<div
				class="my-10 grid h-full w-full grid-rows-2 place-items-center gap-[10%] p-10 gl:grid-cols-2 gl:grid-rows-1"
			>
				{#if !authenticated}
					<a href="/register" class="block h-full w-full bg-btn-main p-3 text-center text-black"
						>REGISTER NOW</a
					>
				{:else}
					<a href="/dashboard" class="block h-full w-full bg-btn-main p-3 text-center text-black"
						>DASHBOARD</a
					>
				{/if}

				<a href="/#know-more" class="block w-full border border-btn-main bg-transparent p-3 text-center"
					>KNOW MORE</a
				>
			</div>
			<div class="mt-2 text-center sm:bg-transparent bg-black bg-opacity-10">
				<h2 class="font-fugaz text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-2">
					WITNESS THE <span class="text-red-500">IMPACT</span>
				</h2>
				<p class="font-valorant text-base sm:text-lg md:text-xl text-red-800 brightness-200 mb-4">
					<span class="flicker-fast">#</span><span class="flicker-slowxl">STREAMERS</span><span class="flicker-slow">BATTLE</span>
				</p>
				<a
					href="/respawn/streamersbattle"
					class="mybtn tex mb-2 mx-auto grid w-10/12 place-items-center py-4 text-center text-xs text-white hover:scale-105 hover:bg-neon-violet hover:bg-opacity-10 sm:w-8/12 md:w-7/12 lg:w-6/12"
				>
					<span> </span>
					<span> </span>
					<span> </span>
					<span> </span>
					<span class="font-fugas mb-2 text-bold block">BOOK YOUR TICKETS NOW</span>
				</a>
			</div>
			
		</div>
	</section>
</section>



<style lang="postcss">
	.mybtn {
		position: relative;
		overflow: hidden;

		@apply bg-red-400 bg-opacity-30 sm:bg-opacity-0 sm:bg-transparent;
	
		
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
		@apply block w-full py-3 px-4 text-center text-sm font-bold uppercase transition-all duration-300;
	}
	.btn-primary {
		@apply bg-btn-main text-black hover:bg-opacity-90;
	}
	.btn-outline {
		@apply border border-btn-main bg-transparent hover:bg-btn-main hover:bg-opacity-10;
	}
	.btn-neon {
		@apply bg-neon-violet bg-opacity-10 text-white hover:bg-opacity-20 hover:scale-105;
	}

	@media (max-width: 640px) { /* Targeting mobile devices */
  .mybtn span .font-fugas {
    font-size: 1.25rem; /* Adjust the size as needed for mobile view */
  }
}
	
</style>