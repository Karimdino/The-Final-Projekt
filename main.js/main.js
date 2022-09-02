



//++++++++++++++++++++++++++++

const slidePic = ()=>{
    let count = 0
    let i
    let pictures = document.querySelectorAll('.slides')
    for(i = 0; i < pictures.length; i++){
        pictures[i].style.display = 'none'
    }
    count++
    if(count === pictures.length) {count = 0}
    pictures[count].style.display = 'block'
    setTimeout(slidePic, 3500)
}
slidePic()



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