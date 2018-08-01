<template>
  <div class="container">
    <div class="article-wrap">
      <article-list :list="articleList"></article-list>
    </div>
  </div>
</template>

<script>
import api from '../../utils/api'
import ArticleList from '@/components/ArticleList'

export default {
  data() {
    return {
      articleList: []
    }
  },

  components: {
    ArticleList
  },

  methods: {},

  async onLoad() {
    // 文章列表
    const articleList = await api.articleList(1)
    console.log(articleList)
    this.articleList = articleList.data
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 24rpx;
}
</style>
