import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

import { Menu, Order, Orders } from '../data';

const defaultOrder: Order = {
  userName: null,
  menu: null,
  order: [],
  dateTime: null
};

const defaultOrders: Orders = {
  orders: []
};

const _store = new BehaviorSubject<Order>(defaultOrder);
const _storeOrders = new BehaviorSubject<Orders>(defaultOrders);

@Injectable()
export class MenuService{

    menu = [
      [
        { name: "Bread",  selected: false, price: 1.5 },
        { name: "Butter", selected: false, price: 2.4 },
        { name: "Potate", selected: false, price: 2.2 },
        { name: "Cheese", selected: false, price: 3.7 }
      ],
      [
        { name: "Soup",   selected: false, price: 2.5 },
        { name: "Apple",  selected: false, price: 1.4 },
        { name: "Juice",  selected: false, price: 2.0 },
        { name: "Carrot", selected: false, price: 1.7 }
      ],
      [
        { name: "Salat",  selected: false, price: 1.6 },
        { name: "Potate", selected: false, price: 2.2 },
        { name: "Fresh",  selected: false, price: 2.3 },
        { name: "Bread",  selected: false, price: 1.5 }
      ],
      [
        { name: "Cabbage", selected: false, price: 1.4 },
        { name: "Rice",    selected: false, price: 2.6 },
        { name: "Tomato",  selected: false, price: 1.8 },
        { name: "Pasta",   selected: false, price: 2.7 }
      ]
    ];

    private store = _store;
    private storeOrders = _storeOrders;
  
    constructor(private http: HttpClient){ }

    getMenu(num: number){
        return this.menu[num];
    }

    changes = this.store.asObservable()
        .distinctUntilChanged();

    setOrder(order: Order) {
        this.store.next(order);
    }

    getOrder(): Order {
        return this.store.value;
    }

    purgeOrder() {
        this.store.next(defaultOrder);
    }

    getOrders(): Orders {
        return this.storeOrders.value;
    }
}
