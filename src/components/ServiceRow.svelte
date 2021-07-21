<script lang="ts">
	import IconText from '../elements/IconText.svelte';
	import Badge from '../elements/Badge.svelte';
	import Icon from '@iconify/svelte';
	import Checkbox from '../elements/Checkbox.svelte';

	export let service: IService;
	export let selectedServices: string[];
	export let expandedService: IService;

	const { id, display, disabled, status, team} = service;

	let selected = false

	$: {
		selected = selectedServices.includes(id)
	}

	// svelte does not seem to work with nested bind:group
	const toggleSelect = () => {
		if (selected) {
			selectedServices = selectedServices.filter((e) => e !== id);
		} else {
			selectedServices = selectedServices.concat(id);
		}
	};

	const expand = () => {
		expandedService = service;
	};
</script>

<tr class="border-b border-gray-200 hover:bg-gray-100">
	<td class="py-3 px-2">
		<div class="flex items-center">
			{#if !disabled}
				<Checkbox checked={selected} on:change={toggleSelect} />
			{/if}
		</div>
	</td>
	<td class="py-3 px-2 text-left whitespace-nowrap">
		<div class="flex items-center cursor-pointer" on:click={expand}>
			<IconText {...display} />
			<div class="ml-2 text-gray-300">
				<Icon icon="ant-design:info-circle-filled" />
			</div>
		</div>
	</td>
	<td class="py-3 px-2 text-left">
		<Badge {...status} />
	</td>
	<td class="py-3 px-2 text-center">
		<div class="flex items-center">
			{#each team as { picture, name }}
				<img
					class="w-6 h-6 rounded-full border-gray-200 border transform"
					src={picture}
					alt={name}
				/>
			{/each}
		</div>
	</td>
</tr>
