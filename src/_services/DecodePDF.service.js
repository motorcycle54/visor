export class DecodePDF
{
    convertBase64ToBlob = (URLBase64) => 
    {
        URLBase64 = URLBase64.replace("data:application/pdf;base64,","")
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

        return blobUrl
    }
}