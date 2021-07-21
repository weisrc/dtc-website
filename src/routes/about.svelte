<script lang="ts">
	import TestimonialsBoard from '../sections/TestimonialBoard.svelte';
	import { weiPerson } from '../data/people';

	const testimonials: ITestimonial[] = [0, 0, 0, 0, 0].map(() => ({
		author: weiPerson,
		title: 'hello',
		body: 'hello'
	}));
</script>

<TestimonialsBoard {testimonials} />
