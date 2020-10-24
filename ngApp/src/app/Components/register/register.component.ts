import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = new User('', '');
  private formSubmitted = false;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this.formSubmitted = true; //ds fires and then update the form submission status to true so we can hide the form
    //We call the enrollment method in d service to submit the form
    this._authService
      .registerUser(this.registerUserData)
      //we subscribe to its observable
      .subscribe(
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
