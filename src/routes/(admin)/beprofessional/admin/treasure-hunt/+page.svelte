<script lang="ts">
    import * as Table from "$lib/shardcn/ui/table/index.js";
    export let data;
</script>
   
<main class="container mx-auto mt-6">
    {#each data.teams as team}
        <h3 class="font-semibold">TEAM NAME : {team.team_name}</h3>
        <Table.Root>
            <Table.Header>
            <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Phone</Table.Head>
            </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell class="font-semibold">{team.Leader.name} (L)</Table.Cell>
                    <Table.Cell class="font-semibold">{team.Leader.email}</Table.Cell>
                    <Table.Cell class="font-semibold">{team.Leader.phone}</Table.Cell>
                </Table.Row>
            {#each team.Team_members as member}
                <Table.Row>
                    <Table.Cell>{member.name}</Table.Cell>
                    <Table.Cell>{member.email}</Table.Cell>
                    <Table.Cell>{member.phone}</Table.Cell>
                </Table.Row>
            {/each}
            </Table.Body>
        </Table.Root>
    {/each}
</main>