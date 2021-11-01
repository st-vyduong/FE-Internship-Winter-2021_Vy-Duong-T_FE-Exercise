let $totalCostSelector = document.querySelector('.cart-footer .cart-footer-payment .total-cost-price');

function increment(id) {
  for (let i=0; i<cartProductsList.length; i++) {
    if (cartProductsList[i].id == id) {
      cartProductsList[i].amount = cartProductsList[i].amount + 1;
    }
  }
  $totalCostSelector.innerHTML = '$' + calcTotalCost();
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cartProductsList);
}
function decrement(id) {
  for (let i=0; i<cartProductsList.length; i++) {
    if (cartProductsList[i].id == id) {
      cartProductsList[i].amount = cartProductsList[i].amount - 1;
    }
  }
  $totalCostSelector.innerHTML = '$' + calcTotalCost();
  calcAmountInCartIcon();
  saveProductsListOnLocalStorage(cartProductsList);
}

function deleteItem(id) {
  cartProductsList = cartProductsList.filter(product => product.id != id);
  $totalCostSelector.innerHTML = '$' + calcTotalCost();
  saveProductsListOnLocalStorage(cartProductsList);
}
