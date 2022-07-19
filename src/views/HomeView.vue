<template>
  <visor-pdf></visor-pdf> 
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld
},
});
</script>
<style>
html.v-overlay-scroll-blocked {
  width: 0% !important;
}
</style>
