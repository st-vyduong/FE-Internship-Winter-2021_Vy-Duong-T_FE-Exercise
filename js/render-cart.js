let cart_product = document.querySelector('.cart .cart-body tbody');

function renderCart() {
  let cart_content = '';
  for (let i=0; i<cart_products_list.length; i++) {
    let product = product_list.find(product => product.id == cart_products_list[i].id);
    cart_content += `
      <tr>
        <td class="f-row align-item-center">
          <img src="${product.img}" alt="${product.name}" class="cart-product-img">
          <div class="cart-product-info">
            <h4 class="cart-product-name">${product.name}</h4>
            <p class="cart-product-id">#${product.id}</p>
          </div>
        </td>
        <td class="cart-product-color">White</td>
        <td class="cart-product-size">XL</td>
        <td class="cart-product-amount">
          <div class="amount">
            <button type="button" class="btn cart-option-btn minus-btn" ${cart_products_list[i].amount === 1 ? 'disabled' : ''} onclick="decrement('${cart_products_list[i].id}')">-</button>
            <input type="text" name="amount" class="input-amount" value="${cart_products_list[i].amount}" min="1">
            <button type="button" class="btn cart-option-btn plus-btn" onclick="increment('${cart_products_list[i].id}')">+</button>
          </div>
        </td>
        <td>
          <span class="cart-product-price cart-discount-price}">$${product.calcDiscountPrice()}</span>
          <span class="cart-product-price ${product.discount == 0 ? 'display-none' : 'cart-basic-price'}">$${product.price}</span>
        </td>
        <td><button type="button" onclick="deleteItem('${product.id}')" class="btn cart-option-btn""><img src="./assets/img/CANCEL.png"></button></td>
      </tr>
    `;
  }
  cart_product.innerHTML = cart_content;
  total_cost_selector.innerHTML = '$' + calcTotalCost();
}
