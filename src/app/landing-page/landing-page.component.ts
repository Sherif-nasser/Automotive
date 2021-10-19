import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})



export class LandingPageComponent implements OnInit {

  images = true;

   isActive:boolean=false;
  constructor() {

}

  ngOnInit(): void {
    window.scrollTo(0,0);
  }


}
