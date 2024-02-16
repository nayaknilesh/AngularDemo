import { Component } from '@angular/core';
import { registerFormConfig } from './constants/register-form-constant';
import { IForm } from './interface/form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicform';
  registerForm = registerFormConfig as IForm
}
