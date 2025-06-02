<script>
// eslint-disable-next-line no-unused-vars
import { useRoute } from 'vue-router'
import matter from 'gray-matter'

const context = require.context('@/content/blog', false, /\.md$/)

export default {
  data() {
    const slug = this.$route.params.slug
    const matchPath = `./${slug}.md`
    const raw = context.keys().includes(matchPath) ? context(matchPath) : null

    if (!raw) {
      return {
        notFound: true,
        frontmatter: {},
        body: '',
      }
    }

    const { data, content } = matter(raw.default || raw)

    return {
      notFound: false,
      frontmatter: {
        ...data,
        dateFormatted: this.formatDate(data.date)
      },
      body: content,
    }
  },
  methods: {
    formatDate(dateStr) {
      const d = new Date(dateStr)
      const yyyy = d.getFullYear()
      const mm = (d.getMonth() + 1).toString().padStart(2, '0')
      const dd = d.getDate().toString().padStart(2, '0')
      return `${yyyy}/${mm}/${dd}`
    }
  }
}
</script>
<template>
  <div class="max-w-3xl mx-auto py-10">
    <div v-if="notFound" class="text-red-500">找不到這篇文章</div>
    <div v-else>
      <!--  ========================================================================= -->
      <h1 class="text-2xl font-bold mb-4">{{ frontmatter.title }}</h1>
      <p class="text-gray-500 text-sm mb-2">發佈日期：{{ frontmatter.dateFormatted }}</p>
      <p class="mb-6 text-gray-700">{{ frontmatter.description }}</p>
      <div class="prose" v-html="body"></div>
      <!--  ========================================================================= -->
    </div>
  </div>
</template>