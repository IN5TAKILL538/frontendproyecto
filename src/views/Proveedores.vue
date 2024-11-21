<template>
  <div>
    <q-btn @click="showBtn = true; card = true" icon="add">Agregar proveedor</q-btn>

    <q-table title="Datos usuarios" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-imagen="props">
        <q-td :props="props" class="q-pa-sm">
          <img :src="props.row.imagen" alt="" style="height: 50px; width: 50px" />
        </q-td>
      </template>
      <template v-slot:body-cell-fecha="props">
        <q-td :props="props" class="q-pa-sm">
          {{ props.row.creationAt.toString().split("T")[0] }}
        </q-td>
      </template>
      <template v-slot:body-cell-estado="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green" v-if="props.row.estado == 1"><button
              class="activo">✅Activo✅</button></span>
          <span style="background-color: red" v-else><button class="inactivo">❌Inactivo❌</button>
          </span>
        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" class="q-pa-sm">
          <button @click="
            card = true;
          proveedor = props.row;
          " class="icono">
            <img src="../assets/agregar2.gif" alt="" />
          </button>
          <button v-if="props.row.estado == 1" class="icono">
            <img src="../assets/inactivar2.gif" alt="" />
          </button>
          <button v-else class="icono">
            <img src="../assets/verificado.gif" alt="" />
          </button>
        </q-td>
      </template>
    </q-table>
  </div>

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
              <input class="self-center full-width no-outline" type="text" v-model="proveedor.nombre">
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
              <input class="self-center full-width no-outline" type="text" v-model="proveedor.identificacion">
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
              <input class="self-center full-width no-outline" type="text" v-model="proveedor.direccion">
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
              <input class="self-center full-width no-outline" type="text" v-model="proveedor.telefono">
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
              <input class="self-center full-width no-outline" type="text" v-model="proveedor.imagen">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>

        </div>
      </div>

      <q-card-actions align="right">
        <q-btn @click="editarProveedor(proveedor._id)" v-show="showBtn == false" v-close-popup flat color="primary"
          label="Editar" />
        <q-btn @click="agregarProveedor()" v-show="showBtn == true" v-close-popup flat color="primary"
          label="Agregar" />

        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { onMounted, ref } from "vue";

import { useStore } from "../store/useStore.js";
import { getData, putData, postData } from "../services/apiClient.js";
const mainStore = useStore();
const rows = ref([]);
const proveedor = ref({})


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

const dataProveedor = async () => {
  try {
    const response = await getData("/terceros/tipos/proveedor");
    if (response.proveedores) {
      rows.value = response.proveedores;

      console.log("proveedores optenidos");
    } else {
      console.log("respuesta sin proveedores", response);
    }
  } catch (error) {
    console.log("error al obtener los proveedores", error.message);
  }
};



const editarProveedor = async (id) => {
  try {
    const response = await putData("/terceros/tercero/" + id,
      {
        nombre: proveedor.value.nombre,
        identificacion: proveedor.value.identificacion,
        direccion: proveedor.value.direccion,
        telefono: proveedor.value.telefono,
        imagen: proveedor.value.imagen
      })

    if (response.tercero) {
      console.log("cliente editada");
    }
    else {
      console.log("error en la operacion" + error.message);
    }
  } catch (error) {
    console.log("error al intentar editar el cliente");
  }
}

const agregarProveedor = async () => {
  try {
    const response = await postData("/terceros",
      {
        nombre: proveedor.value.nombre,
        identificacion: proveedor.value.identificacion,
        direccion: proveedor.value.direccion,
        telefono: proveedor.value.telefono,
        imagen: proveedor.value.imagen,
        tipo: 2
      });

    if (response.tercero) {
      console.log("se agrego el cliente correctamente");
      showBtn.value = false
      dataProveedor()
    }
    else {
      console.log("error en la respuesta" + error.message);
    }
  } catch (error) {
    console.log("error al agregar el cliente");
  }
}

onMounted(() => {
  dataProveedor();
});
</script>
<style scoped>
.activo {
  background-color: greenyellow;
  border: 1px;

}

.inactivo {
  background-color: rgb(241, 122, 128);
  border: 1px;

}
</style>