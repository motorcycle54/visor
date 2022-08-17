<template src="./wrapperDraggable.html"></template>
<script>
import { ref } from "@vue/reactivity";
import DropArea from "../dropArea/DropArea.vue";
import DialogPdf from "../dialogPdf/DialogPdf.vue";


export default {
  name: "WrapperDrag",
  components: { DropArea, DialogPdf },
  props: ["listDialog"],
  emits: ['close'],
  setup(props,{emit}) {
    const items = ref(
        [
            // PARA HACER PRUEBAS
            // {id: 0, title: "Item A", minimize: true, url: "OFICIO-000669-2019-GG VB PAGINAS.pdf"},
            // {id: 1, title: "Item B", minimize: true, url: "OFICIO-000669-2019-GG VB PAGINAS.pdf"},
            // {id: 2, title: "Item C", minimize: true, url: "OFICIO-000669-2019-GG VB PAGINAS.pdf"},

        ]
    )

    const getListDropped = ()=> {
        if(props.listDialog.length > 0){
            items.value = props.listDialog;
        }
        return items.value.filter((item) => item.minimize);
    }

    const getListDialog = () => {
        return items.value.filter((item) => !item.minimize)
    }

    const onDrop = (itemID) => {
        //const itemID = event.dataTransfer.getData("itemID")
        const item = items.value.find((item)=> item.id == itemID)
        item.minimize = true;
    }

    const unDrop = (itemID) => {
        const item = items.value.find((item)=> item.id == itemID);
        item.minimize = false;
    }

    const closeDialog = (itemID) => {
        emit("close");
        const index = items.value.findIndex((item)=> item.id == itemID);
        if(index > -1)
            items.value.splice(index, 1);
    }

    const startDrag = (event, item) => {
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData('itemID', item.id)
    }   

    return { getListDialog, getListDropped, startDrag, onDrop, unDrop, closeDialog };
  },
};
</script>
<style  src="./wrapperDraggable.css"></style>