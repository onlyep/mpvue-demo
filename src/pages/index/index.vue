<template>
  <div class="container">
    <div class="banner-wrap card">
      <div class="title">{{bannerInfo.title}}</div>
      <div class="cover-shade"></div>
      <div class="img-wrap">
        <img :src="bannerInfo.imageUrl">
      </div>
    </div>
    <div class="search card" @click="viewSearch">搜索。。</div>
    <div class="more card" @click="viewMore">更多。。</div>
  </div>
</template>

<script>
import api from '../../utils/api'

export default {
  data() {
    return {
      userInfo: {},
      bannerInfo: {}
    }
  },

  methods: {
    viewSearch() {
      const url = '/pages/search/main'
      wx.navigateTo({ url })
    },
    viewMore() {
      const url = '/pages/article/main'
      wx.navigateTo({ url })
    }
  },

  async onLoad() {
    const json = await api.warnArticle()
    this.bannerInfo = json.data
    console.log(json)
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
        filter: blur(10rpx);
      }
    }
  }
  .search,
  .more {
    margin-top: 80rpx;
    padding: 40rpx 60rpx;
    width: 300rpx;
  }
}
</style>
