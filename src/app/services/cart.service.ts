import { Injectable, signal } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class CartService {
  cart = signal<Cart> ({
    items: [],
    count: 0,
    total: 0,
  });
  
  constructor() { }

  addItem(item: CartItem) {
    const itemObj = this.cart().items.find((t) => t.id ===item.id);
    if (itemObj) {

      // increase item method

      this.increaseItem(itemObj);

    } else {
      this.cart.update((prevCart) => ({
    ...prevCart,
    items: [...prevCart.items,item],
    count: prevCart.count +1,
    total: prevCart.total +item.price,
    
    }));
  }
 }

 increaseItem(item: CartItem) {
  this.cart.update((prevCart) => {
    const newCart = {
      ...prevCart,
      items: [...prevCart.items],
    };
    const itemObj = newCart.items.find((t) => t.id === item.id);
    itemObj!.quantity = itemObj!.quantity +1;
    newCart.count++;
    newCart.total += itemObj!.price;
    return newCart;
  });
 }

 decreaseItem(item: CartItem) {
  this.cart.update((prevCart) => {
    const newCart = {
      ...prevCart,
      items: [...prevCart.items],
    };
    const itemObj = newCart.items.find((t) => t.id === item.id);
    itemObj!.quantity = itemObj!.quantity -1;
    newCart.count--;
    newCart.total -= itemObj!.price;
    return newCart;
  });
 }

}


export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}


export interface Cart {
  items: CartItem[];
  count: number;
  total: number;
}