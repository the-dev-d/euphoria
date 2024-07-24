<script>
	import Parallax from '$lib/components/Parallax.svelte';
</script>

<section class="relative mb-10 h-[90svh] min-h-[740px] w-full">
	<section class=" absolute right-0 top-0 h-[90%] w-full overflow-hidden">
		<Parallax>
			<div class="parallax-scene relative h-[90%] w-full">
				<div class="absolute left-0 top-0 h-[90%] w-full" data-depth="0.2">
					<img
						src="/images/main/treasure.png"
						alt="V"
						class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain h-full "
					/>
				</div>
			</div>
		</Parallax>
	</section>
	<section
		class="absolute left-0 top-0 grid h-full grid-cols-1 place-items-center gap-10 p-0 py-8 sm:py-14 md:p-10 lg:grid-cols-banner gl:place-items-center"
	>
		<div class="flex flex-col text-right lg:justify-center">
			<div class=" animate-fly-left-slow mb-4 text-left">
				<h1 class="fugaz-one-regular text-xl">POWERED BY:</h1>
			</div>
			<h1
				class="fugaz-one-regular relative text-6xl font-bold uppercase sm:text-6xl md:text-9xl gl:text-9xl"
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
				<h1 class="fugaz-one-regular text-xl">AUGUST 23-24</h1>
			</div>
			<div
				class="mt-[20%] grid h-full w-full grid-rows-2 place-items-center gap-[10%] p-10 gl:grid-cols-2 gl:grid-rows-1"
			>
				<button class="block h-full w-full bg-btn-main text-black">REGISTER NOW</button>
				<button class="block w-full border border-btn-main bg-transparent">KNOW MORE</button>
			</div>
		</div>
	</section>
</section>

<style>
</style>
