<template>
  <div>

    <q-btn @click="showBtn = true; card = true" icon="add">Agregar salida</q-btn>


    <q-table title="SALIDAS" :rows="rows" :columns="columns" row-key="name">

      <template v-slot:body-cell-Estado="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green" v-if="props.row.status == 1">Activo</span>
          <span style="background-color: red" v-else>Inactivo</span>
        </q-td>
      </template>

      <template v-slot:body-cell-Opciones="props">
        <q-td :props="props" class="q-pa-sm">

          <button @click="card2 = true;
          articulo = props.row;
          rowsArticulos = props.row.articulos
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

      <template v-slot:body-cell-Articulos="props">
        <q-td :props="props" class="q-pa-sm">
          <q-btn icon="visibility" @click="Showmodal = true;
          rowsArticulos = props.row.articulos"></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>

  <!-- modal -->

  <q-dialog v-model="card">
    <q-card class="my-card">
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="min-width: 400px">


          <q-field color="orange" standout bottom-slots :model-value="text" label="Factura" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="salida.numeroFactura">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Fecha" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="salida.fecha">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Valor" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="salida.valor">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Iva" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="salida.iva">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Total" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="salida.total">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Estado" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="salida.estado">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            <template v-slot:hint> Field hint </template>
          </q-field>

        </div>
      </div>

      <!-- articulos -->
      <p>agrega tus articulos aqui abajo</p>

      <q-btn @click="Showmodal = true">Agregar Articulo</q-btn>

      <q-form v-show="Showmodal">
        <q-input v-model="ide" label="Nombre"></q-input>
        <q-input v-model="cantidad" label="Cantidad"></q-input>
        <q-input v-model="precio" label="Precio"></q-input>
        <q-btn @click="agregarArrayArticulos()">agregar otro</q-btn>
        <q-btn @click="Showmodal = false; agregarArrayArticulos()">Listo</q-btn>
      </q-form>


      <q-card-actions align="right">
        <q-btn @click="editarCliente(cliente._id)" v-show="showBtn == false" v-close-popup flat color="primary"
          label="Editar" />
        <q-btn @click="agregarSalida()" v-show="showBtn == true" v-close-popup flat color="primary" label="Cerrar" />

        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>


  <!-- modal articulos -->
  <q-dialog v-model="Showmodal">
    <q-card>
      <div class="top">
        <h1>Aqui puede ver los articulos que fueron vendidos 😁</h1>
        <q-btn icon="close" @click="Showmodal = false"></q-btn>
      </div>
      <q-table title="Articulos" :rows="rowsArticulos" :columns="columnsArticulos" row-key="name">
        <template v-slot:body-cell-Nombre="props">
          <q-td :props="props" class="q-pa-sm">
            <p>{{ props.row.id.nombre }}</p>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-dialog>



  <!-- modal editar -->

  <q-dialog v-model="card2">
    <q-card class="my-card">
      <div class="q-pa-md">
        <div class="q-gutter-y-md column">
          <div class="titleDiv">
            <h1 class="title">Editar Salida</h1>
            <q-btn class="close" icon="close" @click="card2 = false"></q-btn>
          </div>
          <div class="containerTop">
            <q-input class="btnEditar" type="number" v-model="salida.numeroFactura" label="N-factura"></q-input>
            <q-input class="btnEditar" type="date" v-model="salida.fecha" label="Fecha"></q-input>
            <q-input class="btnEditar" type="number" v-model="salida.valor" label="valor"></q-input>
            <q-input class="btnEditar" type="number" v-model="salida.iva" label="iva(%)"></q-input>
            <q-input class="btnEditar" type="number" v-model="salida.total" label="Total"></q-input>
          </div>
          <!--  articulos -->

          <input type="text" v-for="articulo in rowsArticulos" v-model="articulo.id.nombre"  />

        </div>
      </div>

      <!-- articulos -->
      <p>agrega tus articulos aqui abajo</p>

      <q-btn @click="Showmodal = true">Agregar Articulo</q-btn>

      <q-form v-show="Showmodal">
        <q-input v-model="ide" label="Nombre"></q-input>
        <q-input v-model="cantidad" label="Cantidad"></q-input>
        <q-input v-model="precio" label="Precio"></q-input>
        <q-btn @click="agregarArrayArticulos()">agregar otro</q-btn>
        <q-btn @click="Showmodal = false; agregarArrayArticulos()">Listo</q-btn>
      </q-form>


      <q-card-actions align="right">
        <q-btn @click="editarCliente(cliente._id)" v-show="showBtn == false" v-close-popup flat color="primary"
          label="Editar" />
        <q-btn @click="agregarSalida()" v-show="showBtn == true" v-close-popup flat color="primary" label="Cerrar" />

        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { getData, postData } from "../services/apiClient.js";
