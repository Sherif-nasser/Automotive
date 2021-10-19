import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daewoo',
  templateUrl: './daewoo.component.html',
  styleUrls: ['./daewoo.component.css']
})
export class DaewooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
