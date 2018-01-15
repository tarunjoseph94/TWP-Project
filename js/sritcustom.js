

 $(document).ready(function(){


  $('.owl-carousel').owlCarousel({
                navigation: false,
            items: 1,
            width: 278,
            slideSpeed: 800,
            paginationSpeed: 400,
            singleItem: true,
            pagination: false,
            navigationText: ['<i class="fa fa-angle-left fa-3x"></i>', '<i class="fa fa-angle-right fa-3x"></i>'],
            pagination: true,
             responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }

})

//Mobile Menu
$('.navbar-toggle').click(function () {
        $('#cssmenu').slideToggle('slow');
    })
$('.close-link').click(function () {
        $('#cssmenu').slideToggle('slow');
})


    $('.show-menu').hide();
$(".btm-header-nav").on("click", ".showdiv", function(event){
    $('.show-menu').slideToggle();
    $(".btm-header-nav").hide();

});


$(".showless").on("click",  function(event){
    $('.show-menu').slideToggle();
    $(".btm-header-nav").show();

});



});
 /*Added for careers*/
  $(document).ready(function() {
 $('#submit-careers').on('click', function(event){
    event.preventDefault();
$("#submit-careers").hide();
$("#wait").show();
      var number= document.getElementById("number").value;
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var other=document.getElementById("other").value;
     var position=$("#position").val();
     var file=$('#file').val();
     var self=document.getElementById("self").value;
            var pattern=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

   if (name=="") {
        alert("Please enter your name");


        $('html, body').animate({
    scrollTop: ($('#name').offset().top)
},500);
        $("#submit-careers").show();
        $("#wait").hide();
              return false;
}


    if ( !/^[a-zA-Z ]*$/g.test(name)) {
        alert("Name entered is invalid");


        $('html, body').animate({
    scrollTop: ($('#name').offset().top)
},500);
        $("#submit-careers").show();
        $("#wait").hide();
              return false;
    }

    if (email=="") {
            alert(" Please enter your E-mail address ");
                    $('html, body').animate({
    scrollTop: ($('#email').offset().top)
},500);
                    $("#submit-careers").show();
                    $("#wait").hide();
            return false;
    }
    if ( !pattern.test(email)) {
            alert("The E-mail address you have entered is invalid");
                    $('html, body').animate({
    scrollTop: ($('#email').offset().top)
},500);
                    $("#submit-careers").show();
                    $("#wait").hide();
            return false;
    }

    if (number=="") {
        alert ("Please enter your contact number");
                $('html, body').animate({
    scrollTop: ($('#number').offset().top)
},500);
                $("#submit-careers").show();
                $("#wait").hide();
        return false;
    }

    if (isNaN(number)) {
        alert ("Number not valid");
                $('html, body').animate({
    scrollTop: ($('#number').offset().top)
},500);
                $("#submit-careers").show();
                $("#wait").hide();
        return false;
    }



    if(( position=="1")&&(other==""))
    {
        var flag;
        flag=1;

    }
    if ( position==0 || flag==1 ) {
        alert("Please enter the position for which you want to apply");
                $('html, body').animate({
    scrollTop: ($('#position').offset().top)
},500);
                $("#submit-careers").show();
                $("#wait").hide();
        return false;
    }
    if(file=='')
    {
        alert("Please Upload your Resume ");
                $('html, body').animate({
    scrollTop: ($('#file').offset().top)
},500);
                $("#submit-careers").show();
                $("#wait").hide();
        return false;

    }
    if(self=="")
    {
        alert("Please tell us something about yourself ");
                $('html, body').animate({
    scrollTop: ($('#self').offset().top)
},500);
                $("#submit-careers").show();
                $("#wait").hide();
        return false;
    }

    var captcha=document.getElementById("captcha").value;
       //alert(captcha);





 });






});
$(document).ready(function(){
    $("#position").on('change',function(){
        if( $(this).val()==="1"){
    $("#otherType").slideDown()
    }
    else{
    $("#otherType").slideUp()
    }
    });
});

/*end careers*/
/*Added for contact*/
  $(document).ready(function() {
 $('#submit-contact').on('click', function(event){
    event.preventDefault();
$("#submit-contact").hide();
$("#reset-contact").hide();
$("#wait").show();
      var number= document.getElementById("number").value;
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var company=document.getElementById("company").value;
     var time= ($('input[id=time]:checked', '#contact').val());

     var form=$("#contact").val();
     var message=document.getElementById("message").value;
            var pattern=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;



 if (name=="") {
        alert("Please enter your Name");


        $('html, body').animate({
    scrollTop: ($('#name').offset().top)
},500);
        $("#submit-contact").show();
        $("#reset-contact").show();
        $("#wait").hide();
              return false;
    }
    if (!/^[a-zA-Z ]*$/g.test(name)) {
        alert("Name entered is invalid");


        $('html, body').animate({
    scrollTop: ($('#name').offset().top)
},500);
        $("#submit-contact").show();
        $("#reset-contact").show();
        $("#wait").hide();
              return false;
    }

    if ( email=="") {
            alert("Please enter your email address");
                    $('html, body').animate({
    scrollTop: ($('#email').offset().top)
},500);
                    $("#submit-contact").show();
                    $("#reset-contact").show();
                    $("#wait").hide();
            return false;
    }
    if ( !pattern.test(email)) {
            alert("The E-mail address you have entered is invalid");
                    $('html, body').animate({
    scrollTop: ($('#email').offset().top)
},500);
                    $("#submit-contact").show();
                    $("#reset-contact").show();
                    $("#wait").hide();
            return false;
    }
    if (number=="") {
        alert ("Please Enter your contact number");
                $('html, body').animate({
    scrollTop: ($('#number').offset().top)
},500);
                $("#submit-contact").show();
                $("#reset-contact").show();
                $("#wait").hide();
        return false;
    }
   if (isNaN(number)) {
        alert ("Number not valid");
                $('html, body').animate({
    scrollTop: ($('#number').offset().top)
},500);
                $("#submit-contact").show();
                $("#reset-contact").show();
                $("#wait").hide();
        return false;
    }

      if (!$('input[id=time]:checked', '#contact').val()) {
        alert("Please enter your preferred time");
                $('html, body').animate({
    scrollTop: ($('#time').offset().top)
},500);
                $("#submit-contact").show();
                $("#reset-contact").show();
                $("#wait").hide();
        return false;
    }

    if ( company=="") {
        alert("Please enter your comapny name");
                $('html, body').animate({
    scrollTop: ($('#company').offset().top)
},500);
                $("#submit-contact").show();
                $("#reset-contact").show();
                $("#wait").hide();
        return false;
    }

    if(message=="")
    {
        alert("Please tell us what services do you need");
                $('html, body').animate({
    scrollTop: ($('#message').offset().top)
},500);
                $("#submit-contact").show();
                $("#reset-contact").show();
                $("#wait").hide();
        return false;
    }




});
});
/*End contact*/
/*Added to make the nav bar stick to the top in mobile view */
$(document).ready(function() {

  $(window).scroll(function () {

     // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 40) {
      $('#sticky').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 41) {
      $('#sticky').removeClass('navbar-fixed');
    }
  });
});
/*End nav bar */
