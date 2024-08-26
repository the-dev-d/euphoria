<script lang="ts">
	import Button from "$lib/shardcn/ui/button/button.svelte";


    export let label = "";
    export let click = () => {}

</script>
<Button on:click={click}>
    {label}
</Button>