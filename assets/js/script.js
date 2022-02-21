/** Effects with Jquery */

$("#button-bounce").mouseenter(function() {
    doBounce($(this), 3, '20px', 300);
  });
  
  
  function doBounce(element, times, distance, speed) {
    for (i = 0; i < times; i++) {
      element.animate({
          marginTop: '-=' + distance
        }, speed)
        .animate({
          marginTop: '+=' + distance
        }, speed);
    }
  }

/** Functions ES6*/

function getName() {

    let name = document.getElementById("data-name").value;
    document.getElementById("person-name").innerHTML = name;
    
}


    

