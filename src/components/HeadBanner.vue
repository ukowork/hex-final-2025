<template>
   <section class="mx-auto max-w-[1920px] flex flex-col lg:flex-row">
    <picture>
      <source media="(min-width: 640px)" srcset="@/assets/img/topbannerL.webp" />
      <img :src="require('@/assets/img/device/banner.webp')" alt="banner image" class="w-full">
    </picture>
    <!-- ======================================================== -->
    <div class="bannerTitle">
      <h1 class="topText"><slot /></h1>
      <p class="infoText">前端工程師 & 職涯諮詢師</p>
    </div>
  </section>
</template>
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
