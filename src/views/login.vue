
<template>
    <div class="containerLogin">
        <div class="image">
            <p>Accede a tu cuenta y disfruta de todos nuestros servicios exclusivos. ¡Bienvenido de nuevo!</p>
        </div>
        <div class="form">
            <h3>Iniciar Sesion</h3>
            <p>Accede a tu cuenta para disfrutar de todas nuestras funciones.</p>
            <!--boton email-->
            <input v-model="email" placeholder="Email address" class="input" name="text" type="email" />
            
            <!--boton password-->
            <input v-model="password" class="input" type="password" placeholder="password">
        
            <button class="button" @click="iniciarSesion">
            Iniciar Sesion
            </button>
        </div>
    </div>
    
      
    </template>
<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2';
import { postData } from '../services/apiClient.js';
import { useRouter } from 'vue-router';
import { useStore } from '../store/useStore.js';
const email =ref("")
const password = ref("")
const passwordError = ref("")
const router = useRouter()
const useAuth = useStore()
const iniciarSesion = async ()=>{
    try {
        const response = await postData("/usuarios/login", { email: email.value , contraseña:password.value})
        const token = response.token
        console.log(token);
        if(token){
            useAuth.setToken(response.token)
            router.replace("/home")
        }
        else{
            console.log("respuesta sin token", response);
        }
    } catch (error) {
      if(error.response.data.msg == "usuario / contraseña incorrecta"){
        Swal.fire("Contraseña incorrecta");
      }
      else if(error.response.data.msg == "usuario / email incorrecto"){
        Swal.fire("email incorrecto");
      }
    }
}
</script>
<style src="../styles/login.css" scoped></style>
