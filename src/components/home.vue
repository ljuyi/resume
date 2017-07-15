<template>
  <div class="home" @wheel="scrollPage" ref="home">
    <div class="content">
      <img class="header" src="http://osywktegp.bkt.clouddn.com/header.09ad098.png" alt="" width="200" height="200">
      <div class="name">
        <h1 class="title">
          李君怡
        </h1>
      </div>
      <div class="info" ref="info">
        <ul ref="text">
          <li v-for="item in detail" class="infos" @click="linkTo(item)">
            <span class="flyLetter" ref="letter" v-for="i in item" :style="{transform:'translate3d('+1500*(Math.random()-0.5)+'px,'+ 500*(Math.random()-0.5)+'px,'+ 1000*(Math.random()-0.5)+'px)'}">{{i}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      position: 0.01,
      detail: ['Any application that', 'can be written in JavaScript', 'will eventually be written in JavaScript.', " ———— Atwood's Law"]
    }
  },
  props: {
    scroll: {
      type: Boolean
    }
  },
  mounted () {
    let text = this.$refs.text
    setTimeout(() => {
      for (let j = 0; j < text.children.length; j++) {
        for (let z = 0; z < text.children[j].children.length; z++) {
          text.children[j].children[z].style.cssText = 'transform:translate3d(' + this.position * z + 'px, 0, 0);'
        }
      }
    }, 0)
    let startX, endX, startY, endY
    this.$refs.home.addEventListener('touchstart', (event) => {
      startX = event.targetTouches[0].clientX
      startY = event.targetTouches[0].clientY
      event.preventDefault()
    })
    this.$refs.home.addEventListener('touchend', (event) => {
      endX = event.changedTouches[0].clientX
      endY = event.changedTouches[0].clientY
      if (endX - startX < -30 || endY - startY < -60) {
        this.scrollPage({deltaY: 1})
      } else if (endX - startX > 30 || endY - startY > 60) {
        this.scrollPage({deltaY: -1})
      }
      event.preventDefault()
    })
  },
  methods: {
    linkTo (link) {
      if (link.slice(0, 5) !== 'phone' && link.slice(0, 5) !== 'email') {
        let url = link.match(/:\s.*/).join('').slice(1)
        window.open(url)
      }
    },
    scrollPage (event) {
      if (this.scroll) {
        this.$emit('toggleScroll', false)
        if (event.deltaY < 0) {
          window.history.go(-1)
        } else if (event.deltaY > 0) {
          this.$router.push('/skills')
        }
      }
      setTimeout(() => {
        this.$emit('toggleScroll', true)
      }, 800)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home
  width: 100%
  height: 100%
  padding: 1rem
  background: #839ACC;
  .content
    height: 24rem
    position: relative
    top: 50%
    margin-top: -12rem
    .header
      border-radius: 50%
      border: 0.4rem solid rgba(255, 255, 255, 0.7)
    .title
      margin-top: 0.8rem
      font-size: 1.5rem
      text-shadow: 0.1rem 0.15rem #839ACC, 0.15rem 0.2rem #aee2d9
      font-weight: 800
      color: #fff
    .info
      display: flex
      margin-top: 1.5rem
      ul
        width: 100%
        font-family:'Courier New'
        font-size: 1.2rem
        font-weight: 800
        .infos
          position: relative
          height: 30px
          line-height: 1.8rem
          list-style: none
          color: #fff
          &:hover
            color: #9f3
          .flyLetter
            display: inline-block
            min-width: 0.4rem
            transition: all 1.5s
            font-size: 0.7rem
</style>
