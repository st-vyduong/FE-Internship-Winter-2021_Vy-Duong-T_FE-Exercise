let productList = [];
product1 = new Product(261311, 'T-Shirt Summer Vibes', './assets/img/product1.png', 119.99, 30);
product2 = new Product(212312, 'Loose Knit 3/4 Sleeve', './assets/img/product2.png', 199.99, 0);
product3 = new Product(212315, 'Basic Slim Fit T-Shirt', './assets/img/product3.png', 79.99, 0);
product4 = new Product(261313, 'Loose Textured T-Shirt', './assets/img/product4.png', 199.99, 0);
productList.push(product1);
productList.push(product2);
productList.push(product3);
productList.push(product4);

let $ulProduct = document.querySelector('.selected .list-product');
for (let i=0; i<4; i++) {
  $ulProduct.innerHTML += `
      <li class="col col-md-3 col-xs-6 list-product-item">
        <div class="product-card">
            <img src="${productList[i].img}" alt="${productList[i].name}" class="product-img">
            <span class="badge ${productList[i].discount === 0 ? `display-none` : ''}">${productList[i].discount}%</span>
            <div class="product-info">
                <h4 class="product-name">${productList[i].name}</h4>
                <div class="product-sale">
                    <span class="product-price discount-price ${productList[i].discount === 0 ? `display-none` : ''}">$${productList[i].calcDiscountPrice()}</span>
                    <span class="product-price ${productList[i].discount === 0 ? `normal-price` : 'basic-price'}">$${productList[i].price}</span>
                </div>
            </div>
            <button type="button" class="btn cart-btn" onClick="addItemIntoCart('${productList[i].id}')">Add to cart</button>
        </div>
      </li>
  `;
}
