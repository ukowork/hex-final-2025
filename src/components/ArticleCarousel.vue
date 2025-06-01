<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const visibleCount = ref(3)
const container = ref(null)
const slideWidth = ref(0)

function updateVisibleCount() {
  const width = window.innerWidth
  if (width >= 1024) visibleCount.value = 3
  else if (width >= 640) visibleCount.value = 2
  else visibleCount.value = 1

  nextTick(() => {
    if (container.value) {
      slideWidth.value = container.value.clientWidth / visibleCount.value
    }
  })
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
})

const totalSlides = computed(() =>
  Math.ceil(props.articles.length / visibleCount.value)
)

const trackStyle = computed(() => ({
  width: `${props.articles.length * slideWidth.value}px`,
  transform: `translateX(-${currentIndex.value * slideWidth.value}px)`
}))

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}
function next() {
  if (currentIndex.value < totalSlides.value - 1) currentIndex.value++
}
</script>

<template>
  <div ref="container" class="relative w-full -mx-3 pb-[76px] 2xl:pb-0">
    <!-- =========== 大畫面按鈕 =========== -->
    <!-- 左按鈕 -->
    <button
      class="hidden 2xl:flex absolute left-[-3rem] top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center"
      @click="prev" :disabled="currentIndex === 0" :class="{ 'pointer-events-none opacity-25': currentIndex === 0 }">
      <img src="@/assets/img/icon/left-arrow.webp" alt="left-arrow">
    </button>

    <!-- 右按鈕 -->
    <button
      class="hidden 2xl:flex absolute right-[-3rem] top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center"
      @click="next" :disabled="currentIndex === totalSlides - 1"
      :class="{ 'pointer-events-none opacity-25': currentIndex === totalSlides - 1 }">
      <img src="@/assets/img/icon/right-arrow.webp" alt="right-arrow">
    </button>
    <!-- =========== 部落格精選卡片 =========== -->
    <div class="overflow-hidden">
      <ul class="flex transition-transform duration-500 list-none p-0 m-0" :style="trackStyle">
        <li v-for="item in props.articles" :key="item.id" class="flex-shrink-0 px-3"
          :style="{ width: slideWidth + 'px' }">
          <a :href="item.link">
            <figure class="mb-4 overflow-hidden">
              <picture>
                <source media="(max-width:1024px)" :srcset="item.simg">
                <img :src="item.img" class="block aspect-[3/2] w-full object-cover lg:aspect-[16/9]" :alt="item.title" />
              </picture>
            </figure>
            <time class="mb-1 text-fs-1">{{ item.date }}</time>
            <ul class="flex flex-wrap gap-x-2 gap-y-1">
              <li v-for="tag in item.tags" :key="tag" class="text-fs-1.5 text-brand">{{ tag }}</li>
              <li v-if="item.isNew" class="rounded-full bg-brand px-3 py-1.5 text-fs-1-bold text-white">最新文章</li>
              <li v-if="item.isPop" class="rounded-full bg-brand px-3 py-1.5 text-fs-1-bold text-white">人氣文章</li>
            </ul>
            <h2 class="artTitle">{{ item.title }}</h2>
            <p class="line-clamp mb-4 text-fs-1 text-content">{{ item.text }}</p>
            <button
              class="rounded-full border border-black px-4 py-2 text-fs-1 text-content hover:bg-content hover:text-white">閱讀內文</button>
          </a>
        </li>
      </ul>
    </div>
    <!-- =========== 小畫面按鈕 =========== -->
    <div class="flex gap-2 justify-end 2xl:hidden mt-4">
      <button @click="prev" :disabled="currentIndex === 0"
        class="w-11 h-11 flex items-center justify-center"
        :class="{ 'pointer-events-none opacity-25': currentIndex === 0 }">
        <img src="@/assets/img/icon/left-arrow.webp" alt="left-arrow">
      </button>
      <button @click="next" :disabled="currentIndex === totalSlides - 1"
        class="w-11 h-11 flex items-center justify-center"
        :class="{ 'pointer-events-none opacity-25': currentIndex === totalSlides - 1 }">
        <img src="@/assets/img/icon/right-arrow.webp" alt="right-arrow">
      </button>
    </div>
  </div>
</template>
<style scoped>
.artTitle {
  @apply text-[1.75rem] font-[700] leading-[1.5] mb-2;
}

.artContent {
  @apply text-[1] font-[500] leading-[1.5] text-content mb-4;
}

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
</style>