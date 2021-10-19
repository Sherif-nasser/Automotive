import { isRooted } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clickable : boolean =true;
  isRotated : boolean=false;
  lang: string = '';

  buttons:string[] = ['EN', 'AR'];
  selectedButton: string='';
  


  isButtonSelected(button: string) {
    return button === this.selectedButton;
  }

  switchButton(button: string) {
    this.selectedButton = button;

    if(button == 'AR'){
      this.translate.use('ar');
      return this.lang='AR';
    }else if(button == 'EN'){
      this.translate.use('en');
      return this.lang='EN';
    }

    return button=this.lang;
  }

  constructor(public translate: TranslateService) {
   
}

  ngOnInit(): void {
    this.selectedButton = this.lang;
    this.buttons.forEach(button => {
      this.selectedButton = button;
    });

    
    if(this.selectedButton = 'EN'){
      this.translate.setDefaultLang('en');
      this.isButtonSelected('EN');
      
    }else{
      this.translate.setDefaultLang('ar');  
      this.isButtonSelected('EN');    
    }
  }


  rotation(){
    // this.isRotated = !this.isRotated;
    this.isRotated =!this.isRotated;
    this.clickable = !this.clickable;

  }




  all(){
    this.rotation();
  }
}
