<template>
    <section class="mx-auto hidden max-w-[1920px] overflow-hidden bg-wrap px-3 py-20 md:block">
        <div class="mx-auto flex max-w-[1296px] items-center justify-between gap-6"><a data-aos="fade-right"
                href="mailto:alysewang@hexschool.com" class="text-fs-2 hover:underline">alysewang@hexschool.com</a>
            <ul class="flex gap-1 mt-4">
                <li class="icon-link"><img :src="require('@/assets/img/icon/youtube.webp')" alt="youtube"></li>
                <li class="icon-link"><img :src="require('@/assets/img/icon/podcast.webp')" alt="podcast"></li>
                <li class="icon-link"><img :src="require('@/assets/img/icon/facebook.webp')" alt="facebook"></li>
                <li class="icon-link"><img :src="require('@/assets/img/icon/linkedin.webp')" alt="linkedin"></li>
                <li class="icon-link"><img :src="require('@/assets/img/icon/instagram.webp')" alt="instagram"></li>
            </ul>
        </div>
    </section>
    <footer class="mx-auto flex flex-col items-center gap-2 bg-white px-10 py-6 text-center text-fs-1">
        <p>© 2025 Alyse Wang. All rights reserved.</p>
    </footer>
</template>
<style scoped>
.icon-link {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.icon-link:hover {
  transform: translateY(4px);
}
</style>