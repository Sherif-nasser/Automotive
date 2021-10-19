import { Component, OnInit } from '@angular/core';
// import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
}

}




    
  //   let loader =new Loader({
  //     apiKey: 'AIzaSyB9nDcNuV8haUFr_yP8EmsXqwWROQ0zvNg'
  //   })
    
  //   loader.load().then(()=>{
  //     new google.maps.Map(document.getElementById("map") as HTMLElement,
  //   {
  //     center:{lat: 30, lng: -110},
  //     zoom: 8
  //   })

  // })