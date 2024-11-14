import login from '../views/login.vue'
import Articulos from '../views/Articulos.vue'
import Terceros from '../views/Terceros.vue'

import Movimientos from '../views/Movimientos.vue'
import home from '../views/home.vue'
import Categorias from '../views/categorias.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
    {path:"/", component:login},
   
    {path:"/home", component:home, children:[
        {path:"/articulos", component:Articulos},
        {path:"/terceros", component:Terceros},
        {path:"/movimientos", component:Movimientos},
        {path:"/categorias", component:Categorias},
        
    ]}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})