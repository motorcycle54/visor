<template>
  <v-container>
     Hola: {{ message }}
  </v-container>

  
</template>

<script>
import { ref } from "vue";
import { DocumentRequestModel } from "../_models/documentRequest.model";
import { ListDialogService } from '../_services/ListDialog.service';
import {
  inject,
  getCurrentInstance,
  onMounted,
  watchEffect,
} from "@vue/runtime-core";
export default {
   

  name: 'HelloWorld',
  props: {
      message: String
  },
  setup(props)
  {
      let message = ref("")
      let lista_dialog = inject("lista_dialog");
      window.addEventListener('message', event => {
      // IMPORTANT: check the origin of the data!
      if (event.origin.startsWith('http://localhost:8080')) {
          // The data was sent from your site.
          // Data sent with postMessage is stored in event.data:
          console.log(event.data);
          message.value = event.data.value
          lista_dialog.value.push(event.data)
          console.log(lista_dialog)
      } else {
          console.log(event.origin);
          return;
      }
});
    
      return {message,lista_dialog}
  }
}
</script>
