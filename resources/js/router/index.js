import { createRouter, createWebHistory } from "vue-router";

import productIndex from '../components/products/index.vue';
import productNew from '../components/products/new.vue';
import notFound from "../components/notFound.vue";


const routes = [{
        path: '/',
        component: productIndex
    },
    {
        path: '/product/new',
        component: productNew
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})