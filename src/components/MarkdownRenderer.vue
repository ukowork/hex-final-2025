<!-- eslint-disable no-empty -->
<script setup>
import { computed } from 'vue'
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const props = defineProps({
  source: String // 文章的 markdown 內文
})

const md = markdownIt({ 
  html: true, 
  linkify: true, 
  breaks: true,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(code, { language: lang }).value}</code></pre>`
      } catch (__) {}
    }
    // fallback：不指定語言
    return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`
  }
})
// 連結處理 =================================
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]

  // 加 target="_blank"（若尚未存在）
  if (!token.attrs?.some(([name]) => name === 'target')) {
    token.attrPush(['target', '_blank'])
  }

  // 加 rel="noopener"
  if (!token.attrs?.some(([name]) => name === 'rel')) {
    token.attrPush(['rel', 'noopener'])
  }

  return self.renderToken(tokens, idx, options)
}
// 圖片處理 =================================
md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx]
  const src = token.attrGet('src') || ''
  const alt = token.content || ''
  const mobileSrc = src.replace('/desktop/', '/device/')

  return `
    <picture>
      <source media="(max-width: 768px)" srcset="${mobileSrc}" />
      <img src="${src}" alt="${alt}" />
    </picture>
  `
}

const rendered = computed(() => md.render(props.source || ''))

</script>

<template>
  <div class="prose max-w-none" v-html="rendered" />
</template>