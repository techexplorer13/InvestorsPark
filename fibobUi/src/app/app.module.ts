import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TopicsNavComponent } from './dashboard/topics-nav/topics-nav.component';
import { DropdownDirective } from './dropdown.directive';
import { HttpClientModule } from '@angular/common/http';
import { AllmutualfundComponent } from './dashboard/allmutualfund/allmutualfund.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { MutualFundNamesComponent } from './dashboard/allmutualfund/mutual-fund-names/mutual-fund-names.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material'; 

const appRoutes:Routes=[
  {path:'allmutualfund',component:AllmutualfundComponent},
  {path:'mutualfundinfo',component:MutualFundNamesComponent}
];
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TopicsNavComponent,
    DropdownDirective,
    AllmutualfundComponent,
    DashboardComponent,
    FooterComponent,
    MutualFundNamesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
