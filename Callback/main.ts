
function success1(){
    console.log('Image loaded Successfully');
}
function error1(){
    console.log('Can not load image');
}
function LoadImage1(onsuccess , onerror){
    let image:any =document.createElement('img');
    image.width = 1200;
    image.height = 700;
    image.src = 'https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png';
    let place :any = document.getElementById('image_place');
    place.appendChild(image);
    image.onload=onsuccess;
    image.onerror = onerror;

}
LoadImage1(success1,error1);
