export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
  
   if(!product || product === null ){
     return
   }
 let cartItem = this.cartItems.find(item => item.product.id === product.id);
     
 if(cartItem === undefined){
   this.cartItems.push({product, count: 1})
 } else {
  this.updateProductCount(cartItem.product.id, 1)
 }
//console.log(this.cartItems)
  }

  updateProductCount(productId, amount) {
  
 let cartItem = this.cartItems.find(item => productId === item.product.id);
 cartItem.count += amount;

if(cartItem.count === 0){
  this.cartItems.splice(this.cartItems.indexOf(cartItem), 1)
}
console.log(this.cartItems)
  }

  isEmpty() {
   return this.cartItems.length === 0;
  }

  getTotalCount() {
  return this.cartItems.reduce((sum,item) => item.count + sum, 0);

  }

  getTotalPrice() {
  return this.cartItems.reduce((sum,item) => (item.product.price * item.count) + sum, 0)
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

