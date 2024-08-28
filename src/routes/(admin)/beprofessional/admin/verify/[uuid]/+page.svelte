<script lang="ts">
	import Button from "$lib/shardcn/ui/button/button.svelte";
    import { Badge } from "$lib/shardcn/ui/badge";
    import * as Table from "$lib/shardcn/ui/table/index";    

    export let data;

</script>

<main class="container mx-auto">
    <div>
        <h2>Participant</h2>
        <ul>
            <li>
                <span class="capitalize">name : </span> <span>{data.participant.name}</span>
            </li>
            <li>
                <span class="capitalize">email : </span> <span>{data.participant.email}</span>
            </li>
            <li>
                <span class="capitalize">college : </span> <span>{data.participant.college}</span>
            </li>
            <li>
                <span class="capitalize">phone : </span> <span>{data.participant.phone}</span>
            </li>
            <li>
                <span class="capitalize">entry left : </span> <span>{data.participation.filter(p => !p.used).length}/{data.participation.length}</span>
            </li>
        </ul>
    </div>

    <div class="mt-6">
        <h3>Participations</h3>
        {#each data.participation as p }
            <form class="border p-3 rounded-md shadow-sm flex items-center justify-between" action="?/complete" method="post">
                <input type="hidden" name="participation" value={p.event_participant_id}>
                <div class="flex gap-6">
                    <div>
                        <span>Event : </span> <span>{p.event_code}</span>
                    </div>
                    <Badge>
                        {p.verified ? "verified" : "verification pending"}
                    </Badge>
                </div>
                {#if p.used}
                    <Badge>Used</Badge>

                {:else}
                    <Button type="submit" disabled={!p.verified}>
                        Mark as used
                    </Button>
                {/if}
                
            </form>
        {/each}
    </div>

    {#if data.team}
        <div class="mt-6">
            <h3 class="font-semibold">TEAM NAME : {data.team.team_name}</h3>
        <Table.Root>
            <Table.Header>
            <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Phone</Table.Head>
            </Table.Row>
            </Table.Header>
            <Table.Body>
            {#each data.team.Team_members as member}
                <Table.Row>
                    <Table.Cell>{member.name}</Table.Cell>
                    <Table.Cell>{member.email}</Table.Cell>
                    <Table.Cell>{member.phone}</Table.Cell>
                </Table.Row>
            {/each}
            </Table.Body>
        </Table.Root>
        </div>
    {/if}

    <!-- {JSON.stringify(data.team)} -->
</main>