export class EncodePDF 
{
    async downloadFile(url) 
    {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        }
        return await fetch(url,options)
        .then((response) => response.blob())
        .then((myBlob) => {
            console.log(myBlob)
            const objectURL = URL.createObjectURL(myBlob);
            console.log(objectURL)


            return objectURL

        });
    }
}