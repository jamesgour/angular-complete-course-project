import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor() { }

  ngOnInit() { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}