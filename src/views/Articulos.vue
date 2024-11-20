<template>
  <q-btn @click="showBtn = true ; card = true" icon="add">Agregar articulo</q-btn>


  <div class="contenedorTabla">
    <q-table title="ARTICULOS" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-avatar="props">
        <q-td :props="props" class="q-pa-sm">
          <img :src="props.row.imagen" alt="" style="height: 50px; width: 50px" />
        </q-td>
      </template>
      <template v-slot:body-cell-estado="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green" v-if="props.row.status == 1">Activo</span>
          <span style="background-color: red" v-else>Inactivo</span>
        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" class="q-pa-sm">
           <button @click="card = true ; articulo = props.row" class="icono"><img src="../assets/agregar2.gif" alt="" > </button>
          <button v-if="props.row.estado == 1" class="icono"><img src="../assets/inactivar2.gif" alt="" ></button>
          <button v-else class="icono"><img src="../assets/verificado.gif" alt="" ></button>
        </q-td>
      </template>
    </q-table>
  </div>
  <q-dialog v-model="card">
    <q-card class="my-card">
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="min-width: 400px">
    

          <q-field
            color="orange"
            standout
            bottom-slots
            :model-value="text"
            label="Nombre"
            stack-label
            counter
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="articulo.nombre" >
            </template>
            <template v-slot:append>
             
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>

                    <q-field
            color="orange"
            standout
            bottom-slots
            :model-value="text"
            label="Precio"
            stack-label
            counter
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
            <input class="self-center full-width no-outline" type="text" v-model="articulo.precio" >
            </template>
            <template v-slot:append>
              
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>

                    <q-field
            color="orange"
            standout
            bottom-slots
            :model-value="text"
            label="Stock"
            stack-label
            counter
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="articulo.stock" >
            </template>
            <template v-slot:append>
              
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>

                    <q-field
            color="orange"
            standout
            bottom-slots
            :model-value="text"
            label="Imagen"
            stack-label
            counter
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="articulo.imagen" >
            </template>
            <template v-slot:append>
              
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>

                    <q-field
            color="orange"
            standout
            bottom-slots
            :model-value="text"
            label="Categoria"
            stack-label
            counter
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="articulo.categoria.nombre" >
            </template>
            <template v-slot:append>
              
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field
            color="orange"
            standout
            bottom-slots
            :model-value="text"
            label="Estado"
            stack-label
            counter
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="articulo.estado" >
            </template>
            <template v-slot:append>
              
            </template>

            <template v-slot:hint> Field hint </template>
          </q-field>

          
        </div>
      </div>

      <q-card-actions align="right">  
        <q-btn v-show="showBtn == false" @click="editarArticulo(articulo._id)" v-close-popup flat color="primary" label="Reserve" />
        <q-btn v-show="showBtn == true"   @click="agregarArticulo()" v-close-popup flat color="primary" label="agregar" ></q-btn>
        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>



<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store/useStore.js";
import { getData, postData, putData } from "../services/apiClient.js";
const mainStore = useStore();
const articulo = ref({});
const showBtn = ref(false)
const newArticulo = ref({})
//modal
const card = ref(false);
let text = ref("Field content")

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
    name: "categoria",
    align: "center",
    label: "Categoria",

    field: (row)=> row.categoria.nombre,
    sortable: true,
  },
{
    name: "estado",
    align: "center",
    label: "Estado",
    field: "estado",

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
    const response = await getData("/articulos/articulos")
    if (response.articulos) {
      rows.value = response.articulos
      console.log("articulos recibidos" + response);
    }
    else {
      console.log("respuesta sin articulos", response);
    }
  } catch (error) {
    console.log("error al obtener articulos", error.message);
  }
};


  const editarArticulo = async (id) => {
    try {
      console.log("aarucituclo" , articulo.value);
      
      const response = await putData("/articulos/articulo/" +id ,
        {
          nombre: articulo.value.nombre,
          precio: articulo.value.precio,
          stock: articulo.value.stock,
          imagen: articulo.value.imagen,
          categoria: articulo.value.categoria,
          estado: articulo.value.estado
        })  

      if (response.articulo) {
        console.log("articulo editado" + response.articulo);
      }
      else {
        console.log("error al editar el articulo", error.message);
      }
    } catch (error) {
      console.log("error al intentat editar");
    }
  }


  const agregarArticulo = async()=>{
    try {
      const response = await postData("/articulos",
        {
          nombre: articulo.value.nombre,
          precio: articulo.value.precio,
          stock: articulo.value.stock,
          imagen: articulo.value.imagen,
          categoria: articulo.value.categoria,
          estado: articulo.value.estado
        })

        if(response.articulos){
          console.log("articulo agregado" + articulo.value);
          getData()
        }
        else{
          console.log("error al agregar el articulo" , error.message);
        }

    } catch (error) {
      console.log("error al realizar la operacion");
    }
  }

  onMounted(() => {
    dataArticulos()
  })


</script>
