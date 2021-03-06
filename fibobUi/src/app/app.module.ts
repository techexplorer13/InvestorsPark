import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicsNavComponent } from './dashboard/topics-nav/topics-nav.component';
import { ClickOutsideDirective } from './directives/clickoutside.directive';
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
import { UserService } from './services/userdataservice';
import { DataService } from './services/dataservice';
import { FetchAllSchemeNames} from './services/fetchAllSchemeNames';
import { NewsComponent } from './dashboard/news/news.component';
import { SearchallComponent } from './dashboard/searchall/searchall.component';
import { GraphComponent } from './dashboard/searchall/graph-component/GraphChart.component';
import { TimeseriesdailyService} from './services/timeseriesdaily.service';
import { HttpModule } from '@angular/http';


const appRoutes:Routes=[
  {path:'allmutualfund',component:AllmutualfundComponent},
  {path:'mutualfundinfo',component:MutualFundNamesComponent},
  {path:'login',component:LoginformComponent, canActivate: [LoginGuard]},
  {path:'latestnews',component:NewsComponent}
];
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicsNavComponent,
    AllmutualfundComponent,
    DashboardComponent,
    FooterComponent,
    MutualFundNamesComponent,
    FormsComponent,
    SipregistrationformsComponent,
    LoginformComponent,
    SignupformComponent,
    NewsComponent,
    ClickOutsideDirective,
    SearchallComponent,
    GraphComponent
  ],
  entryComponents: [
    SipregistrationformsComponent,
    SignupformComponent
  ],
  imports: [
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatExpansionModule,
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
    NgbModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService,UserService,DataService,FetchAllSchemeNames,TimeseriesdailyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
