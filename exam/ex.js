$(".micon").click(function (e) { 
    e.preventDefault();
    $(".innchoice").toggleClass("block")
});


$(".innchoice").on("click", function (e) { 
    e.preventDefault();
    $("#fname").val($(this).text());
    $("h1").text($(this).text())
    typingEffect(h1,150);
    $(".innchoice").removeClass("block")
});



function typingEffect(element,speed){
  let text=element.innerHTML;
  element.innerHTML="";
 let i=0;
  let timer=setInterval(function(){
    if(i<text.length){
      element.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}
let h1=document.querySelector('h1');
typingEffect(h1,150); 
$(".iccon").click(function (e) { 
    e.preventDefault();
    typingEffect(h1,150);
    
});



let btn = $(".btn-primary")
$(btn).on("click", function(e){
    e.preventDefault();
    let val = $(".form-control").val();
    $(".append").append("<button class='btn btn-success mt-1'>"+val+"<i class='bi bi-x-circle-fill text-primary'></i></button>")
    $(".form-control").val("");
console.log(val);
$(".bi-x-circle-fill").click(function (e) { 
    e.preventDefault();
    $(this).parent().remove();
    
});

})

