let inp=document.querySelector('input');
function printName(){
    let value=inp.value;
    let para=document.querySelector('p');
    para.innerText=value;
}
let btn=document.querySelector('button');
btn.addEventListener("click",printName);