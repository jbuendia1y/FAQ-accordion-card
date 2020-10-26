const arrow = document.getElementsByClassName('FAQ__item-req-img');
const text = document.getElementsByClassName('FAQ__item-res');

const paragraph = document.getElementsByClassName('FAQ__item-res');

let a = 1;

const clickArrow = (b)=>{
    console.log(b)
    if(a==1){
        paragraph[b].classList.add('active');
        a=0
    }else if(a==0){
        paragraph[b].classList.remove('active');
        a=1
    }
}

arrow[0].addEventListener('click',function(){
    clickArrow(0)
})
arrow[1].addEventListener('click',function(){
    clickArrow(1)
})
arrow[2].addEventListener('click',function(){
    clickArrow(2)
})
arrow[3].addEventListener('click',function(){
    clickArrow(3)
})
arrow[4].addEventListener('click',function(){
    clickArrow(4)
})

