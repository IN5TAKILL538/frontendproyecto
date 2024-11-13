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
  { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
  { name: 'nombre', label: 'NOMBRE', field: 'nombre', sortable: true },
  { name: 'preciounitario', align: 'center', label: 'PRECIO U.', field: 'preciounitario', sortable: true},
  { name: 'stock', align: 'center', label: 'STOCK', field: 'stock' },
  { name: 'categoria', align: 'center', label: 'CATEGORIA', field: 'categoria' },
  { name: 'estado', label: 'ESTADO', field: 'estado', sortable: true },
  
]

const rows = [
 {}
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

