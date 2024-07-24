<script lang="ts">
	export let data;
</script>

<section class="mb-10 mt-20 min-h-[80svh] w-full px-10 text-white">
	<div class="container mx-auto grid gap-2">
		<div>
			{#if data.user}
				<h2 class="fugaz-one-regular mb-5 text-6xl uppercase">Welcome {data.user.name}</h2>
			{/if}
		</div>
		<div>
			<h2 class=" mb-10 mt-5 w-full text-center font-Ubuntu text-5xl uppercase">
				Registered Events
			</h2>
			<div class="grid grid-cols-3 gap-3 gl:grid-cols-6">
				{#each data.events as event}
					<div class="aspect-square w-full bg-gradient-to-br from-blue-800 to-green-400">
						<div class=" w-fit">
							<span>
								{event.event_code}
							</span>
							<span>
								{event.verified}
							</span>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<h2 class=" mb-10 mt-20 w-full text-center font-Ubuntu text-5xl uppercase">All Events</h2>
			<div class="grid grid-cols-3 gap-3 gl:grid-cols-6">
				<a href="/events/solo"
					><div class="aspect-square w-full bg-gradient-to-br from-blue-800 to-green-400">
						Coding UG
					</div></a
				>
				<a href="/events/solo"
					><div class="aspect-square w-full bg-gradient-to-br from-blue-800 to-green-400">
						Coding PG
					</div></a
				>
				<a href="/events/solo"
					><div class="aspect-square w-full bg-gradient-to-br from-blue-800 to-green-400">
						Treasure Hunt
					</div></a
				>
				<a href="/events/solo"
					><div class="aspect-square w-full bg-gradient-to-br from-blue-800 to-green-400">
						Web Designing
					</div></a
				>
				<a href="/events/solo"
					><div class=" aspect-square w-full bg-gradient-to-br from-blue-800 to-green-400">
                        Respawn Gaming
                    </div></a
				>
			</div>
		</div>
	</div>
</section>
