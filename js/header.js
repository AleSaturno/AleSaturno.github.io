$(function(){
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();


    /// Menu Reponsive///
    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnmenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');

        if(ancho < 599){
            enlaces.hide();
            icono.addClass('fa-bars');
        }

        btnmenu.on('click',function(e){    
            enlaces.slideToggle();
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
        });

        $(window).on('resize',function(e){
            if($(this).width()> 599){
                enlaces.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            }else{
                enlaces.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }
        });
});