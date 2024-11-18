<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store/useStore.js";
import { getData } from "../services/apiClient.js";
const mainStore = useStore();

const rows = ref([]);

let columns = ref([
  {
    name: "nombre",
    align: "center",
    label: "Nombre",
    field: "nombre",
    sortable: true,
  },
  {
    name: "precio",
    align: "center",
    label: "Precio",
    field: "precio",
    sortable: true,
  },
  {
    name: "stock",
    align: "center",
    label: "stock",
    field: "stock",
    sortable: true,
  },

  {
    name: "avatar",
    align: "center",
    label: "Imagen",
    field: "avatar",
    sortable: true,
  },
  {
    name: "status",
    align: "center",
    label: "Categoria",
    field: "status",
    sortable: true,
  },
  {
    name: "opciones",
    align: "center",
    label: "Estado",
    sortable: true,
  },
]);
const dataArticulos = async () => {
 
  
  try {
    const response = await getData("/articulos/articulos");
    if (response.articulos) {
      rows.value = response.articulos;
      console.log("articulos recibidos" );
    } else {
      console.log("respuesta sin articulos", response);
    }
  } catch (error) {
    
    console.log("error al obtener articulos", error.message);
  }
};

onMounted(() => {
  dataArticulos();
});
</script>

<template>
  <div class="contenedorTabla">
    <q-table title="ARTICULOS" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-avatar="props">
        <q-td :props="props" class="q-pa-sm">
          <img
            :src="props.row.avatar"
            alt=""
            style="height: 50px; width: 50px"
          />
        </q-td>
      </template>

      <template v-slot:body-cell-status="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green" v-if="props.row.status == 1"
            >Activo</span
          >
          <span style="background-color: red" v-else>Inactivo</span>
        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" class="q-pa-sm">
          <button>📝</button>
          <button v-if="props.row.status == 1">❌</button>
          <button v-else>✅</button>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<style>
.contenedorTabla {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>