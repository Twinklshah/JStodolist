let sb=document.querySelector(".submitBtn");
let list=document.querySelector("ul");
let input=document.querySelector("input");

sb.addEventListener('click',() => {
let fv=input.value;
if(fv.length > 0){
// make newli
let Li=document.createElement('li');
 newli.textContent=fv;
 list.appendChild(newLi);
 input.value='';
}



});