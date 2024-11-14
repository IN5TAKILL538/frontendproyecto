<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
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

const rows = [
  
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
