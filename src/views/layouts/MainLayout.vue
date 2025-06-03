<template>
  <HeaderBar />
    <main>
      <router-view />
    </main>
    <PageFooter v-if="isIdx === false"></PageFooter>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'
import PageFooter from '@/components/PageFooter.vue'
export default {
  components: {
    HeaderBar,
    PageFooter
  },
  computed: {
    isIdx() {
      return this.$route.path === '/'
    }
  }
}
</script>