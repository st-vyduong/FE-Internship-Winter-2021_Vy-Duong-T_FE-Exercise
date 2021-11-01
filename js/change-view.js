const $header = document.querySelector('header');
const $containerHeader = document.querySelector('header .container-header');
const $main = document.querySelector('main');
const $cart = document.querySelector('.cart');
const $footer = document.querySelector('footer');
const $cartCounter = document.querySelector('header .cart-counter');


$cart.style.display = 'none';
function linkToCart() {
  if ($cart.style.display == 'none') {
    $main.style.display = 'none';
    $footer.style.display = 'none';
    $cart.style.display = 'block';
    $containerHeader.style.filter = 'brightness(0) saturate(100%)';
    $header.style.backgroundColor = '#FFFFFF';
    $header.style.borderBottom = '2px solid #EEEEEE';
    $cartCounter.style.display = 'none';
    renderCart();
  } else {
    $main.style.display = 'block';
    $cart.style.display = 'none';
    $footer.style.display = 'block';
    $cartCounter.style.display = 'block';
    $containerHeader.style.filter = '';
    $header.style.backgroundColor = '';
    $header.style.borderBottom = '';
    $cartProduct.innerHTML = '';
  }
}
