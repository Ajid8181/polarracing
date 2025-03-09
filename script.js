document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let layanan = document.getElementById('layanan').value;
    let kontak = document.getElementById('kontak').value;

    let whatsappURL = `https://wa.me/62xxxxxxxxxx?text=Halo,%20saya%20ingin%20pesan%20joki%20${layanan}%20untuk%20akun%20${username}.%20Kontak%20saya:%20${kontak}`;
    window.open(whatsappURL, '_blank');
});
