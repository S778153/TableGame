document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('active');
        menuIcon.classList.toggle('open');
    });
});

function clickEvent() {
    alert('商品がカートに追加されました。');
}

function flipCard(card) {
    card.classList.toggle('flipped');
}
