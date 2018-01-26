import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SalesComponent } from 'app/sales/sales.component';
import { PurchaseOrderComponent } from 'app/purchase-order/purchase-order.component';
import { ProductComponent } from 'app/product/product.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { ManageFileComponent } from 'app/manage-file/manage-file.component';
import { ManageDocumentComponent } from 'app/manage-document/manage-document.component';
import { CreateSellComponent } from 'app/create-sell/create-sell.component';
import { ManageShopComponent } from 'app/manage-shop/manage-shop.component';
import { CreateShopComponent } from 'app/create-shop/create-shop.component';
import { ManageUserComponent } from 'app/manage-user/manage-user.component';
import { LoginComponent } from 'app/login/login.component';
import { AppComponent } from 'app/app.component';
import { ManageAdsComponent } from 'app/manage-ads/manage-ads.component';
import { ManageCampaignComponent } from 'app/manage-campaign/manage-campaign.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'purchase-order', component: PurchaseOrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'manage-file', component: ManageFileComponent },
  { path: 'manage-document', component: ManageDocumentComponent },
  { path: 'create-sell', component: CreateSellComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: 'create-shop', component: CreateShopComponent },
  {
    path: 'manage-shop', component: ManageShopComponent, children: [{
      path: 'create-shop',
      component: CreateShopComponent
    }]
  },
  { path: 'manage-ads', component: ManageAdsComponent},
  { path: 'manage-user', component: ManageUserComponent},
  { path: 'manage-campaign', component: ManageCampaignComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
