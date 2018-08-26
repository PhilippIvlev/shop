import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import box from '@/components/box'
import login from '@/components/login'
import add from '@/components/add'
import registration from '@/components/registration'
import personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '', name: 'home', component: home},
{path: '/box', name: 'box', component: box},
{path: '/add/:id', name: 'add', component: add},
{path: '/login', name: 'login', component: login},
    {path: '/registration', name: 'registaration', component: registration},
    {path: '/personal', name: 'personal', component: personal}

  ]
})
