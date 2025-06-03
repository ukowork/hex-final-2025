<template>
  <!-- Blog Top -->
  <HeadBanner>BLOG</HeadBanner>
  <!-- ========================================================================================== -->
  <!-- Blog Top 文章 -->
   <NewPostTop></NewPostTop>
  <!-- ========================================================================================== -->
   <!-- Blog 列表 -->
   <section class="mx-auto max-w-[1920px] border border-line bg-wrap px-3 py-16 md:py-20">
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
import HeadBanner from '@/components/HeadBanner.vue';
import NewPostTop from '@/components/NewPostTop.vue'
import BlogCardList from '@/components/BlogCardList.vue'
export default {
  components: {
    HeadBanner,
    NewPostTop,
    BlogCardList
  }
}
</script>