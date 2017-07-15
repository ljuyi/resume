<template>
  <div id="app">
    <transition name="rotate">
      <router-view class="child-view" :scroll="scroll" @toggleScroll="toggle"></router-view>  
    </transition>
    <div class="arrow">
      <p>向下滑动/滚动</p>
      <i class="iconfont icon-jiantou-copy"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      scroll: true,
      transType: 'slide'
    }
  },
  methods: {
    toggle (boo) {
      this.scroll = boo
      console.log(boo)
    }
  },
  mounted () {
    let size = document.body.clientWidth > 540 ? 540 : document.body.clientWidth
    document.getElementsByTagName('html')[0].style.fontSize = size * 0.045 + 'px'
  }
}
</script>

<style lang="stylus">
@keyframes arrow{
  from {
    bottom: 1.5rem
    opacity: 1
  }
  to{
    bottom: 1rem
    opacity: 0.2
  }
}
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  .arrow
    position: absolute
    bottom: 1rem
    left: 50%
    margin-left: -1.75rem
    animation: arrow 1.5s infinite
    z-index: 1000
    width: 4.5rem
    height: 2rem
    font-size: 0.7rem
    text-align: center
    color: #fff
    p
      line-height: 1.5rem
    .iconfont
      padding: 0
      color: #000
      color: #fff
  .child-view
    transition: all 0.8s
    position: absolute
  .rotate-enter
    transform: rotate(480deg) scale(0)
    opacity: 0
  .rotate-leave-to
    opacity: 0
    transform: scale(2)
  .rotate-enter-to, .rotate-leave
    transform: rotate(0deg) scale(1)
    opacity: 1
</style>
