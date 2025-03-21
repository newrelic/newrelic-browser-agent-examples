<script setup lang="ts">
useSeoMeta({
  titleTemplate: 'Nuxt v3 HN | %s',
  description: 'HackerNews clone built with Nuxt.',
  ogImage: 'https://hn.nuxt.space/cover.jpg',
  ogImageAlt: 'Nuxt Hackernews',
  twitterImage: 'https://hn.nuxt.space/cover.jpg',
  twitterSite: '@nuxt_js',
  twitterCreator: '@nuxt_js',
  twitterCard: 'summary_large_image',
})
useHead({
  script: [
    { key: 'instrumentNewrelic', tagPriority: 1, src: '/newrelic.js', type: 'text/javascript' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
