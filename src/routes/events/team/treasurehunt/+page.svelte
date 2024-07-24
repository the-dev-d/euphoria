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
						class="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform object-contain"
					/>
				</div>
			</div>
		</Parallax>
	</section>
	<section
		class="absolute left-0 top-0 grid h-full w-full grid-cols-1 place-items-center text-center gap-10 p-0 py-8 sm:py-14 md:p-10 bg-red-300 overflow-hidden"
	>
		<div
			class="fugaz-one-regular relative z-10 w-full text-6xl font-bold uppercase sm:text-6xl md:text-9xl gl:text-9xl"
		>
			TREASURE HUNT
			<Parallax>
				<h1 class="parallax-scene absolute left-0 top-0 z-[-1] h-full w-full">
					<div class="absolute right-0 top-0 h-full w-full" data-depth="0.6">
						<img
							src="/images/main/euforia.png"
							alt="V"
							class="absolute left-40 top-[50%] h-full object-contain"
						/>
					</div>
					<div class="absolute right-0 top-0 h-full w-full" data-depth="0.5">
						<img
							src="/images/main/euforia.png"
							alt="V"
							class="absolute bottom-[50%] left-0 h-full object-contain"
						/>
					</div>
				</h1>
			</Parallax>
		</div>
	</section>
</section>

<style>
</style>
