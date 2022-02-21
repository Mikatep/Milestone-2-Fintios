/** Effects with Jquery */

$(document).ready(function() {
    $("#button-index").mouseenter(function() {
        $(this).effect('bounce','slow');
   });
}); 

/** Functions ES6*/

function getName() {

    let name = document.getElementById("data-name").value;
    document.getElementById("person-name").innerHTML = name;
    
}


    

