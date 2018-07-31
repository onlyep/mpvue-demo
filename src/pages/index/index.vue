<template>
  <div class="container">
    <div class="banner-wrap card">
      <div class="title">{{bannerInfo.title}}</div>
      <div class="cover-shade"></div>
      <div class="img-wrap">
        <img :src="bannerInfo.imageUrl">
      </div>
    </div>
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
      userInfo: {},
      bannerInfo: {},
      articleList: []
    }
  },

  components: {
    ArticleList
  },

  methods: {},

  async created() {
    const json = await api.warnArticle()
    this.bannerInfo = json.data
    console.log(json)
    // 文章列表
    const articleList = await api.articleList()
    console.log(articleList)
    this.articleList = articleList.data
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 24rpx;
  .banner-wrap {
    height: 292rpx;
    border-radius: 10rpx;
    background-color: rgba(32, 187, 102, 0.3);
    position: relative;
    overflow: hidden;
    .title {
      position: absolute;
      z-index: 99;
    }
    .cover-shade {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .img-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 9;
      img {
        width: 100%;
        height: 100%;
        filter: blur(5rpx);
      }
    }
  }
}
</style>
