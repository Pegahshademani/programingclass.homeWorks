
const headLine=document.getElementById("headline")
const textMessage=document.getElementById("content")
const subBtm=document.getElementById("subBtn")

window.addEventListener('load', function () {
    "use strict";

    subBtm.addEventListener("click",function (e){
        e.preventDefault();
        const textMessageValue=textMessage.value;
        const headLineValue=headLine.value;

        localStorage.setItem("headline-text",headLineValue);
        localStorage.setItem("textMessage-text",textMessageValue);

        window.location.href="blog.html";

    })




    })