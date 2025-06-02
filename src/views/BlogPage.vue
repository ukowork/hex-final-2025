<template>
  <!-- Blog Top -->
  <section class="mx-auto max-w-[1920px] flex flex-col lg:flex-row">
    <picture>
      <source media="(min-width: 640px)" srcset="@/assets/img/topbannerL.webp" />
      <img :src="require('@/assets/img/device/banner.webp')" alt="banner image" class="w-full">
    </picture>
    <!-- ======================================================== -->
    <div class="bannerTitle">
      <h1 class="topText">BLOG</h1>
      <p class="infoText">前端工程師 & 職涯諮詢師</p>
    </div>
  </section>
  <!-- ========================================================================================== -->
  <!-- Blog Top 文章 -->
  <section class="mx-auto flex max-w-[1920px] flex-col border border-line lg:flex-row">
    <picture>
      <source media="(min-width: 1024px)" srcset="/desktop/blog/start-from-scratch.webp" />
      <img src="/desktop/blog/start-from-scratch.webp" alt="banner image" class="block w-full">
    </picture>
    <div class="flex-1 content-center px-3 py-12 lg:px-6 lg:py-0">
      <div class="flex-1 content-center px-3 py-12 lg:px-6 lg:py-0"><time
          class="mb-1 block text-fs-1 ">2024/10/21</time>
        <ul class="mb-2 flex flex-wrap items-center gap-y-1 ">
          <li class="text-fs-1.5 text-brand"><span>前端開發</span><span class="mx-1">x</span></li>
          <li class="text-fs-1.5 text-brand"><span>職涯成長</span><!----></li>
          <li class="ml-2 rounded-full bg-brand px-3 py-1.5 text-fs-1-bold text-white">最新文章</li>
        </ul>
        <a href="/blog/start-from-scratch" class="block">
          <h2 class="mb-2 text-fs-1.75-bold lg:whitespace-nowrap ">自學前端不用怕：從零開始的三大關鍵</h2>
          <p class="line-clamp mb-4 text-fs-1 lg:max-w-[636px]">嗨，我是
            Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」
            其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！</p>
            <button type="button" class="rounded-full border border-black px-4 py-2 text-fs-1 text-content transition hover:bg-content hover:text-white ">
             閱讀內文 </button>
        </a>
      </div>
    </div>
  </section>
  <!-- ========================================================================================== -->
   <!-- Blog 列表 -->
   <section class="mx-auto hidden max-w-[1920px] overflow-hidden bg-wrap px-3 py-20 md:block">
    <div class="mx-auto max-w-[1296px]">
      <!-- 搜尋列 -->
      <div class="relative mb-10">
        <img src="@/assets/img/icon/search.webp" alt="搜尋" class="absolute left-4 top-1/2 -translate-y-1/2">
        <input value="" type="text" name="search" id="search" placeholder="搜尋你感興趣的文章" class="rounded-full border border-content py-4 pl-[50px] pr-12 text-fs-6 text-content placeholder:text-content">
      </div>
      <!-- 文章列表 -->
       <BlogCardList></BlogCardList>
    </div>
   </section> 
  <!-- ========================================================================================== -->
</template>
<script>
import BlogCardList from '@/components/BlogCardList.vue'
export default {
  components: {
    BlogCardList
  }
}
</script>
<style scoped>
.bannerTitle {
  @apply bg-[url('@/assets/img/device/infobg.webp')] xl:bg-[url('@/assets/img/topbannerR.webp')] bg-cover px-6 pt-6 pb-[12.5rem] flex-1 content-center lg:px-20 lg:py-0;
}

.topText {
  @apply whitespace-nowrap text-[3.25rem] xl:text-[7.5rem] font-[900] leading-[1.5] text-brand mb-3;
}

.infoText {
  @apply whitespace-nowrap text-[1.75rem] font-[700] leading-[1.5] text-brand;
}
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
</style>