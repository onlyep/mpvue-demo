<template>
  <div class="article-list">
    <div class="article-item card" v-for="(card, index) in list" :key="index" :data-id="card.id" @click="lookDetail">
      <div class="info">
        <div class="title">{{card.title}}</div>
        <div class="date">{{card.createDate}}</div>
      </div>
      <div class="next">
        <img src="/static/images/icon_next_default.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: []
  },
  created() {},
  methods: {
    lookDetail(e) {
      const id = e.currentTarget.dataset.id
      const url = `/pages/detail/main?id=${id}`
      wx.navigateTo({ url })
    }
  }
}
</script>

<style lang="less" scoped>
.article-list {
  .article-item {
    margin-top: 24rpx;
    padding: 40rpx 24rpx;
    border-radius: 8rpx;
    display: flex;
    align-items: center;
    .info {
      flex: 1;
      .title {
        line-height: 44rpx;
        font-size: 32rpx;
      }
      .date{
        margin-top: 16rpx;
        font-size: 24rpx;
        color: #5C7A99;
      }
    }
    .next {
      img {
        width: 40rpx;
        height: 40rpx;
      }
    }
  }
}
</style>


