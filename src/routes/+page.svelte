<script>
	import About from '$lib/components/MainPage/About.svelte';
	import Banner from '$lib/components/MainPage/Banner.svelte';
	import CountDown from '$lib/components/MainPage/CountDown.svelte';
	import Events from '$lib/components/MainPage/Events.svelte';
	import Oursponsors from '$lib/components/MainPage/oursponsors.svelte';
	import Promo from '$lib/components/MainPage/Promo.svelte';

	export let data;
</script>

<Banner authenticated={data.authenticated == true} />
<CountDown />
<About />
<Events />
<Oursponsors/>

<style>
</style>
