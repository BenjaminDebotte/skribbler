(async () => {

  const gameBarElement = document.querySelector("#game-bar");


  let saveButton = gameBarElement.appendChild(document.createElement("div"));
  saveButton.setAttribute("id", "game-save")

  let iconSaveButton = saveButton.appendChild(document.createElement("div"));
  iconSaveButton.setAttribute("class", "icon")

  saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    const canvas = document.querySelector("canvas");
    const b64Canvas = canvas.toDataURL("image/png");

    // Using an iFrame as suggested in html2canvas [https://github.com/niklasvh/html2canvas/issues/1271]
    var iframe = '<iframe src="' + b64Canvas + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
    let w = window.open();
    w.document.write(iframe);

  });

})();
