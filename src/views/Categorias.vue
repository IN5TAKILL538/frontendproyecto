

<template>
  <div>
    <q-table
      title="CATEGORIAS"
      :rows="jsonDatos"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-avatar="props">
        <q-td :props="props" class="q-pa-sm">
          <img :src="props.row.avatar" alt="" style="height: 50px; width: 50px;">
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
<script setup>
import { ref } from "vue";


const jsonDatos = ref([

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
    name: "Descripcion",
    align: "center",
    label: "Descripcion",
    field: "text",
    
  },
  {
    name: "status",
    align: "center",
    label: "Estado",
    field: "status",
    
  },

  {
    name: "avatar",
    align: "center",
    label: "Imagen",
    field: "avatar",
    sortable: true,
  },
]);
</script>