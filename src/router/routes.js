import login from '../views/login.vue'
import Articulos from '../views/Articulos.vue'
import Clientes from '../views/Clientes.vue'
import Proveedores from '../views/Proveedores.vue'

import Movimientos from '../views/Movimientos.vue'
import home from '../views/Home.vue'
import Categorias from '../views/categorias.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
    {path:"/", component:login},
   
    {path:"/home", component:home, children:[
        {path:"/articulos", component:Articulos},
        {path:"/clientes", component:Clientes},
        {path:"/proveedores", component:Proveedores},
        {path:"/movimientos", component:Movimientos},
        {path:"/categorias", component:Categorias},
        
    ]}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})