import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'

import ItemList from '../components/ItemList.vue'
import ItemEdit from '../components/ItemEdit.vue'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/login',
            component:()=>import('../views/Login.vue')
        },
        {
            path:'/',
            name:'main',
            component: Main,
            children:[
                {path:'/houses/create',component: ItemEdit},
                {path:'/houses/list',component: ItemList},
                {path:'/houses/edit/:id',component: ItemEdit, props: true},
                {path:'/about',component:()=>import('../views/About.vue')}
            ]
        }
        
    ]
    
})


export default router