<template>
  
    <wrapper-drag :listDialog="listDialog"> </wrapper-drag>
</template>

<script>
import { ref,provide } from "vue";
export default {
  name: 'App',

  data: () => ({
    //
  }),
  setup()
  {
    let listDialog = ref([]);
    provide("lista_dialog", listDialog);

    return {listDialog}
  }
}
</script>
