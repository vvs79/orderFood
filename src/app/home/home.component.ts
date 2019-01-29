import { Component, OnInit } from '@angular/core';
import { Menu, Order, Orders } from '../data';
import { MenuService } from '../services/menu.service';
import { OrdersService } from '../services/orders.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public dateTime: Date;
    items: Menu[] = [];
    newOrder: any;
    menuName: string;
    userName: string;
    showOrder: boolean = false;
    sum: number;
    menuNum: number;
    orderFood: number;


    constructor(private menuService: MenuService,
                private ordersService: OrdersService) {
    }

    ngOnInit() {
        this.orderFood = 0;
        this.menuNum = 1;
        this.menuName = 'Menu ' + this.menuNum;
        this.items = this.menuService.getMenu(0);
    }

    selectMenu(num: number) {
        this.orderFood = 0;
        this.menuNum = num + 1;
        this.menuName = 'Menu ' + this.menuNum;
        this.items = this.menuService.getMenu(num);
        this.items.map(item => item.selected = false);
    }

    order() {
        this.newOrder = [];
        this.sum = 0;
        this.items.map(item => { if (item.selected) {
                                    this.newOrder.push(item);
                                    this.sum += item.price;
                                  }
                               });
        if (this.userName == null || this.dateTime == null || this.newOrder.length == 0)
            return;
        this.menuService.setOrder({userName: this.userName, menu: this.menuNum, order: this.newOrder, dateTime: this.dateTime});
        this.ordersService.addOrder(this.userName, this.menuNum, this.newOrder, this.dateTime);
        this.showOrder = true;
    }

    checkOrder() {
        this.orderFood = 0;
        this.items.map(item => { if (item.selected)
                                     this.orderFood += 1;
                                });
    }
}
