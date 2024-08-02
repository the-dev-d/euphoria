<script lang="ts">
	export let authenticated: boolean = false;
</script>

<header
	class="sticky top-0 z-40 h-[10svh] max-h-[5svh] w-full bg-primary-dark gl:max-h-[10svh] gl:px-4"
>
	<nav class="flex h-full w-full items-center justify-between md:px-6">
		<div class="relative flex h-full w-fit items-center justify-center gap-3 gl:py-2">
			<div class=" relative h-full w-fit p-1">
				<img src="/favicon.png" alt="Logo" class=" aspect-square h-full object-contain" />
			</div>
			<div
				class="relative flex items-center justify-start font-valorant text-xl sm:text-2xl gl:text-2xl"
			>
				<a href="/">EUPHORIA'24</a>
			</div>
		</div>
		<ul
			class="relative flex w-fit items-center justify-end gap-2 px-3 font-valorant text-sm uppercase sm:gap-3 sm:text-xl md:gap-5 gl:justify-start gl:gap-6"
		>
			<!-- <li><a href="#">Fixtures</a></li>
			<li><a href="#">Tickets</a></li>
			<li><a href="#">Gallery</a></li> -->
			<!-- {#if !authenticated}
				<a href="/login" class="">Login</a>
			{:else}
				<form method="POST" action="?/logout">
					<button
						class="fa-solid fa-right-from-bracket my-auto ml-6 scale-105 rounded-full border p-3 hover:bg-slate-500"
						type="submit"
					></button>
				</form>
			{/if} -->
		</ul>
	</nav>
</header>

<style>
</style>
