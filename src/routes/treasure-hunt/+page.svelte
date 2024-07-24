<script>
	import Parallax from '$lib/components/Parallax.svelte';
</script>

<section class="relative h-[50svh] min-h-[370px] w-full gl:h-[90svh]">
	<section class="absolute right-0 top-0 h-[90%] w-full overflow-hidden">
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
			class="fugaz-one-regular back relative z-10 w-full text-4xl font-bold uppercase md:text-7xl gl:text-9xl"
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
	<div class="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center text-white">
		<p class="text-sm font-semibold mb-2">Scroll down for more info</p>
		<svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

<section class="relative mt-10 h-[100svh] max-h-[1080px] min-h-[740px] w-full p-5 gl:p-10">
	<h1 class=" text:4xl relative mx-5 font-valorant uppercase text-white gl:mx-10 gl:text-6xl">
		GUIDLINES
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<p class="text-sm relative block font-sans gl:text-xl">
			
			Welcome to the Treasure Hunt of Euphoria, hosted by the Computer Science
			Department at Rajagiri of Social Sciences, Kalamassery!
			Our goal is to inspire teamwork, enhance problem-solving skills, and ignite a passion for
			technology through this exciting challenge.Please display good sportsmanship, stay
			safe, and reach out to organizers if needed. Respect the environment by not littering or
			damaging property.
			Wishing you the best of luck—enjoy the adventure!
			
		</p>
	</article>
	<h1 class="text-4xl relative mx-5 font-fugaz uppercase text-white gl:mx-10 gl:text-6xl mt-10">
		RULES
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="list-disc pl-5 space-y-4 text-sm font-sans gl:text-xl text-white">
			<ul class="list-disc pl-5 space-y-2">
				<li>Teams must consist of exactly 5 participants.</li>
				<li>Register online with a unique team name; registration closes 24 hours before the event.</li>
				<li>Teams will receive a QR code with the first clue at the start of the event.</li>
				<li>Mobile phones and internet use are prohibited during the hunt.</li>
				<li>The event lasts 2-3 hours. Clues must be solved in the specified sequence.</li>
				<li>Teams must stay together throughout the hunt; splitting up will result in disqualification.</li>
			  </ul>
			
			  <h3 class="text-xl font-semibold mt-6 mb-2">Disqualification may occur for:</h3>
			  <ul class="list-disc pl-5 space-y-2">
				<li>Tampering with clues or checkpoints</li>
				<li>Using external help or assistance</li>
				<li>Misbehaving or using unfair means</li>
				<li>Consuming prohibited substances (smoking, drinking, etc.)</li>
				<li>The judge’s decision is final and not subject to challenge.</li>
			  </ul>
			
			  <p class="mt-6">
				All participants must adhere to event rules and be punctual; events will start on schedule.
				Rules may change; any updates will be announced before the event starts.
				Winners will be recognized for 1st, 2nd, and 3rd places. All teams will receive participation certificates.
				For more details, contact the coordinators.
			  </p>
		</ul>
        <div
			class="relative grid w-full grid-cols-1 sm:grid-cols-2 place-items-center gap-4 sm:gap-6 mt-10"
		>
			<a
				href="/register"
				class="block w-full sm:max-w-[200px] bg-neon-violet px-4 py-2 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-50"
				>REGISTER NOW</a
			>
	
			<a
				href="#"
				class="block w-full sm:max-w-[200px] border-2 border-neon-violet bg-transparent px-4 py-2 text-center text-sm font-semibold text-neon-violet transition-all duration-300 hover:bg-neon-violet hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-50"
				>LEARN MORE</a
			>
		</div>
	</article>
</section>

<section class="relative mb-10 h-[50svh] max-h-[540px] min-h-[370px] w-full p-5 gl:p-10">
	<div
		class=" relative grid w-full grid-rows-2 place-items-center gap-[10%] p-5 gl:grid-cols-2 gl:grid-rows-1 gl:p-10"
	>
		<a href="/register" class="block h-full w-full bg-neon-violet p-3 text-center text-black"
			>OPEN SOON</a
		>

		<a href="#" class="block w-full border border-neon-violet bg-transparent p-3 text-center"
			>KNOW MORE</a
		>
	</div>
	<h1 class=" text:4xl relative mx-5 font-valorant uppercase text-white gl:mx-10 gl:text-6xl mt-10">
		CONTACT
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<h2 class="text-2xl font-Ubuntu uppercase text-white mb-4">Coordinators</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">SHARISSA MARIAN HURTIS</h3>
				<p class="text-white">+91 6238885835</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">MAJO AUGUSTINE</h3>
				<p class="text-white">+91 9544318109</p>
			</div>
		</div>
	</article>
</section>