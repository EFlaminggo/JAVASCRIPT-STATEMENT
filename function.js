// Contoh Function

// Variabel pemain
let playerX = 1; // Posisi awal
let playerSpeed = 5; // Kecepatan pergerakan

// Fungsi untuk menggerakkan pemain ke kiri
function moveLeft() {
  playerX -= playerSpeed;
  console.log("Pemain bergerak ke kiri. Posisi sekarang: " + playerX);
}

// Fungsi untuk menggerakkan pemain ke kanan
function moveRight() {
  playerX += playerSpeed;
  console.log("Pemain bergerak ke kanan. Posisi sekarang: " + playerX);
}

// Menggunakan fungsi untuk menggerakkan pemain dalam game
moveRight(); // Menggerakkan pemain ke kanan
moveLeft(); // Menggerakkan pemain ke kiri
moveRight(); // Menggerakkan pemain ke kanan lagi
