<template>
    <div class="skill" @wheel="scrollPage" ref="skill">
        <div class="content">
            <div class="name">
                <h1 class="title">擅长技术</h1>
            </div>
            <div class="body">
                <div class="basic" ref="basic"></div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
export default {
    data () {
        return {
            basic: {
                title: {
                },
                tooltip: {},
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: 'HTML', max: 100 },
                        { name: 'CSS', max: 100 },
                        { name: 'JavaScript', max: 100 },
                        { name: 'ES6', max: 100 },
                        { name: 'PhotoShop', max: 100 },
                        { name: 'SCSS', max: 100 },
                        { name: 'stylus', max: 100 },
                        { name: 'Vue', max: 100 },
                        { name: 'Node.js', max: 100 },
                        { name: 'webpack', max: 100 },
                        { name: 'gulp', max: 100 }
                    ]
                },
                series: [{
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: [90, 85, 88, 65, 70, 75, 75, 80, 70, 68, 72],
                            name: '技能'
                        }
                    ]
                }]
            }
        }
    },
    props: {
        scroll: {
            type: Boolean
        }
    },
    methods: {
        scrollPage (event) {
            if (this.scroll) {
                this.$emit('toggleScroll', false)
                if (event.deltaY < 0) {
                    window.history.go(-1)
                } else if (event.deltaY > 0) {
                    this.$router.push('/project')
                }
            }
            setTimeout(() => {
                this.$emit('toggleScroll', true)
            }, 800)
        }
    },
    mounted () {
        let mainChart = echarts.init(this.$refs.basic)
        mainChart.setOption(this.basic)
        let startX, endX, startY, endY
        this.$refs.skill.addEventListener('touchstart', (event) => {
            startX = event.targetTouches[0].clientX
            startY = event.targetTouches[0].clientY
            event.preventDefault()
        })
        this.$refs.skill.addEventListener('touchend', (event) => {
            endX = event.changedTouches[0].clientX
            endY = event.changedTouches[0].clientY
            if (endX - startX < -30 || endY - startY < -60) {
                this.scrollPage({ deltaY: 1 })
            } else if (endX - startX > 30 || endY - startY > 60) {
                this.scrollPage({ deltaY: -1 })
            }
            event.preventDefault()
        })
    }
}
</script>
<style lang="stylus">
.skill
  width: 100%
  height: 100%
  background: #87A461
  .content
    height: 24rem
    position: relative
    top: 50%
    margin-top: -12rem
    .title
      margin-top: 1.5rem
      font-size: 2rem
      text-shadow: 0.1rem 0.15rem #22c3aa, 0.15rem 0.2rem #aee2d9
      font-weight: 800
      color: #fff
    .body
      height: 80%
      .basic
        width: 100%
        height: 100%
</style>
