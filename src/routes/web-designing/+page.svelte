<script>
	import Parallax from '$lib/components/Parallax.svelte';
</script>

<section class="relative h-[50svh] min-h-[370px] w-full gl:h-[90svh]">
	<section class="absolute right-0 top-0 h-[90%] w-full overflow-hidden">
		<Parallax>
			<div class="parallax-scene relative h-[90%] w-full">
				<div class="absolute left-0 top-0 h-[90%] w-full" data-depth="0.2">
					<img
						src="/images/main/WEB.png"
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
			class="fugaz-one-regular back relative z-10 w-full text-4xl font-bold uppercase md:text-7xl gl:text-9xl"
		>
			WEB DESIGNING

			<div class="absolute left-0 top-0 z-[-1] h-full w-full">
				<div class="absolute right-0 top-0 h-full w-full" data-depth="0.6">
					<h1
						class="absolute left-[15%] top-[30%] h-full object-contain text-neon-violet opacity-80"
					>
						WEB DESIGNING
					</h1>
				</div>
				<div class="absolute right-0 top-0 h-full w-full" data-depth="0.5">
					<h1
						class="absolute bottom-[30%] left-[15%] h-full object-contain text-neon-violet opacity-80"
					>
						WEB DESIGNING
					</h1>
				</div>
			</div>
		</h1>
	</section>
	<div
		class="absolute bottom-[15%] left-0 right-0 flex flex-col items-center justify-center text-white gl:bottom-[18%]"
	>
		<h1 class="fugaz-one-regular mb-2 text-2xl font-bold gl:text-6xl">PRICE POOL : ₹10,000</h1>
	</div>
	<div class="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center text-white">
		<p class="text-sm font-semibold mb-2">Scroll down for more info</p>
		<svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

<section class="relative mt-10 h-auto min-h-[740px] w-full p-5 gl:p-10">
	<h1 class="text-4xl relative mx-5 font-fugaz uppercase text-white gl:mx-10 gl:text-6xl">
		GUIDELINES
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<p class="text-sm relative block font-sans gl:text-xl">
			
In the web designing competition, participants will engage in a series of three creative rounds. First, they will tackle a quiz designed to test their knowledge of modern web design principles and trends. Next, they will modernize an old website, applying contemporary design practices to enhance its functionality and aesthetics. Finally, participants will create a new website based on a given topic, showcasing their ability to translate a theme into a visually appealing and user-friendly design. Each round emphasizes creativity, innovation, and effective application of design concepts.
		</p>
	</article>
	<h1 class="text-4xl relative mx-5 font-fugaz uppercase text-white gl:mx-10 gl:text-6xl mt-10">
		RULES
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="list-disc pl-5 space-y-4 text-sm font-sans gl:text-xl text-white">
			<li><strong>Individual Participation:</strong> Participants need to design a responsive website containing 4 or more pages based on the given topic (topic will be provided at the venue) and present it to the judges.</li>
			<li><strong>Homepage:</strong> The first page must be your Homepage, which should include a LOGO or picture depicting the topic and the website name.</li>
			<li><strong>Additional Pages:</strong> Other pages must be dedicated to discussions suitable for the website.</li>
			<li><strong>Computer Allocation:</strong> Each participant will be allotted a computer system from our side for developing the website.</li>
			<li><strong>Electronic Devices:</strong> Use of any electronic devices other than the allotted computer system during the development phase will lead to immediate disqualification.</li>
			<li><strong>Judges' Decision:</strong> The decision of the judges will be final.</li>
		</ul>        
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		PRIZE
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="list-disc space-y-4 pl-2 font-sans text-sm text-white md:pl-5 gl:text-xl">
			<li class="text-3xl font-semibold">First Prize : ₹7,000</li>
			<li class="text-2xl font-semibold">Second Prize : ₹3,000</li>
		</ul>
	</article>

	<div
			class="relative grid w-full  place-items-center gap-4 sm:gap-6 my-10"
		>
			<a
				href="/register"
				class="block w-full  bg-neon-violet px-4 py-2 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-50"
				>REGISTER NOW</a
			>
	</div>

</section>

<section class="relative h-auto min-h-[370px] w-full p-5 gl:p-10">
	<h1 class="text-4xl relative mx-5 font-fugaz uppercase text-white gl:mx-10 gl:text-6xl">
		CONTACT
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<h2 class="text-2xl font-Ubuntu uppercase text-white mb-4">Coordinators</h2>
		<div class="grid grid-cols-1 gap-4">
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">HRISHIKESH U</h3>
				<p class="text-white">+91 9544360991</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">ABHIJITH SURESH</h3>
				<p class="text-white">+91 8921746245</p>
			</div>
		</div>
	</article>
</section>