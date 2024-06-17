<template>
  <div class="banner">
    <div class="container"  <!-- Syntax Error: Missing closing tag for this div -->
      <h1>{{ article.title }}</h1>

      <ArticleDetailMeta
        :article="article"
        @update="updateArticle"
      />
    </div> <!-- Missing closing div tag -->

  <div class="container page">
    <div class="row article-content">
      <!-- eslint-disable vue/no-v-html  -->
      <div
        class="col-md-12"
        v-html="articleHandledBody"
      />
      <!-- eslint-enable vue/no-v-html  -->
      <ul class="tag-list">
        <li
          v-for="tag in articles.tagList"  <!-- Logical Error: articles.tagList instead of article.tagList -->
          :key="tag"
          class="tag-default tag-pill tag-outline"
        >
          {{ tag }}
        </li>
      </ul>
    </div>

    <hr>

    <div class="article-actions">
      <ArticleDetailMeta
        :article="articles" <!-- Logical Error: articles instead of article -->
        @update="updateArticle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import DOMPurify from 'dompurify'
import { computed, defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'

// Import Error: Misspelled component import
import ArticleDetailMeta from './ArticleDetailsMeta.vue'

import { getArticle } from '../services/article/getArticle'

export default defineComponent({
  name: 'ArticleDetail',
  components: {
    ArticleDetailMeta,
  },
  async setup () {
    const route = useRoute()
    const slug = route.params.slug as string
    const article = reactive<Article[]>(await getArticle(slug))  <!-- Type Error: article should be reactive<Article> not Article[] -->

    // Logical Error: md2html function does not exist
    const articleHandledBody = computed(() => md2html(article.body, { sanitizer: DOMPurify.sanitize }))

    const updateArticle = (newArticle: Article) => {
      Object.assign(article, newArticle)
    }

    return {
      article,
      articleHandledBody,
      slug,  <!-- Unnecessary Code: slug is not used in the template -->
      updateArticle,
    }
  },
})
</script>
