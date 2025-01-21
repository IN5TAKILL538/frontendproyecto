<template>
  <div>
    <q-btn @click="showBtn = true ; card = true" icon="add">Agregar Cliente</q-btn>



    <q-table title="Clientes" :rows="rows" :columns="columns" row-key="name" class="tabla">
      <template v-slot:body-cell-imagen="props">
        <q-td :props="props" class="q-pa-sm">
          <img :src="props.row.imagen" alt="" style="height: 50px; width: 50px;">

        </q-td>
      </template>
      <template v-slot:body-cell-fecha="props">
        <q-td :props="props" class="q-pa-sm">

          {{ props.row.creationAt.toString().split('T')[0] }}
        </q-td>
      </template>
      <template v-slot:body-cell-estado="props">
        <q-td :props="props" class="q-pa-sm">

         <span style="background-color: green" v-if="props.row.estado == 1"
            ><button class="activo">✅Activo✅</button></span
          >
          <span style="background-color: red" v-else
            ><button class="inactivo">❌Inactivo❌</button>
          </span>


        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" class="q-pa-sm">

          <button @click="card = true; cliente=props.row ; showBtn = false" class="icono"><img src="../assets/agregar2.gif"
              alt=""></button>
          <button v-if="props.row.estado == 1" class="icono"><img src="../assets/inactivar2.gif" alt="editar"></button>
          <button v-else class="icono"><img src="../assets/verificado.gif" alt=""></button>

        </q-td>
      </template>
    </q-table>
  </div>


  <!--modal-->

  <q-dialog v-model="card">
    <q-card class="my-card">
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" >


          <q-field color="orange" standout bottom-slots :model-value="text" label="Nombre" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="cliente.nombre">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Identificacion" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="cliente.identificacion">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Direccion" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="cliente.direccion">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Telefono" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="cliente.telefono">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Imagen" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="cliente.imagen">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>

        </div>
      </div>

      <q-card-actions align="right">
        <q-btn v-show="showBtn == false" @click="editarCliente(cliente._id)" v-close-popup flat color="primary"
          label="Editar" />
        <q-btn v-show="showBtn == true" @click="agregarCliente(); showBtn = false" v-close-popup flat color="primary"
          label="agregar" />
        <q-btn v-close-popup flat color="primary" icon="close" />
      </q-card-actions>
    </q-card>
  </q-dialog>


</template>

<script setup>
import { onMounted, ref } from "vue";
import { getData, putData, postData } from "../services/apiClient.js";
const rows = ref([])
const cliente = ref({})


//modal
let text = ref("Field content")
const showBtn = ref(false)
const card = ref(false)



let columns = ref([
  {
    name: "nombre",
    align: "center",
    label: "Nombre",
    field: "nombre",
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
    name: "estado",
    align: "center",
    label: "Estado",
    field: "estado",

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
    field: "avatar",
  },
]);

const dataClientes = async () => {
  try {
    const response = await getData("/terceros/tipos/cliente");
    if (response.clientes) {
      rows.value = response.clientes;

      console.log("clientes optenidos");
    } else {
      console.log("respuesta sin clientes", response);
    }
  } catch (error) {

    console.log("error al obtener los clientes", error.message);
  }
};


const editarCliente = async (id) => {
   document.getElementById("home").style.display="none"
  try {
    const response = await putData("/terceros/tercero/" + id,
      {
        nombre: cliente.value.nombre,
        identificacion:cliente.value.identificacion,
        direccion:cliente.value.direccion,
        telefono:cliente.value.telefono,
        imagen:cliente.value.imagen
      })

      if(response.tercero){
        console.log("cliente editada");
        dataClientes()
        Reset()
      }
      else{
        console.log("error en la operacion" + error.message);
      }
  } catch (error) {
    console.log("error al intentar editar el cliente");
  }
}



const agregarCliente= async()=>{
  try {
    const response = await postData("/terceros",
      {
        nombre: cliente.value.nombre,
        identificacion:cliente.value.identificacion,
        direccion:cliente.value.direccion,
        telefono:cliente.value.telefono,
        imagen:cliente.value.imagen,
        tipo:1
      });

      if(response.tercero){
        console.log("se agrego el cliente correctamente");
        dataClientes()
      }
      else{
        console.log("error en la respuesta" + error.message);
      }
  } catch (error) {
    console.log("error al agregar el cliente");
  }
}

function Reset (){
  cliente.value ={
    nombre:"",
    identificacion:"",
    direccion:"",
    telefono:"",
    imagen:""
  }
}

onMounted(() => {
  dataClientes();
});
</script>

<style scoped>

.activo{
  background-color: rgb(4, 151, 53);
 border: 1px;;
  
}
.inactivo{
  background-color: rgb(241, 122, 128);
   border: 1px;
  
}

  .tabla{
    background-color: var(--q-primary);
    margin: 50px;
  }
.home{
  display: none;
}
@media (max-width: 500px) {
    .tabla {
        margin: 10px; /* Elimina el margen */
    }
}
@media (min-width: 500px) {
    .q-gutter-y-md{
      min-width: 400px;
    }
}

</style>

