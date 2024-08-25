<script>
	import Button from "$lib/shardcn/ui/button/button.svelte";
    import { Badge } from "$lib/shardcn/ui/badge";
    

    export let data;

</script>

<main class="container mx-auto">
    <div>
        <h2>Participant</h2>
        <ul>
            <li>
                <span class="capitalize">name : </span> <span> {data.viewer.name} </span>
            </li>
            <li>
                <span class="capitalize">email : </span> <span>{data.viewer.email}</span>
            </li>
            <li>
                <span class="capitalize">phone : </span> <span>{data.viewer.phone}</span>
            </li>
            <li>
                <span class="capitalize">Ticket for : </span> {data.ticket.count} <span></span>
            </li>
            <li>
                <span class="capitalize">
                    <Badge>
                        {data.ticket.verified ? "Verified" : "Verification Pending"}
                    </Badge>
                </span>
            </li>
        </ul>
        <form class="my-6" action="?/complete" method="post">
            <input type="hidden" name="uuid" value={data.uuid}>
            {#if data.ticket.used}
                <Badge>Used</Badge>
            {:else}
                <Button type="submit" disabled={!data.ticket.verified}>Mark as used</Button>
            {/if}
        </form>
    </div>

    <div class="mt-6">
        <!-- <h3>Participations</h3> -->
        <!-- {JSON.stringify(data)} -->
    </div>

    <!-- {JSON.stringify(data)} -->
</main>