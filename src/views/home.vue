<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar id="cabeza" >
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" id="menuClases" align="left"/>

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

      <q-tabs>
        
        <q-route-tab to="/articulos" label="ARTICULOS" />
         <q-route-tab to="/categorias" label=" CATEGORIAS" />
        <q-route-tab to="/clientes" label="CLIENTES" />
        <q-route-tab to="/proveedores" label="PROVEEDORES" />
        <q-route-tab to="/entradas" label="ENTRADAS" />
        <q-route-tab to="/salidas" label="SALIDAS" />
        <q-route-tab to="/deventradas" label="DEV-ENTRADAS" />
        <q-route-tab to="/devsalidas" label="DEV-SALIDAS" />

        </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered id="filtro">
      <p class="textcenter">FILTROS</p>
      <q-btn
        :loading="loading[3]"
        color="primary"
        @click="simulateProgress(3)"
        style="width: 200px"
      >
        ARTICULOS
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>Gamer</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Oficina</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>

      <q-btn
        :loading="loading[4]"
        color="primary"
        @click="simulateProgress(4)"
        style="width: 200px"
      >
        CATEGORIAS
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>

      <q-btn
        :loading="loading[5]"
        color="primary"
        @click="simulateProgress(5)"
        style="width: 200px"
      >
        CLIENTES
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>

      <q-btn
        :loading="loading[6]"
        color="primary"
        @click="simulateProgress(6)"
        style="width: 200px"
      >
        PROVEEDORES
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>

      <q-btn
        :loading="loading[7]"
        color="primary"
        @click="simulateProgress(7)"
        style="width: 200px"
      >
        ENTRADAS
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>

      <q-btn
        :loading="loading[8]"
        color="primary"
        @click="simulateProgress(8)"
        style="width: 200px"
      >
        SALIDAS
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>

      <q-btn
        :loading="loading[9]"
        color="primary"
        @click="simulateProgress(9)"
        style="width: 200px"
      >
        DEV-ENTRADAS
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>

      <q-btn
        :loading="loading[10]"
        color="primary"
        @click="simulateProgress(10)"
        style="width: 200px"
      >
        DEV-SALIDAS
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>

        <q-menu fit anchor="center right" self="center left">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
        </q-menu>
      </q-btn>
    </q-drawer>

 
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
    </q-drawer>
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
</script>
<style scoped>
.q-btn {
  margin: 20px;
}
.textcenter {
  margin: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
}
.q-tabs__content.row{
  justify-content: center;
}
.menuClases{
  width: 33%;
}
#cabeza{
  display: flex;
  flex-wrap: wrap;
  
  

}

</style>

<style>


/**esto esconde el modal de la izquierda */
#app > div > div > div:nth-child(3) > aside{
  display: none !important;
}
</style>