<template>
  <div id="app">
    <transition :name="typeList[Math.floor(3*Math.random())]">
      <router-view class="child-view" :scroll="scroll"></router-view>  
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      scroll: false,
      transType: 'slide',
      typeList: ['slide', 'move', 'rotate']
    }
  }
}
</script>

<style lang="stylus">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  .child-view
    transition: all 0.5s linear
    position: absolute
  .slide-enter
    opacity: 0
    transform: translate3d(0, 100%, 0)
  .slide-leave-to
    opacity: 0
    transform: translate3d(0, -100%, 0)
  .slide-enter-to, .slide-leave
    opacity: 1
    transform: translate3d(0, 0, 0)
  .move-enter
    transform: translate3d(100%, 0, 0)
  .move-leave-to
    transform: translate3d(-100%, 0, 0)
  .move-enter-to, .move-leave
    transform: translate3d(0, 0, 0)
  .rotate-enter
    transform: rotate(720deg) scale(0)
  .rotate-leave-to
    opacity: 0
    transform: scale(2)
  .rotate-enter-to, .rotate-leave
    transform: rotate(0deg) scale(1)
</style>
