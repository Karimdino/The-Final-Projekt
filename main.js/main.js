



//++++++++++++++++++++++++++++
let count = 0
const slides = =>{
    let j
    let pictures = document.querySelectorAll('.slides')
    for(j = 0; j < pictures.length; j++){
        pictures[j].style.display = 'none'
    }
    count++
    if(count > pictures.length) {count = 1}
    pictures[count-1].style.display = 'block'
    setTimeout("slides()", 3500)
}
slides()



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