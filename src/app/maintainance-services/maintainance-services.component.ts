import { HostListener,Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-maintainance-services',
  templateUrl: './maintainance-services.component.html',
  styleUrls: ['./maintainance-services.component.css']
})
export class MaintainanceServicesComponent implements OnInit {



  // currentClasses: Record<string, boolean> = {};
  user? : {id: number, name: string};
  isRotated : boolean =false;
  rotated :boolean = false;

  constructor(private route:ActivatedRoute) {
    console.log(route);
}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.user = {id:1,name:'sherif'};
    console.log(this.user.id);
    console.log(this.user.name);
  }

/**
 * name
 */
rotation(){
  // this.isRotated = !this.isRotated;
  this.isRotated = !this.isRotated;
  
}


}

