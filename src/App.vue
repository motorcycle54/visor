<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { ref, provide, watchEffect } from "vue";
import { IframeChannelService } from "./_services/iframeChannel.service";
export default {
  name: "App",

  data: () => ({
    //
  }),
  setup() {
    let iframeChannelService = new IframeChannelService();
    let inicializaClose = ref(false);
    let listDialog = ref([]);
    provide("lista_dialog", listDialog);

    watchEffect(() => {
      if (listDialog.value.length > 0) {
        inicializaClose.value = true;
      }
      if (inicializaClose.value) {
        if (listDialog.value.length == 0) {
          iframeChannelService.sendMessage({
            type: "closeSeguimiento",
            data: false,
          });
        }
      }
    });

    return { listDialog };
  },
};
</script>

<style>
html.v-overlay-scroll-blocked {
  width: 0% !important;
}
</style>
