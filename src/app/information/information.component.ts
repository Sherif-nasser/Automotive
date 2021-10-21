import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  faBars = faBars;
  
  isRotated : boolean =false;
  rotated :boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

rotation(){
  // this.isRotated = !this.isRotated;
  this.isRotated = !this.isRotated;
  
}
}
