const screenshotInput = document.getElementById('screenshotInput');
const modelSelect = document.getElementById('modelSelect');
const generateBtn = document.getElementById('generateBtn');
const canvas = document.getElementById('canvas');
const downloadLink = document.getElementById('downloadLink');

let uploadedImage = null;

screenshotInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = () => {
      uploadedImage = img;
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

generateBtn.addEventListener('click', () => {
  if (!uploadedImage) {
    alert('Please upload a screenshot first.');
    return;
  }

  const statusBarImage = new Image();
  statusBarImage.src = `assets/${modelSelect.value}.png`;

  statusBarImage.onload = () => {
    const ctx = canvas.getContext('2d');
    canvas.width = uploadedImage.width;
    canvas.height = uploadedImage.height;

    // Draw original screenshot
    ctx.drawImage(uploadedImage, 0, 0);

    // Overlay status bar on top
    ctx.drawImage(statusBarImage, 0, 0, uploadedImage.width, statusBarImage.height);

    canvas.style.display = 'block';
    downloadLink.href = canvas.toDataURL();
    downloadLink.style.display = 'inline-block';
  };
});
