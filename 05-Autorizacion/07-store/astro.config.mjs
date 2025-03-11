// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

import auth from 'auth-astro';

<<<<<<< HEAD
import db from '@astrojs/db';

=======
>>>>>>> bdaebce10f1fe17350005ca82e7ef6f6814f5439
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
<<<<<<< HEAD
  integrations: [auth(), db()]
=======
  integrations: [auth()]
>>>>>>> bdaebce10f1fe17350005ca82e7ef6f6814f5439
});