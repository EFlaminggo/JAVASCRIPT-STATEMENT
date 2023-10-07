// Contoh penggunaan if, else, dan nested if
let hewan = "Kucing";
let mamalia = true;
let berbulu = true;

// Penggunaan if-else untuk mengidentifikasi jenis hewan
if (mamalia) {
  if (berbulu) {
    console.log(hewan + " adalah mamalia berbulu.");
  } else {
    console.log(hewan + " adalah mamalia tetapi tidak berbulu.");
  }
} else {
  console.log(hewan + " bukan mamalia.");
}
