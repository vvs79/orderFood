import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
                    HomeComponent,
                  ],
    imports:      [
                    BrowserModule,
                    BrowserAnimationsModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    FormsModule,
                    ReactiveFormsModule,
                  ]
})

export class HomeModule { }
