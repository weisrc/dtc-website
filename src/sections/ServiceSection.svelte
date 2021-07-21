<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import ServiceTable from '../components/ServiceTable.svelte';
	import ServiceModal from '../components/ServiceTableModal.svelte';
	import LinkButton from '../elements/LinkButton.svelte';

	export let title: string;
	export let services: IService[];

	const totalServices = Object.keys(services).length;
	let expandedService: IService;
	let selectedServices: string[] = [];

	onMount(() => {
		selectedServices = JSON.parse(sessionStorage.selectedServices ?? '[]');
	});

	afterUpdate(() => {
		sessionStorage.selectedServices = JSON.stringify(selectedServices);
	});
</script>

<section class="p-9">
	<h1 class="text-black font-medium leading-snug my-6 text-2xl">{title}</h1>
	<div class="bg-white shadow-md rounded overflow-hidden">
		<ServiceTable bind:selectedServices bind:expandedService {services} {totalServices} />
	</div>
	<div class="mt-8">
		<LinkButton href="/quote" size="lg">Get your custom quote!</LinkButton>
	</div>
</section>

{#if expandedService}
	<ServiceModal bind:expandedService bind:selectedServices />
{/if}
