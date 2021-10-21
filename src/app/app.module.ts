import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MaintainanceServicesComponent } from './maintainance-services/maintainance-services.component';
import { KelvinatorComponent } from './kelvinator/kelvinator.component';
import { AdmiralComponent } from './admiral/admiral.component';
import { WestinghouseComponent } from './westinghouse/westinghouse.component';
import { Frigidaire2Component } from './frigidaire2/frigidaire2.component';
import { GeneralElectricComponent } from './general-electric/general-electric.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TechnicaArmComponent } from './technica-arm/technica-arm.component';
import { NorgeComponent } from './norge/norge.component';
import { SamsungComponent } from './samsung/samsung.component';
import { DaewooComponent } from './daewoo/daewoo.component';
import { WhirlpoolComponent } from './whirlpool/whirlpool.component';
import { AristonComponent } from './ariston/ariston.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ZanussiComponent } from './zanussi/zanussi.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import { InformationComponent } from './information/information.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    MaintainanceServicesComponent,
    KelvinatorComponent,
    AdmiralComponent,
    WestinghouseComponent,
    Frigidaire2Component,
    GeneralElectricComponent,
    ContactUsComponent,
    TechnicaArmComponent,
    NorgeComponent,
    SamsungComponent,
    DaewooComponent,
    WhirlpoolComponent,
    AristonComponent,
    AboutUsComponent,
    ZanussiComponent,
    InformationComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
  }),
    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}


// export function createTranslateLoader(http:HttpClient) {
//   return new TranslateHttpLoader(http,'./assets/i18n/','.json');
// }
