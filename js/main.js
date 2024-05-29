$(document).ready(function() {

    window.addEventListener('scroll', function() {
        var header = document.getElementById('cabecalho');
        var scrollPosition = window.scrollY;
    
        if (scrollPosition > 500) {
            header.classList.add('header-background');
        } else {
            header.classList.remove('header-background');
        }
    });
    

    function isScrollAtStart(element) {
        var scrollingWrapper = $(element).closest('.row').find('.scrolling-wrapper');
        return $(scrollingWrapper).scrollLeft() === 0;   
    }
    
    function isScrollAtEnd(element) {
        var scrollingWrapper = $(element).closest('.row').find('.scrolling-wrapper');
        var wrapper = $(scrollingWrapper)[0];
        return wrapper.scrollLeft + wrapper.clientWidth === wrapper.scrollWidth;
    }

    function deleteArrows(element) {
        if (isScrollAtStart(element)) {
            $(element).parent().find('.buttons').find('.carousel-control-next-icon').removeClass('d-none')
            $(element).parent().find('.buttons').find('.carousel-control-prev-icon').addClass('d-none')
            } else if (isScrollAtEnd(element)) {
            $(element).parent().find('.buttons').find('.carousel-control-prev-icon').removeClass('d-none')
            $(element).parent().find('.buttons').find('.carousel-control-next-icon').addClass('d-none')
        } else {
            $(element).parent().find('.buttons').find('.carousel-control-prev-icon').removeClass('d-none')
            $(element).parent().find('.buttons').find('.carousel-control-next-icon').removeClass('d-none')
        }
    }


    var touchStartX = 0;
    var scrollingWrapper = $(".scrolling-wrapper");

    scrollingWrapper.on("touchstart", function(event) {
        touchStartX = event.originalEvent.touches[0].clientX;
    });

    scrollingWrapper.on("touchmove", function(event) {
        var touchEndX = event.originalEvent.touches[0].clientX;
        var moveDistance = touchStartX - touchEndX;
        $(this).scrollLeft($(this).scrollLeft() + moveDistance);
        touchStartX = touchEndX;
    });

    if ($(window).width() >= 1024) {
        $(".row").mousemove(function() {
            deleteArrows(this)
        })
        
        $(".row").mouseleave(function(){
            $(this).parent().find('.buttons').find('.carousel-control-next-icon').addClass('d-none')
            $(this).parent().find('.buttons').find('.carousel-control-prev-icon').addClass('d-none')
        })
    
        $(".scroll-left").click(function(){
            var scrollingWrapper = $(this).closest('.row').find('.scrolling-wrapper');
            $(scrollingWrapper).animate({padding: "0px 0px 0px 90px"}, 'fast');
            $(scrollingWrapper).animate({scrollLeft: '-=700'}, 'slow');
            deleteArrows(this)
        });
    
        $(".scroll-right").click(function(){
            var scrollingWrapper = $(this).closest('.row').find('.scrolling-wrapper');
            $(scrollingWrapper).animate({padding: "0px 90px 0px 0px"}, 'fast');
            $(scrollingWrapper).animate({scrollLeft: '+=700'}, 'slow');
            deleteArrows(this)
        });
    
        $(".podium .card").mouseenter(function(){
            var numero = $(this).prev('.number');
            var srcImagem = numero.attr('src');
            var realNumberm = srcImagem.substr(-5).charAt(0);
            realNumberm == 0 ? numero.attr('src', `./imgs/1${realNumberm}cheio.png`) : numero.attr('src', `./imgs/${realNumberm}cheio.png`);
        })
    
        $(".podium .card").mouseleave(function(){
            var numero = $(this).prev('.number');
            var srcImagem = numero.attr('src');
            var realNumberm = srcImagem.substr(-10).charAt(0);
            realNumberm == 0 ? numero.attr('src', `./imgs/1${realNumberm}.png`) : numero.attr('src', `./imgs/${realNumberm}.png`);
        })
    }
})
