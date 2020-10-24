import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = new User('', '');
  formSubmitted = false;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    this.formSubmitted = true;
    this._authService.loginUser(this.loginUserData).subscribe(
      (data) => {
        console.log(data);
        // on successful login, we store the token in the localStorage and navigate the user to the members route
        localStorage.setItem('token', data.token);
        this._router.navigateByUrl('/special');
      },
      (error) => console.log('Error ', error)
    );
  }
}
