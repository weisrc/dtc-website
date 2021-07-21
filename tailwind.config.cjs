module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte', './src/**/*.ts'],
	theme: {
		extend: {}
	},
	variants: {},
	plugins: [require('@tailwindcss/custom-forms'), require('@tailwindcss/forms')]
};
