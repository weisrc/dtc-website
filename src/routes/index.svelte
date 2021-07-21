<script lang="ts">
	import Hero from '../sections/Hero.svelte';
	import OfferSection from '../sections/OfferSection.svelte';
	import TestimonialCarousel from '../sections/TestimonialCarousel.svelte';
	import { joinLink } from '../data/links';
	import { testimonials } from '../data/testimonials';
	import { offers } from '../data/offers';

	const hero: IHero = {
		title: 'Dawson Technology Club',
		body: `Fueled by our passions, we explore, learn and build technologies for people in need.`,
		link: joinLink,
		image: '/hero-image.jpg'
	};
</script>

<Hero {hero} />
<TestimonialCarousel {testimonials} />
<OfferSection {offers} title="Offers" description="Here are our best services that we can offer you." />
