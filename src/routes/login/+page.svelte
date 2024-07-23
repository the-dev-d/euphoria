<script lang="ts">
    import { Input } from "$lib/shardcn/ui/input/index";
    import { Label } from "$lib/shardcn/ui/label/index";
    import { Button } from "$lib/shardcn/ui/button/index";
</script>

<main class="w-full bg-slate-100 h-[100svh] grid place-items-center">
    <div class="grid gap-6 bg-white p-8 rounded-md shadow-md">
        <div class="flex w-full max-w-sm flex-col gap-1.5">
            <Label for="email">Email</Label>
            <Input name="email" type="email" id="email" placeholder="Enter your email address" />
        </div>
    
        <div class="flex w-full max-w-sm flex-col gap-1.5">
            <Label for="password">Password</Label>
            <Input name="password" type="password" id="password" placeholder="Enter your password" />
        </div>
        <Button>Login</Button>
    </div>
</main>