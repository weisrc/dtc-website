<script lang="ts">
	import { infoLinks, socialLinks } from '../data/links';
	import Icon from '@iconify/svelte';

	const icons = {
		Facebook: 'ant-design:facebook-filled',
		Instagram: 'akar-icons:instagram-fill',
		Twitter: 'akar-icons:twitter-fill',
		GitHub: 'akar-icons:github-fill',
		Discord: 'simple-icons:discord'
	};

	const copyright = '© 2021 Dawson Technology Club, LLC. All rights reserved.';
</script>

<section class="bg-white">
	<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
		<nav class="flex flex-wrap justify-center -mx-5 -my-2">
			{#each infoLinks as {href, text}}
				<div class="px-5 py-2">
					<a sveltekit:prefetch {href} class="text-base leading-6 text-gray-500 hover:text-gray-900">
						{text}
					</a>
				</div>
			{/each}
		</nav>
		<div class="flex justify-center mt-8 space-x-6">
			{#each socialLinks as {text, href}}
				<a rel="external" {href} class="text-gray-400 hover:text-gray-500">
					<span class="sr-only">{text}</span>
					<Icon icon={icons[text]} height={24}/>
				</a>
			{/each}
		</div>
		<p class="mt-8 text-base leading-6 text-center text-gray-400">
			{copyright}
		</p>
	</div>
</section>
