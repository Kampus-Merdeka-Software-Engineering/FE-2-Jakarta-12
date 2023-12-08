document.addEventListener('DOMContentLoaded', function () {
    // Animasi gambar saat tampilan dibuka
    animateImagesOnLoad();
    // Animasi gambar saat di-scroll
    window.addEventListener('scroll', function () {
        animateImagesOnScroll();
    });

    // Panggil fungsi animateImagesOnScroll() untuk memastikan gambar yang sudah dalam viewport pada saat halaman dimuat mendapatkan animasi
    animateImagesOnScroll();
});


function animateImagesOnLoad() {
    // Ambil semua elemen gambar
    const images = document.querySelectorAll('.image-container');

    // Tambahkan kelas animasi pada setiap elemen gambar
    images.forEach((image, index) => {
        setTimeout(() => {
        image.classList.add('fade-in');
      }, index * 300); // Setiap gambar ditampilkan dengan jeda 200ms
    });
}

function animateImagesOnScroll() {
    const images = document.querySelectorAll('.image-container');

    images.forEach(image => {
        // Cek apakah gambar sudah masuk ke dalam viewport
        const bounding = image.getBoundingClientRect();
        // Jika gambar masuk ke dalam viewport, tambahkan kelas animasi
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
            image.classList.add('fade-in');
        }
    });
}