<script lang="ts">
	import ServiceSection from '../sections/ServiceSection.svelte';
	import { services } from '../data/services';
</script>

<ServiceSection {services} title="Select the services that best fit your needs." />
