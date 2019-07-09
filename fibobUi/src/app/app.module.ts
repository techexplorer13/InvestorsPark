import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
import {MaterialModule} from 'src/app/material.module';
import { MatDatepickerModule,MatNativeDateModule, MatIconModule, MatPrefix, MatSuffix } from '@angular/material';
import { SipregistrationformsComponent } from './dashboard/forms/sipregistrationforms/sipregistrationforms.component'; 
import { LoginformComponent } from './dashboard/forms/loginform/loginform.component';
import {SignupformComponent} from 'src/app/dashboard/forms/signupform/signupform.component';
import {LoginGuard} from 'src/app/guard/auth/auth.guard';
import { AuthService } from './services/auth.service';


const appRoutes:Routes=[
  {path:'allmutualfund',component:AllmutualfundComponent},
  {path:'mutualfundinfo',component:MutualFundNamesComponent},
  {path:'login',component:LoginformComponent, canActivate: [LoginGuard]}
];
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
    FormsComponent,
    SipregistrationformsComponent,
    LoginformComponent,
    SignupformComponent
  ],
  entryComponents: [
    SipregistrationformsComponent,
    SignupformComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
