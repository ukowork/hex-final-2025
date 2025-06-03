<template>
  <!-- Alyse 我一直看成 Ayase (YOASOBI) 髮型也有點像 -->
  <section class="mx-auto max-w-[1920px] flex flex-col lg:flex-row">
    <picture>
      <source media="(min-width: 640px)" srcset="@/assets/img/topbannerL.webp" />
      <img :src="require('@/assets/img/device/banner.webp')" alt="banner image" class="w-full">
    </picture>
    <!-- ======================================================== -->
    <div class="bannerTitle">
      <h1 class="topText">Alyse Wang</h1>
      <p class="infoText">前端工程師 & 職涯諮詢師</p>
    </div>
  </section>
  <!-- ========================================================================================== -->
  <!-- 嗨 -->
  <section class="relative mx-auto max-w-[1920px] px-3 pb-16 pt-[180px]">
    <div class="descript">
      <p class="mb-4">嗨，我是 Alyse<br class="md:hidden"> 一名深耕前端技術的工程師。</p>
      <p>擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
      <ul class="flex gap-1 mt-4">
        <li class="icon-link"><img :src="require('@/assets/img/icon/youtube.webp')" alt="youtube"></li>
        <li class="icon-link"><img :src="require('@/assets/img/icon/podcast.webp')" alt="podcast"></li>
        <li class="icon-link"><img :src="require('@/assets/img/icon/facebook.webp')" alt="facebook"></li>
        <li class="icon-link"><img :src="require('@/assets/img/icon/linkedin.webp')" alt="linkedin"></li>
        <li class="icon-link"><img :src="require('@/assets/img/icon/instagram.webp')" alt="instagram"></li>
      </ul>
    </div>
  </section>
  <!-- ========================================================================================== -->
  <!-- 專業服務與方案 -->
  <section class="mx-auto px-3 max-w-[1296px]">
    <h2 class="sectionTitle mb-6">專業服務與方案</h2>
    <main class="mb-8 flex flex-col gap-8 xl:gap-16 xl:px-[7.1rem]">
      <!-- ======================================================== -->
      <article class="relative flex flex-col xl:flex-row">
        <picture>
          <source media="(min-width: 1280px)" srcset="@/assets/img/service1.webp">
          <img :src="require('@/assets/img/device/service1.webp')" alt="service image" class="w-full">
        </picture>
        <div class="serviceText serviceTextLeft">
          <img :src="require('@/assets/img/icon/dash.png')" alt="dash image">
          <h3 class="contentTitle">履歷健檢</h3>
          <p class="content">履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。</p>
        </div>
      </article>
      <!-- ======================================================== -->
      <article class="relative flex flex-col xl:flex-row-reverse">
        <picture>
          <source media="(min-width: 1280px)" srcset="@/assets/img/service2.webp">
          <img :src="require('@/assets/img/device/service2.webp')" alt="service image" class="w-full">
        </picture>
        <div class="serviceText serviceTextRight">
          <img :src="require('@/assets/img/icon/dash.png')" alt="dash image">
          <h3 class="contentTitle">線上諮詢</h3>
          <p class="content">想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。</p>
        </div>
      </article>
      <!-- ======================================================== -->
      <article class="relative flex flex-col xl:flex-row">
        <picture>
          <source media="(min-width: 1280px)" srcset="@/assets/img/service3.webp">
          <img :src="require('@/assets/img/device/service3.webp')" alt="service image" class="w-full">
        </picture>
        <div class="serviceText serviceTextLeft">
          <img :src="require('@/assets/img/icon/dash.png')" alt="dash image">
          <h3 class="contentTitle">網頁開發</h3>
          <p class="content">想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。</p>
        </div>
      </article>
      <!-- ======================================================== -->
      <article class="relative flex flex-col xl:flex-row-reverse">
        <picture>
          <source media="(min-width: 1280px)" srcset="@/assets/img/service4.webp">
          <img :src="require('@/assets/img/device/service4.webp')" alt="service image" class="w-full">
        </picture>
        <div class="serviceText serviceTextRight">
          <img :src="require('@/assets/img/icon/dash.png')" alt="dash image">
          <h3 class="contentTitle">企業內訓</h3>
          <p class="content">想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。</p>
        </div>
      </article>
      <!-- ======================================================== -->
    </main>
    <div class="flex flex-col items-end justify-end gap-2 px-2 pb-16">
      <p class="contact-link">聯繫我，取得更多資訊！</p>
      <a href="#" class=""><img src="@/assets/img/icon/contact-me.webp" alt="聯繫我"></a>
    </div>
  </section>
  <!-- ========================================================================================== -->
  <!-- 部落格精選 -->
  <idxContainer>
    <h2 class="sectionTitle mb-6">部落格精選</h2>
    <ArticleCarousel :articles="articles" />
  </idxContainer>
  <!-- ========================================================================================== -->
  <!-- 職涯諮詢成功案例 -->
  <idxContainer>
    <h2 class="sectionTitle mb-8">職涯諮詢<br class="lg:hidden md:hidden">成功案例</h2>
    <div class="relative mb-10 xl:flex-none lg:flex md:flex">
      <div class="max-w-[745px] bg-[#EDEDED] p-6 xl:w-auto lg:w-1/4">
        <figure>
          <picture>
            <source media="(min-width: 1280px)" srcset="@/assets/img/consultation.webp" />
            <img src="@/assets/img/device/consultation.webp" alt="職涯諮詢成功案例" class="w-full">
          </picture>
        </figure>
      </div>
      <!-- ====================================================== -->
      <div
        class="xl:absolute xl:mt-0 xl:h-[568px] xl:-translate-y-1/2 xl:right-0 xl:top-1/2 lg:mt-0 lg:max-w-[100%] xl:w-auto lg:w-3/4 md:mt-0 md:max-w-[100%] max-w-[745px] flex flex-col gap-3 -mt-40 bg-wrap">
        <!-- 卡片1 -->
        <div class="xl:absolute xl:w-[526px] xl:px-10 xl:py-20 xl:right-[219px] xl:top-0 xl:h-auto lg:h-1/2 bg-white px-6 py-10">
          <img class="mb-6" :src="require('@/assets/img/icon/dash.png')" alt="dash image">
          <p class="mb-6 text-fs-1-bold">在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span
              class="text-brand">突破原有的舒適圈。</span></p>
        </div>
        <!-- 卡片2 -->
        <div class="xl:absolute xl:w-[526px] xl:px-10 xl:py-20 xl:bottom-0 xl:right-0 xl:h-auto lg:h-1/2 bg-[#F5F5F5] px-6 py-10">
          <img class="mb-6" :src="require('@/assets/img/icon/dash.png')" alt="dash image">
          <p class="mb-6 text-fs-1-bold">期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
          <button type="button"
            class="rounded-full border border-brand bg-white text-brand px-4 py-2 text-fs-1-bold hover:bg-brand hover:text-white">
            立即預約諮詢 </button>
        </div>
      </div>
    </div>
    <!-- ====================================================== -->
     <!-- 案例 -->
    <div class="grid gap-6 bg-[#F5F5F5] p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      <!-- ====================================== -->
      <article>
        <img src="@/assets/img/case/avatar1.webp" alt="客戶圖片" class="mb-4">
        <h3 class="mb-2 text-fs-1.5-bold">無經驗到前端工程師 Offer</h3>
        <ul class="mb-4 list-inside list-image-[url('@/assets/img/case/check.webp')] text-fs-1 text-content">
          <li>打造前端專案與履歷亮點</li>
          <li>深度強化面試表現</li><!--]-->
        </ul>
        <hr class="mb-4 border-b border-line"><button type="button"
          class="rounded-full border border-black px-4 py-2 text-fs-1 text-content hover:bg-black hover:text-[#F5F5F5]">
          前往聆聽 podcast </button>
      </article>
      <!-- ====================================== -->
      <article>
        <img src="@/assets/img/case/avatar2.webp" alt="客戶圖片" class="mb-4">
        <h3 class="mb-2 text-fs-1.5-bold">轉職迷茫到明確學習規劃</h3>
        <ul class="mb-4 list-inside list-image-[url('@/assets/img/case/check.webp')] text-fs-1 text-content">
          <li>制訂階段性目標與時間安排</li>
          <li>鼓勵參與前端社群或活動</li><!--]-->
        </ul>
        <hr class="mb-4 border-b border-line"><button type="button"
          class="rounded-full border border-black px-4 py-2 text-fs-1 text-content hover:bg-black hover:text-[#F5F5F5]">
          前往聆聽 podcast </button>
      </article>
      <!-- ====================================== -->
      <article>
        <img src="@/assets/img/case/avatar3.webp" alt="客戶圖片" class="mb-4">
        <h3 class="mb-2 text-fs-1.5-bold">面試緊張到從容應對</h3>
        <ul class="mb-4 list-inside list-image-[url('@/assets/img/case/check.webp')] text-fs-1 text-content">
          <li>透過面試模擬找出常犯的邏輯漏洞</li>
          <li>討論遇到不熟悉議題時的回應方式</li>
        </ul>
        <hr class="mb-4 border-b border-line"><button type="button"
          class="rounded-full border border-black px-4 py-2 text-fs-1 text-content hover:bg-black hover:text-[#F5F5F5]">
          前往聆聽 podcast </button>
      </article>
      <!-- ====================================== -->
      <article>
        <img src="@/assets/img/case/avatar4.webp" alt="客戶圖片" class="mb-4">
        <h3 class="mb-2 text-fs-1.5-bold">面試緊張到從容應對</h3>
        <ul class="mb-4 list-inside list-image-[url('@/assets/img/case/check.webp')] text-fs-1 text-content">
          <li>擬定進階框架或技術研究目標</li>
          <li>培養跨團隊溝通與簡報能力</li>
        </ul>
        <hr class="mb-4 border-b border-line"><button type="button"
          class="rounded-full border border-black px-4 py-2 text-fs-1 text-content hover:bg-black hover:text-[#F5F5F5]">
          前往聆聽 podcast </button>
      </article>
      <!-- ====================================== -->
    </div>
  </idxContainer>
  <!-- ========================================================================================== -->
   <!-- 訂閱電子報 -->
  <section class="mx-auto flex max-w-[1920px] flex-col md:flex-row">
    <picture>
      <source media="(min-width: 1024px)" srcset="@/assets/img/newsletter.webp" />
      <img :src="require('@/assets/img/device/nwesletter.webp')" alt="nwesletter" class="size-full object-cover">
    </picture>
    <div class="flex-1 content-center bg-[url('@/assets/img/device/infobg.webp')] bg-cover p-3 lg:p-20">
      <div class="flex-1 bg-white px-6 py-10 lg:p-20">
        <h2 class="mb-4 whitespace-nowrap sectionTitle">訂閱電子報</h2>
        <p class="mb-6 text-fs-1.25 md:whitespace-nowrap">立即訂閱，搶先掌握<span class="text-brand">前端 x 職涯</span>的獨家資訊！</p>
        <form class="flex flex-col items-start text-fs-1.25 text-content" target="_blank" novalidate="">
          <input type="text" name="FNAME" placeholder="請輸入您的大名"
            class="mb-2 w-full bg-wrap-gray px-4 py-2 placeholder:text-content focus:outline-0">
          <input type="email" name="EMAIL" placeholder="請輸入您的電子信箱" required=""
            class="mb-6 w-full bg-wrap-gray px-4 py-2 placeholder:text-content focus:outline-0">
          <input type="submit" value="啟動訂閱" name="subscribe"
            class="cursor-pointer rounded-full border border-brand bg-white px-4 py-2 text-fs-1-bold text-brand">
        </form>
      </div>
    </div>
  </section>
  <!-- ========================================================================================== -->
  <idxContainer>
    <h2 class="mb-6 sectionTitle">與我聯繫</h2>
    <ul class="text-fs-1.5">
      <li>
        <a href="mailto:alysewang@hexschool.com"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black pb-4">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span class="break-all underline lg:text-fs-2">alysewang@hexschool.com</span>
            <span class="lg:text-fs-1.75">合作洽談</span>
          </div>
          <img src="@/assets/img/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6">
        </a>
      </li>
      <li>
        <a href="#" target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2"><img src="@/assets/img/icon/youtube.webp"
              alt="youtube icon">
            <span class="lg:text-fs-1.75">Youtube 職涯諮詢室</span>
          </div>
          <img src="@/assets/img/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6">
        </a>
      </li>
      <li>
        <a href="#" target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2"><img src="@/assets/img/icon/podcast.webp"
              alt="podcast icon">
            <span class="lg:text-fs-1.75">Podcast 職涯諮詢室</span>
          </div>
          <img src="@/assets/img/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6">
        </a>
      </li>
      <li>
        <a href="#" target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2"><img src="@/assets/img/icon/facebook.webp"
              alt="facebook icon">
            <span class="lg:text-fs-1.75">Facebook 前端社群</span>
          </div>
          <img src="@/assets/img/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6">
        </a>
      </li>
      <li>
        <a href="#" target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2"><img src="@/assets/img/icon/linkedin.webp"
              alt="linkedin icon">
            <span class="lg:text-fs-1.75">linkedin 職涯交流</span>
          </div>
          <img src="@/assets/img/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6">
        </a>
      </li>
      <li>
        <a href="#" target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2"><img src="@/assets/img/icon/instagram.webp"
              alt="instagram icon">
            <span class="lg:text-fs-1.75">Instagram 分享日常</span>
          </div>
          <img src="@/assets/img/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6">
        </a>
      </li>
    </ul>
  </idxContainer>
  <!-- ========================================================================================== -->
  <footer class="mx-auto flex flex-col items-center gap-2 bg-white px-10 py-6 text-center text-fs-1">
    <p>© 2025 Alyse Wang. All rights reserved.</p>
  </footer>
  <!-- ========================================================================================== -->
