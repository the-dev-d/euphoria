<script lang="ts">
	import { Badge } from "$lib/shardcn/ui/badge/index";
	export let data;
	const assets = {
		CUG: "coding.gif",
		CPG: "coding.gif",
		TH: "th.gif",
		WEB: "web.gif",
		RP: "gaming.gif"
	}
	const names = {
		CUG: "Coding UG",
		CPG: "Coding PG",
		WEB: "Web Designing",
		TH: "Treasure Hunt",
		RP: "Respawn"
	}

	const urls = {
		CUG: "/solo",
		CPG: "/solo",
		WEB: "/solo",
		TH: "/team/treasurehunt",
		RP: "/team/respawn"
	}

	const participated = data.events.map(e => e.event_code);
</script>

<section class="mb-10 mt-20 min-h-[80svh] w-full text-white px-5">
	<div class="mx-auto gl:mx-12 grid gap-2">
		<div class="flex h-fit mb-5 justify-between">
			{#if data.user}
				<h2 class="fugaz-one-regular text-4xl gl:text-6xl uppercase">Welcome {data.user.name}</h2> 
				<form method="POST" action="?/logout">
					<button class="fa-solid fa-right-from-bracket my-auto ml-6 scale-105 hover:bg-slate-500 p-3 rounded-full border" type="submit" ></button>
				</form>
			{/if}
		</div>
		<div>
			<h2 class=" mb-10 mt-14 w-full  font-Ubuntu text-2xl gl:text-4xl uppercase">
				Registered Events
			</h2>
			<div class="grid grid-cols-2 gap-3 md:grid-cols-4 gl:grid-cols-6">
				{#each data.events as event}
					<div class=" transition-all shadow-white" >
						<div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400">
							<div class="w-full text-center uppercase h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold" >
								<span>
									{names[event.event_code]}
								</span>
							</div>
							{#if event.verified}
								<div class="bottom-0 absolute m-1 text-xs bg-green-600 border p-1 px-3 rounded-full">
									<span>Verified</span>
								</div>
							{:else}
								<div class="bottom-0 absolute m-1 text-xs border-yellow-600 border p-1 px-3 rounded-full">
									<span>Verification Pending</span>
								</div>
							{/if}
							<img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src={"/images/covers/" + assets[event.event_code]} alt={event.event_code} />
						</div>
					</div>
				{/each}
				{#if !data.events || data.events.length == 0}
					<p class="text-sm opacity-70">No events yet</p>
				{/if}
			</div>
		</div>

		<div class="mb-16">
			<h2 class=" mb-10 mt-20 w-full font-Ubuntu  text-2xl gl:text-4xl uppercase">Other Events</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-3 gl:grid-cols-6">
				{#each Object.keys(names) as key}
					{#if !participated.includes(key)}
						<a  class="hover:scale-105 transition-all shadow-white" href={"/events" + urls[key]}
						><div class="aspect-square w-full relative border bg-blue-900/10 border-blue-400">
							<div class="w-full uppercase text-center h-full grid place-items-center z-20 absolute font-Ubuntu text-2xl font-semibold" >
								<span>{names[key]}</span>
							</div>
							<img class="absolute top-0 left-0 w-full h-full brightness-50 z-10" src="/images/covers/{assets[key]}" alt="{key}" />
						</div></a>
					{/if}
				{/each}
				
			</div>
		</div>
	</div>
</section>
