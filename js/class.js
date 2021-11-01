class Product {
  constructor(id, name, img, price, discount) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.discount = discount;
  }
  calcDiscountPrice() {
    let discountPrice = this.price - (this.discount / 100) * this.price;
    return discountPrice.toFixed(2);
  }
}

class cartProduct {
  constructor(id, amount) {
    this.id = id;
    this.amount = amount;
  }
}
