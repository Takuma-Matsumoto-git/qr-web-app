const resultsList = document.getElementById('qr-results');
const scannedCodes = new Set(); // 重複防止

function onScanSuccess(decodedText, decodedResult) {
  if (!scannedCodes.has(decodedText)) {
    scannedCodes.add(decodedText);

    const listItem = document.createElement('li');
    listItem.textContent = decodedText;
    resultsList.appendChild(listItem);
  }
}

const html5QrCode = new Html5Qrcode("qr-reader");
html5QrCode.start(
  { facingMode: "environment" }, // スマホの背面カメラを利用
  {
    fps: 10,    // 1秒間の読み取り回数
    qrbox: 250  // QRコード読み取り枠サイズ
  },
  onScanSuccess
).catch(err => {
  console.error(`QRコードの読み取りエラー: ${err}`);
});
