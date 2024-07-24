<script>
	import Parallax from '../Parallax.svelte';
</script>

<section class=" relative w-full max-h-[1080px] h-[100svh] min-h-[740px] mb-10">
	<Parallax>
		<div class="absolute top-0 left-0 h-full w-full parallax-scene overflow-hidden">
			<div data-depth="1" data-caliberate-x="true" data-caliberate-y="true" class=" absolute top-0 left-0 h-full w-full">
				<img
					src="/images/main/circle.png"
					alt="circles"
					class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full"
				/>
			</div>
			<div data-depth="0.5" data-caliberate-x="true" data-caliberate-y="true" class=" absolute top-0 left-0 h-full w-full">
				<img
					src="/images/main/rectange.png"
					alt="circles"
					class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full"
				/>
			</div>
			<div data-depth="0.4" data-caliberate-x="true" data-caliberate-y="true" class=" absolute top-0 left-0 h-full w-full">
				<img
					src="/images/main/triangle.png"
					alt="circles"
					class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full"
				/>
			</div>
		</div>
	</Parallax>
	<div class="absolute top-0 left-0 h-full w-full">
		<img
			src="/images/breach.png"
			alt="circles"
			class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain h-full"
		/>
	</div>
	<div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-full text-6xl gl:text-9xl bg-price text-center font-valorant bg-clip-text text-transparent">
		<h1>PRICE<span class=" text-primary-dark">POOL</span></h1>
        <h1 class="text-white">₹1,45,000</h1>
	</div>
</section>

<style>
</style>
