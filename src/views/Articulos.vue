<template>
  <div class="q-pa-md">
    <q-table
      title="Articulos"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script setup>



import { onMounted, ref } from 'vue';
import { useStore } from '../store/useStore.js';
import { getData } from '../services/apiClient.js';
const mainStore = useStore()
const rows = ref([])


const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre', sortable: true },
  { name: 'precio', label: 'Precio', field: 'precio', sortable: true },
  { name: 'stock', label: 'Stock', field: 'stock', sortable: true  },
  { name: 'imagen', label: 'Imagen', field: 'imagen' },
  { name: 'categoria', label: 'Categoria', field: 'categoria', sortable: true  },
  { name: 'estado', label: 'Estado', field: 'estado' },
  
]

    const dataArticulos = async ()=>{
      
        try {
            const response = await getData("/articulos/articulos")
            if(response.articulos){
                rows.value = response.articulos
                console.log("articulos recibidos"+ articulos.value);
            }
            else{
                console.log("respuesta sin articulos", response);
            }
        } catch (error) {
            console.log("error al obtener articulos", error.message);
        }
    };

onMounted(()=>{
  dataArticulos()
})


</script>
