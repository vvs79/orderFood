import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { MenuService } from './services/menu.service';
import { OrdersService } from './services/orders.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PosComponent } from './pos/pos.component';

import { HomeModule } from './home/home.module';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'pos', component: PosComponent},
    { path: '**', redirectTo: '/'}
];

@NgModule({
    declarations: [
                    AppComponent,
                    PosComponent,
                  ],
    imports:      [
                    BrowserModule,
                    BrowserAnimationsModule,
                    HttpClientModule,
                    RouterModule.forRoot(appRoutes),
                    FormsModule,
                    ReactiveFormsModule,
                    HomeModule
                  ],
    providers:    [
                    MenuService,
                    OrdersService,
                  ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
