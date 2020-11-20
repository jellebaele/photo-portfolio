const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
       modal.classList.add("open");
       original.classList.add("open");

       const originalSrc = preview.getAttribute('data-original');
       original.src = `images/minimalistic/full/${originalSrc}`;
       if (preview.alt === ""){
           original.style.maxHeight = '90vh';
       } else {
           original.style.maxHeight = '85vh';
       }
       imgText.textContent = preview.alt;

    })
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')){
        modal.classList.remove("open");
        original.classList.remove("open");
        original.src = "";
        imgText.textContent = "";
    }
});