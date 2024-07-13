<script>
	import glitch from "$lib/images/main/glitch.png"
	import contentglitch from "$lib/images/main/content-glitch.png"
	import logo from "$lib/images/main/logo.png"
	import agents from "$lib/images/main/agents.png"
	import Parallax from 'parallax-js';
	import { onMount } from "svelte";

	onMount(() => {
		const scene = document.getElementById("scene");
		const parallax = new Parallax(scene);
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="scene"  class="relative w-full h-full parallax-container overflow-hidden" >
	<slot></slot>
</section>

<style>
	.parallax-container {
		position: relative;
	}
	.parallax-container > * {
		width: 100%;
		height: 100%;
	}
</style>
