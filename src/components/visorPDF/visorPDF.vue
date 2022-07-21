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
    // let path = "lib/PDFJS/web/viewer.html"; //path of the PDF.js viewer.html
    // var configuracion_ventana =
    //   "_blank,width=600,height=600,top=500,left=500,toolbar=no,location=no,status=no,menubar=no";
    // window.addEventListener("message", (event) => {
    //   // IMPORTANT: check the origin of the data!
    //   // if (event.origin.startsWith("http://localhost:8080")) {
    //   //   // The data was sent from your site.
    //   //   // Data sent with postMessage is stored in event.data:
    //   //   //windowOpen(dir.value);
    //   // } else {
    //   //   return;
    //   // }
    //   // console.log(event.origin);
    //   let fileName = event.data.urlPdf;
      
    //   let dir = ref(path + "?file=" + encodeURIComponent(fileName));
    //   console.log(dir.value);
    //   if(fileName)
    //   {
    //     listDialog.value.push(event.data)
    //     // const result = listDialog.find(buscarId(Id))
    //     // console.log(result)
    //     // if(result=="")
    //     // {

    //     // }
    //     window.open(dir.value, "_blank", configuracion_ventana).focus();
    //     console.log(listDialog)
    //   }
    // });

    // // function buscarId(Id)
    // // {
    // //   return Id === listDialog.Id
    // // }
    
    const iframeChannelService = new IframeChannelService();
      let openSeguimiento = ref(true)
      let openDetalle = ref(false);
      
      onMounted(async() => {
        let message = await iframeChannelService.listenMessage();
        if( message.message.constructor === Array ){          
          listDialog.value.push(...message.message)
          console.log("com visor",message.message)
          console.log("lista para el visor",listDialog.value)
        }
      });

      let openDialogDetalle = (id) => {
        if(!!id){
          console.log("este es el id", id)
          openDetalle.value = true;
        }
      }

      let closeSeguimiento = ()=>{
        openSeguimiento.value = false;
        iframeChannelService.sendMessage({type:"closeSeguimiento", data: openSeguimiento.value});
      }




    return { openSeguimiento, openDetalle, closeSeguimiento, openDialogDetalle,listDialog };
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
