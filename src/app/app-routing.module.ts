import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaintainanceServicesComponent } from './maintainance-services/maintainance-services.component';
import {KelvinatorComponent} from './kelvinator/kelvinator.component';
import {AdmiralComponent} from './admiral/admiral.component';
import {WestinghouseComponent} from './westinghouse/westinghouse.component';
import {Frigidaire2Component} from './frigidaire2/frigidaire2.component';
import {GeneralElectricComponent} from './general-electric/general-electric.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AristonComponent} from './ariston/ariston.component';
import {DaewooComponent} from './daewoo/daewoo.component';
import {TechnicaArmComponent} from './technica-arm/technica-arm.component';
import {NorgeComponent} from './norge/norge.component';
import {SamsungComponent} from './samsung/samsung.component';
import {WhirlpoolComponent} from './whirlpool/whirlpool.component';
import {ZanussiComponent} from './zanussi/zanussi.component';


const routes: Routes = [
{path:'',component:LandingPageComponent},
{path:'maintainance',component:MaintainanceServicesComponent},
{path:'kelvinator',component:KelvinatorComponent},
{path:'admiral',component:AdmiralComponent},
{path:'Westinghouse',component:WestinghouseComponent},
{path:'Frigidaire',component:Frigidaire2Component},
{path:'Electric',component:GeneralElectricComponent},
{path:'contact',component:ContactUsComponent},
{path:'aboutus',component:AboutUsComponent},
{path:'ariston',component:AristonComponent},
{path:'daewoo',component:DaewooComponent},
{path:'technicalArm',component:TechnicaArmComponent},
{path:'norge',component:NorgeComponent},
{path:'samsung',component:SamsungComponent},
{path:'whirlpool',component:WhirlpoolComponent},
{path:'zanussi',component:ZanussiComponent}

];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
