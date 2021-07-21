<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../elements/Button.svelte';
	import Terminal from '../sections/Terminal.svelte';
	import { tryGetFromSessionStorage } from '../utils';


	let terminalContent = '';
	onMount(() => {
		const formData: any = tryGetFromSessionStorage('formData', {});

		const getBack = formData.contactUseTel
			? `Phone number: ${formData.contactTel}
        Call time range: ${formData.contactTelTime}
        Backup email: ${formData.contactEmail}`
			: `Email: ${formData.contactEmail}`;

		terminalContent = `$ cat request-info.txt
        ${getBack}
        Request name: ${formData.requestName}
        \n$ cat thank-you.txt
        Thank you so much for reaching out to us!
        `;
	});
</script>

<Terminal content={terminalContent} title="Your quote request has been received!" />
