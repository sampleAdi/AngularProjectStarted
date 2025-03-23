import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, NgIf]
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  userName: string = '';
  errorMsg: string = '';
  logoUrl: string = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg';

  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }

  validateUserName() {
    const pattern = /^[A-Z][a-zA-Z]{2,}$/; // Starts with uppercase and min 3 characters
    if (!pattern.test(this.userName)) {
      this.errorMsg = 'Name is incorrect!';
    } else {
      this.errorMsg = '';
    }
  }
}