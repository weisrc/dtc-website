<script lang="ts">
	import Modal from './Modal.svelte';
	import Button from '../elements/Button.svelte';
	import Badge from '../elements/Badge.svelte';

	export let selectedServices: string[];
	export let expandedService: IService;

	function close() {
		expandedService = null;
	}

	function select() {
		selectedServices = selectedServices.concat(expandedService.id);
		expandedService = null;
	}
</script>

<Modal display={expandedService.display}>
	<div slot="head">
		<Badge {...expandedService.status} />
		{#each expandedService.team as { picture, name }}
			<img
				class="w-6 h-6 rounded-full border-gray-200 border transform inline"
				src={picture}
				alt={name}
			/>
		{/each}
	</div>
	<div slot="body">
		<p class="text-sm text-gray-500">
			{expandedService.description}
		</p>
	</div>
	<div slot="footer">
		<Button variant="secondary" style="mr-2" on:click={close}>Return</Button>
		{#if !selectedServices.includes(expandedService.id)}
			<Button variant="primary" on:click={select}>Select</Button>
		{/if}
	</div>
</Modal>
