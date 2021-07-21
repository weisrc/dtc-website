<script lang="ts">
	import { page } from '$app/stores';
	import { titles } from '../data/titles';
	import Footer from '../sections/Footer.svelte';
	import Navbar from '../sections/Navbar.svelte';

	let path = '';
	page.subscribe((page) => {
		path = page.path;
	});
</script>

<svelte:head>
	<title>{titles[path]}</title>
</svelte:head>

<Navbar {path} />
<slot />
<Footer />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	*/ html,
	body,
	* {
		font-family: 'Poppins', sans-serif;
	}
</style>
