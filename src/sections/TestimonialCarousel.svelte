<script lang="ts">
	import { fly } from 'svelte/transition';

	export let testimonials: ITestimonial[];
	let i = 0;
	let quote = testimonials[0];
	setInterval(() => {
		quote = testimonials[++i % testimonials.length];
	}, 5000);
</script>

<section class="p-12 box-content h-64 overflow-hidden">
	{#key i}
		<div
			class="mx-auto rounded-lg bg-white shadow-lg p-10 text-gray-800 max-w-screen-sm"
			in:fly={{ x: 100, delay: 500, duration: 500 }}
			out:fly|local={{ x: -100, duration: 500 }}
		>
			<div class="w-full">
				<div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
					<img src={quote.author.picture} alt="" />
				</div>
			</div>
			<div class="w-full mb-5">
				<div class="text-3xl text-blue-500 text-left leading-tight h-3">“</div>
				<p class="text-md text-gray-700 text-center px-5">
					{quote.body}
				</p>
				<div class="text-3xl text-blue-500 text-right leading-tight h-3 -mt-3">”</div>
			</div>
			<div class="w-full">
				<p class="text-md text-blue-500 font-bold text-center">{quote.author.name}</p>
				<p class="text-xs text-gray-500 text-center">{quote.author.contact}</p>
			</div>
		</div>
	{/key}
</section>
