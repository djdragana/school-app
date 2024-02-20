import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public invalidData: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      this.invalidData = true;
    }
  }
}
