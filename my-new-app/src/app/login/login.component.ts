import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  newForm: FormGroup;
  successMessage: string;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {

    this.createForm();
  }


  createForm()  {
    this.newForm = this.fb.group( {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      activity: ['', [Validators.required]],
      comments: ['', [Validators.required]],

    });
  }

  get firstName() { return this.newForm.get('firstName'); }
  get lastName() { return this.newForm.get('lastName'); }
  get emailAddress() { return this.newForm.get('emailAddress'); }
  get activity() { return this.newForm.get('activity'); }
  get comments() { return this.newForm.get('comments'); }

  // validations for the form
  shouldShowInvalid(controlName: string): boolean {
    const control = this.newForm.get(controlName);
    if (control.invalid && (control.touched || control.dirty)) {
      return true;
    }
  }

  onSubmit() {
    const values = this.newForm.value;
    this.loginService.storeLoginDetails(values)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.newForm.reset();
    this.successMessage = 'Your Application has been submitted.';
  }
}
