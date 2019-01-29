import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule }   from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import {Routes, RouterModule} from '@angular/router';

import { MenuService } from './services/menu.service';
import { OrdersService } from './services/orders.service';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home/home.component';
import { PosComponent }   from './pos/pos.component';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'pos', component: PosComponent},
    { path: '**', redirectTo: '/'}
];

@NgModule({
    imports:      [
                    BrowserModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    HttpClientModule,
                    NgxWebstorageModule.forRoot(),
                    RouterModule.forRoot(appRoutes),
                  ],
    declarations: [
                    AppComponent,
                    HomeComponent,
                    PosComponent,
                  ],
    providers:    [
                    MenuService,
                    OrdersService,
                  ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
