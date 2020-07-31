import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from './components/views/Foo.vue'
import Bar from './components/views/Bar.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
            path: '/foo',
            component: Foo
        },
        {
            path: '/bar',
            component: Bar
        },
    ]
})