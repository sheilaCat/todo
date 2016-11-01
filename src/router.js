import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './controllers/index.vue'

export default function Router (Vue) {
	Vue.use(VueRouter)

	const router = new VueRouter({
		mode: 'history',
		routes: [
			{ path: '/', redirect: '/index' },
			{ path: '/index', component: Index},
			{ path: '*', component: Index}
		]
	})

	return router
}