const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img')

// Events 

// Generate QR Code
function generateQrCode(){
   const qrCodeInputValue = qrCodeInput.value;

  if(!qrCodeInputValue) return;

  qrCodeBtn.innerHTML = "Generating code..."

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener('load', () => {
    container.classList.add("active");
    qrCodeBtn.innerHTML = "Code create!"
  });
}


qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
});

qrCodeInput.addEventListener('keydown', (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});

// Clean QR Code

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Generate QR Code"
    }
});