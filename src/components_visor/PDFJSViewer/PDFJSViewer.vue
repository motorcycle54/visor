<template>
    <iframe height="100%" width="100%" :src="`${dir}`"></iframe>
</template>

<script>
import { ref } from "@vue/reactivity";
import { DecodePDF } from "@/_services/DecodePDF.service";
export default {
  name: "PDFJSViewer",
  props: {
    fileName: String,
    path: String,
  },
  setup(props) {

    let b64Data = ref(props.fileName)
    let DecodePDFService = new DecodePDF();
    let blobUrl = DecodePDFService.convertBase64ToBlob(b64Data.value)
    let dir = ref(props.path + "?file=" + encodeURIComponent(blobUrl));

    return { dir };
  },
};
</script>
<style scoped>
</style>

