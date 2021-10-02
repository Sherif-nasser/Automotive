import { HostListener,Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maintainance-services',
  templateUrl: './maintainance-services.component.html',
  styleUrls: ['./maintainance-services.component.css']
})
export class MaintainanceServicesComponent implements OnInit {
 

  currentClasses: Record<string, boolean> = {};
  isRotated : boolean =false;


  constructor() {
       
  }

  ngOnInit(): void {
  }

/**
 * name
 */
public rotation() {


}
 
//union types
  // let mixesArray : (string|number|boolean) [] = ['sherif', 1, false];  
  // console.log(mixesArray[2]);
  // let object = string|number|boolean; without the prentheses

//objects 

  //  let variable : object;

  //   variable = {
  //     name: string,
  //     number: number,
  //     isEducated : boolean
  //   };
  //   variable = {name:'sherif', number:20 , isEducated:true};
  //   console.log(variable.name + ' is '+ variable.age +' years old '+ variable.isEducated);

 

}
