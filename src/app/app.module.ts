import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ProgramComponent } from './program/program.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {  NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DialogOverviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogOverviewComponent
  ]
})
export class AppModule { }
