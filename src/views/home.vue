<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar id="cabeza">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" id="menuClases" align="left" />
        <q-toolbar-title>INVENTARIO</q-toolbar-title>
        <q-btn to="/" icon="logout" @click="cerrarSesion()" label="LOG OUT"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer 
      style="background-color: #e5e5e5; box-shadow: 5px 0 5px -2px rgba(0, 0, 0, 0.7); display: flex; flex-direction: column; align-items: center;" 
      show-if-above 
      v-model="leftDrawerOpen" 
      side="left" 
      bordered 
      id="filtro">
      <div class="containerInfo">
        <img src="../assets/admin.png" alt="">
        <p>Admin</p>
        <p>admin@gmail.com</p>
      </div>

      <q-btn v-for="(menu, index) in menuItems" :key="index" :color="menu.color" :push="true" :to="menu.to" class="menuOpciones" @click="closeDrawer">
        <div class="row items-center no-wrap">
          <div class="text-center">{{ menu.label }}</div>
        </div>
      </q-btn>
    </q-drawer>

    <div class="home" v-show="true" id="home">
      <h2 class="textoplano">Bienvenido a tu inventario</h2>
      <p class="textoplano">Tu herramienta confiable para una gestión eficiente y organizada. Simplifica tus procesos,
        ahorra tiempo y toma el control de tu administración.</p>
    </div>

    <router-view />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import Swal from 'sweetalert2';

const leftDrawerOpen = ref(false);
const menuItems = ref([
  { label: "ARTICULOS", to: "/articulos", color: "deep-orange" },
  { label: "CATEGORIAS", to: "/categorias", color: "deep-orange" },
  { label: "CLIENTES", to: "/clientes", color: "deep-orange" },
  { label: "PROVEEDORES", to: "/proveedores", color: "deep-orange" },
  { label: "SALIDAS", to: "/salidas", color: "deep-orange" },
  { label: "ENTRADAS", to: "/entradas", color: "deep-orange" },
  { label: "DEVOLUCIONES ENTRADAS", to: "/deventradas", color: "deep-orange" },
  { label: "DEVOLUCIONES SALIDAS", to: "/devsalidas", color: "deep-orange" }
]);


const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const closeDrawer = () => {
  leftDrawerOpen.value = false;
};

const cerrarSesion = () => {
  localStorage.removeItem('store')
  Swal.fire("Sesión cerrada", "Has cerrado sesión correctamente.", "success");
  router.push("/");
};
</script>

<style src="../styles/home.css" scoped></style>
