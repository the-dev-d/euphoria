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


<main class="w-full h-screen  flex items-center justify-center">
    <div class="w-[800px] h-[auto] flex bg-[#1E1E1E] rounded-md overflow-hidden shadow-md border border-[#3BE4C4] m-3">
        <div class=" w-full md:w-1/2 p-8 flex flex-col justify-center">
            <form method="POST" class="w-full space-y-4"> <!-- Added space-y-4 for vertical spacing -->
                <h1 class="text-3xl text-center font-anton mb-8 text-white">REGISTRATION</h1>
                <div class="flex flex-col gap-2">
                    <Label for="name">Name</Label>
                    <Input required name="name" type="text" bind:value={name} id="name" placeholder="Enter your name" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);"/>
                    {#if name && nameError}
                        <p class="text-red-400 text-xs">{nameError}</p>
                    {/if}
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="college">College Name</Label>
                    <Input required name="college" type="text" bind:value={college} id="college" placeholder="Enter your college" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);"/>
                    {#if college && collegeError}
                        <p class="text-red-400 text-xs">{collegeError}</p>
                    {/if}
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="email">Email</Label>
                    <Input required name="email" type="email" id="email" bind:value={email} placeholder="Enter your email address" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);"/>
                    {#if email && emailError}
                        <p class="text-red-400 text-xs">{emailError}</p>
                    {/if}
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="phone">Phone</Label>
                    <div class="flex items-center gap-3">
                        <span class="text-sm">+91</span>
                        <Input required name="phone" type="phone" id="phone" bind:value={phone} placeholder="Enter your phone number" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);"/>
                    </div>
                    {#if phone && phoneError}
                        <p class="text-red-400 text-xs">{phoneError}</p>
                    {/if}
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="password">Password</Label>
                    <Input required name="password" type="password" id="password" bind:value={password} placeholder="Enter your password" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);"/>
                    {#if password && passwordError}
                        <p class="text-red-400 text-xs">{passwordError}</p>
                    {/if}
                </div>
                <div class="flex flex-col gap-2">
                    <Label for="confirm_password">Confirm Password</Label>
                    <Input required name="confirm_password" type="password" id="confirm_password" bind:value={confirmPassword} placeholder="Confirm Password" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);"/>
                    {#if confirmPassword && confirmPassword !== password}
                        <p class="text-red-400 text-xs">Password does not match</p>
                    {/if}
                </div>
                <div class="flex flex-col gap-2">
                    <Button  class=" bg-[#3BE4C4]" disabled={(nameError != undefined || emailError != undefined || phoneError != undefined || passwordError != undefined || password !== confirmPassword)} type="submit">Register</Button>
                    <p class="text-sm flex gap-3 mt-2"><span>Already Registered? </span> <a href="/login" class="text-[#3BE4C4]">Login</a> </p>
                </div>
                {#if form?.success}
                    <p class="text-sm text-green-500">Registration successfull</p>
                {:else if form && !form.success && form.message}
                    <p class="text-sm text-red-400 my-2">{form.message}</p>
            {/if}
            </form>
        </div>
        <div class="w-1/2 hidden bg-[#0F2027] md:flex flex-col items-center justify-center bg-cover bg-center" style="background-image: url('/images/forms/fbgarcade.jpg');">
            <img 
            src="/images/forms/logoeuph.png" 
            alt="Logo" 
            class="image-logo spacing w-80 h-auto" 
            style="max-width: 100%; height: auto;"
          />
          <img 
            src="/images/forms/Typeface.png" 
            alt="Typeface" 
            class="image-typeface w50 h-auto" 
            style="max-width: 100%; height: auto;"
          />
        </div>
    </div>
</main>
<style>
    .background {
      background-image: url('/images/forms/fbgarcade.jpg');
      background-size: cover;
      background-position: center;
    }
    .image-logo,
    .image-typeface {
      filter: brightness(0) invert(1); /* Makes the image white */
    }
    .spacing {
      margin-bottom: 18px; /* Adds 20px distance between images */
    }
  </style>