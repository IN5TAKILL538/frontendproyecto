<script setup>
import { ref } from "vue";
const jsonDatos = ref([
    {
      "id": 1,
      "email": "john@mail.com",
      "password": "changeme",
      "name": "Utset",
      "role": "customer",
      "avatar": "https://i.imgur.com/LDOO4Qs.jpg",
      "creationAt": "2024-10-16T23:36:37.000Z",
      "updatedAt": "2024-10-17T09:26:10.000Z",
      "status":"1"
    },
    {
      "id": 2,
      "email": "maria@mail.com",
      "password": "12345",
      "name": "Maria",
      "role": "customer",
      "avatar": "https://i.imgur.com/DTfowdu.jpg",
      "creationAt": "2024-10-16T23:36:37.000Z",
      "updatedAt": "2024-10-16T23:36:37.000Z",
      "status":"1"
    },
    {
      "id": 3,
      "email": "admin@mail.com",
      "password": "admin123",
      "name": "Admin",
      "role": "admin",
      "avatar": "https://i.imgur.com/yhW6Yw1.jpg",
      "creationAt": "2024-10-16T23:36:37.000Z",
      "updatedAt": "2024-10-16T23:36:37.000Z"
    },
    {
      "id": 4,
      "email": "enjang.kuswara@gmail.com",
      "password": "asgar281174",
      "name": "enjang kuswara",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480",
      "creationAt": "2024-10-17T00:16:34.000Z",
      "updatedAt": "2024-10-17T00:16:34.000Z"
    },
    {
      "id": 5,
      "email": "winoezra@gmail.com",
      "password": "AlL43210",
      "name": "Esrawino",
      "role": "customer",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480",
      "creationAt": "2024-10-17T02:34:40.000Z",
      "updatedAt": "2024-10-17T02:34:40.000Z"
    },
    {
      "id": 6,
      "email": "admin@admin.com",
      "password": "admin123",
      "name": "Firebase User",
      "role": "customer",
      "avatar": "https://picsum.photos/800",
      "creationAt": "2024-10-17T04:39:08.000Z",
      "updatedAt": "2024-10-17T04:39:08.000Z"
    },
    {
      "id": 7,
      "email": "nico@gmail.com",
      "password": "1234",
      "name": "Nicolas",
      "role": "customer",
      "avatar": "https://picsum.photos/800",
      "creationAt": "2024-10-17T06:00:30.000Z",
      "updatedAt": "2024-10-17T06:00:30.000Z"
    },
])



let columns = ref([
  {
    name: "nombre",
    align: "center",
    label: "Nombre",
    field: "name",
    sortable: true,
  },
  {
    name: "identificacion",
    align: "center",
    label: "Identificacion",
    field: "identificacion",
    sortable: true,
  },
  {
    name: "direccion",
    align: "center",
    label: "Direccion",
    field: "direccion",
    
  },
  {
    name: "telefono",
    align: "center",
    label: "Telefono",
    field: "telefono",
    
  },
  
  {
    name: "status",
    align: "center",
    label: "Estado",
    field: "status",
    
  },
  {
    name: "opciones",
    align: "center",
    label: "Opciones",
    
  },
  {
    name: "imagen",
    align: "center",
    label: "Imagen",
    field: "imagen",
  },
]);
</script>

<template>
  <div>
    <q-table
      title="Datos usuarios"
      :rows="jsonDatos"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-avatar="props">
        <q-td :props="props" class="q-pa-sm">
          <img :src="props.row.avatar" alt="" style="height: 50px; width: 50px;">
        </q-td>
      </template>
      <template v-slot:body-cell-fecha="props">
        <q-td :props="props" class="q-pa-sm">
          {{ props.row.creationAt.toString().split('T')[0] }}
        </q-td>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green;" v-if="props.row.status==1">Activo</span>
          <span style="background-color: red;" v-else>Inactivo</span>
        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" class="q-pa-sm">
         <button>📝</button>
         <button v-if="props.row.status==1">❌</button>
         <button v-else>✅</button>
        </q-td>
      </template>
    </q-table>
  </div>
</template>