<template></template>

<script>
import { ref } from "vue";
import { DocumentRequestModel } from "../_models/documentRequest.model";
import { ListDialogService } from "../_services/ListDialog.service";
import {
  inject,
  getCurrentInstance,
  onMounted,
  watchEffect,
} from "@vue/runtime-core";
export default {
  name: "HelloWorld",
  props: {
    message: String,
  },
  setup(props) {
    let message = ref([]);
    let lista_dialog = inject("lista_dialog");
    let path = "lib/PDFJS/web/viewer.html"; //path of the PDF.js viewer.html
    var configuracion_ventana =
      "_blank,width=600,height=600,top=500,left=500,toolbar=no,location=no,status=no,menubar=no";
    window.addEventListener("message", (event) => {
      // IMPORTANT: check the origin of the data!
      // if (event.origin.startsWith("http://localhost:8080")) {
      //   // The data was sent from your site.
      //   // Data sent with postMessage is stored in event.data:
      //   //windowOpen(dir.value);
      // } else {
      //   return;
      // }
      console.log(event.origin);
      let fileName = event.data.urlPdf;
      //lista_dialog.value.push(...event.data)
      let dir = ref(path + "?file=" + encodeURIComponent(fileName));
      console.log(dir.value);
      window.open(dir.value, "_blank", configuracion_ventana).focus();
    });

    return { message, lista_dialog, configuracion_ventana, path };
  },
};
</script>
