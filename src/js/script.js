$(document).ready(function(){
    $('.page-wrapper button').on('click',function(){
      
      var button = $(this);
      var cart = $('#cart');
      var cartTotal = cart.attr('data-totalitems');
      var newCartTotal = parseInt(cartTotal) + 1;
      
      button.addClass('sendtocart');
      setTimeout(function(){
        button.removeClass('sendtocart');
        cart.addClass('shake').attr('data-totalitems', newCartTotal);
        setTimeout(function(){
          cart.removeClass('shake');
        },500)
      },500)
    })
  })