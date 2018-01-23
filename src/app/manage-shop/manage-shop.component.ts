import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import { FacebookService, InitParams } from 'ngx-facebook';
import { error } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { ManageShopService } from 'app/manage-shop/manage-shop.service';
import { Router } from '@angular/router';
import { ServerConfig } from 'app/provider/server.config';
import { ShopService } from 'app/create-shop/create-shop.service';
declare var google;
import { PubSubService } from 'angular2-pubsub';
@Component({
  selector: 'app-manage-shop',
  templateUrl: './manage-shop.component.html',
  styleUrls: ['./manage-shop.component.css']
})
export class ManageShopComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('dissmissBtn') dissmissBtn;
  // @ViewChild('loadingControl') loadingControl;
  private shopList: Array<any> = [];
  private importForm: string;
  private selectedShop: Array<any> = [];
  private loadingIdx: Array<any> = [];
  private shops: Array<any> = [];
  private local: string;
  private shopType: string;
  private keyword: string;
  private action: string;
  private latLng: any = {
    lat: 13.7466532,
    lng: 100.5347222
  }; //central world
  private customSearch: boolean = false;
  private shopTableList: Array<any> = [];
  private shopTableListNew: Array<any> = [];
  private shopForEdit: any = {};
  private shopsL: any = {};
  menuItems: any[];
  private selectedTab = 0;
  private searchKeyword: string = null;
  private typeTab = 'รายการร้านค้า';
  private curentPage: Array<any> = [];
  private pageSelect: number = 0;
  private currentPageSelected: number = 1;
  loading: boolean = true;
  constructor(private pubsub: PubSubService, public shopService: ShopService, private server: ServerConfig, private router: Router, private fb: FacebookService, public manageShopService: ManageShopService) {

  }

  onRightClick() {
    console.log('Right Click');
    return false;
  }

  ngOnInit() {
    this.server.isLogin().subscribe(data => {
      if (!data) {
        this.router.navigate(['/login']);
        this.loading = false;
      } else {
        this.pubsub.$pub('loading', true);
        this.getListShop();
      }
    });
  }

  getListShop() {
    this.manageShopService.getLocalJSONshoplist().subscribe(jso => {
      this.loading = false;
      this.shopsL = jso;
      this.pubsub.$pub('loading', false);
      this.curentPage[1] = 'active';
    }, err => {
      let msgERR = JSON.parse(err._body);
      if (msgERR.message === 'Token is incorrect or has expired. Please login again') {
        alert('หมดระยะเวลาการเชื่อมต่อกับระบบบริหารร้านค้า \nกรุณาเข้าสู่ระบบใหม่อีกครั้ง');
        window.localStorage.clear();
      }
    })
  }

  searchShop() {
    this.pubsub.$pub('loading', true);
    this.manageShopService.searchShop(this.typeTab, this.currentPageSelected, this.searchKeyword).subscribe(data => {
      this.shopsL.items = data.items;
      this.shopsL.pagings = data.pagings;
      this.pubsub.$pub('loading', false);
    }, err => {
      console.log(err);
    });
  }

  pageing(page: number) {
    this.pubsub.$pub('loading', true);
    this.pageSelect = 0;
    this.curentPage = [];
    this.curentPage[page] = 'active';
    this.pageSelect = (page - 1) * 10;
    this.currentPageSelected = page;
    this.manageShopService.searchShop(this.typeTab, page, this.searchKeyword).subscribe(data => {
      this.shopsL.items = data.items;
      this.pubsub.$pub('loading', false);
    }, err => {
      console.log(err);
    });
  }

  selectTab(name) {
    this.currentPageSelected = 1;
    this.typeTab = name;
    this.searchShop();
  }

  saveShops() {
    this.shops.forEach((element, i) => {
      if (!this.loadingIdx[element.id] && !this.selectedShop[element.id]) {

      } else {
        this.loadingIdx[element.id] = true;
        this.selectedShop[element.id] = true;
      }

      element.address = {
        address: element.vicinity,
        lat: element.lat,
        lng: element.lng
      };
      element.tel = element.phone;
      element.coverimage = element.img;
      element.importform = this.importForm;
      this.manageShopService.save(element).subscribe(dataRes => {
        this.loadingIdx[element.id] = false;
        console.log(dataRes);
      }, err => {
        this.loadingIdx[element.id] = false;
        console.log(err);
        if (JSON.parse(err._body).message.toString() === 'Name already exists') {
          alert("มีข้อมูลร้าน " + element.name + "แล้วค่ะ");
        }
        this.selectedShop[element.id] = false;
      });

      if (this.shops.length === i + 1) {
        this.dissmissBtn.nativeElement.click();
        this.getListShop();
      }
    });
  }

  deleteShop(shopID) {
    const cfDelete = confirm('ยืนยันการลบร้านค้า');
    if (cfDelete) {
      this.pubsub.$pub('loading', true);
      this.shopService.delete(shopID).subscribe(data => {
        this.getListShop();
      }, err => {
        console.log(err);
      });
    }
  }

  createShop() {
    window.localStorage.removeItem('selectShop');
    this.router.navigate(['/create-shop']);
  }

  editShop(shop) {
    window.localStorage.setItem('selectShop', shop._id);
    this.router.navigate(['/create-shop']);
  }

  convertLocalToGeo() {
    return new Promise((resolve, reject) => {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': this.local }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.latLng = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          console.log(this.latLng);
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }

  search() {
    this.customSearch = true;
    if (this.importForm == 'Google') {
      this.convertLocalToGeo().then(data => {
        this.getShopFromGoogle();
      }).catch(err => {
        console.log(err);
      });
    } else if (this.importForm == 'Facebook') {
      this.convertLocalToGeo().then(data => {
        this.getShopFromFacebook();
      }).catch(err => {
        console.log(err);
      });
    }
  }

  selectShops(id, ishave) {
    if (!ishave) {
      if (this.selectedShop[id]) {
        this.selectedShop[id] = false;
        this.processSelectShop(id);
      } else {
        this.selectedShop[id] = true;
        this.processSelectShop(id);
      }
    }
  }

  processSelectShop(id) {
    let checkDup: number = this.shops.findIndex(i => i.id === id);
    this.shopList.forEach(element => {
      if (element.id == id) {
        if (checkDup == -1) {
          this.shops.push(element);
        } else {
          this.shops.splice(checkDup, 1);
        }
      }
    });
  }

  getShopFromGoogle() {
    this.importForm = 'Google';
    this.shops = [];
    this.selectedShop = [];
    this.shopList = [];
    this.pubsub.$pub('loading', true);
    let map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 18
    });

    if (!this.customSearch) {
      this.local = 'สยามพารากอน';
      this.keyword = 'ก๋วยเตี๋ยว';
      this.shopType = '';
    }

    let request = {
      location: this.latLng,
      radius: '2000',
      types: [this.shopType],
      keyword: this.keyword
    };

    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status == 'OK') {
        results.forEach((element, i) => {
          element.id = element.place_id;
          element.img = element.photos ? element.photos[0].getUrl({ 'maxWidth': 318, 'maxHeight': 180 }) : 'http://www.freeiconspng.com/uploads/no-image-icon-15.png';
          element.lat = element.geometry.location.lat();
          element.lng = element.geometry.location.lng();
          let request2 = {
            placeId: element.place_id
          };

          setTimeout(() => {
            service.getDetails(request2, (place, status) => {
              if (status == google.maps.places.PlacesServiceStatus.OK) {
                element.phone = place.international_phone_number ? place.international_phone_number : '';
              }
            });
          }, 300 * i);
        });

        this.customSearch = false;
        this.pubsub.$pub('loading', false);
        this.checkDuplicateShop(results).then(data => {
          const newShopList: any = data;
          this.shopList = newShopList;
        }).catch(err => {
          this.pubsub.$pub('loading', false);
          console.log(err);
        });
      }
    });
  }

  checkDuplicateShop(importShopList) {
    return new Promise((resolve, reject) => {
      this.manageShopService.checkShopByName(importShopList).subscribe(data => {
        console.log(data);
        resolve(data.shopfind);
      }, err => {
        reject(err);
      });
    });
  }

  getShopFromFacebook() {
    this.pubsub.$pub('loading', true);
    this.importForm = 'Facebook';
    this.shopList = [];
    this.shops = [];
    this.selectedShop = [];

    if (!this.customSearch) {
      this.local = 'สยามพารากอน';
      this.keyword = 'ก๋วยเตี๋ยว';
      this.shopType = 'place';
    }

    this.fb.login().then(user => {
      console.log(user);
      this.fb.api('/search?center=' + this.latLng.lat + ',' + this.latLng.lng + '&distance=1000&q=' + this.keyword + '&type=' + this.shopType, 'get').then(stores => {
        this.dataStore(stores.data);
        this.pubsub.$pub('loading', false);
      }).catch(error => {
        this.pubsub.$pub('loading', false);
        console.log(error);
      });
    }).catch(err => {
      this.pubsub.$pub('loading', false);
      console.log(err);
    });
  }

  dataStore(stores: Array<any>) {
    const dataShops: Array<any> = [];
    stores.forEach((element, i) => {
      this.fb.api('/' + element.id + '?fields=photos{images},name,category,location,phone', 'get').then(storeData => {
        let shopNewScema: any = {};
        shopNewScema.img = storeData.photos ? storeData.photos.data[0].images[0].source : 'http://www.freeiconspng.com/uploads/no-image-icon-15.png';
        shopNewScema.id = storeData.id;
        shopNewScema.name = storeData.name;
        shopNewScema.vicinity = storeData.location.street ? storeData.location.street : '' + storeData.location.city;
        shopNewScema.phone = storeData.phone;
        shopNewScema.lat = storeData.location.latitude;
        shopNewScema.lng = storeData.location.longitude;
        dataShops.push(shopNewScema);
        if (stores.length === i + 1) {
          this.checkDuplicateShop(dataShops).then(data => {
            const newShopList: any = data;
            this.shopList = newShopList;
          }).catch(err => {
            console.log(err);
          });
        }
      }).catch(err2 => {
        console.log(err2);
      });
    });

    this.customSearch = false;
  }
  isSendMail(shop) {
    const cf = confirm('ยืนยันการส่งอีเมล');
    if (cf) {
      this.loading = true;
      let sendShop = shop;
      sendShop.isactiveshop = true;
      this.manageShopService.sendMail(sendShop).subscribe(data => {
        alert('ระบบได้ทำการส่ง User ไปให้ร้านเรียบร้อยแล้วค่ะ');
        this.manageShopService.getLocalJSONshoplist().subscribe(jso => {
          this.loading = false;
          this.getListShop();
          this.shopsL = jso;
          this.curentPage[1] = 'active';
        });
      }, err => {
        console.log(err);
        alert('ระบบไม่สามารถส่ง User ไปให้ร้านได้ค่ะ กรุณาติดต่อทางทีมงานค่ะ');
        this.getListShop();
        this.loading = false;
      });
    }
  }

  activeChange($event, shop) {
    if ($event === true) {
      shop.isactiveshop = true;
      this.manageShopService.setActiveShop(shop).subscribe(succ => {
        alert('ระบบเปลี่ยนสถานะของร้าน ' + shop.name + ' เป็น Active เรียบร้อยแล้วค่ะ');
        this.getListShop();
      }, err => {
        console.log('Update active shop ERROR : ', err);
        this.getListShop();
      });
    } else if ($event === false) {
      shop.isactiveshop = false;
      this.manageShopService.setActiveShop(shop).subscribe(succ => {
        alert('ระบบเปลี่ยนสถานะของร้าน ' + shop.name + ' เป็น Inactive เรียบร้อยแล้วค่ะ');
        this.getListShop();
      }, err => {
        console.log('Update active shop ERROR : ', err);
        this.getListShop();
      });
    }
  }
}
