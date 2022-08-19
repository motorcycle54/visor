<template src="./visorPDF.html"> </template>

<script>
import { ref } from "vue";
import { IframeChannelService } from "../../_services/iframeChannel.service"

import {
  inject,
  getCurrentInstance,
  onMounted,
  watchEffect,
} from "@vue/runtime-core";
export default {
  name: "HelloWorld",
  setup() {
    let listDialog = inject("lista_dialog"); 
    const iframeChannelService = new IframeChannelService();
    
    let openConexion = ref(true)
    let openDetalle = ref(false);
    
    onMounted(async() => {
      let message = await iframeChannelService.listenMessage();
      if( message.message.constructor === Array ){
        
        
        console.log("com visor",message.message)
        listDialog.value.push(...message.message)
        console.log(listDialog.value.length)
        console.log("lista para el visor",listDialog.value)
        
      }
    });
    let openDialogDetalle = (id) => {
      if(!!id){
        console.log("este es el id", id)
        openDetalle.value = true;
      }
    }
    let closeVisor = ()=>{
      listDialog.value.splice(0,listDialog.value.length)
    }




    return { openConexion, openDetalle, closeVisor, openDialogDetalle,listDialog };
  },
};
</script>


<style>
.v-dialog
{
  width: 100vw;
  height: 100vh;
}

html.v-overlay-scroll-blocked {
  width: 0% !important;
}

</style>
