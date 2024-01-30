$(document).ready(function(){
    
    let add_produto_carrinho = 0; 

    $(window).scroll(function(){
        $('main aside').addClass('encolher-aba-laterail');  
    })

    $('.menu-buguer-btn').click(function(){
        //verifica se aside possui a classe encolher-aba-lateral
        let check = $('aside').hasClass('encolher-aba-laterail');
        if(check) {
            $('main aside').removeClass('encolher-aba-laterail');
        }
        
        else {
            $('main aside').addClass('encolher-aba-laterail');  
        } 
    })
    $('.carrossel-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        
    });
    $('.slick-prev').css('display','none');
    $('.slick-next').css('display','none');
    $('.slick-slide').css("height",'80vh');
    $('.slick-slide').css('object-fit','cover');
    

    $('.carrossel-produtos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        
    });
    $('nav button').click(function(){
        const secaoProduto = $(this).text().toLowerCase();
        var position = $("#"+secaoProduto).offset().top;
        $('html,body').animate({scrollTop: position},2000)
        
    })
    $('.desktop-menu li a').click(function(){
        const desk_secaoProduto = $(this).text().toLowerCase();
        var position = $("#"+desk_secaoProduto).offset().top;
        $('html,body').animate({scrollTop: position},2000)
    })
    $('.add-carrinho').click(function(){
        add_produto_carrinho++;
        $("#qtd_item").text(add_produto_carrinho);
    })

})