<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-btn :loading="loading[3]" color="primary" @click="simulateProgress(3)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[4]" color="primary" @click="simulateProgress(4)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[5]" color="primary" @click="simulateProgress(5)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[6]" color="primary" @click="simulateProgress(6)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[7]" color="primary" @click="simulateProgress(7)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[8]" color="primary" @click="simulateProgress(8)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[9]" color="primary" @click="simulateProgress(9)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[10]" color="primary" @click="simulateProgress(10)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[11]" color="primary" @click="simulateProgress(11)" style="width: 290px">
      Button
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

       <q-btn :loading="loading[12]" color="primary" @click="simulateProgress(12)" style="width: 150px">
      Button
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

       <q-btn :loading="loading[13]" color="primary" @click="simulateProgress(13)" style="width: 150px">
      Button
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

       <q-btn :loading="loading[14]" color="primary" @click="simulateProgress(14)" style="width: 150px">
      Button
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

       <q-btn :loading="loading[15]" color="primary" @click="simulateProgress(15)" style="width: 150px">
      Button
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

       <q-btn :loading="loading[16]" color="primary" @click="simulateProgress(16)" style="width: 150px">
      Button
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

       <q-btn :loading="loading[17]" color="primary" @click="simulateProgress(17)" style="width: 150px">
      Button
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

 <q-btn :loading="loading[18]" color="primary" @click="simulateProgress(18)" style="width: 150px">
      Button
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
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <p>adios</p>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
     const loading = ref([
      false,
      false,
      false,
      false,
      false,
      false
    ])
    const progress = ref(false)

    function simulateProgress (number) {
      // we set loading state
      loading.value[ number ] = true

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[ number ] = false
      }, 3000)
    }

    return {
      leftDrawerOpen,
       loading,
      progress,
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

</style>