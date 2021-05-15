import { Component } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';

interface User {
  name: string;
  email: string;
  tel: number;
  text: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // nome: string;
  // email: string;
  // tel: number;
  // text: string;
  //
  // users: User[] = [];

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', Validators.required],
    text: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }
  onSubmit(): void{
    if (this.profileForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    }
    console.log(this.profileForm.value);
  }
  // add(form: NgForm): void {
  //   this.users.push(form.value as User);
  //   console.log(form);
  //   form.reset();
  // }

}
