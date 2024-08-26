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
		class="absolute left-0 top-0 grid h-full w-full grid-cols-1 place-items-center gap-10 overflow-hidden p-0 py-8 text-center drop-shadow-glow sm:py-14 md:p-10"
	>
		<h1
			class="fugaz-one-regular relative z-10 text-3xl font-bold uppercase md:text-7xl gl:text-8xl"
		>
			VAULTED VENTURE
		</h1>
	</section>
	<div
		class="absolute bottom-[8%] left-0 right-0 flex flex-col items-center justify-center text-white gl:bottom-[10%]"
	>
		<h1 class="fugaz-one-regular mb-2 text-2xl font-bold gl:text-6xl">PRIZE POOL : ₹20,000</h1>
		<h1 class="fugaz-one-regular mb-2 text-sm font-bold gl:text-3xl">Register Before: 28-AUG-24</h1>
	</div>
	<div
		class="absolute bottom-1 left-0 right-0 hidden flex-col items-center justify-center text-white gl:flex"
	>
		<p class="mb-2 text-sm font-semibold">Scroll down for more info</p>
		<svg
			class="h-6 w-6 animate-bounce"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path>
		</svg>
	</div>
</section>

<section class="relative mt-10 min-h-[740px] w-full p-2 md:p-5 gl:p-10">
	<h1 class=" relative mx-5 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		GUIDELINES
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<p class="relative block font-sans text-sm gl:text-xl">
			Welcome to the Treasure Hunt of Euphoria, hosted by the Computer Science Department at
			Rajagiri College of Social Sciences, Kalamassery! Our goal is to inspire teamwork, enhance
			problem-solving skills, and ignite a passion for technology through this exciting
			challenge.Please display good sportsmanship, stay safe, and reach out to organizers if needed.
			Respect the environment by not littering or damaging property. Wishing you the best of
			luck—enjoy the adventure!
		</p>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		RULES
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="list-disc space-y-4 pl-2 font-sans text-sm text-white md:pl-5 gl:text-xl">
			<ul class="list-disc space-y-2 pl-5">
				<li>
					<strong>Team Composition:</strong> Each team must consist of exactly 4 energetic members from
					the same college. Gather your best problem solvers and creative thinkers!
				</li>
				<li>
					<strong>Unique Identity:</strong> Register your team with a unique and catchy team name, and
					make sure to assign a fearless team leader at the time of registration.
				</li>
				<li>
					<strong>Solo Participation:</strong> Remember, no participant can be part of more than one
					team. Choose wisely!
				</li>
				<li>
					<strong>College Cap:</strong> Only a maximum of three teams from each college can showcase
					their prowess. Represent your college with pride!
				</li>
				<li>
					<strong>Identification:</strong> Participants must carry their college ID at all times within
					the event premises. No ID, no entry!
				</li>
				<li>
					<strong>Sequential Solving:</strong> Clues must be solved in the given order. Skipping ahead
					is not an option! Brace yourself for eliminations in each round.
				</li>
				<li>
					<strong>No Extra Time:</strong> The event will commence as scheduled. Organizers won't be responsible
					for any overlaps with other events. Stay focused and be on time!
				</li>
				<li>
					<strong>No Refunds:</strong> Once registered, there are no take-backs. Ensure you're ready
					for the challenge before you commit!
				</li>
			</ul>

			<h3 class="mb-2 mt-6 text-xl font-semibold text-slate-500">
				Disqualification may occur for:
			</h3>
			<ul class="list-disc space-y-2 pl-5">
				<li>Tampering with clues or checkpoints. Play fair and square!</li>
				<li>Damaging any property. Respect the venue and its surroundings.</li>
				<li>Using external help or assistance. It's all about your team's wits!</li>
				<li>Misbehaving or using unfair means. Keep it classy and respectful.</li>
				<li>Consuming prohibited substances. Stay sharp and clear-headed.</li>
			</ul>

			<p class="mt-6">
				The event will last between 5-6 hours. All participants must be punctual as events will
				start on schedule. Any updates to the rules will be announced before the event starts. The
				decisions of the event coordinators will be final. Winners will be recognized for 1st and
				2nd places, and all teams will receive participation certificates.
			</p>
		</ul>
	</article>

	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		PRIZE
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="mx-5 list-disc space-y-4 font-sans text-sm text-white gl:text-xl">
			<li class="text-3xl font-semibold">First Prize : ₹15,000</li>
			<li class="text-2xl font-semibold">Second Prize : ₹5,000</li>
		</ul>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-2xl uppercase text-white gl:mx-10 gl:text-4xl">
		REGISTRATION FEE: ₹600
	</h1>
	<div class=" relative grid w-full place-items-center gap-[10%] p-5 gl:p-10">
		<a href="/register" class="block h-full w-full bg-neon-violet p-3 text-center text-black"
			>REGISTER NOW</a
		>
	</div>
</section>

<section class="relative mb-10 w-full p-5 gl:p-10">
	<h1 class=" text:4xl relative mx-5 mt-10 font-valorant uppercase text-white gl:mx-10 gl:text-6xl">
		CONTACT
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<h2 class="font-Ubuntu mb-4 text-2xl uppercase text-white">Coordinators</h2>
		<div class="grid grid-cols-1 gap-4">
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">SHARISSA MARIAN HURTIS</h3>
				<p class="text-white">+91 6238 885 835</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">ALBIN JOSEPH</h3>
				<p class="text-white">+91 92079 31308</p>
			</div>
		</div>
	</article>
</section>

<style lang="postcss">
	.text-cust-violet {
		-webkit-text-stroke: 3px #d015ff;
	}
</style>
