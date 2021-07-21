<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let style = '';
	export const type = null

	style +=
		' ' +
		{
			primary: 'bg-blue-500 hover:bg-blue-600 text-white',
			secondary: 'bg-gray-50 hover:bg-gray-100 text-gray-900'
		}[variant];
	style +=
		' ' +
		{
			sm: 'text-xm py-1 px-3',
			md: 'text-sm py-2 px-6 font-bold',
			lg: 'text-md py-3 px-8 font-bold'
		}[size];
</script>

<button {type} class="shadow rounded transition duration-200 text-center {style}" on:click><slot /></button>
