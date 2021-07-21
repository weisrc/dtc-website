<script lang="ts">
	export let style: string = '';
	export let text: string = '';
</script>

<span class="py-1 px-3 rounded-full text-xs {style}">{text}<slot /></span>
