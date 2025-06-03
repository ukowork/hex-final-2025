<template>
    <section class="mx-auto flex max-w-[1920px] flex-col border border-line lg:flex-row">
    <picture class="min-w-[50%]">
      <source media="(min-width: 1024px)" :srcset="onePost.desktopCover" />
      <img :src="onePost.desktopCover" alt="banner image" class="block w-full">
    </picture>
  <div class="flex-1 content-center px-3 py-12 lg:px-6 lg:py-0">
    <time class="mb-1 block text-fs-1">{{ onePost.dateFormatted }}</time>
        <ul class="mb-2 flex flex-wrap items-center gap-y-1 ">
          <li class="text-fs-1.5 text-brand" v-for="(tag, idx) in onePost.tags" :key="idx">
            <span>{{ tag }}</span>
            <span v-if="idx !== (onePost.tags.length - 1)" class="mx-1">x</span>
          </li>
          <!-- <li class="ml-2 rounded-full bg-brand px-3 py-1.5 text-fs-1-bold text-white">最新文章</li> -->
        </ul>
        <a :href="onePost.slug" class="block">
          <h2 class="mb-2 text-fs-1.75-bold lg:whitespace-nowrap ">{{ onePost.title }}</h2>
          <!-- <p class="line-clamp-2 mb-4 text-fs-1 lg:max-w-[636px]">{{ onePost.description }}</p> -->
          <!-- <button type="button"
            class="rounded-full border border-black px-4 py-2 text-fs-1 text-content transition hover:bg-content hover:text-white ">
            閱讀內文 </button> -->
        </a>
      </div>
  </section>
</template>

<script setup>
// import { withBase } from '@/utils/url'
defineProps({
  onePost: {
    type: Object,
    required: true
  }
})

</script>
