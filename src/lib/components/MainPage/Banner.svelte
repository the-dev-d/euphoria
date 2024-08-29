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
					<a href="/login" class="block w-full bg-btn-main p-3 text-center text-black uppercase"
						>Login</a
					>
				{:else}
					<a href="/dashboard" class="block w-full bg-btn-main p-3 text-center text-black"
						>DASHBOARD</a
					>
				{/if}

				<div class="flex w-full h-full  flex-col items-center justify-start gap-2 backdrop-blur-sm">
					<!-- <h1
						class="relative mt-10 text-center font-fugaz text-2xl uppercase text-white  font-bold"
					>
						WITNESS THE <span class=" text-btn-main text-3xl">IMPACT</span>
						<span
							class="relative text-center font-valorant text-xl uppercase text-white md:text-2xl gl:mx-10"
						>
							<span class="flicker-fast">#</span><span class="flicker-slowxl font-bold">STREAMERS</span><span
								class="flicker-slow">BATTLE</span
							>
						</span>
					</h1> -->
					<a
						href="/respawn/streamersbattle"
						class="mybtn tex grid w-full place-items-center py-5  text-center text-sm text-white hover:scale-105 backdrop-blur-sm hover:bg-neon-violet hover:bg-opacity-10"
					>
						<span> </span>
						<span> </span>
						<span> </span>
						<span> </span>
						<span class="font-fugas">BOOK YOUR TICKETS NOW</span></a
					>
				</div>
			</div>
			
		</div>
	</section>
</section>


<style lang="postcss">
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
		@apply block w-full px-4 py-3 text-center text-sm font-bold uppercase transition-all duration-300;
	}
	.btn-primary {
		@apply bg-btn-main text-black hover:bg-opacity-90;
	}
	.btn-outline {
		@apply border border-btn-main bg-transparent hover:bg-btn-main hover:bg-opacity-10;
	}
	.btn-neon {
		@apply bg-neon-violet bg-opacity-10 text-white hover:scale-105 hover:bg-opacity-20;
	}
</style>