import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-react-form-demo',
  templateUrl: './react-form-demo.component.html',
  styleUrls: ['./react-form-demo.component.css']
})
export class ReactFormDemoComponent implements OnInit {

  constructor(private lservice: LoginService, private router: Router) { }

  loginForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)]),

      password: new FormControl('', [Validators.required])
    },

  )

  ngOnInit(): void {
    if (this.lservice.isUserLoggedIn()) {
      this.router.navigate(["/posts"])
      console.log(this.lservice.isUserLoggedIn())
    }
  }
  onSubmit() {
    console.log("Log")
    //let formData = JSON.stringify(this.loginForm.value)
    this.lservice.loginUser(this.loginForm.value)
      .subscribe(() => this.router.navigate(["/posts"]))

  }


}
