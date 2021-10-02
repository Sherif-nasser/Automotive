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
    ZanussiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
