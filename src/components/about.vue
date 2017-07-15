<template>
    <div class="about" @wheel="scrollPage" ref="about">
        <div class="content">
            <div class="name">
                <h1 class="title">关于我</h1>
            </div>
            <div class="body">
                <ul>
                    <li v-for="item in info" class="infos">
                        {{item}}
                    </li>
                </ul>
                <h1 class="title">了解更多</h1>
                <ul>
                    <li v-for="item in detail" class="infos">
                        <a :href="item[1]" class="link" :target="'_blank'">
                            <i class="iconfont" :class="item[0]"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <a class="download" href="http://osywktegp.bkt.clouddn.com/%E8%A5%BF%E5%AE%89%E9%82%AE%E7%94%B5%E5%A4%A7%E5%AD%A6-%E6%9D%8E%E5%90%9B%E6%80%A1-%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%AE%9E%E4%B9%A0%E7%94%9F.pdf">下载简历</a>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            detail: [
                ['icon-github-copy', 'https://github.com/ljuyi'],
                ['icon-boke', 'https://ljuyi.github.io'],
                ['icon-youxiang', 'mailto:ljy981765731@163.com'],
                ['icon-weibo', 'http://weibo.com/u/1793038094?refer_flag=1001030201_']
            ],
            info: ['西安邮电大学', '2018届', '本科', '女', '计算机科学与技术专业']
        }
    },
    props: {
        scroll: {
            type: Boolean
        }
    },
    mounted () {
        let startX, endX, startY, endY
        this.$refs.about.addEventListener('touchstart', (event) => {
            startX = event.targetTouches[0].clientX
            startY = event.targetTouches[0].clientY
            event.preventDefault()
        })
        this.$refs.about.addEventListener('touchend', (event) => {
            endX = event.changedTouches[0].clientX
            endY = event.changedTouches[0].clientY
            if (endX - startX < -30 || endY - startY < -60) {
                this.scrollPage({ deltaY: 1 })
            } else if (endX - startX > 30 || endY - startY > 60) {
                this.scrollPage({ deltaY: -1 })
            }
            event.preventDefault()
        })
    },
    methods: {
        scrollPage (event) {
            if (this.scroll) {
                this.$emit('toggleScroll', false)
                if (event.deltaY < 0) {
                    this.$router.replace('/project')
                } else if (event.deltaY > 0) {
                    this.$router.replace('/')
                }
            }
        }
    }
}
</script>
<style lang="stylus">
.about
  width: 100%
  height: 100%
  background: #857578
  .content
    height: 24rem
    position: relative
    top: 50%
    margin-top: -12rem
    .title
      margin: 1rem
      font-size: 2rem
      text-shadow: 0.1rem 0.15rem #857578, 0.15rem 0.2rem #aee2d9
      font-weight: 800
      color: #fff
    .download
      text-shadow: 0.1rem 0.15rem #857578, 0.15rem 0.2rem #aee2d9
      font-size: 1.5rem
      color: #fff
      text-decoration: none
      &:hover
        color: #839ACC
    .body
      .title
        margin-top: 1rem
        font-size: 1.5rem
      ul
        &:last-child
          margin-top: 1.5rem
          li
            display:inline-block
            margin: 0.5rem
        .infos
          list-style: none
          color: rgba(255, 255, 255, 0.5)
          font-size: 0.7rem
          line-height: 1.5rem
          .link
            display: inline-block
            text-decoration: none
            .iconfont
              padding: 0
              font-size: 1.6rem
              color: rgba(255, 255, 255, 0.6)
              &:hover
                color: #839ACC
</style>
