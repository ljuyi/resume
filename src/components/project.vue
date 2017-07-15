<template>
    <div class="project" @wheel="scrollPage" ref="project">
        <div class="content">
            <div class="name">
                <h1 class="title">项目经历</h1>
            </div>
            <div class="body">
                <ul>
                    <li v-for="project in projects">
                        <a class="project-name" :href="project.link" target="_blank">{{project.title}}</a>
                        <p class="des">{{project.des}}</p>
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
            projects: [
                {
                    'title': '推箱子游戏',
                    'des': '模仿经典游戏推箱子，增加双人游戏模式',
                    'link': 'https://github.com/bigfeifan/feifanh5star'
                },
                {
                    'title': '在线考试系统',
                    'des': '使用 vue + vuex + vue-router 重构',
                    'link': 'https://github.com/ljuyi/exam-manage-system'
                },
                {
                    'title': '消防管理系统微信端',
                    'des': '手机微信端的管理系统',
                    'link': 'https://github.com/ljuyi/fireFight'
                },
                {
                    'title': 'chrome扩展程序',
                    'des': '给起始页增添一些色彩',
                    'link': 'https://github.com/ljuyi/fireFight'
                }
            ]
        }
    },
    props: {
        scroll: {
            type: Boolean
        }
    },
    mounted () {
        let startX, endX, startY, endY
        this.$refs.project.addEventListener('touchstart', (event) => {
            startX = event.targetTouches[0].clientX
            startY = event.targetTouches[0].clientY
            event.preventDefault()
        })
        this.$refs.project.addEventListener('touchend', (event) => {
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
                    window.history.go(-1)
                } else if (event.deltaY > 0) {
                    this.$router.push('/about')
                }
            }
            setTimeout(() => {
                this.$emit('toggleScroll', true)
            }, 800)
        }
    }
}
</script>
<style lang="stylus">
.project
  width: 100%
  height: 100%
  background: #FD851C
  .content
    height: 24rem
    position: relative
    top: 50%
    margin-top: -12rem
    .title
      margin: 1rem
      font-size: 2rem
      text-shadow: 0.1rem 0.15rem #FD851C, 0.1rem 0.2rem #aee2d9
      font-weight: 800
      color: #fff
    .body
      height: 80%
      ul
        display: flex
        height: 100%
        flex-direction: column
        justify-content: space-around
        li
          flex: 1
          list-style: none
          color: rgba(255, 255, 255, 0.6)
          .project-name
            font-size: 1rem
            color: rgba(255, 255, 255, 0.8)
            text-decoration: none
            line-height: 2rem
            &:hover
              color: #9f3
          .des
            font-size: 0.7rem
</style>
