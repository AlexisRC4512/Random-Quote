import printApi from "./fetch.js";

const d=document;
d.addEventListener('click',(e)=>{
    printApi("#btn-random");
    e.preventDefault();
})