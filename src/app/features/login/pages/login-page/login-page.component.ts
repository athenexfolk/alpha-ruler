import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "src/app/core/services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  message = '';
  isShowMessage = false;

  loginLabel = {
    title: 'เข้าสู่ระบบ',
    username: 'ชื่อผู้ใช้',
    password: 'รหัสผ่าน',
    submit: 'ตกลง',
  };
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  login = this.fb.nonNullable.group({
    username: '',
    password: '',
  });

  submitLogin() {
    if (!this.login.valid) {
      this.isShowMessage = true;
      this.message = 'โปรดตรวจสอบข้อมูล';
    } else {
      if (
        this.auth.compare(
          this.login.value.username!,
          this.login.value.password!
        )
      ) {
        this.auth.setToken('pass');
        this.router.navigate(['/admin']).then()
      } else {
        this.isShowMessage = true
        this.message = 'ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง'
      }
    }
  }
}
