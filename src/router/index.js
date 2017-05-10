import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import TodoList from '@/components/TodoList'
import Album from '@/components/Album'
import Albums from '@/components/Albums'
import Shopping from '@/components/Shopping'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/todo-list',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/album/:id',
      name: 'Album',
      component: Album
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    }
  ]
})
