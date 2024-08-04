<script>
	import Parallax from '../Parallax.svelte';
</script>

<section class=" relative mt-10 mb-10 h-[88svh] min-h-[740px] w-full">
	<Parallax>
		<div class="parallax-scene absolute left-0 top-0 h-full w-full overflow-hidden">
			<div
				data-depth="1"
				data-caliberate-x="true"
				data-caliberate-y="true"
				class=" absolute left-0 top-0 h-full w-full"
			>
				<img
					src="/images/main/circle.png"
					alt="circles"
					class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform object-contain"
				/>
			</div>
			<div
				data-depth="0.5"
				data-caliberate-x="true"
				data-caliberate-y="true"
				class=" absolute left-0 top-0 h-full w-full"
			>
				<img
					src="/images/main/rectange.png"
					alt="circles"
					class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform object-contain"
				/>
			</div>
			<div
				data-depth="0.4"
				data-caliberate-x="true"
				data-caliberate-y="true"
				class=" absolute left-0 top-0 h-full w-full"
			>
				<img
					src="/images/main/triangle.png"
					alt="circles"
					class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform object-contain"
				/>
			</div>
		</div>
	</Parallax>
	<div class="absolute left-0 top-0 h-full w-full">
		<img
			src="/images/breach.png"
			alt="circles"
			class="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform object-contain"
		/>
	</div>
	<div
		class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform bg-price bg-clip-text object-contain text-center font-valorant text-6xl text-transparent gl:text-9xl"
	>
		<h1>PRICE<span class=" text-cust-price text-primary-dark">POOL</span></h1>
		<h1 class="text-cust-black text-white">₹1,00,000</h1>
	</div>
</section>

<style lang="postcss">
	.text-cust-price {
		-webkit-text-stroke: 1px #3be4c4;
	}
</style>
