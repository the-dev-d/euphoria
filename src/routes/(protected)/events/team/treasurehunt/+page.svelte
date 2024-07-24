<script>
	import Parallax from '$lib/components/Parallax.svelte';
</script>

<section class="relative h-[50svh] gl:h-[90svh] min-h-[370px] w-full">
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
		class="absolute left-0 top-0 grid h-full w-full grid-cols-1 place-items-center gap-10 overflow-hidden p-0 py-8 text-center sm:py-14 md:p-10"
	>
		<h1
			class="fugaz-one-regular back relative z-10 w-full text-5xl font-bold uppercase gl:text-9xl"
		>
			TREASURE HUNT

			<div class="absolute left-0 top-0 z-[-1] h-full w-full">
				<div class="absolute right-0 top-0 h-full w-full" data-depth="0.6">
					<h1
						class="absolute left-[15%] top-[30%] h-full object-contain text-neon-violet opacity-80"
					>
						TREASURE HUNT
					</h1>
				</div>
				<div class="absolute right-0 top-0 h-full w-full" data-depth="0.5">
					<h1
						class="absolute bottom-[30%] left-[15%] h-full object-contain text-neon-violet opacity-80"
					>
						TREASURE HUNT
					</h1>
				</div>
			</div>
		</h1>
	</section>
</section>

<section class="relative mb-10 mt-10 h-[100svh] max-h-[1080px] min-h-[740px] w-full p-10">
	<h1 class=" text:4xl relative mx-10 font-valorant uppercase text-white gl:text-6xl">GUIDLINES</h1>

	<article class=" relative w-full p-10">
		<p class=" text-xm relative block font-sans gl:text-2xl">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident autem assumenda
			nisi voluptatibus, ea aperiam hic molestias vero iste minima adipisci excepturi vitae?
			Delectus et est commodi hic eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Facere culpa perferendis, corrupti nulla asperiores aspernatur itaque eos suscipit minus! Est,
			sit sapiente voluptatum qui autem obcaecati minus ex eum assumenda. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Sunt voluptates repudiandae, minima non id perferendis aliquid
			possimus iusto, ipsum officiis odit est voluptatibus quae. Amet, id ipsum? Unde, quia ea.
		</p>
	</article>
	<h1 class=" text:4xl relative mx-10 font-valorant uppercase text-white gl:text-6xl">RULES</h1>
	<article class=" relative h-full w-full overflow-hidden p-10">
		<p class=" text-xm w-fullfont-sans relative block gl:text-2xl">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident autem assumenda
			nisi voluptatibus, ea aperiam hic molestias vero iste minima adipisci excepturi vitae?
			Delectus et est commodi hic eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Facere culpa perferendis, corrupti nulla asperiores aspernatur itaque eos suscipit minus! Est,
			sit sapiente voluptatum qui autem obcaecati minus ex eum assumenda. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Sunt voluptates repudiandae, minima non id perferendis aliquid
			possimus iusto, ipsum officiis odit est voluptatibus quae. Amet, id ipsum? Unde, quia ea.
		</p>
	</article>
</section>

<section class="relative mb-10 mt-10 h-[50svh] max-h-[540px] min-h-[370px] w-full p-10">
	<h1 class=" text:4xl relative mx-10 font-valorant uppercase text-white gl:text-6xl">CONTACT</h1>

	<article class=" relative w-full p-10">
		<h3>NANDA KISHORE</h3>
		<h3>8921679098</h3>
	</article>
	<div
		class=" relative my-10 grid  w-full grid-rows-2 place-items-center gap-[10%] p-10 gl:grid-cols-2 gl:grid-rows-1"
	>
		<a href="/register" class="block h-full w-full bg-neon-violet p-3 text-center text-black"
			>OPEN SOON</a
		>

		<a href="#" class="block w-full border border-neon-violet bg-transparent p-3 text-center"
			>KNOW MORE</a
		>
	</div>
</section>

<style>
</style>
