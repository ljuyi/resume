import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import skill from '@/components/skill'
import project from '@/components/project'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
    // v-link激活时添加的class，默认是v-link-active
  linkActiveClass: 'active',
  base: '/resumes/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/skills',
      name: 'skill',
      component: skill
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
