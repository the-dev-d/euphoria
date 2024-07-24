<script>
	import About from '$lib/components/MainPage/About.svelte';
	import Banner from '$lib/components/MainPage/Banner.svelte';
	import Events from '$lib/components/MainPage/Events.svelte';
	import Promo from '$lib/components/MainPage/Promo.svelte';

	export let data;
</script>

<Banner authenticated={data.authenticated}/>
<About />
<Events />
<Promo />

<style>
</style>
