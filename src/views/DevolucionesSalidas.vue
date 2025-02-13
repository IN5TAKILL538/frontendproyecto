
<template>
  <q-toolbar>
    <q-btn icon="home" to="/home">Inicio</q-btn>
    <q-btn @click="showBtn = true; card = true" icon="add">Agregar devolucion</q-btn>
  </q-toolbar>
  <div>
    <q-table title="DEVOLUCIONES SALIDAS" :rows="rows" :columns="columns" row-key="name" class="tabla">

      <template v-slot:body-cell-Estado="props">
        <q-td :props="props" class="q-pa-sm">
          <span style="background-color: green" v-if="props.row.estado == 1">Activo</span>
          <span style="background-color: red" v-else>Inactivo</span>
        </q-td>
      </template>

      <template v-slot:body-cell-Opciones="props">
        <q-td :props="props" class="q-pa-sm">

          <button @click="
          card2 = true;
          devsalida= props.row;
          rowsArticulos = props.row.articulos;
          console.log(TotalEditar);"
          class="icono">
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
          <q-btn icon="visibility" style="color: black;" @click="Showmodal2 = true;
          rowsArticulos = props.row.articulos ; console.log(rowsArticulos);"></q-btn>
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
              <input class="self-center full-width no-outline" type="text" v-model="devsalida.numeroFactura">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Fecha" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="devsalida.fecha">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Iva" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="devsalida.iva">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            
          </q-field>


            <!-- modal para agregar articulos a la hora de registrar una salida -->
           

<q-btn @click="Showmodal = true">Agregar Articulo</q-btn>

<q-form v-show="Showmodal" class="modalMini">
<q-input v-model="ide" label="Nombre" ></q-input>
<q-input v-model="cantidad" label="Cantidad"></q-input>
<q-input v-model="precio" label="Precio"></q-input>
<q-btn @click="agregarArrayArticulos()">agregar otro</q-btn>
<q-btn @click="Showmodal = false; agregarArrayArticulos()" >Listo</q-btn>
</q-form>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Valor" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline"  v-model="valor" disabled>
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            
          </q-field>




          <q-field color="orange" standout bottom-slots :model-value="text" label="Total" stack-label counter clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="total">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            
          </q-field>


          <q-field color="orange" standout bottom-slots :model-value="text" label="Estado" stack-label counter
            clearable>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:control>
              <input class="self-center full-width no-outline" type="text" v-model="devsalida.estado">
            </template>
            <template v-slot:append>
              <q-icon name="favorite" />
            </template>
            
          </q-field>

        </div>
      </div>

    


      <q-card-actions align="right">
        <q-btn @click="agregarDevolucionSalida(); showBtn = false" v-show="showBtn == true" v-close-popup flat color="primary" label="Agregar" />

