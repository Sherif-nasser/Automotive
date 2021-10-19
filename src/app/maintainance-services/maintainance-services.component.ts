import { HostListener,Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-maintainance-services',
  templateUrl: './maintainance-services.component.html',
  styleUrls: ['./maintainance-services.component.css']
})
export class MaintainanceServicesComponent implements OnInit {



  currentClasses: Record<string, boolean> = {};

  isRotated : boolean =false;
  rotated :boolean = false;

  constructor() {
  
}

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

/**
 * name
 */
rotation(){
  // this.isRotated = !this.isRotated;
  this.isRotated = !this.isRotated;
  
}


}

