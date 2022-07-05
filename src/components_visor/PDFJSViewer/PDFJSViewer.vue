<template>
    <iframe height="100%" width="100%" :src="`${dir}`"></iframe>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "PDFJSViewer",
  props: {
    fileName: String,
    path: String,
  },
  setup(props) {
    let dir = ref(props.path + "?file=" + encodeURIComponent(props.fileName));
    return { dir };
  },
};
</script>
<style scoped>
</style>

