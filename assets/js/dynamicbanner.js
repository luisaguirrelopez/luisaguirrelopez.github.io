var images = ['images/banner.jpg', 'images/banner3.jpg', 'images/banner4.jpg'];
var index = 0;

function buildImage() {
    document.getElementById('banner').style.backgroundImage = 'url('+images[index]+')';
}

function changeImage() {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById('banner').style.backgroundImage = 'url(' + images[index] + ')';
}
