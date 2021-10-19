import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ariston',
  templateUrl: './ariston.component.html',
  styleUrls: ['./ariston.component.css']
})
export class AristonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
