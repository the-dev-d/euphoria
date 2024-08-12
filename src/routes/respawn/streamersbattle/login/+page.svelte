<script lang="ts">
    import { Input } from "$lib/shardcn/ui/input/index";
    import { Label } from "$lib/shardcn/ui/label/index";
    import { Button } from "$lib/shardcn/ui/button/index";
	import type { ActionData } from "./$types";

    export let form: ActionData;
</script>

<main class="w-full h-screen flex items-center justify-center">
    <div class="w-[800px] h-[400px] m-2 flex bg-[#1E1E1E] rounded-md overflow-hidden  shadow-md border border-[#3BE4C4]" >
        <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <form method="POST" class="w-full">
                <h1 class="text-3xl text-center font-anton mb-8 text-white">LOGIN</h1>
                <div class="space-y-4">
                    <Input name="email" class="w-full border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);"placeholder="E-MAIL" />
                    <Input name="password" type="password" class="w-full bg-[#2C3E50] border-none text-white placeholder-roboto" style="background-color: rgba(60, 72, 81, 0.3);" placeholder="PASSWORD" />
                    <Button type="submit" class="w-full bg-[#3BE4C4] hover:bg-[#33D1B3] text-white py-2 ">LOGIN</Button>
                    <!-- <Button type="button" class="w-full bg-transparent border border-[#3BE4C4] text-[#3BE4C4] hover:bg-[#3BE4C4] hover:text-white py-2 focus:ring-opacity-50">REGISTER</Button> -->
                </div>
                <div class="mt-3">
                    {#if form && !form.success && form.message}
                        <p class="text-sm text-red-400">{form.message}</p>
                    {/if}
                </div>
            </form>
        </div>
        <div class="w-0 md:w-1/2 bg-[#0F2027] flex flex-col items-center justify-center" style="background-image: url('/images/forms/fggaming.jpg'); background-size: cover; background-position: center;">
            
            <img 
            src="/images/forms/Logoc.png" 
            alt="Logo" 
            class="image-logo spacing w-80 h-auto" 
            style="max-width: 100%; height: auto;"
          />
          <img 
            src="/images/forms/Typeface.png" 
            alt="Typeface" 
            class="image-typeface w-50 h-auto" 
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
      transform: scale(0.8);
    }
    .spacing {
      margin-bottom: -45px; /* Adds 20px distance between images */
    }
  </style>
