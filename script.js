// Animasi tombol pembayaran saat diklik
document.querySelectorAll('.pay-button').forEach(button => {
    button.addEventListener('click', function() {
        // Tambahkan animasi atau efek setelah tombol diklik
        this.style.transform = 'scale(0.95)'; // Efek klik dengan memperskala tombol
        this.style.transition = 'transform 0.2s ease'; // Transisi yang halus

        // Menampilkan pesan atau efek setelah klik, bisa diganti sesuai keperluan
        alert('Pembayaran sedang diproses...');

        // Reset tombol ke ukuran normal setelah beberapa detik
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});
