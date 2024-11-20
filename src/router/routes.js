import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Articulos from '../views/Articulos.vue'
import Clientes from '../views/Clientes.vue'
import Entradas from '../views/Entradas.vue'
import Salidas from '../views/Salidas.vue'
import DevSalidas from '../views/devolucionesSalidas.vue'
import DevEntradas from '../views/devolucionesEntradas.vue'
import Proveedores from '../views/Proveedores.vue'
import Categorias from '../views/Categorias.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
    {path:"/", component:Login},
    {path:"/home", component:Home, children:[
        {path:"/articulos", component:Articulos},
        {path:"/clientes", component:Clientes},
        {path:"/entradas", component:Entradas},
        {path:"/salidas", component:Salidas},
        {path:"/deventradas", component:DevEntradas},
        {path:"/devsalidas", component:DevSalidas},
        {path:"/proveedores", component:Proveedores},
        {path:"/categorias", component:Categorias},
        
    ]}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})