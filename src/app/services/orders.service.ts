import { Injectable } from '@angular/core';
import { Menu, Order, Orders } from '../data';
  
@Injectable()
export class OrdersService{

    getOrders() {
      let orderFood = JSON.parse(localStorage.getItem('orderFood'));
      return orderFood == null ? [] : orderFood.orders;
    }

    setOrders(orders: Order[]) {
      localStorage.setItem('orderFood', JSON.stringify({orders: orders}));
    }

    addOrder(userName: string, menu: number, newOrder: any, dateTime: Date) {
        let order = new Order(userName, menu, newOrder, dateTime);
        let orders = this.getOrders();
        orders.push(order);
        this.setOrders(orders);
    }
}