<q-btn v-close-popup flat color="primary" round icon="close" />
      </q-card-actions>
    </q-card>
  </q-dialog>


  <!-- modal para tener una vista de los articulos relacionados con ese movimiento o salida -->
  <q-dialog v-model="Showmodal2">
    <q-card>
      <div class="top">
        <h1>Aqui puede ver los articulos que fueron vendidos 😁</h1>
        <q-btn icon="close" @click="Showmodal2 = false"></q-btn>
      </div>
      <q-table title="Articulos" :rows="rowsArticulos" :columns="columnsArticulos" row-key="name">
        <template v-slot:body-cell-Nombre="props">
          <q-td :props="props" class="q-pa-sm">
            <p>{{ props.row.id.nombre }}</p>
          </q-td>
        </template>

        <template v-slot:body-cell-Precio="props">
          <q-td :props="props" class="q-pa-sm">
            <p>{{ props.row.precio }}</p>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-dialog>



  <!-- modal editar salida -->

  <q-dialog v-model="card2">
    <q-card class="my-card">
      <div class="q-pa-md">
        <div class="q-gutter-y-md column">
          <div class="titleDiv">
            <h1 class="title">Editar Salida</h1>
            <q-btn class="close" icon="close" @click="card2 = false"></q-btn>
          </div>
          <div class="containerTop">
            <q-input class="btnEditar" type="number" v-model="devsalida.numeroFactura" label="N-factura"></q-input>
            <q-input class="btnEditar" type="date" v-model="devsalida.fecha" label="Fecha"></q-input>
            <q-input class="btnEditar" type="number" v-model="valorEditar" label="valor"></q-input>
            <q-input class="btnEditar" type="number" v-model="devsalida.iva" label="iva(%)"></q-input>
            <q-input class="btnEditar" type="number" v-model="total" label="Total"></q-input>
          </div>

          <!--  lista de articulos del modal editar  -->
          <q-table title="Articulos" :rows="rowsArticulos" :columns="columnsArticulos2" row-key="name">
            <template late v-slot:body-cell-Nombre="props">
              <q-td :props="props" class="q-pa-sm">
                <p>{{ props.row.id.nombre }}</p>
              </q-td>
            </template>

            <template late v-slot:body-cell-Cantidad="props">
              <q-td :props="props" class="q-pa-sm">
                <q-input type="number" v-model="props.row.cantidad"></q-input>
              </q-td>
            </template>

            <template late v-slot:body-cell-Precio="props">
              <q-td :props="props" class="q-pa-sm">
                <q-input type="number" v-model="props.row.precio"></q-input>
              </q-td>
            </template>

            <template late v-slot:body-cell-Eliminar="props">
              <q-td :props="props" class="q-pa-sm">
              <q-btn icon="close"></q-btn>
              </q-td>
            </template>
          </q-table>

        </div>
      </div>

      <!-- aqui esta el bendito btn de cerrado que cada rato se me pierde -->
      <q-card-actions align="right">
        <q-btn @click="editarDevolucionesSalida(devsalida._id)" v-show="showBtn == false" v-close-popup flat color="primary"
          label="Editar" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { getData, postData, putData } from "../services/apiClient.js";
