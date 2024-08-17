<script lang="ts">
    import { qr } from '@svelte-put/qr/svg';

    export let data;
</script>

<main class="my-24 text-base">
    <div class="container grid gap-3 mx-auto md:grid-cols-2">
        <div class="grid gap-4 h-fit">
            <div>
                <span>Name:</span> {data.participant.name}
            </div>
            <div>
                <span>College:</span> {data.participant.college}
            </div>
            <div>
                <span>Phone:</span> {data.participant.phone}
            </div>
            <div>
                <span>Email:</span> {data.participant.email}
            </div>
        </div>
        <div>
            <div class="container max-w-96">
                <!-- {`https://euphoria.rlabz.in/verify/` + data.verified[0].event_payment.uuid} -->
                 {#each data.verified as verified}
                    <svg
                    use:qr={{
                        data: `https://euphoria.rlabz.in/verify/` + verified.event_payment.uuid,
                        logo: '/images/logos/euphoria.png',
                        shape: 'circle',
                    }}
                    />
                 {/each}
            </div>              
        </div>
    </div>
</main>