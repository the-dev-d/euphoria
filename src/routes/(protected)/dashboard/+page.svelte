<script lang="ts">
	export let data;
	const assets = {
		CUG: "coding.gif",
		TH: "th.gif",
		WEB: "web.gif"
	}
</script>

<section class="mb-10 mt-20 min-h-[80svh] w-full text-white">
	<div class="container mx-auto grid gap-2">
		<div>
			{#if data.user}
				<h2 class="fugaz-one-regular mb-5 text-6xl uppercase">Welcome {data.user.name}</h2>
			{/if}
		</div>
		<div>
			<h2 class=" mb-10 mt-14 w-full  font-Ubuntu text-4xl uppercase">
				Registered Events
			</h2>
			<div class="grid grid-cols-3 gap-3 gl:grid-cols-6">
				{#each data.events as event}
					<a class="hover:scale-105 transition-all shadow-white" href="/events/solo"
						><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400">
							<div class="w-full uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold" >
								<span>Web Designing</span>
							</div>
							<img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src={"/images/covers/" + assets[event.event_code]} alt="WEB" />
						</div>
					</a>
				{/each}
			</div>
		</div>

		<div class="mb-16">
			<h2 class=" mb-10 mt-20 w-full font-Ubuntu text-4xl uppercase">All Events</h2>
			<div class="grid grid-cols-3 gap-3 gl:grid-cols-6">
				<a class="hover:scale-105 transition-all shadow-white" href="/events/solo"
					><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400">
						<div class="w-full uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold" >
							<span>Coding UG/PG</span>
						</div>
						<img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src="/images/covers/coding.gif" alt="CUG" />
					</div></a
				>
				<a class="hover:scale-105 transition-all shadow-white" href="/events/solo"
					><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400">
						<div class="w-full uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold" >
							<span>Web Designing</span>
						</div>
						<img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src="/images/covers/web.gif" alt="WEB" />
					</div></a
				>
				<a class="hover:scale-105 transition-all shadow-white" href="/events/solo"
					><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400">
						<div class="w-full uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold" >
							<span>Treasure Hunt</span>
						</div>
						<img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src="/images/covers/th.gif" alt="CUG" />
					</div></a
				>
				<a class="hover:scale-105 transition-all shadow-white" href="/events/solo"
					><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400">
						<div class="w-full uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold" >
							<span>Respawn</span>
						</div>
						<img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src="/images/covers/coding.gif" alt="CUG" />
					</div></a
				>
			</div>
		</div>
	</div>
</section>
