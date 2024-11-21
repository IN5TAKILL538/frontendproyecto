<template>
  <div>
    <q-btn @click="showBtn = true ; card = true" icon="add">Agregar Categoria</q-btn>


    <q-table title="CATEGORIAS" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-status="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green" v-if="props.row.status == 1">Activo</span>
          <span style="background-color: red" v-else>Inactivo</span>
        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" class="q-pa-sm">
          <button @click="card = true ; categoria = props.row" class="icono"><img src="../assets/agregar2.gif" alt="editar" > </button>
          <button v-if="props.row.estado == 1" class="icono"><img src="../assets/inactivar2.gif" alt="" ></button>
          <button v-else class="icono"><img src="../assets/verificado.gif" alt="" ></button>
        </q-td>
      </template> 
    </q-table>
  </div>

  <!--modal-->

  <q-dialog v-model="card">
    <q-card class="my-card">
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="min-width: 400px">


          <q-field color="orange" standout bottom-slots :model-value="text" label="Nombre" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="categoria.nombre">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>

          <q-field color="orange" standout bottom-slots :model-value="text" label="Descripcion" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="categoria.descripcion">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>

          <q-field color="orange" standout bottom-slots :model-value="text" label="Estado" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="categoria.estado">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>
        </div>
      </div>

      <q-card-actions align="right">
        <q-btn @click="editarCategoria(categoria._id)"  v-show="showBtn == false"   v-close-popup flat color="primary" label="editar" />
        <q-btn @click="agregarCategoria()" v-show="showBtn == true" v-close-popup flat color="primary" label="agregar" />

        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { getData, postData, putData } from "../services/apiClient.js";

//modal
const card = ref(false);
let text = ref("Field content")
const showBtn =ref(false)

//fin modal


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
    name: "Descripcion",
    align: "center",
    label: "Descripcion",
    field: "descripcion",
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
    field: "Opciones",
  }
]);

const dataCategorias = async () => {
  try {
    const response = await getData("/categorias/categorias")
    if (response.categorias) {
      rows.value = response.categorias
      console.log("categorias recibidas" + response.categorias);
    }
    else {
      console.log("no llegaron las categorias" + response);
    }
  } catch (error) {
    console.log("error al obtene articulo" + error.message);
  }
}


const categoria = ref({})

const editarCategoria = async (id) => {
  try {
    const response = await putData("/categorias/categoria/" + id,
      {
        nombre: categoria.value.nombre,
        descripcion: categoria.value.descripcion,
        estado: categoria.value.estado
      })

      if(response.categoria){
        console.log("categoria editada");
      }
      else{
        console.log("error en la operacion" + error.message);
      }
  } catch (error) {
    console.log("error al intentar editar el articulo");
  }
}


const agregarCategoria= async()=>{
  try {
    const response = await postData("/categorias",
      {
        nombre:categoria.value.nombre,
        descripcion:categoria.value.descripcion,
        estado:categoria.value.estado
      });

      if(response.categoria){
        console.log("se agrego la categoria correctamente");
      }
      else{
        console.log("error en la respuesta" + error.message);
      }
  } catch (error) {
    console.log("error al agregar la categoria");
    console.log(categoria.value.estado);
  }
}


onMounted(() => {
  dataCategorias()
})

</script>
