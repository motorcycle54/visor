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

    let b64Data = ref(props.fileName)
    let URLBase64 = b64Data.value.replace("data:application/pdf;base64,","")

    let contentType = 'application/pdf' || '';
    var sliceSize = 512;
    URLBase64= URLBase64.replace(/^[^,]+,/, '');
    URLBase64 = URLBase64.replace(/\s/g, '');
    var byteCharacters = window.atob(URLBase64);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {type: contentType});
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

