window.addEventListener('load', function () {
    "use strict";

    function clcTotal() {
        const checkboxes = document.getElementsByTagName("input")
        let result = 100;
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                result +=Number(checkboxes[i].value)  ;
            }
       document.getElementById("message").innerHTML="Your order total is:"+ result + "EUR"

        }
    }

    let calcButton=document.getElementById("calcButton")
    calcButton.addEventListener('click',clcTotal)
})