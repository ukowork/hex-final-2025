<script setup>
import { computed } from 'vue'
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const props = defineProps({
  source: String // 文章的 markdown 內文
})

// 加上 Base URL
const baseUrl = process.env.BASE_URL || '/'

// 初始化 markdown-it
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
    return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`
  }
})

// 🔗 自訂連結：target + rel
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]

  if (!token.attrs?.some(([name]) => name === 'target')) {
    token.attrPush(['target', '_blank'])
  }

  if (!token.attrs?.some(([name]) => name === 'rel')) {
    token.attrPush(['rel', 'noopener'])
  }

  return self.renderToken(tokens, idx, options)
}

// 自訂圖片渲染：picture + baseUrl
md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx]
  const src = token.attrGet('src') || ''
  const alt = token.content || ''

  // 加上 baseUrl 前綴
  const fullSrc = src.startsWith('/') ? `${baseUrl}${src.slice(1)}` : src
  const mobileSrc = fullSrc.replace('/desktop/', '/device/')

  return `
    <picture>
      <source media="(max-width: 768px)" srcset="${mobileSrc}" />
      <img src="${fullSrc}" alt="${alt}" />
    </picture>
  `
}

// 渲染 HTML
const rendered = computed(() => md.render(props.source || ''))
</script>

<template>
  <div class="prose max-w-none" v-html="rendered" />
</template>