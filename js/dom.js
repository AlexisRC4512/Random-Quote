import printApi from "./fetch.js";
const d=document;
const btnRandom=d.getElementById("btn-random");
btnRandom.addEventListener('click',(e)=>{
    printApi("#btn-random");
    e.preventDefault();
})