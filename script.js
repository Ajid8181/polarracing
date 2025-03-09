document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var paket = document.getElementById("paket").value;
    var message = `Halo, saya ingin memesan paket ${paket} untuk username: ${username}.`;
    var whatsappURL = `https://wa.me/6282245224101?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});