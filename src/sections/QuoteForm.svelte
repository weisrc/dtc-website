<script lang="ts">
	import { goto } from '$app/navigation';
	import { afterUpdate, onMount } from 'svelte';
	import { contactFormSection, requestFormSection } from '../data/forms';
	import * as services from '../data/services';
	import { sendMessageFile } from '../discord';
	import Button from '../elements/Button.svelte';
	import LinkButton from '../elements/LinkButton.svelte';
	import { tryGetFromSessionStorage } from '../utils';
	import FormSection from './FormSection.svelte';

	const formSections: IFormSection[] = [contactFormSection, requestFormSection];

	let formData: TKeyValue = {};
	let selectedServices: string[] = [];

	onMount(() => {
		formData = tryGetFromSessionStorage('formData', {});
		selectedServices = tryGetFromSessionStorage('selectedServices', []);
		for (const serviceId of selectedServices) {
			const { display } = services[serviceId] as IService;
			formSections.push({
				display,
				description: `More information on ${display.text} service.`,
				fields: [
					{
						id: `${serviceId}Details`,
						label: `What are the details, features and requirements for ${display.text} service?`,
						kind: 'textarea'
					}
				]
			});
		}
	});

	afterUpdate(() => {
		sessionStorage.formData = JSON.stringify(formData);
	});

	let failedToSend = false;

	async function send(e: any) {
		e.preventDefault();
		if (!(await sendMessageFile(JSON.stringify({ ...formData, selectedServices }, null, 2)))) {
			failedToSend = true;
			return;
		}
		goto('/quote-requested');
	}
</script>

<form on:submit={send}>
	{#each formSections as formSection}
		<FormSection {formSection} bind:formData />
	{/each}

	<section class="p-9">
		<div class="flex flex-col sm:flex-row sm:justify-end">
			<LinkButton href="/services" size="lg" variant="secondary" style="sm:mr-2 mb-2 sm:mb-0"
				>Select more services</LinkButton
			>
			<Button size="lg" type="submit">Send request</Button>
		</div>
		{#if failedToSend}
			<p class="text-red-500 text-right mt-3">Something went wrong... Please try again later.</p>
		{/if}
	</section>
</form>
