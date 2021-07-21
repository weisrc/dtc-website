<script lang="ts">
	export let href: string;
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let text: string = ''
	export let style = '';

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

<a sveltekit:prefetch class="shadow rounded transition duration-200 text-center inline-block {style}" {href} on:click>{text}<slot /></a>
