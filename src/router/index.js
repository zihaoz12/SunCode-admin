import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'

import ItemList from '../components/ItemList.vue'
import ItemEdit from '../components/ItemEdit.vue'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            name:'main',
            component: Main,
            children:[
                {path:'/houses/create',component: ItemEdit},
                {path:'/houses/list',component: ItemList},
                {path:'/houses/edit/:id',component: ItemEdit, props: true},
            ]
        }
    ]
    
})


export default router