const salida = ref({
  numeroFactura: "",
  fecha: "",
  articulos: [],
  valor: "",
  iva: "",
  total: "",
  estado: ""
})

//modal
let text = ref("Field content")
const showBtn = ref(false)
const Showmodal = ref(false)
const modalArticulo = ref(false)
const card = ref(false)
const card2 = ref(false)


const rows = ref([]);
const rowsArticulos = ref([])


const columnsArticulos = ref([
  {
    name: "Nombre",
    align: "center",
    label: "Nombre",
    field: "id"
  },
  {
    name: "Precio",
    align: "center",
    label: "Precio",
    field: "precio"
  },
  {
    name: "Cantidad",
    align: "center",
    label: "Cantidad",
    field: "cantidad" // estoy haciendo la tabla para los articulos

  }
])

let columns = ref([
  {
    name: "Factura",
    align: "center",
    label: "Factura",
    field: "numeroFactura",
  },
  {
    name: "Fecha",
    align: "center",
    label: "Fecha",
    field: "fecha",
  },
  {
    name: "Valor",
    align: "center",
    label: "Valor",
    field: "valor",
  },
  {
    name: "Iva",
    align: "center",
    label: "Iva",
    field: "iva",
  },
  {
    name: "Total",
    align: "center",
    label: "Total",
    field: "total",
  },
  {
    name: "Estado",
    align: "center",
    label: "Estado",
    field: "estado",
  },
  {
    name: "Articulos",
    align: "center",
    label: "Articulos",
    field: "articulos",
  },
  {
    name: "Opciones",
    align: "center",
    label: "Opciones",
    field: "articulos",
  }
]);

const dataSalidas = async () => {
  try {
    const response = await getData("/movimientos/tipo/salidas");
    if (response.salidas) {
      rows.value = response.salidas;
      console.log("salidas recibidas", response.salidas);
    }
  } catch (error) {
    console.log("no llegaron las salidas" + error.message);
  }
};


const agregarSalida = async () => {
  try {
    const response = await postData("/movimientos",
      {
        tipo: 2,
        numeroFactura: salida.value.numeroFactura,
        fecha: salida.value.fecha,
        articulos: salida.value.articulos,
        valor: salida.value.valor,
        iva: salida.value.iva,
        total: salida.value.total,
        estado: salida.value.estado
      })

    if (response.movimiento) {
      console.log("salida agregada", response.movimiento);
      dataSalidas()
    }
    else {
      console.log("error al registrar la salida" + error.message);
    }

  } catch (error) {
    console.log("error al intentar registrar la salida ", salida.value);
  }
}

//articulos de formulario
const ide = ref("");
const cantidad = ref("");
const precio = ref("");

function agregarArrayArticulos() {
  salida.value.articulos.push({
    id: ide.value,
    cantidad: cantidad.value,
    precio: precio.value
  })
  ResetMiniModal()

}


function ResetMiniModal() {
  ide.value = ""
  cantidad.value = ""
  precio.value = ""
}

onMounted(() => {
  dataSalidas();
});
</script>


<style src="../styles/salidas.css" scoped></style>