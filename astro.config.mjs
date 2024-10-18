// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://reliably.com",
  redirects: {
    "/product/": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/product/resiliency-engineering/": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/product/assistant/": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/product/experiment-builder/": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/product/accelerate/": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/contact/[...slug]": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/legal/[...slug]": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/activities/[...slug]": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/events/[...slug]": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/docs/[...slug]": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/concepts/[...slug]": {
      status: 301,
      destination: "https://reliably.com/"
    },
    "/blog/[...slug]": {
      status: 301,
      destination: "https://reliably.com/"
    },
  }
});
