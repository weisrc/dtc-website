<script lang="ts">
	import OfferCard from '../components/OfferCard.svelte';

	export let offers: IOffer[]
	export let title: string
	export let description: string
</script>

<section>
	<div class="container max-w-full mx-auto p-6">
		<h1 class="text-center text-4xl text-black font-medium leading-snug">{title}</h1>
		<p class="text-center text-lg text-gray-700 mt-2 px-6">
			{description}
		</p>
		<div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />

		<div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
			<div class="relative flex flex-col md:flex-row items-center justify-center">
				{#each offers as offer}
					<OfferCard {offer} />
				{/each}
			</div>
		</div>
	</div>
</section>
