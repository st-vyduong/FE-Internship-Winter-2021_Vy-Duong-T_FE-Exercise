const $header = document.querySelector('header');
const $container_header = document.querySelector('header .container-header');
const $main = document.querySelector('main');
const $cart = document.querySelector('.cart');
const $footer = document.querySelector('footer');

$cart.style.display = 'none';
function linkToCart() {
  if ($cart.style.display == 'none') {
    $main.style.display = 'none';
    $footer.style.display = 'none';
    $cart.style.display = 'block';
    $container_header.style.filter = 'brightness(0) saturate(100%)';
    $header.style.backgroundColor = '#FFFFFF';
    $header.style.borderBottom = '2px solid #EEEEEE';
    renderCart();
  } else {
    $main.style.display = 'block';
    $cart.style.display = 'none';
    $footer.style.display = 'block';
    $container_header.style.filter = '';
    $header.style.backgroundColor = '';
    $header.style.borderBottom = '';
    $cart_product.innerHTML = '';
  }
  console.log(document.querySelector('header .cart-counter'));
}
