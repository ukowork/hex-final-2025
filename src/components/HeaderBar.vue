<template>
  <header class="sticky top-0 z-50 mx-auto my-0 w-full bg-wrap py-6">
    <nav class="flex justify-center gap-x-10">
      <router-link :class="['nav-link', $route.path === '/' && 'text-brand']" to="/">首頁</router-link>
      <router-link :class="['nav-link', $route.path.includes('blog') && 'text-brand']" to="/blog">部落格</router-link>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply text-[1.75rem] font-[700];
}
</style>