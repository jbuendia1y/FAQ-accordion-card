const arrow = document.getElementsByClassName('FAQ__item-req-img');
const answer = document.getElementsByClassName('FAQ__item-req-tittle');
const text = document.getElementsByClassName('FAQ__item-res');

const paragraph = document.getElementsByClassName('FAQ__item-res');

let a = 1;

const clickArrow = (b)=>{
    if(a==1){
        paragraph[b].classList.add('active');
        arrow[b].classList.add('rotate-arrow');
        answer[b].classList.add('answer-Active');

        a=0
    }else if(a==0){
        paragraph[b].classList.remove('active');
        arrow[b].classList.remove('rotate-arrow');
        answer[b].classList.remove('answer-Active');

        a=1
    }
}

const answerActive = (c)=>{
    answer[c].classList.add('answer-Active')
}

arrow[0].addEventListener('click',function(){
    clickArrow(0)
});
arrow[1].addEventListener('click',function(){
    clickArrow(1)
});
arrow[2].addEventListener('click',function(){
    clickArrow(2)
});
arrow[3].addEventListener('click',function(){
    clickArrow(3)
});
arrow[4].addEventListener('click',function(){
    clickArrow(4)
});


answer[0].addEventListener('click',function(){
    clickArrow(0)
});
answer[1].addEventListener('click',function(){
    clickArrow(1)
});
answer[2].addEventListener('click',function(){
    clickArrow(2)
});
answer[3].addEventListener('click',function(){
    clickArrow(3)
});
answer[4].addEventListener('click',function(){
    clickArrow(4)
});


