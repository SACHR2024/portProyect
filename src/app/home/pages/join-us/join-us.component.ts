import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {


  constructor(
    private FBuilder : FormBuilder
  ){

  }

  public userJoin = this.FBuilder.group({
    'name': this.FBuilder.control('', [Validators.required]),
    'userName': this.FBuilder.control(''),
    'email': this.FBuilder.control('', [Validators.required, Validators.email]),
    'password': this.FBuilder.control('', [Validators.maxLength(8), Validators.minLength(5)])
  })

  onSubmit(){
  }

}
