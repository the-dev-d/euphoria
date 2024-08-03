<script>
	import About from '$lib/components/MainPage/About.svelte';
	import Banner from '$lib/components/MainPage/Banner.svelte';
	import CountDown from '$lib/components/MainPage/CountDown.svelte';
	import Events from '$lib/components/MainPage/Events.svelte';
	import Schedule from '$lib/components/MainPage/schedule.svelte';

	export let data;
	console.log(data);
</script>

<Banner authenticated={data.authenticated == true} />
<CountDown />
<About />
<Events />
<Schedule/>

<style>
</style>
