<template>
  <div class="home" @wheel="scrollPage">
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
</template>

<script>
export default {
  data () {
    return {
      position: 13,
      // detail: ['phone number: 15829001421', 'github: https://github.com/ljuyi', 'blog: https://ljuyi.github.io', 'email: ljy981765731@163.com']
      detail: ['Any application that can be written in JavaScript,', 'will eventually be written in JavaScript.', " ———— Atwood's Law"]
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
  },
  methods: {
    linkTo (link) {
      if (link.slice(0, 5) !== 'phone' && link.slice(0, 5) !== 'email') {
        let url = link.match(/:\s.*/).join('').slice(1)
        window.open(url)
      }
    },
    scrollPage (event) {
        if (event.deltaY < 0) {
            window.history.go(-1)
        } else if (event.deltaY > 0) {
            this.$router.push('/skills')
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home
  width: 100%
  height: 100%
  padding: 50px
  background: #839ACC;
  .header
    border-radius: 50%
    border: 10px solid rgba(255, 255, 255, 0.7)
  .title
    margin-top: 20px
    font-size: 55px
    text-shadow: 1px 2px #839ACC, 2px 4px #aee2d9
    font-weight: 800
    color: #fff
  .info
    display: flex
    margin-top: 20px
    ul
      width: 100%
      font-family:'BradleyHandITCbdc09d81519a76'
      font-size: 20px
      font-weight: 800
      .infos
        position: relative
        height: 30px
        width: 50%
        line-height: 30px
        list-style: none
        color: #fff
        &:hover
          color: #9f3
        .flyLetter
          display: inline-block
          min-width: 8px
          position: absolute
          transition: all 1.5s;
</style>
