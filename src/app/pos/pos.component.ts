// http://localhost:8080/pos
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import {Router} from '@angular/router';

@Component({
    selector: 'pos-app',
    templateUrl: './pos.component.html',
    styleUrls: ['./pos.component.scss']
})

export class PosComponent implements OnInit {
    orders: any;

    constructor(private ordersService: OrdersService,
                private router: Router) {
    }

    ngOnInit() {
        if (prompt("Enter password") != '123456') {
            this.router.navigate(['/']);
            return false;
        }
        this.orders = this.ordersService.getOrders();
    }

    setCheck(i: number, val: boolean){
        this.orders[i].picked = val;
        localStorage.setItem('orderFood', JSON.stringify({orders: this.orders}));
    }
}
