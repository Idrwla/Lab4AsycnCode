function success() {
    console.log('Image loaded Successfully');
}
function error() {
    console.log('Can not load image');
}
function LoadImage(onsuccess, onerror) {
    var image = document.createElement('img');
    image.width = 1200;
    image.height = 700;
    image.src = 'https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png';
    var place = document.getElementById('image_place');
    place.appendChild(image);
    image.onload = onsuccess;
    image.onerror = onerror;
}
LoadImage(success, error);
