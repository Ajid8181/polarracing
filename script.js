// Simpan data user
function register() {
    let username = document.getElementById("reg-username").value;
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Akun berhasil dibuat!");
}

// Login
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
        alert("Login berhasil!");
        window.location.href = "pemesanan.html";
    } else {
        alert("Username atau Password salah!");
    }
}

// Kirim pesanan ke WA
function submitOrder() {
    let layanan = document.getElementById("layanan").value;
    let username = document.getElementById("username").value;
    let metode = document.getElementById("metode").value;

    let pesan = `Halo Admin, saya ingin memesan joki dengan detail:
    Username Roblox: ${username}
    Layanan: ${layanan}
    Metode Pembayaran: ${metode}`;
    
    let whatsapp = "https://wa.me/6281234567890?text=" + encodeURIComponent(pesan);
    window.open(whatsapp, "_blank");
}