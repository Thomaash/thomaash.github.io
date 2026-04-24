import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['/', '/cs', '/de', '/pd', '/gd', '/ef', '/sf', '/md', '/inbox']
    }
  }
};

export default config;
