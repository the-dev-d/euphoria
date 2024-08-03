<script>
	import Parallax from '../Parallax.svelte';
</script>

<section
	class="relative w-full min-h-[740px] h-[88svh] grid grid-rows-2 gl:grid-cols-2 gl:grid-rows-1 place-items-center mt-10 mb-10"
>
	<Parallax>
		<div class="absolute top-0 left-0 w-full h-full parallax-scene overflow-hidden">
			<div  data-depth="0.6" class="relative w-full h-full">
				<img src="/images/main/about-bg.png" alt="XX" class="absolute top-0 right-[10%] h-full object-contain opacity-50">
			</div>
		</div>
	</Parallax>
	<article class=" relative w-full h-full grid place-items-center p-10">
		<h1 class=" relative font-valorant uppercase text-white text:4xl gl:text-6xl">ABOUT</h1>
		<p class=" relative font-sans text-xm gl:text-2xl block w-[80%]">
			Get ready for an adrenaline-pumping experience at Euphoria 2024 with the Valorant LAN Tournament! Join South India's biggest gaming showdown, Respawn, in partnership with the All Kerala Esports Federation (AKEF). Compete with top teams, enjoy state-of-the-art setups, and witness thrilling matches live. With epic prizes and the ultimate bragging rights on the line, this is the event every esports enthusiast has been waiting for. Don't miss the action—Brace for Impact!
		</p>
	</article>

	<Parallax>
		<figure class="relative w-full h-full overflow-hidden parallax-scene">
			<div data-depth="0.2" data-caliberate-x="true" data-caliberate-y="true" class="absolute top-0 left-0 w-full h-full">
				<img
					src="/images/main/about.png"
					alt="about"
					class=" absolute top-0 right-0 object-contain h-full"
				/>
			</div>
		</figure>
	</Parallax>
	<div
		class="absolute top-[-10%] left-[-10%] h-full w-1/2 bg-gradient-to-b opacity-40 from-red-500 to-violet-500 rounded-full z-[-1] shadow-glow blur-2xl"
	></div>
</section>

<style>
</style>
