<script lang="ts">
	export let testimonials: ITestimonial[];

	const cardClasses = [
		'lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0',
		'lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0',
		'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8',
		'lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20',
		'lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4 2xl:h-screen'
	];
	const bgColors = ['bg-indigo-600', 'bg-gray-900', 'bg-white', 'bg-purple-800', 'bg-white'];
	const textColors = ['text-white', 'text-white', 'text-black', 'text-white', 'text-black'];
</script>

<section>
	<div
		class="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6"
	>
		{#each testimonials as { author, title, body }, i}
			<div class="{bgColors[i]} {cardClasses[i]}">
				<div class="mx-6 my-8 2xl:mx-10">
					<img
						class="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4"
						src={author.picture}
						alt={author.name}
					/>
					<h1
						class="{textColors[
							i
						]} text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8"
					>
						{author.name}
					</h1>
					<h2
						class="{textColors[
							i
						]} text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8"
					>
						{author.position}
					</h2>
				</div>
				<div class="-mt-6 relative">
					<p class="{textColors[i]} text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">
						{title}
					</p>
					<br />
					<p
						class="{textColors[
							i
						]} text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2"
					>
						“ {body} ”
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
