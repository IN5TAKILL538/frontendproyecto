<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar id="cabeza" >
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" id="menuClases" align="left" />

        <q-toolbar-title> INVENTARIO </q-toolbar-title>

        <div class="q-pa-md">
          <div
            class="q-gutter-y-md column"
            style="width: 300px; max-width: 100%"
          >
            <q-toolbar class="bg-primary text-white rounded-borders">
              
             

              <q-space />

              <q-input
              align="right"
                dark
                dense
                standout
                v-model="text"
                input-class="text-right"
                class="q-ml-md"
              >
                <template v-slot:append >
                  <q-icon v-if="text === ''" name="search" />
                  <q-icon
                    v-else
                    name="clear"
                    class="cursor-pointer"
                    @click="text = ''"
                  />
                </template>
              </q-input>
            </q-toolbar>
          </div>
        </div>
      </q-toolbar>

      
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered id="filtro">
      <p class="textcenter">FILTROS</p>
      
          <q-btn color="deep-orange" push to="/articulos" class="menuOpciones" @click="leftDrawerOpen = false">
      <div class="row items-center no-wrap">
       
        <div class="text-center">
          ARTICULOS
        </div>
      </div>
    </q-btn>

        <q-btn color="deep-orange" push to="/categorias" class="menuOpciones" @click="leftDrawerOpen = false">
      <div class="row items-center no-wrap">
       
        <div class="text-center">
          CATEGORIAS
        </div>
      </div>
    </q-btn>

        <q-btn color="deep-orange" push to="/clientes" class="menuOpciones" @click="leftDrawerOpen = false">
      <div class="row items-center no-wrap">
        
        <div class="text-center">
         CLIENTES
        </div>
      </div>
    </q-btn>

        <q-btn color="deep-orange" push to="/proveedores" class="menuOpciones" @click="leftDrawerOpen = false">
      <div class="row items-center no-wrap">
        
        <div class="text-center">
          PROVEEDORES
        </div>
      </div>
    </q-btn>

        <q-btn color="deep-orange" push to="/salidas" class="menuOpciones" @click="leftDrawerOpen = false"> 
      <div class="row items-center no-wrap">
       
        <div class="text-center">
          SALIDAS
        </div>
      </div>
    </q-btn>


          <q-btn color="deep-orange" push to="/entradas" class="menuOpciones" @click="leftDrawerOpen = false">
      <div class="row items-center no-wrap">
        
        <div class="text-center">
          ENTRADAS
        </div>
      </div>
    </q-btn>

        <q-btn color="deep-orange" push to="/deventradas" class="menuOpciones" @click="leftDrawerOpen = false">
      <div class="row items-center no-wrap">
        
        <div class="text-center">
          DEVOLUCIONES ENTRADAS
        </div>
      </div>
    </q-btn>

        <q-btn color="deep-orange" push to="/devsalidas" class="menuOpciones" @click="leftDrawerOpen = false">
      <div class="row items-center no-wrap">
        
        <div class="text-center">
          DEVOLUCIONES SALIDAS
        </div>
      </div>
    </q-btn>    
    </q-drawer>

    <!--de aqui pára abajo todo lo de inicio-->

  
    <div class="home" v-show="true" id="home">
      <h2 class="textoplano">Bienvenido a tu inventario</h2>
      <p class="textoplano">Tu herramienta confiable para una gestión eficiente y organizada. Simplifica tus procesos, ahorra tiempo y toma el control de tu administración.</p>
    </div>

    <router-view/>

  </q-layout>


</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const loading = ref([false, false, false, false, false, false]);
    const progress = ref(false);

    function simulateProgress(number) {
      // we set loading state
      loading.value[number] = true;

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[number] = false;
      }, 3000);
    }

    return {
      leftDrawerOpen,
      loading,
      progress,
       text: ref(''),
      simulateProgress,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
function mostrar (){

}

</script>
<style scoped>
.menuOpciones{
  width: 250px;
  margin: 12px;
  padding: 2px;
}
.home{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
 
}
.textoplano{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: 400px;
  text-align: center;
}
</style>