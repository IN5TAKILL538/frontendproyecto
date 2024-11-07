import {definestore} from 'pinia'
import {ref} from 'vue'
export const useStore = definestore("store",()=>{
    const token = ref("")
    const rol = ref("")

    function setToken(newToken){
        if(newToken){
            token.value= newToken

        }
        else{
            console.log("no esta llegando el token", newToken)
        }
    }
    function getToken(){
        return token.value
    }
})
