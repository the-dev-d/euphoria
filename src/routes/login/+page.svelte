<script lang="ts">
    import { Input } from "$lib/shardcn/ui/input/index";
    import { Label } from "$lib/shardcn/ui/label/index";
    import { Button } from "$lib/shardcn/ui/button/index";
	import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<main class="w-full bg-slate-100 h-[100svh] grid place-items-center">
    <form method="POST" class="grid text-black bg-white p-6 rounded-md shadow-md">
        <div class="grid gap-4">
            <div class="flex w-full max-w-sm flex-col gap-1.5">
                <Label for="email">Email</Label>
                <Input name="email" type="email" id="email" placeholder="Enter your email address" />
            </div>
        
            <div class="flex w-full max-w-sm flex-col gap-1.5">
                <Label for="password">Password</Label>
                <Input name="password" type="password" id="password" placeholder="Enter your password" />
            </div>
            <Button type="submit">Login</Button>
        </div>

        <div class="mt-3">
            {#if form && !form.success && form.message}
                <p class="text-sm text-red-400">{form.message}</p>
            {/if}
        </div>
    </form>
</main>