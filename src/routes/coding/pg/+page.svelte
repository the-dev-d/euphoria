<script>
	import Parallax from '$lib/components/Parallax.svelte';
</script>

<section class="relative h-[50svh] min-h-[370px] w-full gl:h-[90svh]">
	<section class="absolute right-0 top-0 h-[90%] w-full overflow-hidden">
		<Parallax>
			<div class="parallax-scene relative h-[90%] w-full">
				<div class="absolute left-0 top-0 h-[90%] w-full" data-depth="0.2">
					<img
						src="/images/main/CODING.png"
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
			class="text-cust-violet fugaz-one-regular relative z-10 text-4xl font-bold uppercase gl:text-7xl"
		>
			INVICTUS
		</h1>
	</section>
	<div
		class="absolute bottom-[20%] left-0 right-0 flex flex-col items-center justify-center text-white gl:bottom-[18%]"
	>
		<h1 class="fugaz-one-regular mb-2 text-2xl font-bold gl:text-6xl">PRICE POOL : ₹10,000</h1>
	</div>
	<div
		class="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center text-white"
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

<section class="relative mt-10 h-auto min-h-[740px] w-full p-5 gl:p-10">
	<h1 class="relative mx-5 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		GUIDELINES
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<p class="relative block font-sans text-sm gl:text-xl">
			Welcome Code Wizards. Get ready to dive into a world of innovation, creativity, and endless
			possibilities!. This competition is designed to challenge and inspire developers, bringing out
			the best in coding talent. The event consists of a preliminary online round followed by an
			on-campus final at Rajagiri College of Social Sciences.
		</p>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		RULES
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="list-disc space-y-4 pl-5 font-sans text-sm text-white gl:text-xl">
			<li>
				<strong>Mobile Phones and Electronic Gadgets:</strong> Participants are not permitted to use
				mobile phones or any electronic gadgets during the event.
			</li>
			<li>
				<strong>Identity Proof:</strong> Each participant must carry a valid identity proof and college
				ID card.
			</li>
			<li>
				<strong>Internet Access:</strong> Internet will not be provided during the final round of the
				event.
			</li>
			<li>
				<strong>Disqualification Policy:</strong> Any participant found misbehaving or using unfair means
				will be disqualified and barred from participating in any future events.
			</li>
			<li>
				<strong>Substance Policy:</strong> Smoking, drinking, and the consumption of any prohibited substances
				are strictly prohibited.
			</li>
			<li>
				<strong>Judges' Decision:</strong> The decision of the judges is final and cannot be challenged.
			</li>
			<li>
				<strong>Event Rules:</strong> Participants are required to thoroughly review and adhere to all
				event rules.
			</li>
			<li>
				<strong>Multiple Participation:</strong> Participants may enter multiple individual events in
				the preliminary round.
			</li>
			<li>
				<strong>Punctuality:</strong> All events will commence at the scheduled times. Punctuality is
				appreciated.
			</li>
			<li>
				<strong>Rule Changes:</strong> Rules are subject to change and any updates will be announced
				before the event starts.
			</li>
			<li>
				<strong>Competition Results:</strong> The winners of the 1st, 2nd, and 3rd places will be announced.
			</li>
			<li>
				<strong>Certificates:</strong> All participants will receive a participation certificate.
			</li>
			<li>
				<strong>Contact Information:</strong> For more details, please contact the event coordinators.
			</li>
		</ul>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		ROUNDS
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="mx-5 list-disc space-y-4 font-sans text-sm text-white gl:text-xl">
			<li>
				<strong>24th Aug - Code Oracle:</strong>
				This round features 25 multiple-choice questions focusing on predicting the output of code snippets.
				You will have 30 minutes to complete the test. The top 50 performers will advance to the second
				round of preliminaries.Top 50 will qualify for Round 2.
			</li>
			<li>
				<strong>27th Aug - Algorithm Showdown:</strong>
				In this round, you'll tackle 2 coding problems on Hackerrank over the course of 1 hour. The competition
				is organized into 5 batches.Top 30 will qualify for Round 3.
			</li>
			<li>
				<strong>30th Aug - Debug Duel:</strong>
				This round tests your debugging skills. You'll have 60 minutes to fix 3 code snippets with bugs.
				You are allowed one false appeal for clarification.Top 15 will qualify for final round.
			</li>
			<li>
				<strong>30th Aug - Code Masters:</strong>
				In this final round, you'll work on 4 coding problems over a 2-hour period.The top 2 participants
				will be declared winners.
			</li>
		</ul>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		PRIZE
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="mx-5 list-disc space-y-4 font-sans text-sm text-white gl:text-xl">
			<li class="text-3xl font-semibold">First Prize : ₹7,000</li>
			<li class="text-2xl font-semibold">Second Prize : ₹3,000</li>
		</ul>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-2xl uppercase text-white gl:mx-10 gl:text-4xl">
		REGISTRATION FEE: ₹150
	</h1>
	<div class="relative my-10 grid w-full place-items-center gap-4 sm:gap-6">
		<a
			href="/register"
			class="block w-full bg-neon-violet px-4 py-2 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-50"
			>REGISTER NOW</a
		>
	</div>
</section>

<section class="relative mb-10 h-auto min-h-[370px] w-full p-5 gl:p-10">
	<h1 class="relative mx-5 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		CONTACT
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<h2 class="font-Ubuntu mb-4 text-2xl uppercase text-white">Coordinators</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">GRACEN K SHAJI (PG)</h3>
				<p class="text-white">+91 7736705727</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-neon-violet">MUHZINA MOHAMED AFZAL (PG)</h3>
				<p class="text-white">+91 6282648189</p>
			</div>
		</div>
	</article>
</section>
