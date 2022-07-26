export class EncodePDF 
{
    async downloadFile(url) 
    {
        const myRequest = new Request(url);

        fetch(myRequest)
        .then((response) => response.blob())
        .then((myBlob) => {
            console.log(myBlob)
            const objectURL = URL.createObjectURL(myBlob);
            //console.log(objectURL)
            // var encodedDAta = window.btoa(myBlob)
            console.log(objectURL)

            return objectURL

        });
    }
}