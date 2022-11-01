import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    routes: [
        {
            path: '/',
            //路由到的地址(自定义)
            component: () => import('../components/indexs/indexs.vue'),
            name: 'indexdata',
            children: [
                { path: "/", component: () => import('../components/indexdata/indexdata.vue') },
            ],
        },

    ],
    history: createWebHistory()
})
export default router;
