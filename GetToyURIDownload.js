/* Download Function */
const downloadURI = (uri, name) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* Locate toy and download function */
function GetToyURIDownload(toynomber) {
 const childnumber = toynomber + 2
var sourceCanvas = document.querySelector("body > modal-container > div.modal-dialog.undefined > div > toys-modal > div.modal-body > div.selection-container > div > div > div > div:nth-child("+childnumber+") > toy-canvas > canvas");
sourceImageData = sourceCanvas.toDataURL("image/png");
downloadURI(""+sourceImageData+"", "Toy "+toynomber+"");
}

/* Put toy nomber in brackets */
/* If you are missing some toys in the list, then subtract the amount of missing toys from the toy number */
GetToyURIDownload()