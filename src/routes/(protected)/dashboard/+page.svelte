<script lang="ts">
    export let data;
    console.log(data);
</script>

<section class="text-white w-full mt-20 px-10 min-h-[80svh] grid place-items-center">
    <div class="container mx-auto">
        {#if data.user}
            <h2>Welcome {data.user.name}</h2>
        {/if}
    </div>
</section>