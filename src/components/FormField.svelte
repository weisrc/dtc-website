<script lang="ts">
	import { onMount } from 'svelte';

	import Checkbox from '../elements/Checkbox.svelte';
	export let formField: IFormField;
	export let formData: TKeyValue;

	const {
		placeholder,
		autocomplete,
		kind,
		id,
		label,
		description,
		pattern,
		defaultValue,
		showIf
	} = formField;
	const style =
		'focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded sm:text-sm border-gray-300';

	const update = (value: any) => {
		formData = { ...formData, [id]: value };
	};
	const updateChecked = ({ target }) => update(target.checked);
	const updateValue = ({ target }) => update(target.value);

	let value = null;
	$: value = formData[id] ?? defaultValue ?? null;
</script>

{#if !showIf || showIf(formData)}
	<div>
		<div class="flex items-center">
			{#if kind == 'checkbox'}
				<Checkbox checked={value} style="mr-2" {id} on:change={updateChecked} />
			{/if}
			<label for={id}>{label}</label>
		</div>

		{#if kind == 'textarea'}
			<textarea
				required
				{id}
				class={style}
				{placeholder}
				{value}
				{autocomplete}
				{pattern}
				on:input={updateValue}
			/>
		{:else if kind != 'checkbox'}
			<input
				required
				{id}
				{pattern}
				{value}
				{placeholder}
				{autocomplete}
				type={kind}
				class={style}
				on:input={updateValue}
			/>
		{/if}
		{#if description}
			<p class="mt-2 text-sm text-gray-500">
				{formField.description}
			</p>
		{/if}
	</div>
{/if}
