<script lang="ts">
	import { quoteLink, servicesLink } from '../data/links';
	import IconText from '../elements/IconText.svelte';
	import LinkButton from '../elements/LinkButton.svelte';

	export let offer: IOffer;
	const { label, services, price, per, description, name } = offer;

	function select() {
		sessionStorage.selectedServices = JSON.stringify(services.map(({id}) => id))
	}
</script>

<div
	class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg"
>
	{#if label}
		<div
			class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide"
		>
			{label}
		</div>
	{/if}
	<div class="block text-center text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
		<h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
			{name}
		</h1>
		<h2 class="text-sm text-gray-500 text-center pb-6">
			<span class="text-3xl">{price}</span>{per}
		</h2>
		{description}
	</div>
	<div class="flex justify-center mt-5">
		<ul>
			{#each services as { display }}
				<li class="mt-2">
					<IconText {...display} />
				</li>
			{/each}
		</ul>
	</div>

	<div class="flex items-center justify-center p-8">
		<LinkButton href={servicesLink.href} size="lg" on:click={select}>Select Offer</LinkButton>
	</div>
</div>
