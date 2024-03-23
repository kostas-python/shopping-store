import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
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