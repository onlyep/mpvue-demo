<template>
  <div class="container">
    <div class="search-bar">
      <div class="search-wrap">
        <img class="icon-search" src="/static/images/icon_search_default.png">
        <input class="fz28" v-model="key" @confirm="search" placeholder-class="placeholder" placeholder="请输入关键字" auto-focus>
      </div>
      <div class="search-btn fz32 light-dark" @click="search">搜索</div>
    </div>
    <!-- 结果 -->
    <div class="search-result">
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
      key: '',
      articleList: []
    }
  },
  components: {
    ArticleList
  },
  methods: {
    async search() {
      let key = this.key
      const json = await api.search(key)
      this.articleList = json.data
      console.log(json.data)
    }
  },
  onLoad() {
    Object.assign(this.$data, this.$options.data())
  },
  onUnload() {
    // this.key = ''
    // this.articleList = []
  }
}
</script>

<style lang="less">
.container {
  padding: 24rpx;
}
.search-bar {
  display: flex;
  .search-wrap {
    padding: 0 20rpx;
    height: 72rpx;
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #f0f2f5;
    border-radius: 8rpx;
    .icon-search {
      width: 40rpx;
      height: 40rpx;
    }
    input {
      margin-left: 8rpx;
      flex: 1;
    }
  }
  .search-btn {
    line-height: 72rpx;
    width: 88rpx;
    text-align: right;
  }
}
</style>

