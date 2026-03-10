// 💡 Lightbox Open Function (অ্যানিমেটেড)
function openLightbox(btn) {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const imgUrl = btn.closest('.gallery-item').querySelector('img').src;
    
    lbImg.src = imgUrl;
    // ক্লাস এড করা (এতেই জুম অ্যানিমেশন হবে)
    lightbox.classList.add('show');
}

// 💡 Lightbox Close Function
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}

// 🔍 Search Function (এটি আগের মতোই থাকবে)
document.getElementById('searchInput').addEventListener('input', function() {
    let value = this.value.toLowerCase();
    let items = document.querySelectorAll('.gallery-item');
    let found = 0;

    items.forEach(item => {
        let country = item.getAttribute('data-country').toLowerCase();
        if (country.includes(value)) {
            item.style.display = 'block';
            found++;
        } else {
            item.style.display = 'none';
        }
    });

    const googleBox = document.getElementById('googleSearchBox');
    if (found === 0 && value.length > 0) {
        googleBox.style.display = 'block';
        document.getElementById('googleBtn').onclick = () => {
            window.open(`https://www.google.com/search?tbm=isch&q=${value}+scenery+wallpaper`, '_blank');
        };
    } else {
        googleBox.style.display = 'none';
    }
});