<template src="./dialogPdf.html"></template>
<script>
import { ref } from "@vue/reactivity";
import PDFJSViewer from "../PDFJSViewer/PDFJSViewer.vue";
import { inject } from "vue";
import { DecodePDF } from "@/_services/DecodePDF.service";
import { IframeChannelService } from "../../_services/iframeChannel.service"

export default {
  name: "DialogPdf",
  props: ["id", "title", "urlPdf"],
  components: {
    PDFJSViewer,
  },
  setup(props, { emit }) {
    let namePdf = "OFICIO-000669-2019-GG VB PAGINAS.pdf";
    let path = "lib/PDFJS/web/viewer.html"; //path of the PDF.js viewer.html
    let urlPdf = ref(props.urlPdf)
    let listDialog = inject("lista_dialog");
    let openSeguimientoExterno = ref(false)

    const iframeChannelService = new IframeChannelService();
    let DecodePDFService = new DecodePDF();

    

    let isMaximize = ref(false);

    function maximize(idDialog) {
      let elmnt = document.getElementById(idDialog);
      isMaximize.value = !isMaximize.value;
      elmnt.style.top = "-50vh";
      elmnt.style.left = "-50vw";
    }

    function minimize(idDialog) {
      emit("getIdDialog", idDialog);
    }

    function closeDialog(idDialog) {
      emit("closeDialog", idDialog);
    }

    let openPdfExterno = (idDialog)=>{
      console.log("Entra")
      console.log(props.urlPdf)
      var configuracion_ventana = "width=600,height=600,top=500,left=500,toolbar=no,location=no,status=no,menubar=no";
      let blobUrl = DecodePDFService.convertBase64ToBlob(props.urlPdf)
      let windowsSeguimiento = window.open(blobUrl, "_blank", configuracion_ventana);
      closeDialog(idDialog)
    }

    function dragElement(event, idDialog) {
      if (!isMaximize.value) {
        let elmnt = document.getElementById(idDialog);
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;

        dragMouseDown(event);

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    }
    return {
      namePdf,
      path,
      isMaximize,
      dragElement,
      maximize,
      minimize,
      closeDialog,
      openPdfExterno
    };
  },
};
</script>
<style scoped>
.dialog_wrapper {
  position: absolute;
  z-index: 1051;
  overflow: hidden;
  display: grid;
  grid-template-areas:
    "header"
    "body";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
}

.dialog_wrapper__normal {
  min-width: 600px;
  width: 50vh;
  height: 80vh;
}

.dialog_wrapper__maximize {
  min-width: 100%;
  width: 100vw;
  height: 100vh;
}

.dialog_header {
  grid-area: header;
  cursor: move;
  z-index: 1050;
  background-color: #2196f3;
  color: #fff;
  height: 56px;
  padding-left: 30px;
  text-align: left;
}

.dialog_body {
  grid-area: body;
  height: 100%;
  width: 100%;
  
}
</style>