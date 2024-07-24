<script>
	import '../app.css';
	import NavBar from '$lib/components/LandingPage/NavBar.svelte';
	import Footer from '$lib/components/LandingPage/Footer.svelte';
</script>

<div
	class=" relative flex flex-col max-w-[1920px] min-w-[360px] mx-auto w-full text-sm sm:tesxt-base md:text-xl min-h-screen"
>
	<NavBar />
	<main class="flex flex-col flex-1">
		<slot />
	</main>
	<Footer/>
</div>

<style>
</style>
