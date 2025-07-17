document.getElementById("device-select").addEventListener("change", function () {
  const device = this.value;
  const img = document.getElementById("statusbar-img");
  const downloadBtn = document.getElementById("download-btn");

  if (device) {
    const imgPath = `assets/${device}.png`;
    img.src = imgPath;
    img.style.display = "block";
    downloadBtn.style.display = "inline-block";
    downloadBtn.onclick = () => {
      const a = document.createElement("a");
      a.href = imgPath;
      a.download = `${device}-statusbar.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  } else {
    img.src = "";
    img.style.display = "none";
    downloadBtn.style.display = "none";
  }
});
