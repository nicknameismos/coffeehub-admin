import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { ManageFileComponent } from './manage-file/manage-file.component';
import { ManageDocumentComponent } from './manage-document/manage-document.component';
import { CreateSellComponent } from './create-sell/create-sell.component';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { ManageShopComponent } from './manage-shop/manage-shop.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { DragulaModule } from 'ng2-dragula';
import { FacebookModule } from 'ngx-facebook';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ManageShopService } from 'app/manage-shop/manage-shop.service';
import { ServerConfig } from 'app/provider/server.config';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { Auth } from 'app/provider/auth';
import { ShopService } from 'app/create-shop/create-shop.service';

import { Ng2MapModule } from 'ng2-map';
import { UiSwitchModule } from 'ngx-toggle-switch/src'
import { Pager } from 'app/provider/pager';
import { NgxGalleryModule } from 'ngx-gallery';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { ModalModule } from 'ngx-bootstrap/modal';

import 'hammerjs';
import { ManageUserService } from 'app/manage-user/manage-user.service';
import { ManageAdsComponent } from './manage-ads/manage-ads.component';
import { SortablejsModule } from 'angular-sortablejs';
import { PubSubModule } from 'angular2-pubsub';
import { ADSService } from 'app/manage-ads/manage-ads.service';
import { DatePipe } from '@angular/common';
import { ManageCampaignComponent } from './manage-campaign/manage-campaign.component';
import { CampaignService } from 'app/manage-campaign/manage-campaign.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    SalesComponent,
    PurchaseOrderComponent,
    ProductComponent,
    CustomerComponent,
    ManageFileComponent,
    ManageDocumentComponent,
    CreateSellComponent,
    ManageShopComponent,
    CreateShopComponent,
    LoginComponent,
    ManageUserComponent,
    ManageAdsComponent,
    ManageCampaignComponent,
    // Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    ModalModule.forRoot(),
    FacebookModule.forRoot(),
    PubSubModule.forRoot(),
    BootstrapModalModule,
    AppRoutingModule,
    UiSwitchModule,
    NgxGalleryModule,
    NgbModule.forRoot(),
    Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDcsyfUw4ToTjnU9i_IxfdaoQZKs8suBPc' }),
    SortablejsModule.forRoot({ animation: 150 }),
    ImageCropperModule
  ],
  providers: [
    DashboardService,
    ManageShopService,
    ManageUserService,
    ServerConfig,
    Auth,
    ShopService,
    Pager,
    ADSService,
    CampaignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
