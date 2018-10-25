$(function(){
    $('#nav-menu')
        .click(function(){
            $('#nav-menu').css('display', 'none');
            $('#nav-menu-close').css('display', 'block');
            $('.head-open').fadeIn().css('display', 'inline-block');
            
        $('#nav-menu-close')
            .click(function(){
                $('#nav-menu').css('display', 'block');
                $('#nav-menu-close').css('display', 'none');
                $('.head-open').fadeIn().css('display', 'none');
            });
    });

    $('button')
        .click(function(){
            $(this).css('background-color', '#ff4e2e');
            $('button').not(this).css('background-color', '#ebebeb');
        });
    
    var currentLeftValue = 0;
    var pixelsOffset = 400;
    var minimumOffset = -1200;
    var maximumOffset = 0;

    $('#arrow-l').click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 400;
            $('.services-list').animate({ left : currentLeftValue + "px"}, 500);
        }
    });
 
    $('#arrow-r').click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 400;
            $('.services-list').animate({ left : currentLeftValue + "px"}, 500);
        }
    });
    
    if(window.matchMedia('(min-width: 861px)').matches) {
        $('#button-1').click(function() {
            if (currentLeftValue != 0) {
                currentLeftValue += 400;
                $('.services-list').animate({ left : 0 + "px"}, 500);
            }
        });
        
        $('#button-2').click(function() {
            if (currentLeftValue != -800) {
                currentLeftValue -= 800;
                $('.services-list').animate({ left : -800 + "px"}, 500);
            }
        }); 

        $('#button-3').click(function() {
            if (currentLeftValue != -1600) {
                currentLeftValue -= 1600;
                $('.services-list').animate({ left : -1600 + "px"}, 500);
            }
        });
    }

    if(window.matchMedia('(max-width: 860px) and (min-width: 701px)').matches) {
        $('#button-1').click(function() {
            if (currentLeftValue != 0) {
                currentLeftValue += 400;
                $('.services-list').animate({ left : 0 + "px"}, 500);
            }
        });
        
        $('#button-2').click(function() {
            if (currentLeftValue != -624) {
                currentLeftValue -= 624;
                $('.services-list').animate({ left : -624 + "px"}, 500);
            }
        }); 

        $('#button-3').click(function() {
            if (currentLeftValue != -1248) {
                currentLeftValue -= 1248;
                $('.services-list').animate({ left : -1248 + "px"}, 500);
            }
        });  
    }

    if(window.matchMedia('(max-width: 700px)').matches) {
        $('#button-1').click(function() {
            if (currentLeftValue != 0) {
                currentLeftValue += 400;
                $('.services-list').animate({ left : 0 + "px"}, 500);
            }
        });
        
        $('#button-2').click(function() {
            if (currentLeftValue != -312) {
                currentLeftValue -= 312;
                $('.services-list').animate({ left : -312 + "px"}, 500);
            }
        }); 

        $('#button-3').click(function() {
            if (currentLeftValue != -624) {
                currentLeftValue -= 624;
                $('.services-list').animate({ left : -624 + "px"}, 500);
            }
        });  
    }

    $('.request-call__button, .request-call__logo').click(function(){
        $('.popup-container').show();
        $('body').css('overflow', 'hidden');
    });
    
    $('.titles__button').click(function(){
        $('.popup-container').show();
        $('body').css('overflow', 'hidden');
        $('.popup .envelope-fa, .popup input:nth-child(6)').css('display', 'inline-block');
        $('.popup').css('height', '500px');
    });

    $('.popup-container').click(function(event){
        if(event.target == this){
            $(this).hide();
            $('body').css('overflow', 'auto');
            $('.popup .envelope-fa, .popup input:nth-child(6)').css('display', 'none');
            $('.popup').css('height', '400px');
        }
    });

});