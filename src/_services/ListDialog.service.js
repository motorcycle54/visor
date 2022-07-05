export let listDialog = [];
export class ListDialogService {
    openPdf = (list_Dialog, item) => {
      if(this.searchPdf(list_Dialog, item.id)){
        console.log("1111")
      }else{
        list_Dialog.push({id: item.id, title: item.title, urlPdf: item.url, minimize: false})
      }
      //return listDialog;      
    }

    searchPdf = (list_Dialog, itemID) => {
      const item = list_Dialog.find((item) => item.id == itemID)
      if(item)
        item.minimize = false;
      return !!item;
    }
}