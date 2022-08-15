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

    let URLBase64 = ref(props.fileName)
    // let URLBase64 = URLBase64_wHeader.value.replace("data:application/pdf;base64,","")

    const byteCharacters = window.atob(URLBase64.value);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    };
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray]);
    const blobUrl = URL.createObjectURL(blob);

    
    console.log(blobUrl)


    let dir = ref(props.path + "?file=" + encodeURIComponent(blobUrl));
    // let dir = ref(props.path + "?file=" + encodeURIComponent(props.fileName));


    return { dir };
  },
};
</script>
<style scoped>
</style>

