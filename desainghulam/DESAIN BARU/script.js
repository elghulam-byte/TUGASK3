document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const ctaBtn = document.getElementById('kontakCtaBtn');

    // 1. Fungsi Simulasi Pengiriman Form
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah refresh halaman
            
            alert('Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.');
            
            // Reset form setelah pengiriman berhasil
            contactForm.reset();
        });
    }

    // 2. Scroll ke bagian Kontak saat tombol CTA diklik di header
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            const kontakSection = document.getElementById('kontak');
            if (kontakSection) {
                // Scroll halus ke bagian kontak
                kontakSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});