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
      // increase item

    } else {
      this.cart.update((prevCart) => ({
    ...prevCart,
    items: [...prevCart.items,item],
    count: prevCart.count +1,
    total: prevCart.total +item.price,
    
    }));
  }
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