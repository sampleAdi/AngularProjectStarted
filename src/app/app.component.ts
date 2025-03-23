import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Optional if you want styles
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl: string = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg';

  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}