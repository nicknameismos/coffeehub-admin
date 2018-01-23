import { Component, OnInit } from '@angular/core';
import { Auth } from 'app/provider/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServerConfig } from 'app/provider/server.config';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private credentials: any = {};

  constructor(private server: ServerConfig, private auth: Auth, private router: Router, private location: Location) {

  }

  ngOnInit() {
    this.server.isLogin().subscribe(data => {
      if (data) {
        this.router.navigate(['/manage-shop']);
      }
    });
  }

  login() {
    this.auth.sigin(this.credentials).subscribe(data => {
      window.localStorage.setItem('user', JSON.stringify(data));
      // if (data.roles[0] === 'admin') {
      //   this.router.navigate(['/manage-shop']);
      // } else if (data.roles[0] === 'shop') {
      //   this.router.navigate(['/create-shop']);
      // }
      // window.location.reload('/manage-shop');
      // this.router.navigate(['/manage-shop']);
      // this.router.navigate(['/manage-shop']);
      location.reload();
      // this.location.go('/manage-shop');
    }, err => {
      console.log(err);
    });
  }

}
