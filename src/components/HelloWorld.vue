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
  props: [
      
    ],
  setup(props)
  {
    let message = ref("123")
    window.document.addEventListener('myCustomEvent', handleEvent, false)
    function handleEvent(e) {
      message.value= e.detail
      console.log(e.detail) // outputs: {foo: 'bar'}
    }
    
    return {message}
  }
}
</script>
