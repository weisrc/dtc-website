<script lang="ts">
	export let content: string;
	export let title: string;
</script>

<section class="mx-auto max-w-screen-sm p-12">
	<div class="shadow rounded-md bg-black mx-auto overflow-hidden">
		<div class="flex items-center h-6 bg-gray-100 border-b border-gray-500 text-center text-black">
			<div
				class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
			/>
			<div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" />
			<div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" />
			<div class="mx-auto pr-16">
				<p class="text-center text-sm">{title}</p>
			</div>
		</div>
		<div class="pl-1 pt-1 h-auto font-mono bg-black">
			{#each content.split(/[\n\r\t]+/) as line}
				<p class="pb-1 {line.startsWith('$') ? 'text-blue-300' : 'text-green-200'}">{line}</p>
			{/each}
		</div>
	</div>
</section>
