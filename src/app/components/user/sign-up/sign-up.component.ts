import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( public userService: UserService ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.userService.postUserlog(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422){
          this.serverErrorMessages = err.error.join('<br/>')
        } 
        else 
        this.serverErrorMessages = 'Something went wrong. Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm){
    this.userService.selectedUser = {
    _id: '',
    first_name: '',
    last_name: '',
    address:'',
    phone: 0,
    email: '',
    perfil: '',
    password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
