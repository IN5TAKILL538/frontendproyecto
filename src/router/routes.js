import login from '../views/login.vue'
import agregar from '../views/agregar.vue'
import editar from '../views/editar.vue'
import inactivar from '../views/inactivar.vue'
import listar from '../views/listar.vue'
import home from '../views/home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
    {path:"/", component:login},
   
    {path:"/home", component:home, children:[
        {path:"/agregar", component:agregar},
        {path:"/editar", component:editar},
        {path:"/inactivar", component:inactivar},
        {path:"/listar", component:listar},
    ]}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})