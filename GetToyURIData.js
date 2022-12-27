/* Locate toy function (outputs in console log) */
function GetToyURIData(toynomber) {
 const childnumber = toynomber + 2
var sourceCanvas = document.querySelector("body > modal-container > div.modal-dialog.undefined > div > toys-modal > div.modal-body > div.selection-container > div > div > div > div:nth-child("+childnumber+") > toy-canvas > canvas");
sourceImageData = sourceCanvas.toDataURL("image/png");
console.log(sourceImageData);
}

/* Put toy nomber in brackets */
/* If you are missing some toys in the list, then subtract the amount of missing toys from the toy number */
GetToyURIData()