function download(selector) {
    $.getScript(
      "https://html2canvas.hertzen.com/dist/html2canvas.min.js",
      function (data, textStatus, jqxhr) {
        html2canvas(document.querySelector(selector)).then(art => {
          let downloadLink = document.createElement("a");
          downloadLink.setAttribute("download", "art.png");
  
          art.toBlob(function (blob) {
            let url = URL.createObjectURL(blob);
            downloadLink.setAttribute("href", url);
            downloadLink.click();
          });
        });
      }
    );
  }
  