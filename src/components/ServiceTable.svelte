<script lang="ts">

    import ServiceRow from "./ServiceRow.svelte"

    export let selectedServices: string[]
    export let totalServices: number
    export let services: IService[]
    export let expandedService: IService
</script>

<table class="min-w-max w-full table-auto">
    <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {#each [selectedServices.length + '/' + totalServices, 'Service', 'Status', 'Team'] as head}
                <th class="py-3 px-2 text-left">{head}</th>
            {/each}
        </tr>
    </thead>
    <tbody class="text-gray-600 text-sm font-light">
        {#each services as service}
            <ServiceRow {service} bind:expandedService bind:selectedServices />
        {/each}
    </tbody>
</table>