let key = 'products';
function creatProduct(product) {
  let full_product = new Product(product.id, product.name, product.img, product.price, product.discount);
  return full_product;
}

function getCartProductsFromLcs() {
  let cart_products_list_lcs = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  return cart_products_list_lcs;
}

function saveProductsListOnLocalStorage(cart_products_list_lcs) {
  localStorage.setItem(key, JSON.stringify(cart_products_list_lcs));
}

function calcTotalCost() {
  let total = 0;
  for (let i=0; i<cart_products_list.length; i++) {
    let product = product_list.find(product => product.id == cart_products_list[i].id);
    total += cart_products_list[i].amount * product.calcDiscountPrice();
  }
  return total.toFixed(2);
}

let cart_icon_counter = document.querySelector('header .cart-counter');
function calcAmountInCartIcon() {
  let amount = cart_products_list.reduce((total, currentValue) => {
    return total + currentValue.amount;
  }, 0);
  cart_icon_counter.innerHTML = amount;
}
// Add Cart

let cart_products_list = getCartProductsFromLcs();
function addItemIntoCart(id) {
  let status_product = false;
  let seleted_product = cart_products_list.find(product => product.id == id);
  if (seleted_product) {
    seleted_product.amount++;
    status_product = true;
  }
  else {
    let cart_product = new cartProduct(id, 1);
    cart_products_list.push(cart_product);
  }
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cart_products_list);
}

let total_cost_selector = document.querySelector('.cart-footer .cart-footer-payment .total-cost-price');


let product_amount = document.querySelector('cart-product-amount input');
let a = [];
function increment(id) {
  for (let i=0; i<cart_products_list.length; i++) {
    if (cart_products_list[i].id == id) {
      cart_products_list[i].amount = cart_products_list[i].amount + 1;
    }
  }
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cart_products_list);
  renderCart();
}
function decrement(id) {
  for (let i=0; i<cart_products_list.length; i++) {
    if (cart_products_list[i].id == id) {
      cart_products_list[i].amount = cart_products_list[i].amount - 1;
    }
  }
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cart_products_list);
  renderCart();
}

function deleteItem(id) {
  cart_products_list = cart_products_list.filter(product => product.id != id);
  total_cost_selector.innerHTML = '$' + calcTotalCost();
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cart_products_list);
  renderCart();
}

