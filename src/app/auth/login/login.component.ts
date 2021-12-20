import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onClickLogin(): void {
    this.authService.userLogin(this.email, this.password);
  }

}
