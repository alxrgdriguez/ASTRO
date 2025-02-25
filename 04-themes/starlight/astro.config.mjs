// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mi documentación',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Documentacion',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Inicio', slug: 'guides/example' },
						{ label: 'Nuevos pasos', slug: 'guides/example-02' },
						{ label: 'Nuevos pasos 3', slug: 'guides/example-03' },
						{ label: 'Nuevos pasos 4', slug: 'guides/example-04' },
					],
				},
				{
					label: 'Referencias',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
