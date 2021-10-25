let $total_cost_selector = document.querySelector('.cart-footer .cart-footer-payment .total-cost-price');

function increment(id) {
  for (let i=0; i<cartProductsList.length; i++) {
    if (cartProductsList[i].id == id) {
      cartProductsList[i].amount = cartProductsList[i].amount + 1;
    }
  }
  $total_cost_selector.innerHTML = '$' + calcTotalCost();
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cartProductsList);
}
function decrement(id) {
  for (let i=0; i<cartProductsList.length; i++) {
    if (cartProductsList[i].id == id) {
      cartProductsList[i].amount = cartProductsList[i].amount - 1;
    }
  }
  $total_cost_selector.innerHTML = '$' + calcTotalCost();
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cartProductsList);
}

function deleteItem(id) {
  cartProductsList = cartProductsList.filter(product => product.id != id);
  $total_cost_selector.innerHTML = '$' + calcTotalCost();
  saveProductsListOnLocalStorage(cartProductsList);
}
