<script lang="ts">
	import LinkButton from '../elements/LinkButton.svelte';

	export let hero: IHero;
</script>

<section class="m-auto max-w-6xl p-12">
	<div class="flex flex-col md:flex-row">
		<div class="md:w-1/2 max-w-md flex flex-col justify-center">
			<div class="md:text-5xl text-2xl uppercase font-bold">{hero.title}</div>
			<div class="text-xl mt-6 mb-4">
				{hero.body}
			</div>
			<div class="my-6">
				<LinkButton {...hero.link} size="lg" />
			</div>
		</div>
		<div class="flex md:justify-end w-full md:w-1/2 -mt-5">
			<div style="background-image: url(hero-dots.svg);background-repeat: no-repeat;">
				<div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
					<img alt="card img" class="rounded" src={hero.image} />
				</div>
			</div>
		</div>
	</div>
</section>
