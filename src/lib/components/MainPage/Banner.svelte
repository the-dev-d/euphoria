<script lang="ts">
	import Parallax from '../Parallax.svelte';
	export let authenticated: boolean = false;
</script>

<section class="relative mb-10 h-[88svh] max-h-[88svh] min-h-[740px] w-full">
	<section class=" absolute right-0 top-0 h-full w-full overflow-hidden">
		<div class="h-full w-full">
			<div class="grid h-full grid-rows-2 place-items-center gl:grid-cols-2 gl:grid-rows-1">
				<div></div>
				<Parallax>
					<div class="parallax-scene relative h-full w-full">
						<div class="absolute right-0 top-0 h-full w-full" data-depth="0.6">
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
						<div class="absolute right-0 top-0 h-full w-full" data-depth="0.6">
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
				class="my-10 grid h-full w-full grid-rows-2 place-items-center gap-[10%] p-10 gl:grid-cols-2 gl:grid-rows-1"
			>
				{#if !authenticated}
					<a href="/register" class="block h-full w-full bg-btn-main p-3 text-center text-black"
						>OPEN SOON</a
					>
				{:else}
					<a href="/dashboard" class="block h-full w-full bg-btn-main p-3 text-center text-black"
						>DASHBOARD</a
					>
				{/if}

				<a href="#" class="block w-full border border-btn-main bg-transparent p-3 text-center"
					>KNOW MORE</a
				>
			</div>
		</div>
	</section>
</section>

<style>
</style>
