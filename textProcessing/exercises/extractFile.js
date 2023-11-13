function extractFile(str) {

    let lastIndex = str.split('\\').pop();
    let indexOfExtension = lastIndex.lastIndexOf('.');
    let fileExtension = lastIndex.slice(indexOfExtension + 1);
    let fileName = lastIndex.slice(0, indexOfExtension)

    console.log(`File name: ${fileName}`);


    console.log(`File extension: ${fileExtension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')