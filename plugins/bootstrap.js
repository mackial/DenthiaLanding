import * as bootstrap from "bootstrap";

export default defineNuxtPlugin(nuxtApp => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide('bootstrap', () => bootstrap)
  //  This will allow us to use the bootstrap object
  //
  //  Example:
  //  const scrollSpy = new this.$bootstrap.ScrollSpy(document.body, {
  //    target: '#scrollspy'
  //  });
})
