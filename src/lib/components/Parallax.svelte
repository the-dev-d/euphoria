<script>
	import Parallax from 'parallax-js';
	import { onDestroy, onMount } from 'svelte';

	let parallaxs = [];
	onMount(() => {
		const scenes = document.querySelectorAll('.parallax-scene');
		parallaxs = Array.from(scenes).map((scene) => new Parallax(scene));
	});

	// onDestroy(() =>{
	// 	parallaxs.forEach(parallax => parallax.destroy());
	// });
</script>

<!-- Usage:
	<Parallax>
		..contents
	</Parallax>
-->
<slot />

<style>
</style>
