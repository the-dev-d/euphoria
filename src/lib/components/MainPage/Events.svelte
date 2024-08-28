<script></script>

<section id="know-more" class="relative mb-10 mt-10 grid w-full place-items-center">
	<h1 class=" relative font-valorant text-5xl uppercase text-white gl:text-6xl">EVENTS</h1>
	<div
		class="absolute left-[-30%] top-[-10%] z-[-1] h-full w-1/2 rounded-full bg-gradient-to-b from-red-500 to-violet-500 opacity-30 shadow-glow blur-2xl"
	></div>
	<div class="grid h-full w-[90%] grid-rows-2 place-items-center items-end gap-3 p-2 gl:w-[60%]">
		<a href="/respawn">
			<div class="relative h-fit w-full transition-all hover:scale-105">
				<img
					src="/images/main/val-eventBanner.png"
					alt=""
					class=" brightness-60 h-full w-full object-contain"
				/>
			</div>
		</a>
		<div class="relative grid h-full w-full grid-cols-4 grid-rows-1 gap-2 py-2 gl:gap-3">
			<a href="/coding/pg"
				><div
					class="relative grid aspect-square w-full place-items-center rounded-lg border-2 border-pink-900 text-center transition-all hover:scale-105 gl:rounded-xl"
				>
					<img
						class="absolute left-0 top-0 h-full w-full brightness-50"
						src="/images/covers/coding.gif"
						alt="coding"
					/>
					<h1 class="absolute font-valorant text-xs font-bold text-white sm:text-xl gl:text-2xl">
						PG CODING
					</h1>
				</div>
			</a>
			<a href="/treasure-hunt">
				<div
					class="relative grid aspect-square w-full place-items-center rounded-lg border-2 border-pink-900 text-center transition-all hover:scale-105 gl:rounded-xl"
				>
					<img
						class="absolute left-0 top-0 h-full w-full brightness-50"
						src="/images/covers/th.gif"
						alt="coding"
					/>
					<h1 class="absolute font-valorant text-xs font-bold text-white sm:text-xl gl:text-2xl">
						TREASURE HUNT
					</h1>
				</div>
			</a>
			<a href="/coding/ug"
				><div
					class="relative grid aspect-square w-full place-items-center rounded-lg border-2 border-pink-900 text-center transition-all hover:scale-105 gl:rounded-xl"
				>
					<img
						class="absolute left-0 top-0 h-full w-full brightness-50"
						src="/images/covers/coding.gif"
						alt="coding"
					/>
					<h1
						class="font-valorante absolute font-valorant text-xs font-bold text-white sm:text-xl gl:text-2xl"
					>
						UG CODING
					</h1>
				</div>
			</a>
			<a href="/web-designing">
				<div
					class="relative grid aspect-square w-full place-items-center rounded-lg border-2 border-pink-900 text-center transition-all hover:scale-105 gl:rounded-xl"
				>
					<img
						class="absolute left-0 top-0 h-full w-full brightness-50"
						src="/images/covers/web.gif"
						alt="coding"
					/>
					<h1 class="absolute font-valorant text-xs font-bold text-white sm:text-xl gl:text-2xl">
						WEB DESIGNING
					</h1>
				</div>
			</a>
		</div>
	</div>
	<!-- <div class="relative grid w-full place-items-center gap-[10%] p-5 gl:p-10">
		<h1
			class="relative mt-20 text-center font-fugaz text-2xl uppercase text-white md:text-4xl gl:mx-10 gl:text-6xl"
		>
			WITNESS THE <span class="">IMPACT</span>
			<span
				class="relative text-center font-valorant text-xl uppercase text-pink-900 brightness-200 md:text-2xl gl:mx-10"
			>
				<span class="flicker-fast">#</span><span class="flicker-slowxl">STREAMERS</span><span
					class="flicker-slow">BATTLE</span
				>
			</span>
		</h1>
		<a
			href="/respawn/streamersbattle"
			class="mybtn tex mb-2 grid h-full w-11/12 place-items-center py-5 text-center text-sm text-white hover:scale-105 hover:bg-neon-violet hover:bg-opacity-10 gl:w-9/12"
		>
			<span> </span>
			<span> </span>
			<span> </span>
			<span> </span>
			<span class="font-fugas mb-4">BOOK YOUR TICKETS NOW</span></a
		>
	</div> -->
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
		background: linear-gradient(to right, #831843, rgba(244, 114, 182, 0.5));
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
		background: linear-gradient(to right, #831843, rgba(244, 114, 182, 0.5));
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
		background: linear-gradient(to right, #831843, rgba(244, 114, 182, 0.5));
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
		background: linear-gradient(to right, #831843, rgba(244, 114, 182, 0.5));
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
</style>
