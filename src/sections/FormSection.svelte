<script lang="ts">
	import FormField from '../components/FormField.svelte';
	import IconText from '../elements/IconText.svelte';

	export let formSection: IFormSection;
	const { description, display, fields } = formSection;
	export let formData: TKeyValue;
</script>

<section class="p-9">
	<div class="md:grid md:grid-cols-3 md:gap-6">
		<div>
			<h3 class="text-xl font-medium leading-6 text-gray-900">
				<IconText {...display} height={24} />
			</h3>
			<p class="mt-3 text-gray-600">
				{description}
			</p>
		</div>
		<div class="mt-5 md:mt-0 md:col-span-2">
			<div class="shadow sm:rounded-md sm:overflow-hidden">
				<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
					{#each fields as formField}
						<FormField {formField} bind:formData />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
