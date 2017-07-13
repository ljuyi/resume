<template>
    <div class="skill" @wheel.once="scrollPage">
        <div class="name">
            <h1 class="title">擅长技术</h1>
        </div>
        <div class="body">
            <div class="basic" ref="basic"></div>
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
    methods: {
        scrollPage (event) {
            if (event.deltaY < 0) {
                window.history.go(-1)
            } else if (event.deltaY > 0) {
                this.$router.push('/project')
            }
        }
    },
    mounted () {
        let mainChart = echarts.init(this.$refs.basic)
        mainChart.setOption(this.basic)
    }
}
</script>
<style lang="stylus">
.skill
  width: 100%
  height: 100%
  background: #87A461
  .title
    margin-top: 20px
    font-size: 60px
    font-family:'jdfkongyibdc0e9f1b19a76'
    text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9
    font-weight: 800
    color: #fff
  .body
    height: 80%
    .basic
      width: 100%
      height: 100%
</style>
