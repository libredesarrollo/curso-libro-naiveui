import { createRouter, createWebHistory } from "vue-router"

import ListCategory from "./pages/ListCategory.vue"
import ListType from "./pages/ListType.vue"
import ListElement from "./pages/ListElement.vue"

import DetailElement from "./pages/detail/DetailElement.vue"

import SaveCategory from "./pages/save/SaveCategory.vue"
import SaveType from "./pages/save/SaveType.vue"
import SaveElement from "./pages/save/SaveElement.vue"

import BasePage from "./pages/BasePage.vue"

const routes = [

    {
        path: '/list',
        component: BasePage,
        children: [
            {
                path: "",
                redirect: () => {
                    return { name: 'list-element' }
                }
            },
            {
                name: 'list-element',
                path: 'element/:type?/:id?',
                components: {
                    default: ListElement,
                    title: { template: 'Elements list' }
                }
            },
            {
                name: 'list-category',
                path: 'category',
                components: {
                    default: ListCategory,
                    title: { template: 'Categories list' }
                }
            },
            {
                name: 'list-type',
                path: 'type',
                components: {
                    default: ListType,
                    title: { template: 'Types list' }
                }
            }
        ]
    },
    {
        path: '/detail',
        component: BasePage,
        children: [
            {
                name: 'detail-element',
                path: 'element/:id',

                components: {
                    default: DetailElement,
                    title: { template: 'Detail' }
                }
            }
        ]

    },
    {
        path: '/save',
        component: BasePage,
        children: [
            {
                name: 'save-category',
                path: 'category/:id?',
                components: {
                    default: SaveCategory,
                    title: { template: 'Categories list' }
                }
            }
        ]
    },
    {
        path: '/save',
        component: BasePage,
        children: [
            {
                name: 'save-type',
                path: 'type/:id?',
                components: {
                    default: SaveType,
                    title: { template: 'Categories list' }
                }
            }
        ]
    },
    {
        path: '/save',
        component: BasePage,
        children: [
            {
                name: 'save-element',
                path: 'element/:id?',
                components: {
                    default: SaveElement,
                    title: { template: 'Categories list' }
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router