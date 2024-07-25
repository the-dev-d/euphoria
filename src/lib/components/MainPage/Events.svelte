<script></script>

<section class="relative mb-10 mt-10 grid min-h-[50svh] w-full place-items-center">
	<div
		class="absolute left-[-30%] top-[-10%] z-[-1] h-full w-1/2 rounded-full bg-gradient-to-b from-red-500 to-violet-500 opacity-30 shadow-glow blur-2xl"
	></div>
	<h1 class=" relative font-valorant text-6xl uppercase text-white gl:text-6xl">EVENTS</h1>
	<div class="grid h-full w-full grid-rows-2 place-items-center items-end p-2 gl:w-[80%]">
		<a href="/valorant/"
			><div class="relative h-fit w-full">
				<img
					src="/images/main/val-eventBanner.png"
					alt=""
					class=" h-full w-full object-contain brightness-50 transition-opacity hover:brightness-75"
				/>
			</div></a
		>
		<div class="relative grid h-full w-full grid-cols-3 grid-rows-1 gap-2 py-2 gl:gap-5">
			<a class="shadow-white transition-all hover:scale-105 hover:brightness-75" href="/coding"
				><div
					class="relative aspect-square w-full rounded-xl border border-blue-400 bg-blue-900/10 gl:rounded-3xl"
				>
					<div
						class="text absolute z-20 grid h-full w-full place-items-center font-Ubuntu text-xs font-semibold uppercase sm:text-xl gl:text-2xl"
					>
						<span>UG/PG Coding</span>
					</div>
					<img
						class="absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-slate-300 text-center brightness-50 gl:rounded-3xl"
						src="/images/covers/coding.gif"
						alt="Cod"
					/>
				</div></a
			>
			<a class="shadow-white transition-all hover:scale-105 hover:brightness-75" href="/web-designing"
				><div
					class="relative aspect-square w-full rounded-xl border border-blue-400 bg-blue-900/10 gl:rounded-3xl"
				>
					<div
						class="absolute z-20 grid h-full w-full place-items-center text-center font-Ubuntu text-xs font-semibold uppercase sm:text-xl gl:text-2xl"
					>
						<span>Web Designing</span>
					</div>
					<img
						class="absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-slate-300 text-center brightness-50 gl:rounded-3xl"
						src="/images/covers/web.gif"
						alt="WEB"
					/>
				</div></a
			>
			<a
				class="shadow-white transition-all hover:scale-105 hover:brightness-75"
				href="treasure-hunt"
				><div
					class="relative aspect-square w-full rounded-xl border border-blue-400 bg-blue-900/10 gl:rounded-3xl"
				>
					<div
						class="absolute z-20 grid h-full w-full place-items-center text-center font-Ubuntu text-xs font-semibold uppercase sm:text-xl gl:text-2xl"
					>
						<span>Treasure Hunt</span>
					</div>
					<img
						class="absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-slate-300 text-center brightness-50 gl:rounded-3xl"
						src="/images/covers/th.gif"
						alt="Cod"
					/>
				</div></a
			>
		</div>
	</div>
</section>

<style lang="postcss">
	.rotate-glow {
		animation:
			spin 4s linear infinite,
			brightness 2s infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes brightness {
		0%,
		20%,
		40%,
		55%,
		90%,
		100% {
			filter: brightness(1);
		}
		50% {
			filter: brightness(0.5);
		}
	}
</style>
