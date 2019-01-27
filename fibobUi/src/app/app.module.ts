import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

const appRoutes:Routes=[
  {path:'allmutualfund',component:AllmutualfundComponent},
  {path:'mutualfundinfo',component:MutualFundNamesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TopicsNavComponent,
    DropdownDirective,
    AllmutualfundComponent,
    DashboardComponent,
    FooterComponent,
    MutualFundNamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
