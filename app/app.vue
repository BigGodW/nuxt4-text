<template>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
  </div>
</template>
<script setup>
  const seo = await useSiteSeo()
  useHead({
    title: seo.siteName,
    meta: [
      { name: 'description', content: seo.siteDescription },
      { name: 'keywords', content: seo.siteKeywords },
      { name: 'author', content: seo.siteAuthor },
      { name: 'robots',content: 'index,follow'},
      { name: 'viewport', content : 'width=device-width, initial-scale=1.0'},
      { charset : "utf-8" },

      // OG
      { property: 'og:title', content: seo.ogTitle },
      { property: 'og:description', content: seo.ogDescription },
      { property: 'og:image', content: seo.ogImageUrl },
      // Twitter
      { name: 'twitter:card', content: seo.twitterCard },
      { name: 'twitter:title', content: seo.ogTitle },
      { name: 'twitter:description', content: seo.ogDescription },
      { name: 'twitter:image', content: seo.ogImageUrl },
    ],
    link: [
      { rel: 'icon', href: seo.faviconUrl },
    ],
  })
</script>
