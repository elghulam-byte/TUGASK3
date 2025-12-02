document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const ctaBtn = document.getElementById('kontakCtaBtn');
    const darkModeToggle = document.getElementById('darkModeToggle'); // Ambil tombol toggle
    const body = document.body;
    const iconMoon = '<i class="fas fa-moon"></i> Mode Gelap';
    const iconSun = '<i class="fas fa-sun"></i> Mode Terang';

    // 1. Fungsi Simulasi Pengiriman Form (TETAP SAMA)
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }

    // 2. Scroll ke bagian Kontak saat tombol CTA diklik di header (TETAP SAMA)
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            const kontakSection = document.getElementById('kontak');
            if (kontakSection) {
                kontakSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 3. LOGIKA DARK MODE BARU
    
    // Fungsi untuk menerapkan/menghapus mode gelap
    function applyDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = iconSun;
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = iconMoon;
        }
    }
    
    // a. Cek preferensi saat halaman dimuat
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        applyDarkMode(true);
    } else {
        applyDarkMode(false);
    }
    
    // b. Tambahkan event listener untuk tombol toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            // Periksa apakah mode gelap sedang aktif
            const isDarkMode = body.classList.contains('dark-mode');

            if (isDarkMode) {
                // Nonaktifkan dark mode
                localStorage.setItem('darkMode', 'disabled');
                applyDarkMode(false);
            } else {
                // Aktifkan dark mode
                localStorage.setItem('darkMode', 'enabled');
                applyDarkMode(true);
            }
        });
    }
});