import Vue from 'vue'
import VueRouter from 'vue-router'

import introduce from  './component/introduce.vue';
import selector from  './component/selector.vue';
import ergodic from  './component/ergodic.vue';
import Class from  './component/class.vue';
import css from  './component/css.vue';
import attr from  './component/attr.vue';
import dom from  './component/dom.vue';
import animation from  './component/animation.vue';
import event from  './component/event.vue';
import ajax from  './component/ajax.vue';
import queue from  './component/queue.vue';
import tool from  './component/tool.vue';
import plugin from  './component/plugin.vue';
import touch from  './component/touch.vue';

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
        { path: '/', redirect: '/introduce' },
        { path: '/introduce', component: introduce },
        { path: '/selector', component: selector },
        { path: '/ergodic', component: ergodic },
        { path: '/class', component: Class },
        { path: '/css', component: css },
        { path: '/attr', component: attr },
        { path: '/dom', component: dom },
        { path: '/animation', component: animation },
        { path: '/event', component: event },
        { path: '/ajax', component: ajax },
        { path: '/queue', component: queue },
        { path: '/tool', component: tool },
        { path: '/plugin', component: plugin },
        { path: '/touch', component: touch }
    ]
})
export default router;