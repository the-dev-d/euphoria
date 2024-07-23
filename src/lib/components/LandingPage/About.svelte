<script>
	import Parallax from '../Parallax.svelte';
</script>

<section
	class="relative w-full max-h-[1080px] min-h-[740px] h-[100svh] grid grid-rows-2 gl:grid-cols-2 gl:grid-rows-1 place-items-center mt-8 mb-8"
>
	<Parallax>
		<div class="absolute top-0 left-0 w-full h-full parallax-scene overflow-hidden">
			<div  data-depth="0.6" class="relative w-full h-full">
				<img src="/images/main/about-bg.png" alt="XX" class="absolute top-0 right-[10%] h-full object-contain">
			</div>
		</div>
	</Parallax>
	<article class=" relative w-full h-full grid place-items-center p-10">
		<h1 class=" relative font-valorant uppercase text-white text:4xl gl:text-6xl">ABOUT</h1>
		<p class=" relative font-sans text-xm gl:text-2xl block w-[80%]">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident autem assumenda
			nisi voluptatibus, ea aperiam hic molestias vero iste minima adipisci excepturi vitae?
			Delectus et est commodi hic eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Facere culpa perferendis, corrupti nulla asperiores aspernatur itaque eos suscipit minus! Est,
			sit sapiente voluptatum qui autem obcaecati minus ex eum assumenda. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Sunt voluptates repudiandae, minima non id perferendis aliquid
			possimus iusto, ipsum officiis odit est voluptatibus quae. Amet, id ipsum? Unde, quia ea.
		</p>
	</article>

	<Parallax>
		<figure class="relative w-full h-full overflow-hidden parallax-scene">
			<div data-depth="0.2" class="absolute top-0 left-0 w-full h-full">
				<img
					src="/images/main/about.png"
					alt="about"
					class=" absolute top-0 right-0 object-contain h-full"
				/>
			</div>
		</figure>
	</Parallax>
	<div
		class="absolute top-[-10%] left-[-10%] h-full w-1/2 bg-gradient-to-b opacity-50 from-red-500 to-violet-500 rounded-full z-[-1] shadow-glow blur-2xl"
	></div>
</section>

<style>
</style>
