import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserClock, faBarChart, faChartPie, faDollarSign, faCoins } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faUserClock, faBarChart, faChartPie, faDollarSign, faCoins)




createApp(App).component('font-awesome-icon', FontAwesomeIcon).component('EasyDataTable', Vue3EasyDataTable).use(store).use(router).mount('#app')
