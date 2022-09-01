// Chris und Karim .

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting='Guten Abend Chris , Wow du bist aber fleissig immer noch da !'
} else if(hourNow<12){
    greeting='Guten Tag Chris , Schön dass du da bist !'
}else if(hourNow>0){
    greeting='Guten Morgen Chris , Einen fleissigen tag wünsche ich dir  !'
}
document.write = ('<h3>'+greeting+'</h3>');


//++++++++++++++++++++++++++++

const image = ['../pic/pic10.jpg', '../pic/pic11.jpg', '../pic/pic12.jpg', '../pic/pic13.jpg', '../pic/pic14.jpg']
const registrationCtn = document.querySelector('.registration_ctn')

function showImage(image){
    const randomImage = Math.floor(Math.random() * image.length - 1)
    



}


