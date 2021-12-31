import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onClickRegister(): void {
    this.authService.userRegister(this.email, this.password);
  }

}
