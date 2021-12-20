import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Injectable({
 providedIn: 'root'
})
export class AuthService {

 constructor(
   private afAuth: AngularFireAuth,
   private router: Router,
   private toastr: ToastrService
 ) {
   this.afAuth.authState.subscribe((user) => {
     if (user) {
       localStorage.setItem('userDetails', JSON.stringify(user));
     } else {
       localStorage.setItem('userDetails', null!);
     }
   })
 }

 // Log In User
 async userLogin(email: string, password: string): Promise<void>  {
    await this.afAuth.signInWithEmailAndPassword(email, password).then((res) => {
      if (res.user!.emailVerified != true) {
        this.sendVerificationMail();
        window.alert('Please validate your email address. Kindly check your inbox.');
      } else {
      console.log('response from login: ', res);
      this.router.navigate(['/home']);
      localStorage.setItem('user', JSON.stringify(res.user));
    }
    }).catch((err) => {
      console.log('Error while login: ', err);
      this.toastr.error(err.message, err.code);
    });
  }

/*if (password != "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}") {
    window.alert('Password invalid, must contain one number, one uppercase letter, one lowercase letter and one special character')*/

  // Register user
  async userRegister(email: string, password: string): Promise<void> {
    await this.afAuth.createUserWithEmailAndPassword(email, password).then((res) => {
     console.log('response from register: ', res);
     this.toastr.success('User successfully registered. We sent you a verification mail please check your mail box', 'Success');
     this.router.navigate(['/verify-email']);
     /**
      * Now, calling sendVerificationMail() function
      * to send the verification email, after successful register.
      */
     this.sendVerificationMail();

   }).catch((err) => {
     console.log('Error while login: ', err);
     this.toastr.error(err.message, err.code);
   });
 }

 // Verification mail user
 async sendVerificationMail(): Promise<void> {
    await this.afAuth.onAuthStateChanged((user) => {
      user?.sendEmailVerification();
    });
  }

  //Reset password
  async sendResetPasswordMail(email: string): Promise<void> {
    await this.afAuth.sendPasswordResetEmail(email).then((res) => {
      console.log('We sent you a mail with password reset link, please check your mail inbox.');
      this.toastr.info('Please check your mail box, we have sent you an email with password reset link', 'Alert');
    }).catch((err) => {
      console.log('Error while login: ', err);
      this.toastr.error(err.message, err.code);
    });
  }

  //Logout
  async logout(): Promise<void> {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.toastr.info('Logout successfully.');
    this.router.navigate(['']);
  }

}
