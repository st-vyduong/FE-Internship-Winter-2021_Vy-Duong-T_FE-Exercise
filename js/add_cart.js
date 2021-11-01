let key = 'products';
function creatProduct(product) {
  let fullProduct = new Product(product.id, product.name, product.img, product.price, product.discount);
  return fullProduct;
}

function getCartProductsFromLcs() {
  let cartProductsListInLcs = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  return cartProductsListInLcs;
}

function saveProductsListOnLocalStorage(cartProductsListInLcs) {
  localStorage.setItem(key, JSON.stringify(cartProductsListInLcs));
}

function calcTotalCost() {
  let total = 0;
  for (let i=0; i<cartProductsList.length; i++) {
    let product = productList.find(product => product.id == cartProductsList[i].id);
    total += cartProductsList[i].amount * product.calcDiscountPrice();
  }
  return total.toFixed(2);
}

let $cartIcon = document.querySelector('header #cart-view');
let $spanCartCounter = document.createElement('span');
$spanCartCounter.className = 'cart-counter';
$spanCartCounter.innerHTML = 0;
$cartIcon.appendChild($spanCartCounter);
function calcAmountInCartIcon() {
  let amount = cartProductsList.reduce((total, currentValue) => {
    return total + currentValue.amount;
  }, 0);
  $spanCartCounter.innerHTML = amount;
}

// Add Cart
let cartProductsList = getCartProductsFromLcs();
function addItemIntoCart(id) {
  let statusProduct = false;
  let seletedProduct = cartProductsList.find(product => product.id == id);
  if (seletedProduct) {
    seletedProduct.amount++;
    statusProduct = true;
  }
  else {
    let newCartProduct = new cartProduct(id, 1);
    cartProductsList.push(newCartProduct);
  }
  $spanCartCounter.innerHTML = +$spanCartCounter.innerHTML + 1;
  saveProductsListOnLocalStorage(cartProductsList);
}
