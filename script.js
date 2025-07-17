function generateStatusBar() {
  const brand = document.getElementById("brandSelect").value;
  const fileInput = document.getElementById("screenshotUpload");

  if (!fileInput.files.length) {
    alert("कृपया एक स्क्रीनशॉट अपलोड करें।");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = document.createElement("img");
    img.src = e.target.result;

    // Placeholder: Status bar overlay simulate
    const overlay = document.createElement("div");
    overlay.innerText = `Status Bar: ${brand.toUpperCase()}`;
    overlay.style.background = "black";
    overlay.style.color = "white";
    overlay.style.padding = "10px";
    overlay.style.textAlign = "center";

    const container = document.getElementById("previewContainer");
    container.innerHTML = "";
    container.appendChild(overlay);
    container.appendChild(img);
  };

  reader.readAsDataURL(file);
}
