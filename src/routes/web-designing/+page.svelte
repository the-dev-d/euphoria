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
		class="absolute left-0 top-0 grid h-full w-full grid-cols-1 place-items-center gap-10 overflow-hidden p-0 py-8 text-center drop-shadow-glow sm:py-14 md:p-10"
	>
		<h1
			class="text-cust-violet fugaz-one-regular relative z-10 text-4xl font-bold uppercase md:text-8xl gl:text-9xl"
		>
			ESPIRE
		</h1>
	</section>
	<div
		class="absolute bottom-[8%] left-0 right-0 flex flex-col items-center justify-center text-white gl:bottom-[15%]"
	>
		<h1 class="fugaz-one-regular mb-2 text-2xl font-bold gl:text-6xl">PRIZE POOL : ₹10,000</h1>
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

<section class="relative mt-10 h-auto min-h-[740px] w-full p-5 gl:p-10">
	<h1 class="relative mx-5 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		GUIDELINES
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<p class="relative block font-sans text-sm gl:text-xl">
			In the web designing competition, participants will engage in a series of 
			rounds. First, they will tackle a quiz designed to test their knowledge of modern web design
			principles and trends. Next, they will create a new website based on a given topic, showcasing their ability to translate a theme into a visually
			appealing and user-friendly design. Each round emphasizes creativity, innovation, and
			effective application of design concepts.
		</p>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		RULES
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="list-disc space-y-4 pl-2 font-sans text-sm text-white md:pl-5 gl:text-xl">
			<li>
				<strong>Individual Event:</strong> This is an individual competition, each participant competes
				alone.
			</li>
			<li>
				<strong>Punctuality:</strong> All events will commence at the scheduled times. Punctuality is
				appreciated.
			</li>
			<li>
				<strong>Identity Proof:</strong> Each participant must carry a valid identity proof and college
				ID card.
			</li>
			<li>
				<strong>Website Requirements:</strong> Participants must design a responsive website with a minimum
				of four pages based on a topic provided at the venue. The website must include:
			</li>
			<li>
				A homepage featuring a logo or picture representing the topic and the name of the website.
			</li>
			<li>Remaining pages providing content relevant to the website's theme.</li>
			<li>
				<strong>Presentation:</strong> Participants will present their final website to the judges.
			</li>
			<li>
				<strong>Judging:</strong> The judges' decisions are final and binding.
			</li>
			<li>
				<strong>Equipment and Resources:</strong> Each participant will be provided with a computer system
				for website development.
			</li>
			<li>
				The use of any electronic devices other than the allotted computer system during the
				development phase is prohibited and will lead to immediate disqualification.
			</li>
			<li>
				The use of ChatGPT or any other AI tools is strictly prohibited and will result in
				disqualification.
			</li>
			<li>
				<strong>Development Rules:</strong> Participants may use any css framework of their choice for
				developing the website.
			</li>

			<li>
				The use of pre-made templates is not allowed, all design and development work must be
				original.
			</li>

			<li>
				<strong>Additional Information:</strong> Ensure your design is responsive and functional on various
				devices. Follow the provided topic closely and maintain originality in your design.
			</li>
			<li>
				<strong>Rule Changes:</strong> Rules are subject to change and any updates will be announced
				before the event starts.
			</li>
			<li>
				<strong>Certificates:</strong> All participants will receive a participation certificate.
			</li>
			<li>
				<strong>No Refunds:</strong> Once registered, there are no take-backs. Ensure you're ready for
				the challenge before you commit!
			</li>
			<li>
				<strong>Contact:</strong> For any queries or further details, please contact the event coordinators.
			</li>
		</ul>
		<p class="mt-6">
			<strong>Note: </strong>If registrations exceed expectations, we will conduct a preliminary
			quiz round on the day of the event to shortlist candidates.
		</p>
	</article>

	<h1 class="relative mx-5 mt-10 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		PRIZE
	</h1>
	<article class="relative w-full overflow-hidden p-5 gl:p-10">
		<ul class="mx-5 list-disc space-y-4 font-sans text-sm text-white gl:text-xl">
			<li class="text-3xl font-semibold">First Prize : ₹6,000</li>
			<li class="text-2xl font-semibold">Second Prize : ₹4,000</li>
		</ul>
	</article>
	<h1 class="relative mx-5 mt-10 font-fugaz text-2xl uppercase text-white gl:mx-10 gl:text-4xl">
		REGISTRATION FEE: ₹150
	</h1>
	<div class="relative my-10 grid w-full place-items-center gap-4 sm:gap-6">
		<div
			class="block w-full bg-neon-violet px-4 py-2 text-center text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-50"
		>
		thanks to all participants and congratulations to the winners!
		</div>
	</div>
</section>

<section class="relative h-auto min-h-[370px] w-full p-5 gl:p-10">
	<h1 class="relative mx-5 font-fugaz text-4xl uppercase text-white gl:mx-10 gl:text-6xl">
		CONTACT
	</h1>

	<article class="relative w-full p-5 gl:p-10">
		<h2 class="font-Ubuntu mb-4 text-2xl uppercase text-white">Coordinators</h2>
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
