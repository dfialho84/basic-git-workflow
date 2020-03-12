document.addEventListener('DOMContentLoaded', () => {
    let myHeader = document.getElementById('header-id');
    setTimeout(() => {
        myHeader.classList.remove('hidden');
    }, 3000);
});