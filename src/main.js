import { createApp } from 'vue/dist/vue.esm-bundler.js'

import "./css/main.css"

import axios from "axios"
import naive from 'naive-ui'
import CKEditor from '@ckeditor/ckeditor5-vue';

import App from './App.vue'
import router from "./router"

const app = createApp(App)

app.config.globalProperties.$axios = axios
window.axios = axios

app.use(router)
app.use(naive)
app.use(CKEditor)

app.mount('#app')
