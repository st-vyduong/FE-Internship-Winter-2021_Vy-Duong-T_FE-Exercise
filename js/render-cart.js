let $cartProduct = document.querySelector('.cart .cart-body tbody');

function renderCart() {
  for (let i=0; i<cartProductsList.length; i++) {
    let product = productList.find(product => product.id == cartProductsList[i].id);
    let $cartProduct = document.querySelector('tbody');
    const $tr = document.createElement('tr');
    $cartProduct.appendChild($tr);

    $tdProductInfo = document.createElement('td');
    $tr.appendChild($tdProductInfo);
    $tdColor = document.createElement('td');
    $tr.appendChild($tdColor);
    $tdSize = document.createElement('td');
    $tr.appendChild($tdSize);
    $tdAmount = document.createElement('td');
    $tr.appendChild($tdAmount);
    $tdPrice = document.createElement('td');
    $tr.appendChild($tdPrice);
    $tdDelete = document.createElement('td');
    $tr.appendChild($tdDelete);

    $tdProductInfo.classList.add('f-row', 'align-item-center');
    let $imgProduct = document.createElement('img');
    $imgProduct.src = product.img;
    $imgProduct.alt = product.name;
    $imgProduct.classList.add('cart-product-img');
    $tdProductInfo.appendChild($imgProduct);
    let $divProductInfo = document.createElement('div');
    $divProductInfo.classList.add('cart-product-info');
    $tdProductInfo.appendChild($divProductInfo);

    let $h4ProductName = document.createElement('h4');
    $h4ProductName.classList.add('cart-product-name');
    $h4ProductName.innerHTML = product.name;
    $divProductInfo.appendChild($h4ProductName);
    let $pProductID = document.createElement('p');
    $pProductID.classList.add('cart-product-id');
    $pProductID.innerHTML = `#${product.id}`;
    $divProductInfo.appendChild($pProductID);

    $tdColor.innerHTML = 'White';
    $tdSize.innerHTML = 'XL';

    $tdAmount.classList.add('cart-product-amount');
    $divAmount = document.createElement('div');
    $divAmount.classList.add('amount')
    $btnMinus = document.createElement('button');
    $btnMinus.classList.add('btn', 'cart-option-btn', 'minus-btn');
    $btnMinus.innerHTML = '-';
    $btnPlus = document.createElement('button');
    $btnPlus.classList.add('btn', 'cart-option-btn', 'plus-btn');
    $btnPlus.innerHTML = '+';
    $inputAmount = document.createElement('input');
    $inputAmount.type = 'text';
    $inputAmount.readOnly = true;
    $inputAmount.classList.add('input-amount');
    $inputAmount.id = product.id;
    $inputAmount.value = cartProductsList[i].amount;
    $tdAmount.appendChild($divAmount);
    $divAmount.appendChild($btnMinus);
    $divAmount.appendChild($inputAmount);
    $divAmount.appendChild($btnPlus);

    $spanNewPrice = document.createElement('span');
    $spanNewPrice.classList.add('cart-product-price', 'cart-discount-price');
    $spanNewPrice.innerHTML = `$${product.calcDiscountPrice()}`;
    $spanOldPrice = document.createElement('span');
    $spanOldPrice.classList.add('cart-product-price', product.discount == 0 ? 'display-none' : 'cart-basic-price');
    $spanOldPrice.innerHTML = `$${product.price}`;
    $tdPrice.appendChild($spanNewPrice);
    $tdPrice.appendChild($spanOldPrice);

    $btnDelete = document.createElement('button');
    $btnDelete.classList.add('btn', 'cart-option-btn');
    $tdDelete.appendChild($btnDelete);
    $imgCancel = document.createElement('img');
    $imgCancel.src = './assets/img/CANCEL.png';
    $btnDelete.appendChild($imgCancel);

    let $listInputAmount = document.querySelectorAll('.input-amount');
    $btnMinus.addEventListener('click', () => {
        $listInputAmount[i].value = +$listInputAmount[i].value - 1;
        $spanCartCounter.innerHTML = +$spanCartCounter.innerHTML - 1;
        decrement(product.id);
    })

    $btnPlus.addEventListener('click', () => {
        $listInputAmount[i].value = +$listInputAmount[i].value + 1;
        $spanCartCounter.innerHTML = +$spanCartCounter.innerHTML + 1;
        increment(product.id);
      })

    $btnDelete.addEventListener('click', () => {
      $cartProduct.removeChild($tr);
      $spanCartCounter.innerHTML = +$spanCartCounter.innerHTML - cartProductsList[i].amount;
      deleteItem(product.id);
    })
  }
  $totalCostSelector.innerHTML = '$' + calcTotalCost();
}
