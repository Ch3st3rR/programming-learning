const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Events ???

// Generate QR Code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Generate code...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

 // qrCodeImg.addEventListener("load", () => {
   qrCodeImg.onload = () => {
  container.classList.add("active");
  qrCodeBtn.innerText = "code created!";
};
  //console.log(qrCodeInputValue);
}

qrCodeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateQrCode();
}); 


qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// Clear area of QR code
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Generate QR code!";
  }
});

// Download Behavior
const downloadBtn = document.querySelector("#download-btn"); 

downloadBtn.addEventListener("click", async () => {
  const imgSrc = qrCodeImg.src; 

  // validation
  if (!imgSrc.includes("http")) return; 

  // capture image
  const response = await fetch(imgSrc); 
  const blob = await response.blob(); 

  // create local URL
  const url = URL.createObjectURL(blob); 

  const link = document.createElement("a"); 
  link.href = url;
  link.download = "qrcode.png";

  // correct order
  document.body.appendChild(link); 
  link.click(); 
  document.body.removeChild(link);

  // clear memory
  URL.revokeObjectURL(url); 
});


  //href = de onde vem o arquivo
  //download = nome do arquivo
  //click() = simular clique

