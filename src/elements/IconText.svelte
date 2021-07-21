<script lang="ts">
    import Icon from "@iconify/svelte"
    export let icon: string, text: string
    export let height: number = 18
</script>


<div class="flex items-center">
    <Icon {icon} class="mr-2" {height}/>
    <span class="font-medium">{text}</span>
</div>