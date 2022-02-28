/*----------------------------------*/
/*testando botão de click para assinar*/
/*-------------------------------------*/

$('div#planos-bottom-ouro').click(function(){
    alert('Você escolheu o plano Econômico');
})

$('div#planos-bottom-platinium').click(function(){
    alert('Você escolheu o plano Básico');
})

$('div#planos-bottom-black').click(function(){
    alert('Você escolheu o plano Premium');
})

/*----------------------------------*/
/*CODIGOS PARA LINKS DAS REDES SOCIAIS
/*-------------------------------------*/
$("ion-icon#facebook").click(function(){
    window.open("http://www.facebook.com", "_blank");  
})

$("ion-icon#instagram").click(function(){
    window.open("http://www.instagram.com", "_blank");  
})

/*----------------------------------*/
/*CODIGOS DE ANIMAÇÃO SOBRE
/*-------------------------------------*/
$('section#sobre div#sobre-esquerda').css('opacity', 0);
$('section#sobre div#sobre-centro').css('opacity', 0);
$('section#sobre div#sobre-direita').css('opacity', 0);

$('div#chamada').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#sobre div#sobre-esquerda').addClass('animate__animated animate__fadeInUp');
        $('section#sobre div#sobre-centro').addClass('animate__animated animate__fadeInUp');
        $('section#sobre div#sobre-direita').addClass('animate__animated animate__fadeInUp');

        $('section#sobre div#sebre-mestre-bottom-esquerda').addClass('animate__animated animate__fadeInUp animate__slower');
        
        $('section#sobre div#sebre-mestre-bottom-direita').addClass('animate__animated animate__fadeInUp animate__slower');
        
    }
    if(direcao == 'up'){
        $('section#sobre div#sobre-esquerda').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('section#sobre div#sobre-centro').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('section#sobre div#sobre-direita').removeClass('animate__animated animate__fadeInUp animate__slow');

        $('section#sobre div#sebre-mestre-bottom-esquerda').removeClass('animate__animated animate__fadeInUp animate__slower');
        
        $('section#sobre div#sebre-mestre-bottom-direita').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'110px;'
})

/*----------------------------------*/
/*CODIGOS DE ANIMAÇÃO TRANSICAO-PLANOS
/*------------------------------------*/


$('div#imagens').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#transicao-planos div#icon1').addClass('animate__animated animate__zoomIn animate__slower');
        $('section#transicao-planos div#icon2').addClass('animate__animated animate__zoomIn animate__slower');
        $('section#transicao-planos div#icon3').addClass('animate__animated animate__zoomIn animate__slower');

        $('section #imgadv1').addClass('animate__animated animate__zoomIn animate__slower');  
        $('section #imgadv2').addClass('animate__animated animate__zoomIn animate__slow'); 
        $('section #imgadv3').addClass('animate__animated animate__zoomIn animate__slow'); 
        $('section #imgadv4').addClass('animate__animated animate__zoomIn animate__slower'); 
    
    }else{
        $('section#transicao-planos div#icon1').removeClass('animate__animated animate__zoomIn animate__slower');
        $('section#transicao-planos div#icon2').removeClass('animate__animated animate__zoomIn animate__slower');
        $('section#transicao-planos div#icon3').removeClass('animate__animated animate__zoomIn animate__slower');

        $('section #imgadv1').removeClass('animate__animated animate__zoomIn animate__slower');  
        $('section #imgadv2').removeClass('animate__animated animate__zoomIn animate__slow'); 
        $('section #imgadv3').removeClass('animate__animated animate__zoomIn animate__slow'); 
        $('section #imgadv4').removeClass('animate__animated animate__zoomIn animate__slower'); 
    }
}, {
    offset:'800px;'
})
    
/*----------------------------------*/
/*CODIGOS DE ANIMAÇÃO PLANOS
/*------------------------------------*/

$('div.planos:eq(0)').css('opacity', 0);
$('div.planos:eq(1)').css('opacity', 0);
$('div.planos:eq(2)').css('opacity', 0);

$('section#plano-principal').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow');
    }else{
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slow');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slow');
    }
}, {
    offset:'400px;'
})

/*----------------------------------*/
/*CODIGOS DE ACOES DE NAVEGACAO   */
/*------------------------------------*/

$('header nav ul#menu-header li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('header nav ul#menu-header li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section#sobre').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header nav ul#menu-header li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section#plano-principal').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

/*----------------------------------*/
/*       CODIGOS DE NavEstatico     */
/*----------------------------------*/

$('header div#chamada h2').waypoint(function(direcao){
    if(direcao == 'down'){
        $('nav').addClass('navEstatico');
        $('nav').addClass('navEstatico-mobile');
        $('header div#logo').addClass('logoEstatico');
        $('nav ul').addClass('menuEstatico');
        $('nav ul li a').addClass('itemEstatico');

        $('nav ul#icon-menu-mobile ion-icon').css('color', '#404040');
        $('nav').addClass('navEstatico-mobile');
        $('nav ul#icon-menu-mobile').css('margin-top', '5px');
        $('nav ul#icon-menu-mobile').css('margin-right', '20px');

    }else{
        $('nav').removeClass('navEstatico');
        $('header div#logo').removeClass('logoEstatico');
        $('nav ul').removeClass('menuEstatico');
        $('nav ul li a').removeClass('itemEstatico');

        $('nav ul#icon-menu-mobile ion-icon').css('color', 'white');
        $('nav ul#icon-menu-mobile').css('margin-top', '70px');
        $('nav ul#icon-menu-mobile').css('margin-right', '20px');
;
    }
}, {
    offset:'200px;'
})

// açoes de menu amburguer

function mostrarMenu(){
    $('nav ul#menu-header').css('display', 'flex');
}

function esconderMenu(){
    $('nav ul#menu-header').css('display', 'none');
}

var controle = true;

$('nav ul#icon-menu-mobile').click(function(){
    if(controle == true){
        mostrarMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
})

$(window).resize(function(){
    if($(window).width() > 812){
        mostrarMenu();
    }else{
        esconderMenu();
    }
})
