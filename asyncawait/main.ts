let url1:any = 'https://miro.medium.com/max/900/1*xDyMK3pAoyh0M6bAyVQIuQ.png';
let url2:any ='https://res.cloudinary.com/practicaldev/image/fetch/s--LkL103Qa--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/377/landscape/typescriptlang.png';
let url3:any ='https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png';

function loadImageForAsync(url:any){
    return new Promise(function (resolve,reject){
        let image:any =document.createElement('img');

        let place :any = document.getElementById('image_place');
        setTimeout(()=>{
            image.src=url;
            place.appendChild(image);
        },1000);
        image.onload=resolve;
        image.onerror =() => reject('it is message form promise');

    },);
}

async function Load_threeImage(){
    try{
        console.log('Start Loading images...');
        await loadImageForAsync(url1);
        await loadImageForAsync(url2);
        await loadImageForAsync(url3);
        console.log('Successfully loaded 3 Images');
    }catch (e){
        console.error('error while loading an image :'+e)
    }finally {
        console.log('End')
    }

}
let threeImg :any= Load_threeImage();
