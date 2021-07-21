<script lang="ts">
	import { navLinks, joinLink, quoteLink, homeLink } from '../data/links';
	import LinkButton from '../elements/LinkButton.svelte';
	import Logo from '../elements/Logo.svelte';
	import NavBurger from '../elements/NavBurger.svelte';
	import NavClose from '../elements/NavClose.svelte';

	export let path: string;

	let collapsed = true;
</script>

<nav class="relative px-4 py-4 flex justify-between items-center bg-white">
	<a class="text-3xl font-bold leading-none" href={homeLink.href}>
		<Logo />
	</a>
	<div class="sm:hidden">
		<button
			class="navbar-burger flex items-center text-blue-600 p-3"
			on:click={() => (collapsed = !collapsed)}
		>
			<NavBurger />
		</button>
	</div>
	<ul class="hidden ml-9 sm:flex sm:items-center sm:w-auto sm:space-x-5">
		{#each navLinks as { text, href }}
			<li>
				<a sveltekit:prefetch
					class="text-md {path == href
						? 'text-gray-900 font-bold'
						: 'text-gray-400 hover:text-gray-500'}"
					{href}>{text}</a
				>
			</li>
		{/each}
	</ul>
	<div class="hidden sm:inline-block sm:ml-auto sm:mr-3">
		<LinkButton {...joinLink} variant="secondary" style="mr-3" />
		<LinkButton {...quoteLink} variant="primary" />
	</div>
</nav>
{#if !collapsed}
	<div class="navbar-menu relative z-50 sm:hidden">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
		<nav
			class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
		>
			<div class="flex items-center mb-8">
				<a sveltekit:prefetch class="mr-auto text-3xl font-bold leading-none" href={homeLink.href}>
					<Logo />
				</a>
				<button class="navbar-close" on:click={() => (collapsed = true)}>
					<NavClose />
				</button>
			</div>
			<div>
				<ul>
					{#each navLinks as { text, href }}
						<li class="mb-1">
							<a sveltekit:prefetch
								class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
								{href}>{text}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-auto">
				<div class="pt-6">
					<LinkButton {...joinLink} variant="secondary" style="block text-center mb-3" />
					<LinkButton {...quoteLink} variant="primary" style="block text-center" />
				</div>
				<p class="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2021</span>
				</p>
			</div>
		</nav>
	</div>
{/if}
