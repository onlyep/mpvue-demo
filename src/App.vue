<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-top: 1rpx solid #CFD9E6;
  box-sizing: border-box;
}
.card {
  box-shadow: 0px 4px 12px 0px rgba(38, 78, 128, 0.16);
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
