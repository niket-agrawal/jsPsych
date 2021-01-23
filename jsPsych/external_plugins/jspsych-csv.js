function downloadCSV (csv, filename){
  var csvfile;
  var downloadLink;
  csvfile = new Blob(blobParts [csv],options (type: "text/csv"));
  downloadLink= document.createElement(tagName "a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createobjectURL(csvfile);
  downloadLink.style.display = 'name';
  document.body.appendChild(downloadLink);
  downloadLink.click();
}
