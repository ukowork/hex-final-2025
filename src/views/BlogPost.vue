<!-- eslint-disable no-unused-vars -->
<script>
import matter from 'gray-matter'
import { buildRouteLink } from '@/utils/url'
import OnePostTop from '@/components/OnePostTop.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const context = require.context('@/content/blog', false, /\.md$/)

const allPosts = context.keys().map(key => {
  const raw = context(key)
  const { data } = matter(raw.default || raw)
  return {
    ...data,
    slug: data.slug || key.replace('./', '').replace('.md', ''),
    dateObj: new Date(data.date)
  }
}).sort((a, b) => b.dateObj - a.dateObj)

export default {
  data() {
    return {
      frontmatter: {},
      body: '',
      notFound: false,
      prevPost: null,
      nextPost: null,
    }
  },

  created() {
    this.loadPost(this.$route.params.slug)
  },

  watch: {
    '$route.params.slug'(newSlug) {
      this.loadPost(newSlug)
    }
  },

  methods: {
    buildRouteLink,
    formatDate(dateStr) {
      const d = new Date(dateStr)
      const yyyy = d.getFullYear()
      const mm = (d.getMonth() + 1).toString().padStart(2, '0')
      const dd = d.getDate().toString().padStart(2, '0')
      return `${yyyy}/${mm}/${dd}`
    },
    loadPost(slug) {
      const matchPath = `./${slug}.md`
      const raw = context.keys().includes(matchPath) ? context(matchPath) : null

      if (!raw) {
        this.notFound = true
        this.frontmatter = {}
        this.body = ''
        this.prevPost = null
        this.nextPost = null
        return
      }

      const { data, content } = matter(raw.default || raw)
      const index = allPosts.findIndex(post => post.slug.endsWith(slug))

      this.frontmatter = {
        ...data,
        dateFormatted: this.formatDate(data.date)
      }
      this.body = content
      this.notFound = false
      this.prevPost = allPosts[index + 1] || null
      this.nextPost = allPosts[index - 1] || null
      document.title = `${data.title} ⭐ 最終任務 - 個人品牌網站`;
    }
  },

  components: {
    OnePostTop,
    MarkdownRenderer,
  },
  
}
</script>
<template>
  <OnePostTop :onePost="frontmatter"></OnePostTop>
  <!--  ========================================================================= -->
  <div v-if="notFound" class="text-red-500 text-center">找不到這篇文章捏...</div>
  <!--  ========================================================================= -->
  <section v-if="!notFound" class="mx-auto max-w-[1920px] border border-line bg-wrap px-3 py-16 md:py-20">
    <div class="mx-auto mb-12 max-w-[636px]">
      <!--  ============================================================ -->
      <!-- <h2 class="mb-6 text-fs-1.75-bold text-brand">前言</h2>
      <p class="text-fs-1">{{ frontmatter.description }}</p>
      <div class="prose" v-html="body"></div> -->
      <MarkdownRenderer :source="body"></MarkdownRenderer>
      <!--  ============================================================== -->
      <!--  上一篇 / 下一篇 -->
      <div class="flex justify-between items-center mt-10">
        <router-link v-if="prevPost" :to="`/${prevPost.slug}`"
          class="flex items-center gap-1 rounded-full border border-black px-4 py-2 hover:border-brand hover:text-brand">
          <img src="../assets/img/icon/prev.webp" alt="上一篇" class="cursor-pointer" />
          <span>上一篇</span>
        </router-link>
        <span class="flex-1"></span>
        <router-link v-if="nextPost" :to="`/${nextPost.slug}`"
          class="flex items-center gap-1 rounded-full border border-black px-4 py-2 hover:border-brand hover:text-brand">
          <span>下一篇</span>
          <img src="../assets/img/icon/next.webp" alt="下一篇" class="cursor-pointer" />
        </router-link>
      </div>
      <!--  ============================================================== -->
    </div>
  </section>
  <!--  ========================================================================= -->
</template>