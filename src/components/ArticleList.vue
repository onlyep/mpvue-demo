<template>
  <scroll-view>
    <div class="article-list">
      <div class="article-item card" v-for="(card, index) in list" :key="index" @click="lookDetail">
        <div>{{card.title}}</div>
        <div class="date">{{card.createDate}}</div>
      </div>
    </div>
  </scroll-view>
</template>

<script>
export default {
  props: {
    list: []
  },
  created() {
    console.log(this.list)
  },
  methods: {
    lookDetail() {
      const url = '../detail/main?id=1'
      wx.navigateTo({ url: url })
    }
  }
}
</script>

<style lang="less" scoped>
.article-list {
  .article-item {
    margin-top: 24rpx;
    height: 172rpx;
    background-color: teal;
    border-radius: 8rpx;
  }
}
</style>