import Swal from 'sweetalert2';
const devsalida = ref({
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
const Showmodal2 = ref(false)
const modalArticulo = ref(false)
const card = ref(false)
const card2 = ref(false)
const rows = ref([]);
const rowsArticulos = ref([])
const totalesPorProducto = ref([])
//articulos de formulario

const ide = ref(""); //lo que guardo aqui es un nombre y busco el objeto con ese nombre en la base y luego guardo el id de ese objeto
const cantidad = ref(0);
const precio = ref(0);


const valor = computed(()=>{
  const Calculo = devsalida.value.articulos.reduce((acumulador,elemento)=>{
    return acumulador + (eliminarSeparadores(elemento.cantidad) * eliminarSeparadores(elemento.precio))
  }
  ,0)
  devsalida.value.valor=Calculo
  return formatearNumero(Calculo)
})


const total = computed(()=>{
  const Calculo = CalcularIva(devsalida.value.valor, eliminarSeparadores(devsalida.value.iva))
  devsalida.value.total = Calculo
  return formatearNumero(Calculo)
})

const valorEditar = computed(() => {
  if (!rowsArticulos.value || rowsArticulos.value.length === 0) return 0;
  const totalEditar = rowsArticulos.value.reduce((total, articulo) => {
    return total + (eliminarSeparadores(articulo.cantidad) * eliminarSeparadores(articulo.precio) || 0); // Multiplica cantidad por precio, y maneja valores nulos/indefinidos
  }, 0)
  devsalida.value.valor = totalEditar
  return formatearNumero(totalEditar)
});




const columnsArticulos = ref([
  {
    name: "Nombre",
    align: "center",
    label: "Nombre",
    field: row => row.id.nombre 
  },
  {
    name: "Cantidad",
    align: "center",
    label: "Cantidad",
    field: "cantidad"
  },
  {
    name: "Precio",
    align: "center",
    label: "Precio",
    field: "precio"
  },
])

const columnsArticulos2 = ref([
  {
    name: "Nombre",
    align: "center",
    label: "Nombre",
    field: "id"
  },
  {
    name: "Cantidad",
    align: "center",
    label: "Cantidad",
    field: "cantidad"
  },
  {
    name: "Precio",
    align: "center",
    label: "Precio",
    field: "precio"
  },
  {
    name: "Eliminar",
    align: "center",
    label: "Eliminar",
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

const dataDevolucionesSalidas = async () => {
  try {
    const response = await getData("/movimientos/tipo/devolucionSalida");
    if (response.devolucionesSalida) {
      rows.value = response.devolucionesSalida;
      console.log("salidas recibidas", response.devolucionesSalida);
    }
  } catch (error) {
    console.log("no llegaron las salidas" + error.message);
  }
};


const agregarDevolucionSalida = async () => {
  try {
    const response = await postData("/movimientos",
      {
        tipo: 4,
        numeroFactura: devsalida.value.numeroFactura,
        fecha: devsalida.value.fecha,
        articulos: devsalida.value.articulos,
        valor: devsalida.value.valor,
        iva: eliminarSeparadores(devsalida.value.iva),
        total: devsalida.value.total,
        estado:1
      })

    if (response.movimiento) {
      console.log("salida agregada", response.movimiento);
      console.log("articulos", devsalida.value.articulos);
      dataDevolucionesSalidas()
      console.log("salida" , devsalida.value);
    }
    else {
      console.log("error al registrar la salida" + error.message);
    }

  } catch (error) {
    console.log("error al intentar registrar la salida ", devsalida.value);
  }
}

function agregarArrayArticulos() {
  if(ide.value && cantidad.value && precio.value){
    devsalida.value.articulos.push({
    id: ide.value,
    cantidad: cantidad.value,
    precio: eliminarSeparadores(precio.value)
  })
  console.log("validacion1" , devsalida.value.articulos);
  }
  else{
    Swal.fire({
  title: 'Alerta',
  text: 'Por favor rellenar los campos correspondientes a los articulos',
  icon: 'error',
  customClass: {
    popup: 'swal-popup-zindex'  // Añadimos una clase personalizada
  }
});
  }
  ResetMiniModal()
}

const editarDevolucionesSalida = async(id)=>{
  try {
    const response = await putData("movimientos/actualizar/" + id , 
      {
        tipo:4,
        numeroFactura:devsalida.value.numeroFactura,
        fecha:devsalida.value.fecha,
        articulos:rowsArticulos.value,
        valor:devsalida.value.valor,
        iva:devsalida.value.iva,
        total:devsalida.value.total,
        estado:1,
      })
      if(response.movimiento){
        console.log("salida editada correctamente", response.movimiento);
        dataSalidas()
      }
      else{
        clg("error al editar la salida" + error.message)
      }

  } catch (error) {
    console.log("error al intentar editar");
    console.log(devsalida.value);
  }
}
const resetModal = () => {
  devsalida.value = {
    numeroFactura: "",
    fecha: "",
    articulos: [],
    valor: "",
    iva: "",
    total: "",
    estado: "",
    ids: []
  };
  rowsArticulos.value = [];
};
function ResetMiniModal() {
  ide.value = ""
  cantidad.value = ""
  precio.value = ""
}
function eliminarSeparadores (valor){
  return Number(String(valor).replace(/[\.%]/g, '').trim());
}
const formatearNumero = (numero) => {
    return numero.toLocaleString('es-ES'); // 'es-ES' usa puntos como separadores de miles
};
function CalcularIva (cantidad, iva){
  const Iva = cantidad * (iva / 100)
  return cantidad + Iva
}

onMounted(() => {
  dataDevolucionesSalidas();
});
</script>
<style scoped> @import "../styles/salidas.css"; </style>