import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  hide = true;

  nick='hehe';

  login(wartosc: string){
    console.info(wartosc);
  }
}
