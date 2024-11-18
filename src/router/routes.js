import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Articulos from '../views/Articulos.vue'
import Clientes from '../views/Clientes.vue'
import Proveedores from '../views/Proveedores.vue'
import Categorias from '../views/Categorias.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
    {path:"/", component:Login},
    {path:"/home", component:Home, children:[
    {path:"/articulos", component:Articulos},
    {path:"/clientes", component:Clientes},
    {path:"/proveedores", component:Proveedores},
    {path:"/categorias", component:Categorias},
    ]} 
    
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})