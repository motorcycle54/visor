<template src="./dropArea.html"></template>
<script>
export default {
  name: "DropArea",
  props: [],
  setup(props, { emit } ) {
    const onDrop = (event) => {
      let itemID = event.dataTransfer.getData("itemID");
      emit('getItemId', itemID)
    };
    return { onDrop }
  },
};
</script>
<style src="./dropArea.css"></style>