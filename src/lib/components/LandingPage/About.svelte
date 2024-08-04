<script>
	import Parallax from '../Parallax.svelte';
</script>

<section
	class="relative mb-10 mt-10 grid h-[88svh] min-h-[740px] w-full grid-rows-2 place-items-center gl:grid-cols-2 gl:grid-rows-1"
>
	<Parallax>
		<div class="parallax-scene absolute left-0 top-0 h-full w-full overflow-hidden">
			<div data-depth="0.6" class="relative h-full w-full">
				<img
					src="/images/main/about-bg.png"
					alt="XX"
					class="absolute right-[10%] top-0 h-full object-contain opacity-50"
				/>
			</div>
		</div>
	</Parallax>
	<article class=" relative grid h-full w-full place-items-center p-10">
		<h1 class=" text:4xl relative font-valorant uppercase text-white gl:text-6xl">ABOUT</h1>
		<p class=" text-xm relative block w-[80%] font-sans gl:text-2xl">
			Get ready for an adrenaline-pumping experience at Euphoria 2024 with the Valorant LAN
			Tournament! Join South India's biggest gaming showdown, Respawn, in partnership with the All
			Kerala Esports Federation (AKEF). Compete with top teams, enjoy state-of-the-art setups, and
			witness thrilling matches live. With epic prizes and the ultimate bragging rights on the line,
			this is the event every esports enthusiast has been waiting for. Don't miss the action—Brace
			for Impact!
		</p>
	</article>

	<Parallax>
		<figure class="parallax-scene relative h-full w-full overflow-hidden">
			<div
				data-depth="0.2"
				data-caliberate-x="true"
				data-caliberate-y="true"
				class="absolute left-0 top-0 h-full w-full"
			>
				<img
					src="/images/main/about.png"
					alt="about"
					class=" absolute right-0 top-0 h-full object-contain"
				/>
			</div>
		</figure>
	</Parallax>
	<div
		class="absolute left-[-10%] top-[-10%] z-[-1] h-full w-1/2 rounded-full bg-gradient-to-b from-red-500 to-violet-500 opacity-40 shadow-glow blur-2xl"
	></div>
</section>

<style>
</style>
