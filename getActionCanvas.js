const downloadURI = (uri, name) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* Locate toy and download function */
function GetActionURIData(actionnomber) {
 const childnumber = actionnomber + 2
var sourceCanvas = document.querySelector("#action-bar > div.action-bar > virtual-list > action-button:nth-child("+childnumber+") > button > canvas");
sourceImageData = sourceCanvas.toDataURL("image/png");
downloadURI(""+sourceImageData+"", "Action "+actionnomber+"");
}