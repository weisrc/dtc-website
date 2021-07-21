<script lang="ts">
    export let checked: boolean
    export let style = null
    export let id = null
</script>

<input type="checkbox" class="form-checkbox h-6 w-6 rounded {style}" bind:checked on:change {id} on:click/>
