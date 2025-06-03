<script>
import matter from 'gray-matter'

// 使用 require.context 讀取所有 markdown 檔
const context = require.context('@/content/blog', false, /\.md$/)
const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  const yyyy = date.getFullYear()
  const mm = (date.getMonth() + 1).toString().padStart(2, '0')
  const dd = date.getDate().toString().padStart(2, '0')
  return `${yyyy}/${mm}/${dd}`
}
const allPosts = context.keys().map(key => {
  const raw = context(key)
  const { data } = matter(raw.default || raw)

  return {
    ...data,
    dateFormatted: formatDate(data.date), // 加上格式化後的日期
    slug: data.slug || key.replace('./', '').replace('.md', ''),
    dateObj: new Date(data.date)
  }
}).sort((a, b) => b.dateObj - a.dateObj) // 時間由新到舊

export default {
  name: 'BlogCardList',
  data() {
    return {
      posts: allPosts.slice(1),
    }
  }
}
</script>

<template>
  <section class="mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
    <article v-for="post in posts" :key="post.slug" class="overflow-hidden bg-white">
      <router-link :to="post.slug" class="block">
        <img :src="post.desktopCover" class="w-full h-48 object-cover mb-4" />
        <div class="p-0">
          <p class="mb-1 text-fs-1">{{ post.dateFormatted  }}</p>
          <p class="text-fs-1.5 text-brand mb-2">
            <span v-for="tag in post.tags" :key="tag">#{{ tag }} </span>
          </p>
          <h2 class="mb-2 leading-snug text-fs-1.75-bold">{{ post.title }}</h2>
          <p class="line-clamp-2 mb-4 text-fs-1 text-content">{{ post.description }}</p>
          <div class="mt-4">
            <button
              class="rounded-full border border-black px-4 py-2 text-fs-1 text-content hover:bg-content hover:text-white">閱讀內文</button>
          </div>
        </div>
      </router-link>
    </article>
  </section>
  <nav class="mx-auto max-w-[328px] rounded-full bg-white px-5 py-4">
      <ul class="flex justify-between text-center text-fs-6 text-content">
        <li>
          <img src="../assets/img/icon/prev.webp" alt="上一頁" class="cursor-pointer" />
        </li>
        <li class="w-10 cursor-pointer">1</li>
        <li class="w-10 cursor-pointer">2</li>
        <li class="w-10 cursor-pointer">3</li>
        <li class="w-10 cursor-pointer">4</li>
        <li class="w-10 cursor-pointer">5</li>
        <li class="w-10 cursor-pointer">...</li>
        <li>
          <img src="../assets/img/icon/next.webp" alt="下一頁" class="cursor-pointer" />
        </li>
      </ul>
    </nav>
</template>