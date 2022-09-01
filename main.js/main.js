



//++++++++++++++++++++++++++++

const image = ['../pic/pic10.jpg', '../pic/pic11.jpg', '../pic/pic12.jpg', '../pic/pic13.jpg', '../pic/pic14.jpg']
const registrationCtn = document.querySelector('.registration_ctn')

function showImage(image){
    const randomImage = Math.floor(Math.random() * image.length - 1)
    

}



//--------
let i = 0;
let slideImg = ["../pic/pic13.jpg","../pic/pic12.jpg","../pic/pic11.jpg","../pic/pic10.jpg","../pic/pic6.jpg"]

let slideShow = function () {
    document.simg.src = slideImg[i];

    if (i < slideImg.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideShow()",4000)
}

slideShow()