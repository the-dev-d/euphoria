<script lang="ts">
    export let data;
</script>

<section class="text-white w-full mt-20 px-10 min-h-[80svh] grid place-items-center">
    <div class="container grid mx-auto gap-2">
        <div>
            {#if data.user}
                <h2>Welcome {data.user.name}</h2>
            {/if}
        </div>
        <div>
            <h2>Registered Events</h2>
            <div class="flex gap-3">
                {#each data.events as event}
                    <div class="border w-fit">
                        <span>
                            {event.event_code}
                        </span>
                        <span>
                            {event.verified}
                        </span>
                    </div>
                {/each}
            </div>
        </div>

        <div>
            <h2>All Events</h2>
            <div>
                <a href="/events/solo">Coding UG</a>
                <a href="/events/solo">Coding PG</a>
                <a href="/events/solo">Web Designing</a>
                <a href="/events/solo">Treasure Hunt</a>
                <a href="/events/solo">Respawn Gaming</a>
            </div>
        </div>
    </div>
</section>