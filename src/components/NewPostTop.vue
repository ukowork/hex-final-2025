<template>
  <section class="mx-auto flex max-w-[1920px] flex-col border border-line lg:flex-row">
    <picture>
      <source media="(min-width: 1024px)" :srcset="latestPost.desktopCover" />
      <img :src="latestPost.deviceCover" alt="banner image" class="block w-full">
    </picture>
  <div class="flex-1 content-center px-3 py-12 lg:px-6 lg:py-0">
    <time class="mb-1 block text-fs-1">{{ latestPost.dateFormatted }}</time>
        <ul class="mb-2 flex flex-wrap items-center gap-y-1 ">
          <li class="text-fs-1.5 text-brand" v-for="(tag, idx) in latestPost.tags" :key="idx">
            <span>{{ tag }}</span>
            <span v-if="idx !== (latestPost.tags.length - 1)" class="mx-1">x</span>
          </li>
          <li class="ml-2 rounded-full bg-brand px-3 py-1.5 text-fs-1-bold text-white">最新文章</li>
        </ul>
        <!-- 連結在這 -->
        <a :href="buildRouteLink(latestPost.slug)" class="block">
          <h2 class="mb-2 text-fs-1.75-bold lg:whitespace-nowrap ">{{ latestPost.title }}</h2>
          <p class="line-clamp-2 mb-4 text-fs-1 lg:max-w-[636px]">{{ latestPost.description }}</p>
          <button type="button"
            class="rounded-full border border-black px-4 py-2 text-fs-1 text-content transition hover:bg-content hover:text-white ">
            閱讀內文 </button>
        </a>
      </div>
  </section>
</template>
<script>
import matter from 'gray-matter'
import { withBase, buildRouteLink } from '@/utils/url'

const context = require.context('@/content/blog', false, /\.md$/)
const allPosts = context.keys().map((key) => {
  const raw = context(key)
  const { data } = matter(raw.default || raw)
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const yyyy = date.getFullYear()
    const mm = (date.getMonth() + 1).toString().padStart(2, '0')
    const dd = date.getDate().toString().padStart(2, '0')
    return `${yyyy}/${mm}/${dd}`
  }
  return {
    ...data,
    dateFormatted: formatDate(data.date),
    slug: data.slug || key.replace('./', '').replace('.md', ''),
    dateObj: new Date(data.date),
    desktopCover: withBase(data.desktopCover),
    deviceCover: withBase(data.deviceCover)
  }
}).sort((a, b) => b.dateObj - a.dateObj)

export default {
  name: 'NewPostTop',
  data() {
    return {
      latestPost: allPosts[0],
    }
  },
  methods: {
    buildRouteLink,
  },
  // mounted() {
  //   console.log(process.env)
  //   console.log('BASE_URL is:', this.baseUrl)
  // }
}

</script>