import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ManageUserService } from 'app/manage-user/manage-user.service';
import { ServerConfig } from 'app/provider/server.config';
import { Router } from '@angular/router';
import { PubSubService } from 'angular2-pubsub';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  @ViewChild('dissmissBtn2') dissmissBtn2;
  private listAllUser: Array<any> = [];
  private listCust: Array<any> = [];
  private listShopOwner: Array<any> = [];
  private listAdmin: Array<any> = [];
  private listBiker: Array<any> = [];
  private curentPage: Array<any> = [];
  private pageSelect: number = 0;
  private currentPageSelected: number = 1;
  private editingUserData: any = {};
  private tabType: string = 'customer';
  private action: string = '';
  constructor(private UserService: ManageUserService, private server: ServerConfig, private router: Router, private pubsub: PubSubService) {
  }

  ngOnInit() {
    this.pubsub.$pub('loading', true);
    this.server.isLogin().subscribe(data => {
      if (!data) {
        this.router.navigate(['/login']);
        this.pubsub.$pub('loading', false);
      } else {
        this.getAllUser();
      }
    });
  }

  getAllUser() {

    this.UserService.getUser().subscribe(jso => {
      this.listAllUser = jso.filterrole;
      this.listCust = [];
      this.listShopOwner = [];
      this.listAdmin = [];
      this.listBiker = [];
      this.listAllUser.forEach(element => {
        if (element.name === 'customer') {
          this.listCust.push(element.users);
        } else if (element.name === 'shopowner') {
          this.listShopOwner.push(element.users);
        } else if (element.name === 'admin') {
          this.listAdmin.push(element.users);
        } else if (element.name === 'biker') {
          this.listBiker.push(element.users);
        }

      });
      this.pubsub.$pub('loading', false);
    }, err => {
      this.pubsub.$pub('loading', false);
      const msgERR = JSON.parse(err._body);
      if (msgERR.message === 'Token is incorrect or has expired. Please login again') {
        alert('หมดระยะเวลาการเชื่อมต่อกับระบบบริหารร้านค้า \nกรุณาเข้าสู่ระบบใหม่อีกครั้ง');
        window.localStorage.clear();
      }
    });
  }

  deleteUser() {
    const r = confirm('ยืนยันการลบข้อมูล');
    if (r) {
      this.UserService.delete(this.editingUserData._id).subscribe(data => {
        console.log(data);
        this.getAllUser();
        this.dissmissBtn2.nativeElement.click();
      }, err => {
        console.log(err);
      });
    }
  }

  addUser() {
    this.editingUserData = {};
    this.action = 'เพิ่มบัญชีผู้ใช้';
  }

  editUser(item) {
    this.action = 'แก้ไขบัญชีผู้ใช้';
    this.editingUserData = item;
  }

  saveUser() {
    this.pubsub.$pub('loading', true);
    if (this.action === 'แก้ไขบัญชีผู้ใช้') {
      this.UserService.edit(this.editingUserData).subscribe(data => {
        this.getAllUser();
        this.dissmissBtn2.nativeElement.click();
      }, err => {
        console.log(err);
      });
    } else {
      this.UserService.add(this.editingUserData).subscribe(data => {
        this.getAllUser();
        this.dissmissBtn2.nativeElement.click();
      }, err => {
        console.log(err);
      });
    }
  }

  activeTab(tabType) {
    this.tabType = tabType;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
}
