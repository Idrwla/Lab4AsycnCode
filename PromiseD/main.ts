function error3(message){
    console.log('Can not load image from function',message);
}
function LoadImage3() :object{
    return new Promise(function (resolve, reject){
        let image:any =document.createElement('img');
        image.width = 1200;
        image.height = 700;
        image.src = 'https://colorlib.com/wp/wpt-content/uploads/sites/2/angular-logo.png';
        let place :any = document.getElementById('image_place');
        place.appendChild(image);
        image.onload=resolve;
        image.onerror =() => reject('it is message form promise');
    })
}
let PromiseLoad3 :any = LoadImage3();
PromiseLoad3.then(()=>{console.log('loaded successfully');
},error3).catch(error3);
