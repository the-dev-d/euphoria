<script lang="ts">
    import { Input } from "$lib/shardcn/ui/input/index";
    import { Label } from "$lib/shardcn/ui/label/index";
    import { Button } from "$lib/shardcn/ui/button/index";
	import type { ActionData } from "./$types";
	import { ContestantSchema } from "$lib/zod/types";
	import { onMount } from "svelte";

    let name = "";
    let email = "";
    let password = "";
    let phone = "";
    let confirmPassword = "";
    let college = "";

    let nameError: string|undefined = "";
    let emailError: string|undefined = "";
    let passwordError: string|undefined = "";
    let phoneError: string|undefined = "";
    let collegeError: string|undefined = "";



    export let form: ActionData;
    $: {
        nameError = form?.error?.name?._errors[0];
        emailError = form?.error?.email?._errors[0];
        phoneError = form?.error?.phone?._errors[0];
        passwordError = form?.error?.password?._errors[0];
        collegeError = form?.error?.college?._errors[0];
    }

    $: {
        nameError = ContestantSchema.shape.name.safeParse(name).error?.format()._errors[0]
        emailError = ContestantSchema.shape.email.safeParse(email).error?.format()._errors[0]
        passwordError = ContestantSchema.shape.password.safeParse(password).error?.format()._errors[0]
        phoneError = ContestantSchema.shape.phone.safeParse(phone).error?.format()._errors[0]
        collegeError = ContestantSchema.shape.college.safeParse(college).error?.format()._errors[0]
    }

    

    onMount(() => {
        
    })
</script>


<main class="w-full bg-slate-100 h-[100svh] grid place-items-center">
    <form method="POST" class="grid text-black gap-6 bg-white p-8 rounded-md shadow-md w-1/3">
        <div class="flex w-full flex-col gap-1.5">
            <Label for="name">Name</Label>
            <Input required name="name" type="text" bind:value={name} id="name" placeholder="Enter your name" />
            {#if name && nameError}
                <p class="text-red-400 text-xs">{nameError}</p>
            {/if}
        </div>
        <div class="flex w-full flex-col gap-1.5">
            <Label for="college">College Name</Label>
            <Input required name="college" type="text" bind:value={college} id="college" placeholder="Enter your college" />
            {#if college && collegeError}
                <p class="text-red-400 text-xs">{collegeError}</p>
            {/if}
        </div>
        <div class="flex w-full flex-col gap-1.5">
            <Label for="email">Email</Label>
            <Input required name="email" type="email" id="email" bind:value={email} placeholder="Enter your email address" />
            {#if email && emailError}
                <p class="text-red-400 text-xs">{emailError}</p>
            {/if}
        </div>
        <div class="flex">
            <div class="flex w-full flex-col gap-1.5">
                <Label for="phone">Phone</Label>
                <div class="flex items-center gap-3">
                    <span class="text-sm">+91</span>
                    <Input required name="phone" type="phone" id="phone" bind:value={phone} placeholder="Enter your phone number" />
                </div>
                {#if phone && phoneError}
                    <p class="text-red-400 text-xs">{phoneError}</p>
                {/if}
            </div>
        </div>
        <div class="flex w-full flex-col gap-1.5">
            <Label for="password">Password</Label>
            <Input required name="password" type="password" id="password" bind:value={password} placeholder="Enter your password" />
            {#if password && passwordError}
                <p class="text-red-400 text-xs">{passwordError}</p>
            {/if}
        </div>
        <div class="flex w-full flex-col gap-1.5">
            <Label for="confirm_password">Confirm Password</Label>
            <Input required name="confirm_password" type="password" id="confirm_password" bind:value={confirmPassword} placeholder="Confirm Password" />
            {#if confirmPassword && confirmPassword !== password}
                <p class="text-red-400 text-xs">Password does not match</p>
            {/if}
        </div>
        <div>
            <Button disabled={(nameError!=undefined || emailError!= undefined || phoneError != undefined || passwordError != undefined || password !== confirmPassword)} type="submit">Register</Button>
            <p class="text-sm flex gap-3 mt-2"><span>Already Registered? </span> <a href="/login">Login</a> </p>
        </div>
        {#if form?.success}
            <p class="text-sm">Registration successfull</p>
        {/if}
    </form>
</main>