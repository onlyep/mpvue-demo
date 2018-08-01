<template>
  <div class="container">
    <div class="title fz40">{{article.title}}</div>
    <div class="article-info fz24">
      <div class="read-count unsel">{{article.hits}}阅读</div>
      <div class="date unsel">{{article.createDate}}</div>
      <div class="from blue">{{article.source}}</div>
    </div>
    <div class="content">
      <rich-text :nodes="article.content"></rich-text>
    </div>
  </div>
</template>

<script>
import api from '../../utils/api'

export default {
  data() {
    return {
      article: {}
    }
  },

  components: {},

  methods: {},

  async onLoad(options) {
    const json = await api.articleDetail(options.id)
    json.data.content = json.data.content.replace(/section/g, 'p')
    json.data.content = json.data.content.replace(
      /<img\s/g,
      '<img width="100%" '
    )
    this.article = json.data
    console.log(json)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 40rpx 24rpx;
  .title {
    line-height: 56rpx;
    font-weight: 700;
  }
  .article-info {
    margin-top: 16rpx;
    display: flex;
    line-height: 32rpx;
    .read-count,
    .date {
      margin-right: 16rpx;
    }
  }
  .content {
    margin-top: 40rpx;
  }
}
</style>
