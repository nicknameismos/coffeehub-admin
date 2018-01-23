import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { PubSubService } from 'angular2-pubsub';

enableProdMode();
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loading: boolean = false;
  constructor(public location: Location, private pubsub: PubSubService) {

  }

  ngOnInit() {
    $.material.options.autofill = true;
    $.material.init();
    this.pubsub.$sub('loading', data => {
      this.loading = data;
    });
  }

  isMaps(path) {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path == titlee) {
      return false;
    }
    else {
      return true;
    }
  }
}
