function success() {
    console.log('Image loaded Successfully');
}
function error(message) {
    console.log('Can not load image from function', message);
}
function LoadImage() {
    return new Promise(function (resolve, reject) {
        let image = document.createElement('img');
        image.width = 1200;
        image.height = 700;
        //image.src = 'https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png';
        let place = document.getElementById('image_place');
        //place.appendChild(image);
        setTimeout(() => {
            image.src = 'https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png';
            place.appendChild(image);
        }, 2000);
        image.onload = resolve;
        image.onerror = () => reject(new Error('it is message form promise'));
    });
}
let PromiseLoad = LoadImage();
PromiseLoad.then(success, error).catch(error);
