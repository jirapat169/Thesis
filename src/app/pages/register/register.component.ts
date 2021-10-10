import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;

  constructor(public service: AppService, private formBuilder: FormBuilder) {
    this.formRegister = this.formBuilder.group({
      uid: ['', Validators.required],
      prename: ['', Validators.required],
      firstNameThai: ['', Validators.required],
      lastNameThai: ['', Validators.required],
      studentId: ['', Validators.required],
      personalId: ['', Validators.required],
      mail: [''],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSubmitRegister = (): void => {
    if (
      this.formRegister.value?.password ===
      this.formRegister.value?.confirm_password
    ) {
      this.service
        .showConfirm('ยืนยันการสมัครสมาชิก', '', 'warning')
        .then((val1) => {
          if (val1) {
            this.service
              .httpPost(`/register`, JSON.stringify(this.formRegister.value))
              .then((value: any) => {
                if (value.isQuery) {
                  this.service.showAlert(
                    'สำเร็จ',
                    'สามารถเข้าสู่ระบบได้ทันที',
                    'success'
                  );
                  this.service.navRouter('/login');
                  return;
                }

                if (`${value.message}`.includes('uid')) {
                  this.service.showAlert(
                    'ไม่สามารถใช้ชื่อผู้ใช้งานนี้ได้',
                    '',
                    'error'
                  );
                }

                console.log(value);
                // this.service.showAlert('', value.message, 'error');
              });
          }
        });
    } else {
      this.service.showAlert('รหัสผ่านไม่ตรงกัน', '', 'error');
    }
  };
}
