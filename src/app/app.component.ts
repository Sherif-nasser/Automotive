import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //from here the trouble starts
  title = 'project';

  constructor() {
  }
}
