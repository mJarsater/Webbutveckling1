
function animateSwing(){
    $("#box1").animate({
          width: 500
    }, 3000, 'swing');
}

function animateLinear(){
    $("#box1").animate({
        width: 500
  }, 3000, 'linear');
}

function resetAnimation(){
    $("#box1").animate({
        width: 100
    })
}