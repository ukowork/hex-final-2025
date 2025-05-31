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
  if (width < 640) visibleCount.value = 1
  else if (width < 1024) visibleCount.value = 2
  else visibleCount.value = 3

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
  <div ref="container" class="relative w-full overflow-hidden">
    <ul
      class="flex transition-transform duration-500 list-none p-0 m-0"
      :style="trackStyle"
    >
      <li
        v-for="item in props.articles"
        :key="item.id"
        class="flex-shrink-0 px-3"
        :style="{ width: slideWidth + 'px' }"
      >
        <a :href="item.link">
          <img :src="item.img" class="mb-4" :alt="item.title" />
          <time class="mb-1 text-fs-1">{{ item.date }}</time>
          <ul class="flex gap-x-2 gap-y-1">
            <li v-for="tag in item.tags" :key="tag" class="text-fs-1.5 text-brand">{{ tag }}</li>
          </ul>
          <h2 class="artTitle">{{ item.title }}</h2>
          <p class="line-clamp mb-4 text-fs-1 text-content">{{ item.text }}</p>
          <button class="rounded-full border border-black px-4 py-2 text-fs-1 text-content transition group-hover:bg-content group-hover:text-white">閱讀內文</button>
        </a>
      </li>
    </ul>

    <div class="flex gap-2 justify-end">
      <button
        :class="{
        'pointer-events-none opacity-25': currentIndex === 0,
        'opacity-100': currentIndex !== 0,
        }"
        @click="prev"
        :disabled="currentIndex === 0"
      >
<img src="@/assets/img/icon/left-arrow.webp" alt="left-arrow">
    </button>
      <button
        :class="{
        'pointer-events-none opacity-25': currentIndex === totalSlides - 1,
        'opacity-100': currentIndex !== totalSlides - 1,
        }"
        @click="next"
        :disabled="currentIndex === totalSlides - 1"
      >
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