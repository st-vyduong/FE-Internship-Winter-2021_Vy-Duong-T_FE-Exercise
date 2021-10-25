let product_list = [];
product1 = new Product(261311, 'T-Shirt Summer Vibes', './assets/img/product1.png', 119.99, 30);
product2 = new Product(212312, 'Loose Knit 3/4 Sleeve', './assets/img/product2.png', 199.99, 0);
product3 = new Product(212315, 'Basic Slim Fit T-Shirt', './assets/img/product3.png', 79.99, 0);
product4 = new Product(261313, 'Loose Textured T-Shirt', './assets/img/product4.png', 199.99, 0);
product_list.push(product1);
product_list.push(product2);
product_list.push(product3);
product_list.push(product4);

let ul_product = document.querySelector('.selected .list-product');
for (let i=0; i<4; i++) {
  ul_product.innerHTML += `
      <li class="col col-md-3 col-xs-6 list-product-item">
        <div class="product-card">
            <img src="${product_list[i].img}" alt="T-Shirt Summer Vibes" class="product-img">
            <span class="badge ${product_list[i].discount === 0 ? `display-none` : ''}">${product_list[i].discount}%</span>
            <div class="product-info">
                <h4 class="product-name">${product_list[i].name}</h4>
                <div class="product-sale">
                    <span class="product-price discount-price ${product_list[i].discount === 0 ? `display-none` : ''}">$${product_list[i].calcDiscountPrice()}</span>
                    <span class="product-price ${product_list[i].discount === 0 ? `normal-price` : 'basic-price'}">$${product_list[i].price}</span>
                </div>
            </div>
            <button type="button" class="btn cart-btn" onClick="addItemIntoCart('${product_list[i].id}')">Add to cart</button>
        </div>
      </li>
  `;
}
