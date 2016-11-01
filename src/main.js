import Vue from 'vue'
import Router from './router'

require('./assets/styles/_commen.less')
require('./assets/styles/index.less')

const router = Router(Vue)


var app = new Vue({
	router,
	template: '<div id="app">' + 
			'<router-view></router-view>' + 
		'</div>',
	data() {
		return {}
	}
})

app.$mount('#app')

export default app