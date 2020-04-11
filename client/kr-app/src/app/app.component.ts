import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myClickFunction(event) {
    var a = 5;
    console.log(a);
    alert("Button is clicked");
    
 }
}

