import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.items = [];
  }


  addItemToCart(item) {
    //drink and option
    if (this.items.find(cartItem => { return (cartItem.drink === item.drink && cartItem.option === item.option) })) {
      this.items.find(cartItem => { return (cartItem.drink === item.drink && cartItem.option === item.option) }).quantity += 1;
    }
    else {
      item.quantity = 1;
      this.items.push(item)
    }

  }
  removeItemFromCart(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  checkoutCart() {
    this.items = null;
    alert("ChaChiiiiing")
  }

}




decorate(CartStore, {
  items: observable
});

export default new CartStore();
