import login from '../views/login.vue'
import agregar from '../views/agregar.vue'
import editar from '../views/editar.vue'   
import inactivar from '../views/inactivar.vue'
import listar from '../views/listar.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', component: login},
    {path: '/agregar', component: agregar},
    {path: '/editar', component: editar},
    {path: '/inactivar', component: inactivar},
    {path: '/listar', component: listar},

]
export const router = createRouter({
    history: createWebHistory(),
    routes
})