</template>
<script>
import idxContainer from '@/components/idxContainer.vue'
import matter from 'gray-matter'
import ArticleCarousel from '@/components/ArticleCarousel.vue'

const context = require.context('@/content/blog', false, /\.md$/)
const allPosts = context.keys().map(key => {
  const raw = context(key)
  const { data } = matter(raw)
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const yyyy = date.getFullYear()
    const mm = (date.getMonth() + 1).toString().padStart(2, '0')
    const dd = date.getDate().toString().padStart(2, '0')
    return `${yyyy}/${mm}/${dd}`
  }
  //
  const baseUrl = process.env.BASE_URL || '';

  return {
    id: data.slug || key.replace('./', '').replace('.md', ''),
    link: `${baseUrl}${data.slug}` || `${baseUrl}/blog/${key.replace('./', '').replace('.md', '')}`,
    title: data.title || '無標題',
    text: data.description || '',
    tags: data.tags || [],
    date: formatDate(data.date),
    img: data.desktopCover || '/desktop/blog/default.webp',
    simg: data.deviceCover || '/device/blog/default.webp',
    isNew: data.isNew || false,
    isPop: data.isPopular || false
  }
}).sort((a, b) => new Date(b.date) - new Date(a.date))

export default {
  components: { 
    idxContainer,
    ArticleCarousel 
  },
  data() {
    return {
      articles: allPosts
    }
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

.descript {
  @apply bg-white px-6 py-6 text-[1.5rem] font-[500] leading-[1.5] absolute -top-40 right-0 mx-3 flex flex-col md:max-w-[1077px] md:px-10 md:py-20 md:text-fs-1.75 xl:right-20;
}

.icon-link {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.icon-link:hover {
  transform: translateY(4px);
}

.sectionTitle {
  @apply text-[3rem] md:text-[4rem] font-[700] leading-[1.5];
}

.serviceText {
  @apply bg-white pt-3 px-6 pb-6 w-full;
}

.serviceTextLeft {
  @apply right-0 top-1/2 xl:absolute xl:max-w-[480px] xl:-translate-y-1/2;
}

.serviceTextRight {
  @apply left-0 top-1/2 xl:absolute xl:max-w-[480px] xl:-translate-y-1/2;
}

.contentTitle {
  @apply text-[1.75rem] font-[700] leading-[1.5] mb-2;
}

.content {
  @apply text-[1rem] font-[500] leading-[1.5] text-content;
}

.contact-link {
  @apply text-[1.75rem] font-[700] leading-[1.5]
}
</style>