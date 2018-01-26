webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-bg {\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 2000;\r\n    position: absolute;\r\n}\r\n\r\n.gif-po {\r\n    margin-left: 50%;\r\n    margin-top: 18%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div *ngIf=\"loading\" class=\"loading-bg\"><img class=\"gif-po\" src=\"../assets/img/35.png\" alt=\"\"></div>\r\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_pubsub__ = __webpack_require__("../../../../angular2-pubsub/esm/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var AppComponent = (function () {
    function AppComponent(location, pubsub) {
        this.location = location;
        this.pubsub = pubsub;
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.pubsub.$sub('loading', function (data) {
            _this.loading = data;
        });
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_pubsub__["b" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_pubsub__["b" /* PubSubService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sales_sales_component__ = __webpack_require__("../../../../../src/app/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__purchase_order_purchase_order_component__ = __webpack_require__("../../../../../src/app/purchase-order/purchase-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__manage_file_manage_file_component__ = __webpack_require__("../../../../../src/app/manage-file/manage-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__manage_document_manage_document_component__ = __webpack_require__("../../../../../src/app/manage-document/manage-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__create_sell_create_sell_component__ = __webpack_require__("../../../../../src/app/create-sell/create-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__manage_shop_manage_shop_component__ = __webpack_require__("../../../../../src/app/manage-shop/manage-shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_manage_shop_manage_shop_service__ = __webpack_require__("../../../../../src/app/manage-shop/manage-shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__create_shop_create_shop_component__ = __webpack_require__("../../../../../src/app/create-shop/create-shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_app_provider_auth__ = __webpack_require__("../../../../../src/app/provider/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_app_create_shop_create_shop_service__ = __webpack_require__("../../../../../src/app/create-shop/create-shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng2_map__ = __webpack_require__("../../../../ng2-map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng2_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_ng2_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_toggle_switch_src__ = __webpack_require__("../../../../ngx-toggle-switch/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_app_provider_pager__ = __webpack_require__("../../../../../src/app/provider/pager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_app_manage_user_manage_user_service__ = __webpack_require__("../../../../../src/app/manage-user/manage-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__manage_ads_manage_ads_component__ = __webpack_require__("../../../../../src/app/manage-ads/manage-ads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_angular2_pubsub__ = __webpack_require__("../../../../angular2-pubsub/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_app_manage_ads_manage_ads_service__ = __webpack_require__("../../../../../src/app/manage-ads/manage-ads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_app_manage_campaign_manage_campaign_component__ = __webpack_require__("../../../../../src/app/manage-campaign/manage-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_app_manage_campaign_manage_campaign_service__ = __webpack_require__("../../../../../src/app/manage-campaign/manage-campaign.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































// import { ModalModule } from 'ngx-bootstrap/modal';








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__table_list_table_list_component__["a" /* TableListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__upgrade_upgrade_component__["a" /* UpgradeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__sales_sales_component__["a" /* SalesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__purchase_order_purchase_order_component__["a" /* PurchaseOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_19__customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__manage_file_manage_file_component__["a" /* ManageFileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__manage_document_manage_document_component__["a" /* ManageDocumentComponent */],
            __WEBPACK_IMPORTED_MODULE_22__create_sell_create_sell_component__["a" /* CreateSellComponent */],
            __WEBPACK_IMPORTED_MODULE_24__manage_shop_manage_shop_component__["a" /* ManageShopComponent */],
            __WEBPACK_IMPORTED_MODULE_32__create_shop_create_shop_component__["a" /* CreateShopComponent */],
            __WEBPACK_IMPORTED_MODULE_34__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__manage_user_manage_user_component__["a" /* ManageUserComponent */],
            __WEBPACK_IMPORTED_MODULE_44__manage_ads_manage_ads_component__["a" /* ManageAdsComponent */],
            __WEBPACK_IMPORTED_MODULE_48_app_manage_campaign_manage_campaign_component__["a" /* ManageCampaignComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_26_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_28_ngx_modialog__["e" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_27_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_46_angular2_pubsub__["a" /* PubSubModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_29_ngx_modialog_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_38_ngx_toggle_switch_src__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_40_ngx_gallery__["NgxGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_37_ng2_map__["Ng2MapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDcsyfUw4ToTjnU9i_IxfdaoQZKs8suBPc' }),
            __WEBPACK_IMPORTED_MODULE_45_angular_sortablejs__["SortablejsModule"].forRoot({ animation: 150 }),
            __WEBPACK_IMPORTED_MODULE_41_ngx_image_cropper__["a" /* ImageCropperModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23_app_dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_30_app_manage_shop_manage_shop_service__["a" /* ManageShopService */],
            __WEBPACK_IMPORTED_MODULE_43_app_manage_user_manage_user_service__["a" /* ManageUserService */],
            __WEBPACK_IMPORTED_MODULE_31_app_provider_server_config__["a" /* ServerConfig */],
            __WEBPACK_IMPORTED_MODULE_35_app_provider_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_36_app_create_shop_create_shop_service__["a" /* ShopService */],
            __WEBPACK_IMPORTED_MODULE_39_app_provider_pager__["a" /* Pager */],
            __WEBPACK_IMPORTED_MODULE_47_app_manage_ads_manage_ads_service__["a" /* ADSService */],
            __WEBPACK_IMPORTED_MODULE_49_app_manage_campaign_manage_campaign_service__["a" /* CampaignService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_sales_sales_component__ = __webpack_require__("../../../../../src/app/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_purchase_order_purchase_order_component__ = __webpack_require__("../../../../../src/app/purchase-order/purchase-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_manage_file_manage_file_component__ = __webpack_require__("../../../../../src/app/manage-file/manage-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_manage_document_manage_document_component__ = __webpack_require__("../../../../../src/app/manage-document/manage-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_create_sell_create_sell_component__ = __webpack_require__("../../../../../src/app/create-sell/create-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_manage_shop_manage_shop_component__ = __webpack_require__("../../../../../src/app/manage-shop/manage-shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_create_shop_create_shop_component__ = __webpack_require__("../../../../../src/app/create-shop/create-shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_manage_ads_manage_ads_component__ = __webpack_require__("../../../../../src/app/manage-ads/manage-ads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_manage_campaign_manage_campaign_component__ = __webpack_require__("../../../../../src/app/manage-campaign/manage-campaign.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_22_app_login_login_component__["a" /* LoginComponent */] },
    { path: 'sales', component: __WEBPACK_IMPORTED_MODULE_12_app_sales_sales_component__["a" /* SalesComponent */] },
    { path: 'purchase-order', component: __WEBPACK_IMPORTED_MODULE_13_app_purchase_order_purchase_order_component__["a" /* PurchaseOrderComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_14_app_product_product_component__["a" /* ProductComponent */] },
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_15_app_customer_customer_component__["a" /* CustomerComponent */] },
    { path: 'manage-file', component: __WEBPACK_IMPORTED_MODULE_16_app_manage_file_manage_file_component__["a" /* ManageFileComponent */] },
    { path: 'manage-document', component: __WEBPACK_IMPORTED_MODULE_17_app_manage_document_manage_document_component__["a" /* ManageDocumentComponent */] },
    { path: 'create-sell', component: __WEBPACK_IMPORTED_MODULE_18_app_create_sell_create_sell_component__["a" /* CreateSellComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: 'create-shop', component: __WEBPACK_IMPORTED_MODULE_20_app_create_shop_create_shop_component__["a" /* CreateShopComponent */] },
    {
        path: 'manage-shop', component: __WEBPACK_IMPORTED_MODULE_19_app_manage_shop_manage_shop_component__["a" /* ManageShopComponent */], children: [{
                path: 'create-shop',
                component: __WEBPACK_IMPORTED_MODULE_20_app_create_shop_create_shop_component__["a" /* CreateShopComponent */]
            }]
    },
    { path: 'manage-ads', component: __WEBPACK_IMPORTED_MODULE_23_app_manage_ads_manage_ads_component__["a" /* ManageAdsComponent */] },
    { path: 'manage-user', component: __WEBPACK_IMPORTED_MODULE_21_app_manage_user_manage_user_component__["a" /* ManageUserComponent */] },
    { path: 'manage-campaign', component: __WEBPACK_IMPORTED_MODULE_24_app_manage_campaign_manage_campaign_component__["a" /* ManageCampaignComponent */] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <!-- <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Portfolio\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n        </p> -->\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" *ngIf=\"isLogin\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- <li>\r\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li> -->\r\n\r\n                <!-- ///////////Notification/////////////// -->\r\n                <!-- <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"#\">Another Notification</a></li>\r\n                        <li><a href=\"#\">Another One</a></li>\r\n                    </ul>\r\n                </li> -->\r\n                <!-- ///////////Notification/////////////// -->\r\n\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">person</i> สวัสดีคุณ {{user.username}}\r\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">ข้อมูลส่วนตัว</a></li>\r\n                        <li><a href=\"#\">เปลี่ยนรหัสผ่าน</a></li>\r\n                        <li><a (click)=\"logout()\">ออกจากระบบ</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n            <!-- \r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form> -->\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(router, server, location, element) {
        this.router = router;
        this.server = server;
        this.element = element;
        this.user = {};
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.server.isLogin().subscribe(function (data) {
            _this.isLogin = data;
        });
        this.server.getUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.server.logout().subscribe(function (data) {
            _this.isLogin = false;
            location.reload();
            // this.router.navigate(['/']);
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return '';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".caret {\r\n    margin-top: 13px;\r\n    position: absolute;\r\n    right: 18px;\r\n}\r\n\r\n.bg2 {\r\n    background-color: #31383F !important;\r\n}\r\n\r\n.logo-img img {\r\n    width: 68px !important;\r\n    top: 12px !important;\r\n}\r\n\r\n.mgt-20 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.nav p {\r\n    color: #ed3840 !important;\r\n}\r\n\r\n.nav i {\r\n    color: #ed3840;\r\n}\r\n\r\n.logo {\r\n    background: #2b2b2b;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"#\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/biker.jpg\" />\r\n        </div>\r\n        <span class=\"mgt-20\">\r\n            <img src=\"../../../assets/img/D.png\" alt=\"image\" width=\"130px\" height=\"36px\">\r\n        </span>\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper bg2\">\r\n    <!-- <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\r\n        <div class=\"form-group form-black is-empty\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n        </button>\r\n    </form> -->\r\n\r\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\r\n        <li>\r\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li>\r\n                    <a href=\"#\">Mike John responded to your email</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">You have 5 new tasks</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">You're now friend with Andrew</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Another Notification</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Another One</a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"material-icons\">person</i>\r\n                <p class=\"hidden-lg hidden-md\">Profile</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <!-- <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\r\n                <a  [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li> -->\r\n            <!-- /////////////////////////////// custom////////////////// -->\r\n            <!-- <li>\r\n                <a data-toggle=\"collapse\" href=\"#report\" class=\"collapsed\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">assessment</i>\r\n                    <p>รายงาน <b class=\"caret\"></b></p>\r\n                </a>\r\n                <div class=\"collapse\" id=\"report\" aria-expanded=\"false\" style=\"height: 0px;\">\r\n                    <ul class=\"nav\">\r\n                        <li>\r\n                            <a [routerLink]=\"['dashboard']\">\r\n                                <span class=\"sidebar-normal\">ภาพราม</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['sales']\">\r\n                                <span class=\"sidebar-normal\">ยอดขาย</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['purchase-order']\">\r\n                                <span class=\"sidebar-normal\">ยอดซื้อ</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['product']\">\r\n                                <span class=\"sidebar-normal\">สินค้า</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['customer']\">\r\n                                <span class=\"sidebar-normal\">ลูกค้า</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['manage-file']\">\r\n                                <span class=\"sidebar-normal\">จัดการไฟล์</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['manage-document']\">\r\n                                <span class=\"sidebar-normal\">จัดการเอกสาร</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n            <li>\r\n                <a data-toggle=\"collapse\" href=\"#sell\" class=\"collapsed\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">unarchive</i>\r\n                    <p>รายการขาย <b class=\"caret\"></b></p>\r\n                </a>\r\n                <div class=\"collapse\" id=\"sell\" aria-expanded=\"false\" style=\"height: 0px;\">\r\n                    <ul class=\"nav\">\r\n                        <li>\r\n                            <a [routerLink]=\"['create-sell']\">\r\n                                <span class=\"sidebar-normal\">สร้างรายการขาย</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">ดูรายการขาย</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">บริการส่งสินค้า</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n            <li>\r\n                <a data-toggle=\"collapse\" href=\"#buy\" class=\"collapsed\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">move_to_inbox</i>\r\n                    <p>รายการซื้อ <b class=\"caret\"></b></p>\r\n                </a>\r\n                <div class=\"collapse\" id=\"buy\" aria-expanded=\"false\" style=\"height: 0px;\">\r\n                    <ul class=\"nav\">\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">สร้างรายการซื้อ</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">ดูรายการซื้อ</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n            <li>\r\n                <a data-toggle=\"collapse\" href=\"#product\" class=\"collapsed\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">inbox</i>\r\n                    <p>สินค้า <b class=\"caret\"></b></p>\r\n                </a>\r\n                <div class=\"collapse\" id=\"product\" aria-expanded=\"false\" style=\"height: 0px;\">\r\n                    <ul class=\"nav\">\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">สินค้า</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">คลังสินค้า/สาขา</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">สินค้าหลากคุณสมบัติ</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">หมวดหมู่</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n            <li>\r\n                <a data-toggle=\"collapse\" href=\"#customer\" class=\"collapsed\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">assignment_ind</i>\r\n                    <p>ลูกค้า / คู่ค้า <b class=\"caret\"></b></p>\r\n                </a>\r\n                <div class=\"collapse\" id=\"customer\" aria-expanded=\"false\" style=\"height: 0px;\">\r\n                    <ul class=\"nav\">\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">ลูกค้า / คู่ค้า</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">กลุ่มลูกค้า</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">ตัวแทนจำหน่าย</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">หน้าสั่งซื้อ</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n            <li>\r\n                <a data-toggle=\"collapse\" href=\"#money\" class=\"collapsed\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">account_balance_wallet</i>\r\n                    <p>การเงิน <b class=\"caret\"></b></p>\r\n                </a>\r\n                <div class=\"collapse\" id=\"money\" aria-expanded=\"false\" style=\"height: 0px;\">\r\n                    <ul class=\"nav\">\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">ดูภาพรวม</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">กระเป๋าเงิน</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">รายได้อื่น</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">รายจ่ายอื่น</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">รายการโอนเงิน</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n            <li>\r\n                <a data-toggle=\"collapse\" href=\"#settings\" class=\"collapsed\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">settings</i>\r\n                    <p>ตั้งค่า <b class=\"caret\"></b></p>\r\n                </a>\r\n                <div class=\"collapse\" id=\"settings\" aria-expanded=\"false\" style=\"height: 0px;\">\r\n                    <ul class=\"nav\">\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">ข้อมูลส่วนตัว</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">บริษัท / ร้านค้า</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">ผู้ใช้งาน</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">สิทธิ์การใช้งาน</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"dashboard\">\r\n                                <span class=\"sidebar-normal\">เชื่อมต่อบริการอื่น</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li> -->\r\n\r\n            <li *ngIf=\"!isLogin\">\r\n                <a [routerLink]=\"['manage-shop']\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p>เข้าสู่ระบบ</p>\r\n                </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"isLogin\">\r\n                <a [routerLink]=\"['manage-shop']\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p>จัดการร้านค้า</p>\r\n                </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"isLogin\">\r\n                <a [routerLink]=\"['manage-user']\">\r\n                    <i class=\"material-icons\">people</i>\r\n                    <p>จัดการบัญชีผู้ใช้</p>\r\n                </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"isLogin\">\r\n                <a [routerLink]=\"['manage-ads']\">\r\n                    <i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i>\r\n                    <p>จัดการโฆษณา</p>\r\n                </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"isLogin\">\r\n                <a [routerLink]=\"['manage-campaign']\">\r\n                    <i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i>\r\n                    <p>จัดการแคมเปญ</p>\r\n                </a>\r\n            </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'dashboard', title: 'ภาพราม', icon: '', class: '' },
    { path: 'sales', title: 'ยอดขาย', icon: '', class: '' },
    { path: 'purchase-order', title: 'ยอดซื้อ', icon: '', class: '' },
    { path: 'product', title: 'สินค้า', icon: '', class: '' },
    { path: 'customer', title: 'ลูกค้า', icon: '', class: '' },
    { path: 'manage-file', title: 'จัดการไฟล์', icon: '', class: '' },
    { path: 'manage-document', title: 'จัดการเอกสาร', icon: '', class: '' },
    { path: 'create-sell', title: 'สร้างรายการขาย', icon: '', class: '' },
    { path: 'manage-shop', title: 'จัดการร้านค้า', icon: '', class: '' },
    { path: 'manage-user', title: 'จัดการบัญชีผู้ใช้', icon: '', class: '' },
    { path: 'manage-ads', title: 'จัดการโฆษณา', icon: '', class: '' },
    { path: 'manage-campaign', title: 'จัดการแคมเปญ', icon: '', class: '' }
];
var SidebarComponent = (function () {
    function SidebarComponent(server) {
        this.server = server;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.server.isLogin().subscribe(function (data) {
            _this.isLogin = data;
        });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-sell/create-sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .card-header.card-header-text {\r\n    display: inline-block;\r\n}\r\n\r\n.pd {\r\n    padding: 0px 30px 0px 30px !important;\r\n}\r\n\r\n.checkbox label {\r\n    color: #000;\r\n}\r\n\r\n[blue] {\r\n    background-color: #00bcd4;\r\n    color: #fff;\r\n}\r\n\r\n[green] {\r\n    background-color: #4caf50;\r\n    color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-sell/create-sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <form action=\"/\" class=\"form-horizontal ng-untouched ng-pristine ng-valid\" method=\"get\" novalidate=\"\">\r\n          <div class=\"card-header card-header-text\" data-background-color=\"rose\">\r\n            <h4 class=\"card-title\">สร้างรายการขาย</h4>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 pd\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"ประเภท\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"รายการ\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"วันทำการการ\" type=\"date\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"อ้างอิง\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"ช่องทางการขาย\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\">\r\n                      <option>ไม่มีภาษี</option>\r\n                      <option>แยกภาษีมูลค่าเพิ่ม 7%</option>\r\n                      <option>รวมภาษีมูลค่าเพิ่ม 7%</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"ตัวแทนจำหน่าย\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"col-md-6 pd\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"ชื่อลูกค้า\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"รหัสลูกค้า\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"เบอร์โทรศัพท์ลูกค้า\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"อีเมลลูกค้า\" type=\"email\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" placeholder=\"ที่อยู่ลูกค้า\" rows=\"5\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"checkbox form-horizontal-checkbox\">\r\n                    <label>\r\n                      <input name=\"optionsCheckboxes\" type=\"checkbox\" [(ngModel)]=\"checkNo\"> กำหนดเลขผู้เสียภาษี, ชื่อสาขา, เลขที่สาขา\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\" *ngIf=\"checkNo\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"เลขประจำตัวผู้เสียภาษี\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\" *ngIf=\"checkNo\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"ชื่อสาขา\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12\" *ngIf=\"checkNo\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"เลขที่สาขา\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10\"></div>\r\n      <div class=\"col-md-2\">\r\n        <button class=\"btn\" type=\"submit\" green>+ เพิ่มสินค้า</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n            <h4 class=\"title\">เพิ่มข้อมูลสินค้า</h4>\r\n            <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n          </div>\r\n\r\n          <div class=\"card-content table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"text-danger\">\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>รหัส</th>\r\n                  <th>ชื่อสินค้า</th>\r\n                  <th class=\"text-center\">จำนวน</th>\r\n                  <th class=\"text-center\">มูลค่าต่อหน่วย</th>\r\n                  <th class=\"text-center\">ส่วนลดต่อหน่วย</th>\r\n                  <th class=\"text-center\">รวม</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>1</td>\r\n                  <td>P0000001</td>\r\n                  <td>ชุดเดรสสั้น คอกลม แขนบาน ลายขวาง ทรงใส่สบาย (สีดำ)</td>\r\n                  <td class=\"text-center\">10</td>\r\n                  <td class=\"text-center\">790</td>\r\n                  <td class=\"text-center\">90</td>\r\n                  <td class=\"text-center\">700</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>2</td>\r\n                  <td>P0000002</td>\r\n                  <td>KK เดรสสั้น แขน 3 ส่วน ลายริ้ว (สีดำ) รุ่น 8801</td>\r\n                  <td class=\"text-center\">10</td>\r\n                  <td class=\"text-center\">790</td>\r\n                  <td class=\"text-center\">90</td>\r\n                  <td class=\"text-center\">700</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>3</td>\r\n                  <td>P0000003</td>\r\n                  <td>KK ชุดเดรสสั้นน่ารัก สีดำตัดขาว รุ่น LW100</td>\r\n                  <td class=\"text-center\">10</td>\r\n                  <td class=\"text-center\">790</td>\r\n                  <td class=\"text-center\">90</td>\r\n                  <td class=\"text-center\">700</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>4</td>\r\n                  <td>P0000004</td>\r\n                  <td>Korea ชุดเดรสแฟชั่น ทรงหรูน่ารัก แขนระบาย(สีดำ) รุ่น 5309</td>\r\n                  <td class=\"text-center\">10</td>\r\n                  <td class=\"text-center\">790</td>\r\n                  <td class=\"text-center\">90</td>\r\n                  <td class=\"text-center\">700</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>5</td>\r\n                  <td>P0000005</td>\r\n                  <td>Charming ชุดเดรสดำชายระบาย ผ้ายืดเนื้อดีไม่ต้องรีด รุ่น D108</td>\r\n                  <td class=\"text-center\">10</td>\r\n                  <td class=\"text-center\">790</td>\r\n                  <td class=\"text-center\">90</td>\r\n                  <td class=\"text-center\">700</td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>ส่วนลด</td>\r\n                  <td>180.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>มูลค่ารวมก่อนภาษี</td>\r\n                  <td>18.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>ภาษีมูลค่าเพิ่ม (7%)</td>\r\n                  <td>180.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>มูลค่ารวม</td>\r\n                  <td>180.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>ภาษีหัก ณ ที่จ่าย</td>\r\n                  <td>3 %</td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <form action=\"/\" class=\"form-horizontal ng-untouched ng-pristine ng-valid\" method=\"get\" novalidate=\"\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"rose\">\r\n              <h4 class=\"card-title\">ข้อมูลการจัดส่งสินค้า</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 pd\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <input class=\"form-control\" placeholder=\"วันส่งสินค้า\" type=\"date\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <select class=\"form-control\">\r\n                        <option>Thailand Post</option>\r\n                        <option>Kerry</option>\r\n                        <option>LINE MAN</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <input class=\"form-control\" placeholder=\"ค่าส่ง (ที่เรียกเก็บจากลูกค้า)\" type=\"text\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <input class=\"form-control\" placeholder=\"Tracking No.\" type=\"text\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col-md-6 pd\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <input class=\"form-control\" placeholder=\"ชื่อผู้รับ\" type=\"text\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <textarea class=\"form-control\" placeholder=\"ที่อยู่/จัดส่ง\" rows=\"5\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 pd\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                      <b>มูลค่ารวมสุทธิ</b>\r\n                    </div>\r\n                    <div class=\"col-sm-9\">\r\n                      10.00 บาท\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                      <b>ยอดชำระรวม</b>\r\n                    </div>\r\n                    <div class=\"col-sm-9\">\r\n                      10.00 บาท\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                      <b>การชำระเงิน</b>\r\n                    </div>\r\n                    <div class=\"col-sm-9\">\r\n                      100 เงินสด\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-9\">\r\n                      <div class=\"form-group\">\r\n                        <select class=\"form-control\">\r\n                          <option>รอโอนสินค้า</option>\r\n                          <option>โอนทันทีออกจากคลังสินค้า</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 pd\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <textarea class=\"form-control\" placeholder=\"หมายเหตุ\" rows=\"6\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n          <button class=\"btn\" type=\"submit\" blue>บันทึก</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-sell/create-sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateSellComponent = (function () {
    function CreateSellComponent() {
    }
    CreateSellComponent.prototype.ngOnInit = function () {
    };
    return CreateSellComponent;
}());
CreateSellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-sell',
        template: __webpack_require__("../../../../../src/app/create-sell/create-sell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-sell/create-sell.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CreateSellComponent);

//# sourceMappingURL=create-sell.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-shop/create-shop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .camera {\r\n        position: absolute;\r\n        top: 20px;\r\n        right: 26px;\r\n        color: #fff;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .material-icons {\r\n        font-size: 34px;\r\n    }\r\n\r\n    .card-time-size {\r\n        height: 27.5vh;\r\n        border: 0.2rem solid black;\r\n    }\r\n\r\n    .time-elaspe {\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .name {\r\n        margin-top: -14%;\r\n        position: absolute;\r\n        color: #fff;\r\n        margin-left: 10px;\r\n        font-size: 2.0em;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .name2 {\r\n        margin-top: -9%;\r\n        position: absolute;\r\n        color: #fff;\r\n        margin-left: 10px;\r\n        font-size: 1.4em;\r\n    }\r\n\r\n    .name3 {\r\n        margin-top: -6%;\r\n        position: absolute;\r\n        color: #fff;\r\n        margin-left: 10px;\r\n        font-size: 1.0em;\r\n    }\r\n\r\n    .ca {\r\n        text-align: center;\r\n        /* position: absolute; */\r\n        /* margin-top: -2vh; */\r\n        /* background-color: rgba(0, 0, 0, 0.4); */\r\n        /* z-index: 1; */\r\n        /* background-color: black; */\r\n        width: 9vw;\r\n        /* width: 100%; */\r\n        height: 5vh;\r\n        color: #fff;\r\n        font-size: 1em;\r\n    }\r\n\r\n    .ovf {\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap;\r\n    }\r\n\r\n    .textClass {\r\n        opacity: 0.4;\r\n        background-color: black;\r\n    }\r\n\r\n    .row {\r\n        padding: 16px;\r\n    }\r\n\r\n    .img {\r\n        /* height: auto !important;\r\n    width: 8vw !important;\r\n    min-height: 5vh;\r\n     max-height: 5vh; \r\n    background-size:cover; */\r\n        width: 150px !important;\r\n        height: 150px !important;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .img-2 {\r\n        width: 164px;\r\n        height: 164px;\r\n        /* margin-left: 22%; */\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .ct {\r\n        text-align: center;\r\n    }\r\n\r\n    .h {\r\n        font-weight: bold;\r\n        margin-left: 6px;\r\n        /* border-bottom: 2px #ed3840 solid; */\r\n        width: 100px;\r\n    }\r\n\r\n    .fill {\r\n        color: #fff;\r\n        height: 234px;\r\n        position: absolute;\r\n        background-color: rgba(0, 0, 0, 0.4);\r\n        top: 0;\r\n        width: 100%;\r\n        margin-left: -50%;\r\n    }\r\n\r\n    .container {\r\n        position: relative;\r\n        width: 100%;\r\n        /* whatever width you want. I was implementing this in a 4 tile grid pattern. I used javascript to set height equal to width */\r\n        border: 2px solid #fff;\r\n        /* just to separate the images */\r\n        overflow: hidden;\r\n        /* \"crop\" the image */\r\n        background: #000;\r\n        /* incase the image is wider than tall/taller than wide */\r\n    }\r\n\r\n    .container img {\r\n        position: absolute;\r\n        display: block;\r\n        height: 100%;\r\n        /* all images at least fill the height */\r\n        top: 50%;\r\n        /* top, left, transform trick to vertically and horizontally center image */\r\n        left: 50%;\r\n        -webkit-transform: translate3d(-50%, -50%, 0);\r\n                transform: translate3d(-50%, -50%, 0);\r\n    }\r\n\r\n    input[type=file] {\r\n        display: none;\r\n    }\r\n\r\n    .bin {\r\n        position: absolute;\r\n        right: 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .bin-2 {\r\n        position: absolute;\r\n        right: 4px;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .bin-3 {\r\n        position: absolute;\r\n        right: -8px;\r\n        cursor: pointer;\r\n        color: #fff;\r\n        margin-top: 2px;\r\n    }\r\n\r\n    .check {\r\n        position: absolute;\r\n        right: 10px;\r\n        margin-top: -8px;\r\n    }\r\n\r\n    .pin {\r\n        right: 20px;\r\n        position: absolute;\r\n        margin-top: -60px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    #description {\r\n        font-family: Roboto;\r\n        font-size: 15px;\r\n        font-weight: 300;\r\n    }\r\n\r\n    #infowindow-content .title {\r\n        font-weight: bold;\r\n    }\r\n\r\n    #infowindow-content {\r\n        display: none;\r\n    }\r\n\r\n    #map #infowindow-content {\r\n        display: inline;\r\n    }\r\n\r\n    .pac-card {\r\n        margin: 10px 10px 0 0;\r\n        border-radius: 2px 0 0 2px;\r\n        -webkit-box-sizing: border-box;\r\n                box-sizing: border-box;\r\n        -moz-box-sizing: border-box;\r\n        outline: none;\r\n        -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\r\n                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\r\n        background-color: #fff;\r\n        font-family: Roboto;\r\n    }\r\n\r\n    #pac-container {\r\n        padding-bottom: 12px;\r\n        margin-right: 12px;\r\n    }\r\n\r\n    .pac-controls {\r\n        display: inline-block;\r\n        padding: 5px 11px;\r\n    }\r\n\r\n    .pac-controls label {\r\n        font-family: Roboto;\r\n        font-size: 13px;\r\n        font-weight: 300;\r\n    }\r\n\r\n    #pac-input {\r\n        background-color: #fff;\r\n        font-family: Roboto;\r\n        font-size: 15px;\r\n        font-weight: 300;\r\n        margin-left: 12px;\r\n        padding: 0 11px 0 13px;\r\n        text-overflow: ellipsis;\r\n        width: 400px;\r\n    }\r\n\r\n    #pac-input:focus {\r\n        border-color: #4d90fe;\r\n    }\r\n\r\n    #title {\r\n        color: #fff;\r\n        background-color: #4d90fe;\r\n        font-size: 25px;\r\n        font-weight: 500;\r\n        padding: 6px 12px;\r\n    }\r\n\r\n    #target {\r\n        width: 345px;\r\n    }\r\n\r\n    .map {\r\n        height: 400px !important;\r\n        position: relative !important\r\n    }\r\n\r\n    .m2 {\r\n        margin-top: 18px !important;\r\n        left: 30% !important;\r\n    }\r\n\r\n    .cw {\r\n        color: #fff !important;\r\n    }\r\n\r\n    .pc-1 {\r\n        position: absolute;\r\n        top: 0px;\r\n        /* margin-top: -36px; */\r\n        color: #fff;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .bin-1 {\r\n        position: absolute;\r\n        right: 1.5rem;\r\n        color: #fff;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .card-img-top {\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n        width: 100%;\r\n        max-height: 300px;\r\n    }\r\n\r\n    .promotionimage {\r\n        width: 100%;\r\n        height: 200px;\r\n        padding: 2px;\r\n    }\r\n\r\n    .padding-all {\r\n        padding: 1rem 1rem 1rem 1rem;\r\n    }\r\n\r\n    .cate-padding-left {\r\n        padding: 1rem;\r\n        font-family: 'Kanit', sans-serif;\r\n    }\r\n\r\n    .b-red {\r\n        font-size: 0.9em;\r\n        color: red;\r\n        margin-top: -8px;\r\n    }\r\n\r\n    .s-cont {\r\n        height: 120px;\r\n        overflow-y: scroll;\r\n        position: relative;\r\n        border-bottom: 0.2rem solid grey;\r\n    }\r\n\r\n    .check_icon {\r\n        width: 22px;\r\n        height: 22px;\r\n    }\r\n\r\n    .check_po {\r\n        position: absolute;\r\n        right: 8px;\r\n    }\r\n\r\n    [cate-img] {\r\n        min-height: 14.8rem;\r\n    }\r\n\r\n    .text-cate {\r\n        margin: 0;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        margin-right: -50%;\r\n        -webkit-transform: translate(-50%, -50%);\r\n                transform: translate(-50%, -50%)\r\n    }\r\n\r\n    .col-bottom {\r\n        padding-bottom: 3rem;\r\n    }\r\n\r\n    .add-dropShadow {\r\n        /* box-shadow:0.4rem 0.4rem 1rem grey;   */\r\n        -webkit-filter: drop-shadow(0.2rem 0.2rem 0.5rem grey);\r\n                filter: drop-shadow(0.2rem 0.2rem 0.5rem grey);\r\n        color: white;\r\n    }\r\n\r\n    .fix-height {\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n    }\r\n\r\n    .add-padding-left input {\r\n        margin-left: 35px !important;\r\n        font-size: 2rem;\r\n    }\r\n\r\n    label {\r\n        color: black;\r\n    }\r\n\r\n    .btn-size-small {\r\n        padding: 0px !important;\r\n        margin: 0px !important;\r\n        border-radius: 50%;\r\n        width: 40px;\r\n        height: 40px;\r\n        background-color: orange;\r\n    }\r\n\r\n    .edit-size {\r\n        padding: 0px !important;\r\n        margin: 0px !important;\r\n        font-size: 22px;\r\n    }\r\n\r\n    .no-padding {\r\n        padding-top: 0px !important;\r\n        margin-top: 0px !important;\r\n    }\r\n\r\n    .btn-group.open>.dropdown-toggle.btn,\r\n    .btn-group.open>.dropdown-toggle.btn.btn-default,\r\n    .btn-group-vertical.open>.dropdown-toggle.btn,\r\n    .btn-group-vertical.open>.dropdown-toggle.btn.btn-default {\r\n        background-color: #9a9999a8;\r\n    }\r\n\r\n    .scrollmenu {\r\n        overflow: auto;\r\n        white-space: nowrap !important;\r\n        width: 98.5%;\r\n        margin-left: 0.5%;\r\n        margin-right: 3.5%;\r\n    }\r\n\r\n    .col-scroll {\r\n        display: inline-block;\r\n    }\r\n\r\n    div.scrollmenu2 {\r\n        overflow: auto;\r\n        white-space: nowrap;\r\n    }\r\n\r\n    div.scrollmenu2 p {\r\n        display: inline-block;\r\n    }\r\n\r\n    .xxx {\r\n        display: inline-block;\r\n    }\r\n\r\n    img {\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .addEditClass {\r\n        text-align: right;\r\n        margin-bottom: -40px;\r\n    }\r\n\r\n    .deleteCateClass {\r\n        text-align: left;\r\n        margin-bottom: -40px;\r\n    }\r\n\r\n    .imgEditClass {\r\n        margin-bottom: -20px;\r\n    }\r\n\r\n    .active-select {\r\n        border-bottom: red solid 4px;\r\n    }\r\n\r\n    .box-text {\r\n        text-align: center;\r\n        background-color: #36363673;\r\n        bottom: 3rem;\r\n        height: 3rem;\r\n        position: relative;\r\n        vertical-align: middle;\r\n    }\r\n\r\n    .btn-group-vertical [btn-fb-checked] {\r\n        background-color: transparent;\r\n        color: red;\r\n        text-align: left;\r\n    }\r\n\r\n    .btn-group-vertical [btn-fb-checked]:hover,\r\n    [btn-fb-checked]:focus {\r\n        border-left: red solid 4px;\r\n    }\r\n\r\n    .btn-fb-checked {\r\n        border-left: red solid 4px;\r\n    }\r\n\r\n    .name-label {\r\n        position: absolute;\r\n        margin-top: -24px;\r\n        padding: 2px;\r\n        background-color: rgba(0, 0, 0, 0.4);\r\n        width: 15rem;\r\n        color: #fff;\r\n    }\r\n\r\n    .price-label {\r\n        right: 4px;\r\n        position: absolute;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-shop/create-shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <!-- start shop content -->\r\n  <div *ngIf=\"!enableCropImage\">\r\n    <div class=\"row text-center\" *ngIf=\"shop._id\">\r\n\r\n      <div class=\"col-sm-2 col-md-2 col-lg-2 \"></div>\r\n      <div class=\"col-sm-8 col-md-8 col-lg-8 \">\r\n        <div class=\"card\">\r\n          <div class=\"card-block text-center padding-all\">\r\n            <ngx-gallery *ngIf=\"shop.promoteimage && shop.promoteimage.length > 0\" [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n            <h4 *ngIf=\"!shop.promoteimage || shop.promoteimage.length == 0\" style=\"font-family: 'Kanit', sans-serif;\">ร้านนี้ยังไม่มีรูปภาพโปรโมทร้านค่ะ</h4>\r\n          </div>\r\n        </div>\r\n\r\n        <button class=\"btn\" type=\"button\" (click)=\"uploadPromoteImage()\">\r\n          <i class=\"material-icons\">add_a_photo</i> เพิ่มรูปโปรโมทร้าน\r\n        </button>\r\n        <input type=\"file\" #promoteimgInput accept=\"image/*\" [(ngModel)]=\"promoteImg\" (change)=\"onPromoteImgChange($event)\" style=\"visibility: hidden;\"\r\n        />\r\n      </div>\r\n      <div class=\" col-sm-2 col-md-2 col-lg-2 \"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-header cw\">\r\n            <div class=\"row fix-height\">\r\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-4\">ข้อมูลร้านค้า</div>\r\n              <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-8 text-right no-padding\">\r\n                <button class=\"btn btn-warning btn-size-small\" *ngIf=\"isEditshopMode == false && shop._id\" (click)=\"changeEditShopMode()\">\r\n                  <i class=\"material-icons edit-size\">edit</i>\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-success\" *ngIf=\"isEditshopMode == true\" (click)=\"save()\">บันทึก</button>\r\n                <!-- <button class=\"btn btn-success\" *ngIf=\"!shop._id\" (click)=\"save()\">บันทึก</button> -->\r\n                <button class=\"btn btn-danger\" *ngIf=\"shop._id && isEditshopMode == true\" (click)=\"changeEditShopMode()\">ยกเลิก</button>\r\n                <!-- <button class=\"btn btn-danger\" *ngIf=\"!shop._id\" (click)=\"cancelEditShop()\">กลับสู่หน้าจัดการร้านค้า</button> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-4\">\r\n                <div class=\"btn-group btn-group-vertical\" role=\"group\" aria-label=\"...\">\r\n                  <button type=\"button\" [class]=\"activeMenu[0]\" btn-fb-checked (click)=\"selectTab(0)\">ข้อมูลเกี่ยวกับร้านค้า</button>\r\n                  <button type=\"button\" [class]=\"activeMenu[1]\" btn-fb-checked (click)=\"selectTab(1)\">ข้อมูลติดต่อร้านค้า</button>\r\n                  <button type=\"button\" [class]=\"activeMenu[2]\" btn-fb-checked (click)=\"selectTab(2)\">วันเวลาเปิดปิดร้าน</button>\r\n                  <button type=\"button\" [class]=\"activeMenu[3]\" btn-fb-checked (click)=\"selectTab(3)\">ที่อยู่ร้าน</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-10 col-md-9 col-sm-8 col-xs-8\">\r\n\r\n\r\n                <!-- SHOP INFO -->\r\n                <div class=\"card-block\" *ngIf=\"selectTabs == 0\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"btn-group\">\r\n                        <button type=\"button\" [disabled]=\"blockInput\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                          aria-expanded=\"true\">\r\n                          เลือกประเภทร้านค้า\r\n                          <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\">\r\n                          <p class=\"text-select-cate\" *ngFor=\"let item of categoryShopList\" (click)=\"selectCate(item._id)\">{{item.name}}\r\n                            <img *ngIf=\"checkeds[item._id]\" class=\"check_po check_icon\" src=\"https://image.flaticon.com/icons/svg/189/189677.svg\" alt=\"icon\">\r\n                          </p>\r\n                        </ul>\r\n                      </div>\r\n                      <span *ngFor=\"let cateSelect of shop.categories\"> {{cateSelect.name}} </span>\r\n\r\n                      <div class=\"form-group\">\r\n                        ชื่อร้าน\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"blockInput\" placeholder=\"\" name=\"shopName\" [(ngModel)]=\"shop.name\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        ชื่อร้าน (ภาษาอังกฤษ)\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"blockInput\" placeholder=\"\" name=\"shopNameEn\" [(ngModel)]=\"shop.name_eng\">\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        รายละเอียดร้าน\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"blockInput\" placeholder=\"\" name=\"detail\" [(ngModel)]=\"shop.detail\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <!-- SHOP INFO -->\r\n\r\n\r\n                <!-- SHOP CONTACT INFO -->\r\n                <div class=\"card-block\" *ngIf=\"selectTabs == 1\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        อีเมล์\r\n                        <input type=\"email\" class=\"form-control\" [disabled]=\"blockInput\" placeholder=\"\" name=\"email\" email=\"true\" [(ngModel)]=\"shop.email\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        หมายเลขโทรศัพท์ร้านค้า\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"blockInput\" placeholder=\"\" name=\"tel\" [(ngModel)]=\"shop.tel\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        Facebook fanpage\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"blockInput\" placeholder=\"\" name=\"Facebook\" [(ngModel)]=\"shop.facebook\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        Line@ Id\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"blockInput\" placeholder=\"\" name=\"Line\" [(ngModel)]=\"shop.line\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- SHOP CONTACT INFO -->\r\n\r\n\r\n                <!-- SHOP TIME - CLOSE -->\r\n                <div class=\"card-block\" *ngIf=\"selectTabs == 2\">\r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-md-3 text-center\" (click)=\"openTime()\" *ngIf=\"isEditshopMode == true\">\r\n                      <img class=\"img\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg\" alt=\"image\">\r\n                    </div>\r\n                    <div class=\"col-md-3\" *ngFor=\"let item of timeList;let i = index\">\r\n                      <div class=\"card card-time-size\" style=\"margin: 0px 0;\">\r\n                        <span class=\"bin\" (click)=\"deleteTime(i)\" *ngIf=\"isEditshopMode == true\">\r\n                          <i class=\"material-icons\">delete</i>\r\n                        </span>\r\n                        <div class=\"card-block text-center\">\r\n                          <h4 class=\"card-title\" style=\"text-align: center;\">{{item.description}}</h4>\r\n                          <p class=\"card-text\">เวลาเปิด {{item.timestart}} น.</p>\r\n                          <p class=\"card-text\">เวลาปิด {{item.timeend}} น.</p>\r\n                          <div class=\"time-elaspe\">\r\n                            <span *ngFor=\"let item2 of item.days\">{{item2}} </span>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row no-padding\" *ngIf=\"showeditTime\">\r\n                    <div class=\"col-xs-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                          <div class=\"form-group\">\r\n                            <label for=\"timeDetail\">รายละเอียด</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"ระบุชื่อช่วงเวลา เช่น ส.-อ.\" name=\"timeDetail\" [(ngModel)]=\"times.description\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-3\">\r\n                          <div class=\"form-group\">\r\n                            <label for=\"start\">เวลาเปิด</label>\r\n                            <input type=\"time\" class=\"form-control\" name=\"start\" [(ngModel)]=\"times.timestart\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-3\">\r\n                          <div class=\"form-group\">\r\n                            <label for=\"end\">เวลาปิด</label>\r\n                            <input type=\"time\" class=\"form-control\" name=\"end\" [(ngModel)]=\"times.timeend\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                          <label for=\"daySelect\">เลือกวันที่ร้านเปิดทำการ</label>\r\n                          <div name=\"daySelect\" class=\"add-padding-left\">\r\n                            <input type=\"checkbox\" name=\"\" id=\"\" (change)=\"selectDay(0)\"> วันอาทิตย์\r\n                            <input type=\"checkbox\" name=\"\" id=\"\" (change)=\"selectDay(1)\"> วันจันทร์\r\n                            <input type=\"checkbox\" name=\"\" id=\"\" (change)=\"selectDay(2)\"> วันอังคาร\r\n                            <input type=\"checkbox\" name=\"\" id=\"\" (change)=\"selectDay(3)\"> วันพุธ\r\n                            <input type=\"checkbox\" name=\"\" id=\"\" (change)=\"selectDay(4)\"> วันพฤหัสบดี\r\n                            <input type=\"checkbox\" name=\"\" id=\"\" (change)=\"selectDay(5)\"> วันศุกร์\r\n                            <input type=\"checkbox\" name=\"\" id=\"\" (change)=\"selectDay(6)\"> วันเสาร์\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"ct\">\r\n                      <button class=\"btn btn-success\" (click)=\"saveTime()\">เพิ่ม</button>\r\n                      <button class=\"btn btn-danger\" (click)=\"cancelTime()\">ยกเลิก</button>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <!-- SHOP TIME - CLOSE -->\r\n\r\n\r\n                <!-- SHOP ADDRESS -->\r\n                <div class=\"card-block\" *ngIf=\"selectTabs == 3\">\r\n                  <div class=\"form-group\">\r\n                      ที่อยู่\r\n                    <textarea rows=\"1\" class=\"form-control ct\" placeholder=\"\" name=\"addr\" [(ngModel)]=\"address\"></textarea>\r\n                  </div>\r\n                  <p class=\"pin\" (click)=\"openSelectMap()\">\r\n                    <i class=\"material-icons\">room</i>\r\n                  </p>\r\n                </div>\r\n                <div *ngIf=\"showeMap\">\r\n                  <input #pacinput id=\"pac-input\" class=\"controls m2\" type=\"text\" placeholder=\"ค้นหาสถานที่\">\r\n                  <div #map class=\"map\"></div>\r\n                  <div class=\"ct\">\r\n                    <button class=\"btn btn-info\" (click)=\"saveMap()\">ยืนยัน</button>\r\n                  </div>\r\n                </div>\r\n                <!-- SHOP ADDRESS -->\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"shopID\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header cw\">\r\n            จัดการสินค้า\r\n          </div>\r\n\r\n          <!-- MANAGE CATE & PRODUCT ZONE -->\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h4 class=\"h\" style=\"border-bottom: none;\">Category</h4>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row scrollmenu\">\r\n              <!-- <div class=\"row scroll-x\" [dragula]='\"zone1\"'> -->\r\n\r\n              <!-- ADD CATE -->\r\n              <div class=\"col-md-2 col-scroll\" (click)=\"updateCateImg()\">\r\n                <img class=\"img\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg\" alt=\"image\">\r\n                <input type=\"file\" #cateimgInput accept=\"image/*\" [(ngModel)]=\"cateImg\" (change)=\"onCateImgChange($event,cateModal)\" style=\"visibility: hidden;\"\r\n                />\r\n              </div>\r\n\r\n              <!-- ADD CATE -->\r\n\r\n\r\n              <!-- SHOW CATEGOY ZONE -->\r\n              <div class=\"col-2 col-scroll\" *ngFor=\"let item of cateList;let i = index\">\r\n                <div style=\"margin-right:20px;\" *ngIf=\"item && item._id\">\r\n                  <div class=\"deleteCateClass\">\r\n                    <i class=\"material-icons add-dropShadow\" (click)=\"deleteCategory(item._id)\">delete</i>\r\n                  </div>\r\n                  <div class=\"addEditClass\">\r\n                    <i class=\"material-icons add-dropShadow\" (click)=\"editCategory('edit',cateModal,item)\">create</i>\r\n                  </div>\r\n                  <div class=\"imgEditClass\" [class]=\"selectedStyle[item._id]\">\r\n                    <img style=\"width:150px;height:150px;\" (click)=\"filterByCate(item._id, i)\" [src]=\"item.image ? item.image : 'http://www.jordans.com/~/media/jordans%20redesign/no-image-found.ashx?h=275&la=en&w=275&hash=F87BC23F17E37D57E2A0B1CC6E2E3EEE312AAD5B'\"\r\n                      alt=\"image\" cate-img>\r\n                  </div>\r\n                  <div class=\"box-text\">\r\n                    <span style=\"text-align: center;color: #ffffff;height: 3rem;vertical-align: -webkit-baseline-middle;\">\r\n                      {{item.name}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- SHOW CATEGOY ZONE -->\r\n            </div>\r\n\r\n            <!-- SHOW CATEGOY ZONE -->\r\n            <!-- </div> -->\r\n\r\n            <!-- SHOW PRODUCT IN CATE ZONE -->\r\n            <div class=\"row\" *ngIf=\"shop.items && shop.items.length > 0\">\r\n              <div class=\"col-md-12\">\r\n                <h4 class=\"h\">Products</h4>\r\n                <div [sortablejs]=\"shop.items\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2 col-over col-bottom\" *ngFor=\"let item of products; let i = index\">\r\n                      <div *ngIf=\"item.name == 'default'\">\r\n                        <img class=\"img\" data-toggle=\"modal\" data-target=\"#modalproduct\" (click)=\"createProduct(i,item)\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg\"\r\n                          alt=\"image\" cate-img>\r\n                      </div>\r\n                      <div *ngIf=\"item.name != 'default'\">\r\n                        <img class=\"img\" (click)=\"editProduct(i,selectedCate)\" [src]=\"item.images[0]\" alt=\"image\" cate-img>\r\n                        <p class=\"name-label\">{{item.name}}\r\n                          <span class=\"price-label\">{{item.price}}.-</span>\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- SHOW PRODUCT IN CATE ZONE -->\r\n          </div>\r\n          <!-- MANAGE CATE & PRODUCT ZONE -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end shop content -->\r\n\r\n  <div *ngIf=\"enableCropImage\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-8\">\r\n        <image-cropper [imageChangedEvent]=\"imagePreCrop\" format=\"jpeg\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"1 / 1\" [resizeToWidth]=\"128\"\r\n          (imageCropped)=\"imageCropped($event)\"></image-cropper>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-center\">\r\n        <button class=\"btn btn-success\" (click)=\"saveCrop()\">บันทึก</button>\r\n        <button class=\"btn btn-danger\" data-dismiss=\"modalproduct\" (click)=\"cancelCrop()\">ยกเลิก</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- ---------------------- ADD OR EDIT CATEGORY ---------------------- -->\r\n  <div class=\"modal fade\" #modal tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\"> {{CE_action_category}}หมวดหมู่</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-center\">\r\n              <div class=\"loader\" *ngIf=\"!updateOrEditCateImg\" #loadingControl>\r\n                <img src=\"./assets/img/35.png\" alt=\"\">\r\n              </div>\r\n              <img class=\"img-2\" *ngIf=\"updateOrEditCateImg\" [src]=\"updateOrEditCateImg\" alt=\"image\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-left\">\r\n              <div class=\"form-group\">\r\n                <h5>ชื่อหมวดหมู่</h5>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" name=\"categoryname\" [(ngModel)]=\"category.name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-center\">\r\n              <button class=\"btn btn-primary\" (click)=\"saveCategory()\">บันทึก</button>\r\n              <button class=\"btn btn-danger\" #dissmissBtn data-dismiss=\"modal\" (click)=\"cancelCategory(cateModal)\">ยกเลิก</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- ---------------------- ADD OR EDIT CATEGORY ---------------------- -->\r\n\r\n  <!-- ---------------------- ADD OR EDIT PRODUCT ---------------------- -->\r\n  <div class=\"modal fade\" #modalproduct tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\"> {{CE_action_product}}สินค้า</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf=\"CE_action_product == 'เพิ่ม'\">\r\n              <div class=\"col-md-2\"></div>\r\n              <div *ngIf=\"productImgPreSaves.length < 3\" class=\"col-md-2\" style=\"background-color: #c0c0c0;height: 128px; cursor:pointer\"\r\n                (click)=\"selectProductImg()\">\r\n                <i class=\"material-icons\" style=\"margin-top: 4rem\">add_a_photo</i>\r\n                <input #uploadImgProduct type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"onProductImgChange($event)\">\r\n              </div>\r\n              <div class=\"col-md-2\" *ngFor=\"let item of productImgPreSaves\">\r\n                <span class=\"bin-3\" *ngIf=\"isDelete\">\r\n                  <i class=\"material-icons add-dropShadow\" style=\"font-size: 26px\" (click)=\"deleteImgProduct(item.id)\">delete</i>\r\n                </span>\r\n                <img [src]=\"item.base64\" alt=\"\" width=\"128px\" height=\"128px\">\r\n              </div>\r\n              <div class=\"col-md-2\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-left\">\r\n              <div class=\"form-group\">\r\n                <h5>ชื่อสินค้า</h5>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Product name\" name=\"productname\" [(ngModel)]=\"productModel.name\">\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <h5>ราคา</h5>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"Product price\" name=\"productprice\" [(ngModel)]=\"productModel.price\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-center\">\r\n\r\n              <button class=\"btn btn-primary\" (click)=\"saveProduct()\">บันทึก</button>\r\n              <button class=\"btn btn-danger\" #dissmissBtn data-dismiss=\"modalproduct\" (click)=\"cancelCategory(cateModal)\">ยกเลิก</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- ---------------------- ADD OR EDIT PRODUCT ---------------------- -->\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-shop/create-shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_create_shop_create_shop_service__ = __webpack_require__("../../../../../src/app/create-shop/create-shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_pubsub__ = __webpack_require__("../../../../angular2-pubsub/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { EmailValidator } from '@angular/forms';

var CreateShopComponent = (function () {
    function CreateShopComponent(server, router, shopService, pubsub) {
        this.server = server;
        this.router = router;
        this.shopService = shopService;
        this.pubsub = pubsub;
        this.promoteimageChangedEvent = '';
        this.croppedImage = '';
        this.galleryOptions = [];
        this.galleryImages = [];
        this.showeMainShop = false;
        this.showeditdiv = true;
        this.showeditTime = false;
        this.showeMap = false;
        this.showAddProduct = false;
        this.showAddCategory = false;
        this.enableCropImage = false;
        this.shop = {};
        this.product = {};
        this.selectedProduct = {};
        this.category = {};
        this.products = [];
        this.oldsProducts = [];
        this.selectDate = [];
        this.categorys = [];
        this.cateID = 0;
        this.cateList = [];
        this.categoryList = [];
        this.categoryShopList = [];
        this.useSelectDate = [];
        this.timeList = [];
        this.times = {};
        this.latLng = {};
        this.coverimage = '';
        this.openTimeString = '';
        this.currentGEO = { lat: null, lng: null };
        this.selectedStyle = [];
        this.selectList = [];
        this.shopCateSelected = [];
        this.checkeds = [];
        this.selectedCate = 0;
        this.selectTabs = 0;
        this.isEditshopMode = false;
        this.blockInput = true;
        this.prdName = '';
        this.productModel = {};
        this.productImgPreSaves = [];
        this.imagePreCrop = '';
        this.isDelete = false;
        this.activeMenu = [];
        this.promoteIsEdit = false;
        this.limitPrdImg = 3;
        this.galleryOptions = [
            {
                width: '100%',
                height: '65vh',
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__["NgxGalleryAnimation"].Slide,
                preview: false,
                imageSwipe: true,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '80vh',
                imagePercent: 100,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                thumbnailsSwipe: true,
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.setActiveMenu(0);
    }
    CreateShopComponent.prototype.fileChangeEvent = function (event) {
        this.promoteimageChangedEvent = event;
    };
    CreateShopComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    CreateShopComponent.prototype.saveCrop = function () {
        this.productImgPreSaves.push({
            id: Date.now(),
            base64: this.croppedImage
        });
        this.enableCropImage = false;
        this.isDelete = true;
        $(this.modalproduct.nativeElement).modal('show');
        var fileBrowser = this.uploadImgProduct.nativeElement;
        fileBrowser.value = [];
    };
    CreateShopComponent.prototype.cancelCrop = function () {
        this.enableCropImage = false;
        $(this.modalproduct.nativeElement).modal('show');
        var fileBrowser = this.uploadImgProduct.nativeElement;
        fileBrowser.value = [];
    };
    CreateShopComponent.prototype.selectProductImg = function () {
        this.uploadImgProduct.nativeElement.click();
    };
    CreateShopComponent.prototype.onProductImgChange = function (event) {
        this.enableCropImage = true;
        this.imagePreCrop = event;
        $(this.modalproduct.nativeElement).modal('hide');
        // this.isDelete = false;
        // const fileBrowser = this.uploadImgProduct.nativeElement;
        // if (fileBrowser.files.length > 0 && this.productImgPreSaves.length < 3) {
        //   for (let i = 0; i < fileBrowser.files.length; i++) {
        //     const reader = new FileReader();
        //     const id = Date.now();
        //     reader.readAsDataURL(fileBrowser.files[i]);
        //     reader.onload = () => {
        //       this.productImgPreSaves.push({
        //         id: id,
        //         base64: 'http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif'//reader.result.replace(/\n/g, '')
        //       });
        //       this.shopService.uploadCateImage(reader.result.replace(/\n/g, '')).subscribe(data => {
        //         for (let j = 0; j < this.productImgPreSaves.length; j++) {
        //           if (id === this.productImgPreSaves[j].id) {
        //             this.productImgPreSaves[j] = {
        //               id: id,
        //               base64: data.imageURL
        //             };
        //             this.isDelete = true;
        //             break;
        //           }
        //         }
        //       }, err => {
        //         console.log(err);
        //       });
        //     };
        //   }
        //   fileBrowser.value = [];
        // }
    };
    CreateShopComponent.prototype.deleteImgProduct = function (id) {
        for (var i = 0; i < this.productImgPreSaves.length; i++) {
            if (id === this.productImgPreSaves[i].id) {
                this.productImgPreSaves.splice(i, 1);
                break;
            }
        }
    };
    CreateShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.isLogin().subscribe(function (data) {
            if (!data) {
                _this.router.navigate(['/login']);
            }
        });
        this.getCurrentGeolocation().then(function (geo) {
            _this.currentGEO = geo;
        });
        this.createFormControls();
        this.createForm();
        this.shopID = window.localStorage.getItem('selectShop');
        if (this.shopID) {
            this.showeMainShop = true;
            this.showeditdiv = false;
        }
        if (!this.shopID) {
            this.blockInput = false;
            this.isEditshopMode = true;
        }
        this.shop.categories = '';
        this.shopService.getCategoryShop().subscribe(function (data) {
            _this.categoryShopList = data;
            _this.InitialData();
        }, function (err) {
            console.log(err);
        });
    };
    CreateShopComponent.prototype.createFormControls = function () {
        this.shopName = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required);
        this.shopNameEn = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern("[^ @]*@[^ @]*")
        ]);
    };
    CreateShopComponent.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            shopname: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
                shopName: this.shopName,
                shopNameEn: this.shopNameEn,
            }),
            email: this.email
        });
    };
    CreateShopComponent.prototype.InitialData = function () {
        var _this = this;
        if (this.shopID) {
            this.shopService.getShopByID(this.shopID).subscribe(function (data) {
                _this.shop = data;
                _this.shop.promoteimage = _this.shop.promoteimage[0] == null ? [] : _this.shop.promoteimage;
                console.log(_this.shop);
                _this.categorys = _this.shop.items;
                _this.categorys.forEach(function (el, i) {
                    if (el !== null) {
                        _this.cateList.push(el.cate);
                    }
                });
                _this.products = _this.categorys.length > 0 ? _this.categorys[0].products : [];
                _this.cateList.length > 0 ? _this.selectedStyle[_this.cateList[0]._id] = 'active-select' : null;
                _this.cateID = _this.cateList.length > 0 ? _this.cateList[0]._id : '';
                data.categories.forEach(function (element) {
                    _this.selectList.push(element._id);
                });
                for (var i = 0; i < _this.categoryShopList.length; i++) {
                    for (var j = 0; j < _this.selectList.length; j++) {
                        if (_this.categoryShopList[i]._id === _this.selectList[j]) {
                            _this.checkeds[_this.categoryShopList[i]._id] = true;
                        }
                    }
                }
                _this.shop.categories = data.categories;
                var imgs = data.promoteimage;
                imgs.forEach(function (el, i) {
                    _this.galleryImages.push({
                        big: el,
                        medium: el,
                        small: el
                    });
                });
                if (data.address) {
                    _this.address = data.address.address;
                }
                _this.latLng = {
                    lat: data.address ? data.address.lat : '',
                    lng: data.address ? data.address.lng : ''
                };
                _this.timeList = data.times;
                _this.openTimeString = _this.timeList.length > 0 ? _this.timeList[0].timestart + '-' + _this.timeList[0].timeend : '-';
            }, function (err) {
                console.log(err);
            });
            this.shopService.getCategoryByID(this.shopID).subscribe(function (data) {
                _this.categoryList = data.items;
                _this.product.categories = _this.categoryList.length > 0 ? _this.categoryList[0]._id : '';
            }, function (err) {
                console.log(err);
            });
        }
    };
    CreateShopComponent.prototype.uploadCoverImage = function () {
        this.fileInput.nativeElement.click();
    };
    CreateShopComponent.prototype.uploadPromoteImage = function () {
        this.promoteimgInput.nativeElement.click();
    };
    CreateShopComponent.prototype.updateCateImg = function () {
        this.updateOrEditCateImg = null;
        this.cateimgInput.nativeElement.click();
    };
    CreateShopComponent.prototype.onCateImgChange = function (e, modal) {
        var _this = this;
        $(this.modal.nativeElement).modal('show');
        this.CE_action_category = 'เพิ่ม';
        var fileBrowser = this.cateimgInput.nativeElement;
        var reader = new FileReader();
        reader.readAsDataURL(fileBrowser.files[0]);
        if (this.shopID) {
            if (fileBrowser.files.length > 0) {
                reader.onload = function () {
                    _this.category.image = reader.result.replace(/\n/g, '');
                    _this.shopService.uploadCateImage(_this.category.image).subscribe(function (data) {
                        _this.updateOrEditCateImg = data.imageURL;
                    }, function (err) {
                        console.log(err);
                    });
                };
            }
        }
        else {
            reader.onload = function () {
                _this.category.image = reader.result.replace(/\n/g, '');
                _this.shopService.uploadCateImage(_this.category.image).subscribe(function (data) {
                    _this.updateOrEditCateImg = data.imageURL;
                }, function (err) {
                    console.log(err);
                });
            };
        }
    };
    CreateShopComponent.prototype.onPromoteImgChange = function (e) {
        var _this = this;
        this.pubsub.$pub('loading', true);
        var fileBrowser = this.promoteimgInput.nativeElement;
        if (this.shopID) {
            if (fileBrowser.files.length > 0) {
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(fileBrowser.files[0]);
                reader_1.onload = function () {
                    var promteImgStr = reader_1.result.replace(/\n/g, '');
                    _this.shop.newpromoteimage = promteImgStr;
                    _this.shopService.uploadPromoteImage(_this.shop).subscribe(function (data) {
                        _this.shop.promoteimage.push(data.imageURL);
                        _this.shopService.edit(_this.shop).subscribe(function (shopRes) {
                            location.reload();
                        }, function (err) {
                            _this.pubsub.$pub('loading', false);
                            alert('เกิดข้อผิดพลาดในการเพิ่มรูปภาพโปรโมทร้าน กรุณาลองใหม่อีกครั้งค่ะ');
                            console.log(err);
                        });
                    }, function (err) {
                        _this.pubsub.$pub('loading', false);
                        console.log(err);
                    });
                };
            }
        }
    };
    CreateShopComponent.prototype.onCoverChange = function (e) {
        var _this = this;
        var fileBrowser = this.fileInput.nativeElement;
        var reader = new FileReader();
        reader.readAsDataURL(fileBrowser.files[0]);
        if (this.shopID) {
            if (fileBrowser.files.length > 0) {
                reader.onload = function () {
                    _this.shop.coverimage = reader.result.replace(/\n/g, '');
                    _this.shopService.uploadImage(_this.shop).subscribe(function (data) {
                        _this.shop.coverimage = data.imageURL;
                        _this.shopService.edit(_this.shop).subscribe(function (shopRes) {
                        }, function (err) {
                            console.log(err);
                        });
                    }, function (err) {
                        console.log(err);
                    });
                };
            }
        }
        else {
            reader.onload = function () {
                _this.shop.coverimage = reader.result.replace(/\n/g, '');
                _this.shopService.uploadImage(_this.shop).subscribe(function (data) {
                    _this.shop.coverimage = data.imageURL;
                }, function (err) {
                    console.log(err);
                });
            };
        }
    };
    CreateShopComponent.prototype.deletePromoteImage = function (image) {
        var isDuplicate = false;
        for (var i = 0; i < this.shop.promoteimage.length; i++) {
            if (image == this.shop.promoteimage[i]) {
                this.shop.promoteimage.splice(i, 1);
                this.shopService.edit(this.shop).subscribe(function (shopRes) {
                });
                break;
            }
        }
    };
    CreateShopComponent.prototype.prmEdit = function () {
        if (this.promoteIsEdit == false) {
            this.promoteIsEdit = true;
        }
        else {
            this.promoteIsEdit = false;
        }
    };
    CreateShopComponent.prototype.filterByCate = function (cateID, cateindex) {
        this.cateID = cateID;
        this.productModel.cateindex = cateindex;
        this.selectedStyle = [];
        this.selectedStyle[cateID] = 'active-select';
        if (this.cateID) {
            for (var i = 0; i < this.categorys.length; i++) {
                if (this.categorys[i].cate._id === cateID) {
                    this.products = this.categorys[i].products;
                    break;
                }
            }
        }
    };
    CreateShopComponent.prototype.createProduct = function (index, product) {
        this.CE_action_product = 'เพิ่ม';
        this.selectedProduct = product;
        this.productModel.index = index;
        $(this.modalproduct.nativeElement).modal('show');
    };
    CreateShopComponent.prototype.canselSaveProduct = function () {
        this.showeMainShop = true;
        this.showAddProduct = false;
    };
    CreateShopComponent.prototype.saveProduct = function () {
        this.pubsub.$pub('loading', true);
        var newScreMaImg = [];
        this.productImgPreSaves.forEach(function (el, i) {
            newScreMaImg.push(el.base64);
        });
        var data = {
            name: this.productModel.name,
            images: newScreMaImg,
            price: this.productModel.price,
            categories: this.cateID,
            index: this.productModel.index,
            cateindex: this.productModel.cateindex
        };
        this.shopService.createProduct(data, this.shopID).subscribe(function (data) {
            location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    CreateShopComponent.prototype.editProduct = function (product) {
        this.prdName = product.name;
        this.showeMainShop = false;
        this.showAddProduct = true;
        // this.product.name = product.name;
        this.product.price = product.price;
        this.product.categories = product.categories ? product.categories._id : '';
        this.CE_action_product = 'แก้ไข';
        this.CE_id_product = product._id;
    };
    CreateShopComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.shopService.deleteProduct(id).subscribe(function (data) {
            _this.pubsub.$pub('loading', false);
            location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    CreateShopComponent.prototype.createEditCategory = function (ref, templete, category) {
        if (ref == "create") {
            this.category = {};
            this.showeMainShop = false;
            this.showAddCategory = true;
            this.CE_action_category = 'เพิ่ม';
        }
    };
    CreateShopComponent.prototype.editCategory = function (edit, modal, category) {
        $(this.modal.nativeElement).modal('show');
        this.showeMainShop = false;
        this.showAddCategory = true;
        this.updateOrEditCateImg = category.image;
        this.category.name = category.name;
        this.CE_action_category = 'แก้ไข';
        this.CE_id_category = category._id;
    };
    CreateShopComponent.prototype.cancelCategory = function (modal) {
        $(this.modalproduct.nativeElement).modal('hide');
        this.showeMainShop = true;
        this.showAddCategory = false;
        this.updateOrEditCateImg = null;
        this.category.name = '';
    };
    CreateShopComponent.prototype.saveCategory = function (data) {
        var _this = this;
        if (this.CE_action_category == 'เพิ่ม') {
            this.category.shop = this.shopID;
            var sendCate = {
                name: this.category.name,
                image: this.updateOrEditCateImg
            };
            this.shopService.saveCategory(sendCate, this.shopID).subscribe(function (data) {
                console.log(data);
                alert("ระบบได้ทำการเพิ่มหมวดหมู่สินค้าเรียบร้อยแล้ว");
                _this.galleryImages = [];
                _this.products = [];
                _this.cateList = [];
                $(_this.modal.nativeElement).modal('hide');
                window.location.reload();
            }, function (err) {
                alert("ระบบไม่สามารถเพิ่มหมวดหมู่ร้านค้าได้ กรุณาลองใหม่อีกครั้ง");
                $(_this.modal.nativeElement).modal('hide');
                window.location.reload();
                console.log(err);
            });
        }
        else {
            var sendCate = {
                name: this.category.name,
                image: this.updateOrEditCateImg
            };
            this.shopService.editCategory(sendCate, this.CE_id_category).subscribe(function (data) {
                console.log(data);
                _this.showeMainShop = true;
                _this.showAddCategory = false;
                _this.galleryImages = [];
                alert("ระบบได้ทำการแก้ไขหมวดหมู่สินค้าเรียบร้อยแล้ว");
                window.location.reload();
                $(_this.modal.nativeElement).modal('hide');
            }, function (err) {
                console.log(err);
                alert("ระบบไม่สามารถทำการแก้ไขหมวดหมู่สินค้าได้ค่ะ");
            });
        }
    };
    CreateShopComponent.prototype.deleteCategory = function (id) {
        var cfDelete = confirm('ยืนยันการลบหมวดหมู่สินค้า');
        if (cfDelete) {
            this.shopService.deleteCategory(id).subscribe(function (data) {
                location.reload();
                alert("ระบบได้ทำการลบหมวดหมู่สินค้าเรียบร้อยแล้วค่ะ");
            }, function (err) {
                alert("ระบบไม่สามารถทำการลบหมวดหมู่สินค้าได้ค่ะ");
                console.log(err);
            });
        }
    };
    CreateShopComponent.prototype.deletePrdImg = function (i) {
    };
    CreateShopComponent.prototype.uploadPrdImage = function () {
        this.prdimgInput.nativeElement.click();
    };
    CreateShopComponent.prototype.onPrdImgChange = function (e) {
        var _this = this;
        var fileBrowser = this.prdimgInput.nativeElement;
        var reader = new FileReader();
        reader.readAsDataURL(fileBrowser.files[0]);
        if (this.shopID) {
            if (fileBrowser.files.length > 0) {
                reader.onload = function () {
                    var prdImgStr = reader.result.replace(/\n/g, '');
                    _this.product.images = prdImgStr;
                    _this.shopService.uploadPromoteImage(_this.shop).subscribe(function (data) {
                        // this.shop.promoteimage.push(data.imageURL);
                        _this.shopService.edit(_this.shop).subscribe(function (shopRes) {
                            alert("เพิ่มรูปภาพโปรโมทร้านเรียบร้อยแล้วค่ะ");
                            _this.shop.promoteimage[_this.shop.promoteimage.length] = shopRes.imageURL;
                            // this.shop.promoteimage.push(shopRes.imageURL);
                        }, function (err) {
                            alert("เกิดข้อผิดพลาดในการเพิ่มรูปภาพโปรโมทร้าน กรุณาลองใหม่อีกครั้งค่ะ");
                            console.log(err);
                        });
                    }, function (err) {
                        console.log(err);
                    });
                };
            }
        }
        else {
            reader.onload = function () {
                var promteImgStr = reader.result.replace(/\n/g, '');
                _this.shop.newpromoteimage = promteImgStr;
                _this.shopService.uploadPromoteImage(_this.shop).subscribe(function (data) {
                    _this.shop.promoteimage.push(data.imageURL);
                }, function (err) {
                    console.log(err);
                });
            };
        }
    };
    CreateShopComponent.prototype.getCurrentGeolocation = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                reject("GEO Error");
            });
        });
    };
    CreateShopComponent.prototype.openSelectMap = function () {
        var _this = this;
        this.showeditdiv = false;
        this.showeMap = true;
        setTimeout(function () {
            var latLng = { lat: _this.currentGEO.lat, lng: _this.currentGEO.lng };
            var map = new google.maps.Map(_this.mapElement.nativeElement, {
                center: latLng,
                zoom: 18,
                mapTypeId: 'roadmap'
            });
            var input = _this.pacinput.nativeElement;
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            var marker = new google.maps.Marker({
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: latLng
            });
            _this.addMarker(map, latLng, marker);
            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });
            searchBox.addListener('places_changed', function () {
                var places = searchBox.getPlaces();
                if (places.length == 0) {
                    return;
                }
                marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: places[0].geometry.location
                });
                console.log(marker);
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    latLng: places[0].geometry.location
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        window.localStorage.setItem('address', results[0].formatted_address);
                        window.localStorage.setItem('latLng', JSON.stringify(places[0].geometry.location));
                    }
                    else {
                        console.log(status);
                    }
                });
                var bounds = new google.maps.LatLngBounds();
                bounds.union(places[0].geometry.viewport);
                map.fitBounds(bounds);
            });
        }, 300);
    };
    CreateShopComponent.prototype.addMarker = function (map, position, marker) {
        google.maps.event.addListener(marker, 'dragend', function () {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                latLng: marker.getPosition()
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    window.localStorage.setItem('address', results[0].formatted_address);
                    window.localStorage.setItem('latLng', JSON.stringify(marker.getPosition()));
                }
                else {
                    console.log(status);
                }
            });
        });
    };
    CreateShopComponent.prototype.changeEditShopMode = function () {
        if (this.isEditshopMode == false) {
            this.isEditshopMode = true;
            this.blockInput = false;
        }
        else {
            this.isEditshopMode = false;
            this.blockInput = true;
        }
    };
    CreateShopComponent.prototype.cancelMap = function () {
        this.showeditdiv = true;
        this.showeMap = false;
    };
    CreateShopComponent.prototype.selectDay = function (day) {
        if (this.selectDate[day]) {
            this.selectDate[day] = false;
        }
        else {
            this.selectDate[day] = true;
        }
    };
    CreateShopComponent.prototype.openEditShopDetail = function () {
        this.showeMainShop = false;
        this.showeditdiv = true;
        this.showeditTime = false;
    };
    CreateShopComponent.prototype.cancelEditShop = function () {
        if (this.shopID) {
            this.showeMainShop = true;
            this.showeditdiv = false;
            this.router.navigate(['/manage-shop']);
        }
        else {
            this.router.navigate(['/manage-shop']);
        }
    };
    CreateShopComponent.prototype.selectCate = function (cate_id) {
        this.shop.categories = this.shop.categories ? this.shop.categories : [];
        var inArr = this.selectList.indexOf(cate_id);
        if (this.selectList.length < 3) {
            if (inArr === -1) {
                this.selectList.push(cate_id);
                this.checkeds[cate_id] = true;
                this.shop.categories.push({ _id: cate_id });
                for (var i = 0; i < this.shop.categories.length; i++) {
                    for (var j = 0; j < this.categoryShopList.length; j++) {
                        if (this.categoryShopList[j]._id === this.shop.categories[i]._id) {
                            this.shop.categories[i] = {
                                _id: this.categoryShopList[j]._id,
                                name: this.categoryShopList[j].name
                            };
                            break;
                        }
                    }
                }
            }
            else {
                this.selectList.splice(inArr, 1);
                this.shop.categories.splice(inArr, 1);
                this.checkeds[cate_id] = false;
            }
        }
        else {
            if (inArr !== -1) {
                this.selectList.splice(inArr, 1);
                this.shop.categories.splice(inArr, 1);
                this.checkeds[cate_id] = false;
            }
        }
    };
    CreateShopComponent.prototype.save = function () {
        var _this = this;
        if (this.shop.categories.length <= 0) {
            alert("กรุณาเลือกประเภทของร้านค้าก่อนทำการบันทึก");
        }
        else {
            if (this.shopID) {
                this.shop.address = {
                    address: this.address,
                    lat: this.latLng.lat,
                    lng: this.latLng.lng
                };
                this.shop.times = this.timeList;
                this.shop.coverimage = this.shop.coverimage ? this.shop.coverimage : 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=889&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';
                this.shopService.edit(this.shop).subscribe(function (data) {
                    _this.isEditshopMode == false;
                    console.log(data);
                    _this.showeMainShop = true;
                    _this.showeditdiv = false;
                    _this.showeditTime = false;
                    alert("ระบบทำการบันทึกข้อมูลร้านค้าเรียบร้อยแล้วค่ะ");
                    // this.router.navigate(['/manage-shop']);
                    location.reload();
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.shop.address = {
                    address: this.address,
                    lat: this.latLng.lat,
                    lng: this.latLng.lng
                };
                this.shop.times = this.timeList;
                this.shop.coverimage = this.shop.coverimage ? this.shop.coverimage : 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=889&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';
                this.shopService.save(this.shop).subscribe(function (data) {
                    console.log(data);
                    _this.showeMainShop = true;
                    _this.showeditdiv = false;
                    _this.showeditTime = false;
                    window.localStorage.setItem('selectShop', data._id);
                    alert("ระบบทำการบันทึกข้อมูลร้านค้าใหม่เรียบร้อยแล้วค่ะ");
                    // this.router.navigate(['/manage-shop']);
                    location.reload();
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    CreateShopComponent.prototype.saveMap = function () {
        this.address = window.localStorage.getItem('address');
        var latLng = JSON.parse(window.localStorage.getItem('latLng'));
        this.latLng = {
            lat: latLng.lat,
            lng: latLng.lng
        };
        this.showeditdiv = true;
        this.showeMap = false;
    };
    CreateShopComponent.prototype.openTime = function () {
        this.showeMainShop = false;
        this.showeditdiv = false;
        this.showeditTime = true;
    };
    CreateShopComponent.prototype.cancelTime = function () {
        this.showeMainShop = false;
        this.showeditdiv = true;
        this.showeditTime = false;
    };
    CreateShopComponent.prototype.saveTime = function () {
        var _this = this;
        this.showeMainShop = false;
        this.showeditdiv = true;
        this.showeditTime = false;
        var day = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
        this.selectDate.forEach(function (el, i) {
            if (el) {
                _this.useSelectDate.push(day[i]);
            }
        });
        this.times.days = this.useSelectDate;
        this.timeList.push(this.times);
        this.times = {};
        this.useSelectDate = [];
        this.selectDate = [];
    };
    CreateShopComponent.prototype.deleteTime = function (id) {
        for (var i = 0; i < this.timeList.length; i++) {
            if (id == i) {
                this.timeList.splice(i, 1);
                break;
            }
        }
    };
    CreateShopComponent.prototype.setActiveMenu = function (tab_id) {
        for (var i = 0; i < 4; i++) {
            if (i === tab_id) {
                this.activeMenu[i] = 'btn btn-fb-checked';
            }
            else {
                this.activeMenu[i] = 'btn';
            }
        }
    };
    CreateShopComponent.prototype.selectTab = function (tab) {
        this.setActiveMenu(tab);
        switch (tab) {
            case 0: {
                this.selectTabs = 0;
                this.showeMap = false;
                break;
            }
            case 1: {
                this.selectTabs = 1;
                this.showeMap = false;
                break;
            }
            case 2: {
                this.selectTabs = 2;
                this.showeMap = false;
                break;
            }
            case 3: {
                this.selectTabs = 3;
                break;
            }
            default: {
                this.selectTabs = 0;
                break;
            }
        }
    };
    CreateShopComponent.prototype.validateEmail = function () {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(this.shop.email);
    };
    return CreateShopComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CreateShopComponent.prototype, "modal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalproduct'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], CreateShopComponent.prototype, "modalproduct", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmCate'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], CreateShopComponent.prototype, "confrimCate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shopinfoTab'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "shopinfo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shopcontactTab'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "shopcontact", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shoptimecloseTab'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "shoptimeclose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shopaddressTab'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "shopaddress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uploadImgProduct'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "uploadImgProduct", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], CreateShopComponent.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pacinput'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], CreateShopComponent.prototype, "pacinput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('promoteimgInput'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "promoteimgInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cateimgInput'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "cateimgInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('prdimgInput'),
    __metadata("design:type", Object)
], CreateShopComponent.prototype, "prdimgInput", void 0);
CreateShopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-shop',
        template: __webpack_require__("../../../../../src/app/create-shop/create-shop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-shop/create-shop.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_app_create_shop_create_shop_service__["a" /* ShopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_create_shop_create_shop_service__["a" /* ShopService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_pubsub__["b" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_pubsub__["b" /* PubSubService */]) === "function" && _j || Object])
], CreateShopComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=create-shop.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-shop/create-shop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShopService = (function () {
    function ShopService(http, server) {
        this.http = http;
        this.server = server;
    }
    ShopService.prototype.save = function (shop) {
        return this.http.post(this.server.url + 'api/shops', shop, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.uploadCateImage = function (imgcategory) {
        return this.http.post(this.server.url + 'api/products_picture', { data: imgcategory.replace('data:image/jpeg;base64,', '') }, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.uploadImage = function (shop) {
        return this.http.post(this.server.url + 'api/products_picture', { data: shop.coverimage.replace('data:image/jpeg;base64,', '') }, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.uploadPromoteImage = function (shop) {
        return this.http.post(this.server.url + 'api/products_picture', { data: shop.newpromoteimage.replace('data:image/jpeg;base64,', '') }, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.edit = function (shop) {
        return this.http.put(this.server.url + 'api/shops/' + shop._id, shop, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.delete = function (id) {
        return this.http.delete(this.server.url + 'api/shops/' + id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.getShopByID = function (id) {
        return this.http.get(this.server.url + 'api/shops/' + id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    //////////////product
    ShopService.prototype.createProduct = function (product, shop_id) {
        return this.http.put(this.server.url + 'api/createproduct/' + shop_id, product, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.saveProduct = function (product) {
        return this.http.post(this.server.url + 'api/products', product, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.editProduct = function (product) {
        return this.http.put(this.server.url + 'api/products/' + product._id, product, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.server.url + 'api/products/' + id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.getProductsByID = function (id) {
        return this.http.get(this.server.url + 'api/productsbyshop/' + id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    /////////////category
    ShopService.prototype.saveCategory = function (category, shopID) {
        return this.http.put(this.server.url + 'api/createcate/' + shopID, category, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.editCategory = function (category, cateID) {
        return this.http.put(this.server.url + 'api/categoryproducts/' + cateID, category, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.server.url + 'api/categoryproducts/' + id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.getCategoryByID = function (id) {
        return this.http.get(this.server.url + 'api/categoryproductsbyshop/' + id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShopService.prototype.getCategoryShop = function () {
        return this.http.get(this.server.url + 'api/categoryshops', this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    return ShopService;
}());
ShopService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object])
], ShopService);

var _a, _b;
//# sourceMappingURL=create-shop.service.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\r\n    margin-top: 0px !important;\r\n    height: 358px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"title\">จำนวนลูกค้า</h4>\r\n            <p class=\"category\">\r\n              <span class=\"text-success\">\r\n                <i class=\"fa fa-long-arrow-up\"></i> 45% </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n            <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"title\">ยอดขาย</h4>\r\n            <p class=\"category\">\r\n              <span class=\"text-success\">\r\n                <i class=\"fa fa-long-arrow-up\"></i> 10% </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div id=\"map\"></div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n            <h4 class=\"title\">จำนวนลูกค้า รายจังหวัด</h4>\r\n          </div>\r\n\r\n          <div class=\"card-content table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"text-danger\">\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>จังหวัด</th>\r\n                  <th class=\"text-center\">จำนวนลูกค้า</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>1</td>\r\n                  <td>กรุงเทพมหานคร</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>2</td>\r\n                  <td>กำแพงเพชร</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>3</td>\r\n                  <td>ลพบุรี</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>4</td>\r\n                  <td>ชัยภูมิ</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>5</td>\r\n                  <td>นครสวรรค์</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n            <h4 class=\"title\">ลูกค้าใหม่</h4>\r\n            <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n          </div>\r\n\r\n          <div class=\"card-content table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"text-danger\">\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>ลูกค้า</th>\r\n                  <th class=\"text-center\">ยอดขาย (บาท)</th>\r\n                  <th class=\"text-center\">ยอดขาย (%)</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>1</td>\r\n                  <td>ชุดเดรสสั้น คอกลม แขนบาน ลายขวาง ทรงใส่สบาย (สีดำ)</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>2</td>\r\n                  <td>KK เดรสสั้น แขน 3 ส่วน ลายริ้ว (สีดำ) รุ่น 8801</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>3</td>\r\n                  <td>KK ชุดเดรสสั้นน่ารัก สีดำตัดขาว รุ่น LW100</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>4</td>\r\n                  <td>Korea ชุดเดรสแฟชั่น ทรงหรูน่ารัก แขนระบาย(สีดำ) รุ่น 5309</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>5</td>\r\n                  <td>Charming ชุดเดรสดำชายระบาย ผ้ายืดเนื้อดีไม่ต้องรีด รุ่น D108</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    CustomerComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    CustomerComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(13.9338383, 100.7164154);
        var mapOptions = {
            zoom: 18,
            center: myLatlng,
            scrollwheel: false,
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'ตำแหน่งคุณ'
        });
        Marker.setMap(map);
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 100,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        // var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        // this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/customer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomerComponent);

//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-stats .card-header {\r\n    float: none !important;\r\n}\r\n\r\n.right {\r\n    position: absolute;\r\n    right: 40px;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n                        <i class=\"material-icons\">shopping_cart</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">ยอดขายวันนี้</p>\r\n                        <h3 class=\"title\">{{dataDashboard.todaySales | number}}\r\n                            <small>&nbsp;&nbsp;ชิ้น</small>\r\n                        </h3>\r\n                    </div>\r\n                    <!-- <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons text-danger\">warning</i> <a href=\"#pablo\">Get More Space...</a>\r\n                                </div>\r\n                            </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"green\">\r\n                        <i class=\"material-icons\">date_range</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">ยอดขายเดือนนี้ (ต.ค./2560)</p>\r\n                        <h3 class=\"title\">฿{{dataDashboard.SalesThisMonth | number}}</h3>\r\n                    </div>\r\n                    <!-- <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                                </div>\r\n                            </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <i class=\"material-icons\">timeline</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">ยอดขายรวมทั้งปี</p>\r\n                        <h3 class=\"title\">฿{{dataDashboard.totalYearSales | number}}</h3>\r\n                    </div>\r\n                    <!-- <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">local_offer</i> Tracked from Github\r\n                                </div>\r\n                            </div> -->\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"blue\">\r\n                        <i class=\"material-icons\">folder</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">หมวดหมู่ขายดีปีนี้</p>\r\n                        <h3 class=\"title\">{{dataDashboard.bestSellerGroup}}</h3>\r\n                    </div>\r\n                    <!-- <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">update</i> Just Updated\r\n                                </div>\r\n                            </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n                        <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h4 class=\"title\">ยอดขายรวม</h4>\r\n                        <p class=\"category\">\r\n                            <span class=\"text-success\">\r\n                                <i class=\"fa fa-long-arrow-up\"></i> {{dataDashboard?.totalSelesGraph?.grow | number}}% </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n                    </div>\r\n                    <!-- <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                                </div>\r\n                            </div> -->\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-4\">\r\n                        <div class=\"card\" >\r\n                            <div class=\"card-header card-chart\" data-background-color=\"orange\">\r\n                                <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <h4 class=\"title\">Email Subscriptions</h4>\r\n                                <p class=\"category\">Last Campaign Performance</p>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                                </div>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div> -->\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n                        <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h4 class=\"title\">มูลค่าสินค้าคงเหลือรายคลัง</h4>\r\n                        <p class=\"category\">\r\n                            <span class=\"text-success\">\r\n                                <i class=\"fa fa-long-arrow-up\"></i> {{dataDashboard?.inventoryValueGraph?.grow | number}}% </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n\r\n                    </div>\r\n                    <!-- <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                                </div>\r\n                            </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header dropdown\" data-background-color=\"blue\">\r\n                        <h4 class=\"title\">สินค้าเคลื่อนไหวย้อนหลัง 7 วัน</h4>\r\n                        <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n                    </div>\r\n\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>ชื่อสินค้า</th>\r\n                                    <th class=\"text-center\">เข้า</th>\r\n                                    <th class=\"text-center\">ออก</th>\r\n                                    <th class=\"text-center\">เปลี่ยนแปลง</th>\r\n                                    <th class=\"text-center\">คงเหลือ</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of dataDashboard.productMovement; let i = index\">\r\n                                    <td>{{i + 1}}</td>\r\n                                    <td>{{item.name}}</td>\r\n                                    <td class=\"text-center\">{{item.in}}</td>\r\n                                    <td class=\"text-center\">{{item.out}}</td>\r\n                                    <td class=\"text-danger text-center\">{{item.change}}</td>\r\n                                    <td class=\"text-center\">{{item.stock}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(service) {
        this.service = service;
        this.dataDashboard = {};
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) {
            _this.dataDashboard = data;
            console.log(_this.dataDashboard);
            /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
            var dataDailySalesChart = {
                labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
                series: [
                    _this.dataDashboard.totalSelesGraph ? _this.dataDashboard.totalSelesGraph.series : []
                ]
            };
            var optionsDailySalesChart = {
                lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                    tension: 0
                }),
                low: 0,
                high: 100,
                chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
            };
            var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
            _this.startAnimationForLineChart(dailySalesChart);
            /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
            var dataCompletedTasksChart = {
                labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
                series: [
                    _this.dataDashboard.inventoryValueGraph ? _this.dataDashboard.inventoryValueGraph.series : []
                ]
            };
            var optionsCompletedTasksChart = {
                lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                    tension: 0
                }),
                low: 0,
                high: 100,
                chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
            };
            var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
            // start animation for the Completed Tasks Chart - Line Chart
            _this.startAnimationForLineChart(completedTasksChart);
            /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
            var dataEmailsSubscriptionChart = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
                ]
            };
            var optionsEmailsSubscriptionChart = {
                axisX: {
                    showGrid: false
                },
                low: 0,
                high: 1000,
                chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
            };
            var responsiveOptions = [
                ['screen and (max-width: 640px)', {
                        seriesBarDistance: 5,
                        axisX: {
                            labelInterpolationFnc: function (value) {
                                return value[0];
                            }
                        }
                    }]
            ];
            // var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
            //start animation for the Emails Subscription Chart
            // this.startAnimationForBarChart(emailsSubscriptionChart);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_dashboard_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_dashboard_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getData = function () {
        return this.http.get('../../assets/data/dashboard.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card card-plain\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Material Design Icons</h4>\r\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\r\n                            <iframe src=\"https://design.google.com/icons/\">\r\n                                <p>Your browser does not support iframes.</p>\r\n                            </iframe>\r\n                        </div>\r\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\r\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-icons',
        template: __webpack_require__("../../../../../src/app/icons/icons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/icons/icons.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <form class=\"form-signin\">\r\n      <h2 style=\"text-align: center;\">กรุณาเข้าสู่ระบบ</h2>\r\n      <input type=\"email\" class=\"form-control\" placeholder=\"อีเมล\" autofocus=\"\" name=\"username\" [(ngModel)]=\"credentials.username\">\r\n      <input type=\"password\"  class=\"form-control\" placeholder=\"รหัสผ่าน\" name=\"password\" [(ngModel)]=\"credentials.password\">\r\n      <button class=\"btn btn-lg btn-block\" style=\"background-color: #ed3840;\" (click)=\"login()\">เข้าสู่ระบบ</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_provider_auth__ = __webpack_require__("../../../../../src/app/provider/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(server, auth, router, location) {
        this.server = server;
        this.auth = auth;
        this.router = router;
        this.location = location;
        this.credentials = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.isLogin().subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/manage-shop']);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        this.auth.sigin(this.credentials).subscribe(function (data) {
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
        }, function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_provider_auth__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_provider_auth__["a" /* Auth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-ads/manage-ads.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-7\" style=\"margin-top: 10px\">\r\n\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-5\">\r\n        <button class=\"btn addADS\" type=\"button\" (click)=\"addADS()\">\r\n          <i class=\"material-icons\">add</i> เพิ่มโฆษณา\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <div class=\"panel panel-default panel-trans\">\r\n          <div class=\"panel-heading panel-head\">\r\n            <h3 class=\"panel-title\">\r\n              <i class=\"material-icons cl-success\">brightness_1</i> โฆษณาที่ใช้งานอยู่</h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"row scrollmenu\">\r\n              <div class=\"col-xs-6 col-md-3 col-scroll col-lg-3\" *ngFor=\"let item1 of listAdsActive\">\r\n                <a class=\"thumbnail\" (click)=\"editADS(item1)\" *ngIf=\"item1.isvideo == false\">\r\n                  <img [src]=\"item1.image\" alt=\"...\">\r\n                  <div class=\"block-text\">\r\n                    <span class=\"ads-text \">{{item1.name}}</span>\r\n                  </div>\r\n                </a>\r\n                <a *ngIf=\"item1.isvideo == true\" class=\"thumbnail\" (click)=\"editADS(item1)\">\r\n                  <iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(yt + item1.videoid)\" width=\"180\" height=\"100\" frameborder=\"0\" allow=\"encrypted-media\"\r\n                    allowfullscreen></iframe>\r\n                  <div class=\"block-text\">\r\n                    <span class=\"ads-text \">{{item1.name}}</span>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default panel-trans \">\r\n          <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">\r\n              <i class=\"material-icons cl-orange\">brightness_1</i> โฆษณาที่ยังไม่ถูกใช้งาน</h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"row scrollmenu\">\r\n              <div class=\"col-xs-6 col-md-3 col-lg-3\" *ngFor=\"let item2 of listAdsInActive\">\r\n                <a (click)=\"editADS(item2)\" class=\"thumbnail\" *ngIf=\"item2.isvideo == false\">\r\n                  <img [src]=\"item2.image\" alt=\"...\">\r\n                  <div class=\"block-text\">\r\n                    <span class=\"ads-text\">{{item2.name}}</span>\r\n                  </div>\r\n                </a>\r\n                <a *ngIf=\"item2.isvideo == true\" class=\"thumbnail\" (click)=\"editADS(item2)\">\r\n                  <iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(yt + item2.videoid)\" width=\"180\" height=\"120\" frameborder=\"0\" allow=\"encrypted-media\"\r\n                    allowfullscreen></iframe>\r\n                  <div class=\"block-text\">\r\n                    <span class=\"ads-text\">{{item2.name}}</span>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default panel-trans \">\r\n          <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">\r\n              <i class=\"material-icons cl-red\">brightness_1</i> โฆษณาที่สิ้นสุดการใช้งาน</h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"row scrollmenu\">\r\n              <div class=\"col-xs-6 col-md-3 col-lg-3\" *ngFor=\"let item3 of listAdsExpired\">\r\n                <!-- <div class=\"thumbnail--div-size\" *ngFor=\"let item3 of listAdsExpired\"> -->\r\n                <a (click)=\"editADS(item3)\" class=\"thumbnail\" *ngIf=\"item3.isvideo == false\">\r\n                  <img [src]=\"item3.image\" alt=\"...\">\r\n                  <div class=\"block-text\">\r\n                    <span class=\"ads-text\">{{item3.name}}</span>\r\n                  </div>\r\n                </a>\r\n                <a *ngIf=\"item3.isvideo == true\" class=\"thumbnail\" (click)=\"editADS(item3)\">\r\n                  <iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(yt + item3.videoid)\" width=\"180\" height=\"100\" frameborder=\"0\" allow=\"encrypted-media\"\r\n                    allowfullscreen></iframe>\r\n                  <div class=\"block-text\">\r\n                    <span class=\"ads-text\">{{item3.name}}</span>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n              <!-- </div> -->\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- ---------------------- ADD OR EDIT ADS ---------------------- -->\r\n<div class=\"modal fade\" #modalads tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"row \">\r\n          <div class=\"col-lg-9\">\r\n            <h4 class=\"modal-title pull-left\"> {{CE_action_ads}}โฆษณา</h4>\r\n          </div>\r\n          <div class=\"col-lg-3 text-right verti-middle\">\r\n            <div class=\"text-status\">สถานะ : </div>\r\n            <ui-switch size=\"small\" [(ngModel)]=\"adsStatus\" (change)=\"activeChange($event)\"></ui-switch>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--      ADD ADS       -->\r\n      <div class=\"modal-body\" *ngIf=\"CE_action_ads == 'เพิ่ม'\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\r\n            <div *ngIf=\"type == 'image'\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" src=\"./assets/img/Ads-banner.png\" alt=\"\" *ngIf=\"adsimgAdding == null\">\r\n              <input #uploadADS type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"onADSImgChange($event)\" style=\"visibility:hidden;\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" [src]=\"adsimgAdding\" alt=\"\" *ngIf=\"adsimgAdding\">\r\n            </div>\r\n            <div *ngIf=\"type == 'vdo'\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" src=\"./assets/img/Ads-banner.png\" alt=\"\" *ngIf=\"adsimgAdding == null\">\r\n              <input #uploadADS type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"onADSImgChange($event)\" style=\"visibility:hidden;\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" [src]=\"adsimgAdding\" alt=\"\" *ngIf=\"adsimgAdding\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right\">\r\n            <div class=\"radio\">\r\n              <label>\r\n                <input type=\"radio\" name=\"type\" [(ngModel)]=\"type\" value=\"image\" (change)=\"changeType()\"> รูปภาพ</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left\">\r\n            <div class=\"radio\">\r\n              <label>\r\n                <input type=\"radio\" name=\"type\" [(ngModel)]=\"type\" value=\"vdo\" (change)=\"changeType()\"> วีดีโอ</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"type == 'vdo'\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center \"></div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center \">\r\n            <div class=\"media\">\r\n              <div class=\"media-left media-middle\">\r\n                <iframe width=\"180\" height=\"100\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(vdolink)\" frameborder=\"0\" allow=\"encrypted-media\"\r\n                  allowfullscreen></iframe>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <div class=\"input-group\">\r\n                  YOUTUBE Video ID\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"vdolinkinput\">\r\n                  <span class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"upLink(vdolinkinput)\">ยืนยัน</button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center \"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\">\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5 text-left\">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              ชื่อโฆษณา\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adsDATA.name\">\r\n            </div>\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              วันที่เริ่มต้น\r\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"adsDATA.effectivedatestart\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5 text-left\">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              ลิงค์\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adsDATA.website\">\r\n            </div>\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              วันที่สิ้นสุด\r\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"adsDATA.effectivedateend\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              รายละเอียด\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adsDATA.description\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-center\">\r\n            <button class=\"btn btn-default\" #dissmissBtn data-dismiss=\"modalads\" (click)=\"cancelSave()\">ยกเลิก</button>\r\n            <button class=\"btn btn-success\" (click)=\"saveADS()\">บันทึก</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--      ADD ADS       -->\r\n\r\n\r\n      <!-- EDIT ADS -->\r\n      <div class=\"modal-body\" *ngIf=\"CE_action_ads == 'แก้ไข'\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\r\n            <div *ngIf=\"type == 'image'\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" src=\"./assets/img/Ads-banner.png\" alt=\"\" *ngIf=\"adsimgAdding == null\">\r\n              <input #uploadADS type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"onADSImgChange($event)\" style=\"visibility:hidden;\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" [src]=\"adsimgAdding\" alt=\"\" *ngIf=\"adsimgAdding\">\r\n            </div>\r\n            <div *ngIf=\"type == 'vdo'\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" src=\"./assets/img/Ads-banner.png\" alt=\"\" *ngIf=\"adsimgAdding == null\">\r\n              <input #uploadADS type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"onADSImgChange($event)\" style=\"visibility:hidden;\">\r\n              <img (click)=\"selectADSimg()\" class=\"img-size\" [src]=\"adsimgAdding\" alt=\"\" *ngIf=\"adsimgAdding\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right\">\r\n            <div class=\"radio\">\r\n              <label>\r\n                <input type=\"radio\" name=\"type\" [(ngModel)]=\"type\" value=\"image\" (change)=\"changeType()\"> รูปภาพ</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left\">\r\n            <div class=\"radio\">\r\n              <label>\r\n                <input type=\"radio\" name=\"type\" [(ngModel)]=\"type\" value=\"vdo\" (change)=\"changeType()\"> วีดีโอ</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"type == 'vdo'\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center \"></div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center \">\r\n            <div class=\"media\">\r\n              <div class=\"media-left media-middle\">\r\n                <iframe width=\"180\" height=\"100\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(vdolink)\" frameborder=\"0\" allow=\"encrypted-media\"\r\n                  allowfullscreen></iframe>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <div class=\"input-group\">\r\n                  YOUTUBE Video ID\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"vdolinkinput\">\r\n                  <span class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"upLink(vdolinkinput)\">ยืนยัน</button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center \"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\">\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5 text-left\">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              ชื่อโฆษณา\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adsEditDATA.name\">\r\n            </div>\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              วันที่เริ่มต้น\r\n              <input type=\"date\" [(ngModel)]=\"adsEditDATA.effectivedatestart\" class=\"form-control\">\r\n              <!-- <input [(ngModel)]=\"adsDATA.effectivedatestart\" [value]=\"adsDATA.effectivedatestart\"> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5 text-left\">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              ลิงค์\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adsEditDATA.website\">\r\n            </div>\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              วันที่สิ้นสุด\r\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"adsEditDATA.effectivedateend\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              รายละเอียด\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adsEditDATA.description\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-mg-12 col-sm-12 col-xs-12 text-center\">\r\n            <button class=\"btn btn-default\" #dissmissBtn data-dismiss=\"modalads\" (click)=\"cancelSave()\">ยกเลิก</button>\r\n            <button class=\"btn btn-success\" (click)=\"saveADS()\">บันทึก</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- EDIT ADS -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- ---------------------- ADD OR EDIT ADS ---------------------- -->"

/***/ }),

/***/ "../../../../../src/app/manage-ads/manage-ads.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Kanit', sans-serif; }\n\n.addADS {\n  background-color: #ffffff00;\n  color: #228f22;\n  border-color: #228f22;\n  border-radius: 4rem;\n  border: 3px solid;\n  font-size: 1.5rem; }\n\n.block-text {\n  background-color: rgba(0, 0, 0, 0.418);\n  height: 3rem;\n  bottom: 0.5rem;\n  left: 2rem;\n  text-align: center;\n  position: absolute;\n  width: 212px; }\n\n.thumbnail--div-size {\n  width: 215px; }\n\n.ads-text {\n  color: white;\n  vertical-align: -webkit-baseline-middle; }\n\n.panel-trans {\n  background-color: transparent;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.panel-heading {\n  border-radius: 3rem;\n  background-color: white; }\n\n.panel-title {\n  color: black; }\n\n.thumbnail {\n  margin-bottom: 0px;\n  height: 125px; }\n\n.thumbnail > img {\n  height: 115px;\n  width: 215px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail > iframe {\n  height: 115px;\n  width: 215px; }\n\n.cl-success {\n  color: greenyellow; }\n\n.cl-red {\n  color: red; }\n\n.cl-orange {\n  color: orange; }\n\n.scrollmenu {\n  overflow-y: -webkit-paged-x;\n  white-space: nowrap !important;\n  width: 100%;\n  margin-left: 0.5%;\n  margin-right: 3.5%;\n  height: 15.5rem; }\n\n.col-scroll {\n  display: inline-block; }\n\n.verti-middle {\n  vertical-align: -webkit-baseline-middle; }\n\n.text-status {\n  font-size: 1.4rem;\n  display: inline-block;\n  vertical-align: super; }\n\n.img-size {\n  height: 20rem;\n  width: auto; }\n\n.yt-width {\n  width: 50%; }\n\ninput[type=file] {\n  display: none; }\n\n.radio label {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-ads/manage-ads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAdsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_manage_ads_manage_ads_service__ = __webpack_require__("../../../../../src/app/manage-ads/manage-ads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_pubsub__ = __webpack_require__("../../../../angular2-pubsub/esm/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageAdsComponent = (function () {
    function ManageAdsComponent(ADSservice, server, router, sanitizer, pubsub) {
        this.ADSservice = ADSservice;
        this.server = server;
        this.router = router;
        this.sanitizer = sanitizer;
        this.pubsub = pubsub;
        this.listAdsActive = [];
        this.listAdsInActive = [];
        this.listAdsExpired = [];
        this.adsimgAdding = null;
        this.adsvdoAdding = null;
        this.yt = 'https://www.youtube.com/embed/';
        this.adsDATA = {};
        this.adsEditDATA = {};
        this.ckLinkNull = true;
        this.adsStatus = false;
        this.today = new Date();
        this.isEditImage = false;
    }
    ManageAdsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pubsub.$pub('loading', true);
        this.server.isLogin().subscribe(function (data) {
            if (!data) {
                _this.pubsub.$pub('loading', false);
                _this.router.navigate(['/login']);
            }
            _this.LoadInitial();
        });
    };
    ManageAdsComponent.prototype.LoadInitial = function () {
        var _this = this;
        this.listAdsActive = [];
        this.listAdsInActive = [];
        this.listAdsExpired = [];
        this.ADSservice.getAdsList().subscribe(function (data) {
            _this.pubsub.$pub('loading', false);
            data.forEach(function (element) {
                if (element.status == true && element.effectivedateend >= _this.today.toISOString()) {
                    _this.listAdsActive.push(element);
                }
                else if (element.status == false && element.effectivedateend >= _this.today.toISOString()) {
                    _this.listAdsInActive.push(element);
                }
                else if (element.effectivedateend < _this.today.toISOString()) {
                    _this.listAdsExpired.push(element);
                }
            });
            console.log(data);
            console.log(_this.listAdsActive);
            console.log(_this.listAdsInActive);
            console.log(_this.listAdsExpired);
            // DEFAULT INIT DATA
            _this.adsDATA.status = false;
            // DEFAULT INIT DATA
        }, function (err) {
            console.log(err);
        });
    };
    ManageAdsComponent.prototype.addADS = function () {
        this.CE_action_ads = "เพิ่ม";
        this.type = 'image';
        this.cancelSave();
        $(this.modalads.nativeElement).modal('show');
    };
    ManageAdsComponent.prototype.editADS = function (item) {
        this.CE_action_ads = "แก้ไข";
        var itemdata = JSON.parse(JSON.stringify(item));
        this.adsEditDATA = itemdata;
        console.log(this.adsEditDATA);
        if (item.isvideo == false) {
            this.type = 'image';
        }
        else if (item.isvideo == true) {
            this.type = 'vdo';
            this.vdolink = this.yt + item.videoid;
        }
        this.adsEditDATA.effectivedatestart = this.adsEditDATA.effectivedatestart.toString().substring(0, 10);
        this.adsEditDATA.effectivedateend = this.adsEditDATA.effectivedateend.toString().substring(0, 10);
        this.adsStatus = item.status;
        this.adsimgAdding = item.image;
        // console.log(this.adsDATA);
        $(this.modalads.nativeElement).modal('show');
    };
    ManageAdsComponent.prototype.changeType = function () {
        if (this.type == 'image') {
            this.vdolinkinput = null;
        }
        else if (this.type == 'vdo') {
            this.adsimgAdding = null;
            this.vdolink = this.yt + 'PZ4pctQMdg4';
        }
    };
    ManageAdsComponent.prototype.activeChange = function ($event) {
        if ($event === true) {
            this.adsDATA.status = true;
        }
        else if ($event === false) {
            this.adsDATA.status = false;
        }
    };
    ManageAdsComponent.prototype.upLink = function (link) {
        if (link) {
            this.ckLinkNull = false;
            this.vdolink = this.yt + link;
        }
        else {
            this.ckLinkNull = true;
        }
    };
    ManageAdsComponent.prototype.selectADSimg = function () {
        this.uploadADS.nativeElement.click();
    };
    ManageAdsComponent.prototype.onADSImgChange = function ($event) {
        var _this = this;
        console.log("PASS");
        var fileBrowser = this.uploadADS.nativeElement;
        var reader = new FileReader();
        reader.readAsDataURL(fileBrowser.files[0]);
        if (fileBrowser.files.length > 0) {
            reader.onload = function () {
                _this.isEditImage = true;
                _this.adsimgAdding = reader.result.replace(/\n/g, '');
            };
        }
    };
    ManageAdsComponent.prototype.saveADS = function () {
        var _this = this;
        this.pubsub.$pub('loading', true);
        if (this.CE_action_ads == "เพิ่ม") {
            if (this.type == 'image') {
                if (this.adsimgAdding) {
                    var sendADS_1;
                    this.ADSservice.uploadImage(this.adsimgAdding).subscribe(function (upImg) {
                        sendADS_1 = {
                            name: _this.adsDATA.name,
                            description: _this.adsDATA.description,
                            image: upImg.imageURL,
                            isvideo: false,
                            website: _this.adsDATA.website,
                            effectivedatestart: _this.adsDATA.effectivedatestart,
                            effectivedateend: _this.adsDATA.effectivedateend,
                            status: _this.adsStatus
                        };
                        _this.ADSservice.postAds(sendADS_1).subscribe(function (data) {
                            console.log(data);
                            _this.pubsub.$pub('loading', false);
                            $(_this.modalads.nativeElement).modal('hide');
                            alert("ระบบได้ทำการเพิ่มรูปภาพโฆษณาเรียบร้อยแล้วค่ะ");
                            _this.LoadInitial();
                        }, function (errSave) {
                            console.log(errSave);
                            _this.pubsub.$pub('loading', false);
                            alert("ระบบไม่สามารถทำการเพิ่มรูปภาพโฆษณาได้ค่ะ");
                        });
                    }, function (err) {
                        console.log(err);
                        _this.pubsub.$pub('loading', false);
                        alert("ระบบไม่สามารถอัพโหลดรูปภาพได้ กรุณาลองใหม่อีกครั้งค่ะ");
                    });
                }
                else {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาเพิ่มรูปภาพโฆษณาก่อนทำการบันทึกค่ะ");
                }
            }
            else if (this.type == 'vdo') {
                this.pubsub.$pub('loading', true);
                if (this.ckLinkNull == true) {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาใส่ ID ของ Video YOUTUBE ด้วยค่ะ");
                }
                else if (!this.adsimgAdding) {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาเพิ่มรูปภาพโฆษณาด้วยค่ะ");
                }
                else if (!this.adsimgAdding && this.ckLinkNull) {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาเพิ่มรูปภาพโฆษณาและวีดีโอโฆษณาด้วยค่ะ");
                }
                else if (this.ckLinkNull == false && this.adsimgAdding) {
                    this.ADSservice.uploadImage(this.adsimgAdding).subscribe(function (upImg) {
                        var sendADS = {
                            name: _this.adsDATA.name,
                            image: upImg.imageURL,
                            description: _this.adsDATA.description,
                            videoid: _this.adsDATA.vdolink,
                            isvideo: true,
                            website: _this.adsDATA.website,
                            effectivedatestart: _this.adsDATA.effectivedatestart,
                            effectivedateend: _this.adsDATA.effectivedateend,
                            status: _this.adsStatus
                        };
                        _this.ADSservice.postAds(sendADS).subscribe(function (data) {
                            console.log(data);
                            _this.pubsub.$pub('loading', false);
                            $(_this.modalads.nativeElement).modal('hide');
                            alert("ระบบได้ทำการเพิ่มวีดีโอโฆษณาเรียบร้อยแล้วค่ะ");
                            _this.LoadInitial();
                        }, function (err) {
                            console.log(err);
                            _this.pubsub.$pub('loading', false);
                            alert("ระบบไม่สามารถเพิ่มวีดีโอโฆษณาได้ กรุณาลองใหม่อีกครั้งค่ะ");
                        });
                    }, function (errUpimage) {
                        _this.pubsub.$pub('loading', false);
                        alert("ระบบไม่สามารถทำการเพิ่มรูปภาพโฆษณาได้ค่ะ");
                    });
                }
            }
        }
        else if (this.CE_action_ads == "แก้ไข") {
            if (this.type == 'image') {
                if (this.adsimgAdding) {
                    var sendADS_2;
                    if (this.isEditImage == true) {
                        this.ADSservice.uploadImage(this.adsimgAdding).subscribe(function (upImg) {
                            sendADS_2 = {
                                _id: _this.adsEditDATA._id,
                                name: _this.adsEditDATA.name,
                                description: _this.adsEditDATA.description,
                                image: upImg.imageURL,
                                isvideo: false,
                                website: _this.adsEditDATA.website,
                                effectivedatestart: _this.adsEditDATA.effectivedatestart,
                                effectivedateend: _this.adsEditDATA.effectivedateend,
                                status: _this.adsStatus
                            };
                            _this.ADSservice.editAds(sendADS_2).subscribe(function (data) {
                                console.log(data);
                                _this.pubsub.$pub('loading', false);
                                $(_this.modalads.nativeElement).modal('hide');
                                alert("ระบบได้ทำการแก้ไขโฆษณาเรียบร้อยแล้วค่ะ");
                                _this.LoadInitial();
                            }, function (errSave) {
                                console.log(errSave);
                                _this.pubsub.$pub('loading', false);
                                alert("ระบบไม่สามารถทำการแก้ไขโฆษณาได้ค่ะ");
                            });
                        }, function (err) {
                            console.log(err);
                            _this.pubsub.$pub('loading', false);
                            alert("ระบบไม่สามารถอัพโหลดรูปภาพแก้ไขได้ กรุณาลองใหม่อีกครั้งค่ะ");
                        });
                    }
                    else if (this.isEditImage == false) {
                        sendADS_2 = {
                            _id: this.adsEditDATA._id,
                            name: this.adsEditDATA.name,
                            description: this.adsEditDATA.description,
                            image: this.adsimgAdding,
                            isvideo: false,
                            website: this.adsEditDATA.website,
                            effectivedatestart: this.adsEditDATA.effectivedatestart,
                            effectivedateend: this.adsEditDATA.effectivedateend,
                            status: this.adsStatus
                        };
                        this.ADSservice.editAds(sendADS_2).subscribe(function (data) {
                            console.log(data);
                            _this.pubsub.$pub('loading', false);
                            $(_this.modalads.nativeElement).modal('hide');
                            alert("ระบบได้ทำการแก้ไขโฆษณาเรียบร้อยแล้วค่ะ");
                            _this.LoadInitial();
                        }, function (errSave) {
                            console.log(errSave);
                            _this.pubsub.$pub('loading', false);
                            alert("ระบบไม่สามารถทำการแก้ไขโฆษณาได้ค่ะ");
                        });
                    }
                }
                else {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาเพิ่มรูปภาพโฆษณาก่อนทำการบันทึกค่ะ");
                }
            }
            else if (this.type == 'vdo') {
                this.pubsub.$pub('loading', true);
                if (this.ckLinkNull == true) {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาใส่ ID ของ Video YOUTUBE ด้วยค่ะ");
                }
                else if (!this.adsimgAdding) {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาเพิ่มรูปภาพโฆษณาด้วยค่ะ");
                }
                else if (!this.adsimgAdding && this.ckLinkNull) {
                    this.pubsub.$pub('loading', false);
                    alert("กรุณาเพิ่มรูปภาพโฆษณาและวีดีโอโฆษณาด้วยค่ะ");
                }
                else if (this.ckLinkNull == false && this.adsimgAdding) {
                    if (this.isEditImage == true) {
                        this.ADSservice.uploadImage(this.adsimgAdding).subscribe(function (upImg) {
                            var sendADS = {
                                _id: _this.adsEditDATA._id,
                                name: _this.adsEditDATA.name,
                                image: upImg.imageURL,
                                description: _this.adsEditDATA.description,
                                videoid: _this.adsEditDATA.vdolink,
                                isvideo: true,
                                website: _this.adsEditDATA.website,
                                effectivedatestart: _this.adsEditDATA.effectivedatestart,
                                effectivedateend: _this.adsEditDATA.effectivedateend,
                                status: _this.adsStatus
                            };
                            _this.ADSservice.editAds(sendADS).subscribe(function (data) {
                                console.log(data);
                                _this.pubsub.$pub('loading', false);
                                $(_this.modalads.nativeElement).modal('hide');
                                alert("ระบบได้ทำการแก้ไขโฆษณาเรียบร้อยแล้วค่ะ");
                                _this.LoadInitial();
                            }, function (err) {
                                console.log(err);
                                _this.pubsub.$pub('loading', false);
                                alert("ระบบไม่สามารถทำการแก้ไขโฆษณาได้ กรุณาลองใหม่อีกครั้งค่ะ");
                            });
                        }, function (errUpimage) {
                            _this.pubsub.$pub('loading', false);
                            alert("ระบบไม่สามารถทำการแก้ไขโฆษณาได้ค่ะ");
                        });
                    }
                    else if (this.isEditImage == false) {
                        var sendADS = {
                            _id: this.adsEditDATA._id,
                            name: this.adsEditDATA.name,
                            image: this.adsimgAdding,
                            description: this.adsEditDATA.description,
                            videoid: this.adsEditDATA.vdolink,
                            isvideo: true,
                            website: this.adsEditDATA.website,
                            effectivedatestart: this.adsEditDATA.effectivedatestart,
                            effectivedateend: this.adsEditDATA.effectivedateend,
                            status: this.adsStatus
                        };
                        this.ADSservice.editAds(sendADS).subscribe(function (data) {
                            console.log(data);
                            _this.pubsub.$pub('loading', false);
                            $(_this.modalads.nativeElement).modal('hide');
                            alert("ระบบได้ทำการแก้ไขโฆษณาเรียบร้อยแล้วค่ะ");
                            _this.LoadInitial();
                        }, function (err) {
                            console.log(err);
                            _this.pubsub.$pub('loading', false);
                            alert("ระบบไม่สามารถทำการแก้ไขโฆษณาได้ กรุณาลองใหม่อีกครั้งค่ะ");
                        });
                    }
                }
            }
        }
    };
    ManageAdsComponent.prototype.cancelSave = function () {
        $(this.modalads.nativeElement).modal('hide');
        this.adsimgAdding = null;
        this.adsvdoAdding = null;
        this.ckLinkNull = null;
        this.adsDATA.name = '';
        this.adsDATA.description = '';
        this.adsDATA.videoid = '';
        this.adsDATA.effectivedatestart = '';
        this.adsDATA.effectivedateend = '';
        this.adsDATA.website = '';
        this.adsDATA.isvideo = false;
        this.adsStatus = false;
        this.vdolink = '';
    };
    return ManageAdsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalads'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ManageAdsComponent.prototype, "modalads", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uploadADS'),
    __metadata("design:type", Object)
], ManageAdsComponent.prototype, "uploadADS", void 0);
ManageAdsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-ads',
        template: __webpack_require__("../../../../../src/app/manage-ads/manage-ads.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-ads/manage-ads.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_manage_ads_manage_ads_service__["a" /* ADSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_manage_ads_manage_ads_service__["a" /* ADSService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_pubsub__["b" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_pubsub__["b" /* PubSubService */]) === "function" && _f || Object])
], ManageAdsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=manage-ads.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-ads/manage-ads.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADSService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ADSService = (function () {
    function ADSService(http, server) {
        this.http = http;
        this.server = server;
    }
    ADSService.prototype.getAdsList = function () {
        return this.http.get(this.server.url + 'api/ads/', {})
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ADSService.prototype.postAds = function (data) {
        return this.http.post(this.server.url + 'api/ads/', data, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ADSService.prototype.editAds = function (data) {
        return this.http.put(this.server.url + 'api/ads/' + data._id, data, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ADSService.prototype.uploadImage = function (img) {
        return this.http.post(this.server.url + 'api/products_picture', { data: img.replace('data:image/jpeg;base64,', '') }, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    return ADSService;
}());
ADSService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object])
], ADSService);

var _a, _b;
//# sourceMappingURL=manage-ads.service.js.map

/***/ }),

/***/ "../../../../../src/app/manage-campaign/manage-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\" style=\"margin-top: 10px\">\r\n\r\n      </div>\r\n      <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5\">\r\n        <button class=\"btn addcampaign\" type=\"button\" (click)=\"campaignManage()\">\r\n          <i class=\"material-icons\">add</i> จัดการประเภทแคมเปญ\r\n        </button>\r\n        <button class=\"btn addcampaign\" type=\"button\" (click)=\"addCampaign()\">\r\n          <i class=\"material-icons\">add</i> เพิ่มแคมเปญ\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- //////Apple/// -->\r\n\r\n    <div class=\"tab-content\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-content table-responsive\">\r\n              <table class=\"table table-hover\">\r\n                <thead class=\"text-danger\">\r\n                  <tr>\r\n                    <th class=\"text-center col-md-1\">#</th>\r\n                    <th class=\"text-center\">ชื่อแคมเปญ</th>\r\n                    <th class=\"text-center col-md-2\">การแจก coin</th>\r\n                    <th class=\"text-center col-md-2\">วันที่เริ่มต้น</th>\r\n                    <th class=\"text-center col-md-2 \">วันที่สิ้นสุด</th>\r\n                    <th class=\"text-center col-md-2\">สถานะ</th>\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"campaignList && campaignList.length == 0\">\r\n                    <td colspan=\"7\" class=\"text-center\">\r\n                      ยังไม่มีข้อมูลแคมเปญในระบบค่ะ\r\n                    </td>\r\n\r\n                  </tr>\r\n                  <tr *ngFor=\"let campaign of campaignList; let i = index \">\r\n                    <td class=\"text-center\" (click)=\"editCampaign(campaign)\">{{i + 1}}</td>\r\n                    <td (click)=\"editCampaign(campaign)\">{{campaign.name}}</td>\r\n                    <td class=\"text-center\" (click)=\"editCampaign(campaign)\">{{campaign.coin_give}} coin</td>\r\n                    <td class=\"text-center\" (click)=\"editCampaign(campaign)\">{{campaign.effectivedatestart | date: 'short'}}</td>\r\n                    <td class=\"text-center\" (click)=\"editCampaign(campaign)\">{{campaign.effectivedateend | date: 'short'}}</td>\r\n                    <td class=\"text-center \">\r\n                      <span *ngIf=\"campaign.status == true\">ใช้งานอยู่</span>\r\n                      <span *ngIf=\"campaign.status == false\">ปิดการใช้งาน</span>\r\n                    </td>\r\n                  </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n\r\n              <!-- <div class=\"pc\">\r\n                <nav aria-label=\"Page navigation\">\r\n                  <ul class=\"pagination\">\r\n                    <li [class]=\"curentPage[item]\" *ngFor=\"let item of shopsL.pagings\">\r\n                      <a (click)=\"pageing(item)\">{{item}}</a>\r\n                    </li>\r\n                  </ul>\r\n                </nav>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!-- ////? -->\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- /////////////////////////////////MODAL CAMPAIGN TYPE MANAGE///////////////////////// -->\r\n\r\n<div class=\"modal fade\" #modalCampaignType tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" data-keyboard=\"false\"\r\n  data-backdrop=\"static\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content modal-width\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">จัดการประเภทแคมเปญ</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <span>\r\n          ชื่อประเภทแคมเปญ :\r\n          <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"campTypename\">\r\n\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"addType(campTypename)\">เพิ่ม</button>\r\n        </span>\r\n\r\n        <table class=\"table-width table\">\r\n          <thead class=\"text-danger display-block\">\r\n            <tr>\r\n              <th class=\"text-center col1\">ชื่อประเภทแคมเปญ</th>\r\n              <th class=\"col2\"></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"display-block table-body\">\r\n            <tr *ngFor=\"let item of campaignTypeList\" class=\"no-padding\">\r\n              <td class=\"col1\">\r\n                {{item.name}}\r\n              </td>\r\n              <td class=\"text-center col2\">\r\n                <button class=\"btn btn-danger btn-sm\" (click)=\"deleteCampType(item)\">\r\n                  <i class=\"material-icons\">delete_forever</i>\r\n                </button>\r\n\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" #dissmissBtn class=\"btn btn-default\" data-dismiss=\"modal\">ปิด</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- /////////////////////////////////MODAL CAMPAIGN TYPE MANAGE///////////////////////// -->\r\n\r\n\r\n<!-- /////////////////////////////////MODAL MANAGE CAMPAIGN ///////////////////////// -->\r\n\r\n<div class=\"modal fade\" #modalCampaign tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" data-keyboard=\"false\"\r\n  data-backdrop=\"static\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"row \">\r\n          <div class=\"col-lg-9\">\r\n            <h4 class=\"modal-title pull-left\">{{CE_CAMPAIGN_ACTION}}แคมเปญ\r\n            </h4>\r\n          </div>\r\n          <div class=\"col-lg-3 text-right verti-middle\">\r\n\r\n            <span class=\"text-status\">\r\n              สถานะ :\r\n              <ui-switch size=\"small\" [(ngModel)]=\"campaignData.status\"></ui-switch>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\r\n            <img (click)=\"selectCampaignImg()\" class=\"img-size\" src=\"./assets/img/Campaign-banner.png\" alt=\"\" *ngIf=\"!campimgAdding\">\r\n            <input #uploadCampaign type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"onCampaignImgChange($event)\" style=\"visibility:hidden;\">\r\n            <img (click)=\"selectCampaignImg()\" class=\"img-size\" [src]=\"campimgAdding\" alt=\"\" *ngIf=\"campimgAdding\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center\"></div>\r\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 \">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              ชื่อแคมเปญ\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"campaignData.name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center\">\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 \">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              ประเภทแคมเปญ\r\n              <select class=\"form-control\" [(ngModel)]=\"campaignData.type\">\r\n                <option value=\"{{item._id}}\" *ngFor=\"let item of campaignTypeList\">{{item.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 \">\r\n            <div class=\"form-group form-black floating is-empty\">\r\n              แจก Coin\r\n              <input type=\"number\" placeholder=\"ระบุจำนวน coin ที่ต้องการแจกในแคมเปญนี้\" class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"campaignData.coin_give\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center\">\r\n          </div>\r\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 \">\r\n\r\n            <div class=\"form-group form-black floating is-empty\">\r\n            รายละเอียด\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" [(ngModel)]=\"campaignData.detail\">\r\n            </div>\r\n\r\n\r\n            <span>\r\n             วันที่เริ่มต้น : \r\n              <input type=\"datetime-local\" class=\"date-input-width\" name=\"\" id=\"\" [(ngModel)]=\"campaignData.effectivedatestart\">\r\n              วันที่สิ้นสุด :\r\n              <input type=\"datetime-local\" class=\"date-input-width\" name=\"\" id=\"\" [(ngModel)]=\"campaignData.effectivedateend\">\r\n            </span>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelAddCampaign()\">ยกเลิก</button>\r\n          <button type=\"button\" *ngIf=\"campaignData._id\" class=\"btn btn-danger\" (click)=\"deleteCampaign(campaignData)\">ลบแคมเปญนี้</button>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"saveCampaign()\">บันทึก</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /////////////////////////////////MODAL MANAGE CAMPAIGN///////////////////////// -->"

/***/ }),

/***/ "../../../../../src/app/manage-campaign/manage-campaign.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Kanit', sans-serif; }\n\n.addcampaign {\n  background-color: #ffffff00;\n  color: #228f22;\n  border-color: #228f22;\n  border-radius: 4rem;\n  border: 3px solid;\n  font-size: 1.5rem; }\n\n.table-width {\n  width: 100%; }\n\n.modal-width {\n  width: 50%; }\n\n.scrollmenu {\n  overflow-x: -webkit-paged-y;\n  white-space: nowrap !important; }\n\n.display-block {\n  display: block; }\n\n.table-body {\n  height: 250px;\n  /* Just for the demo          */\n  overflow-y: auto;\n  /* Trigger vertical scroll    */\n  overflow-x: hidden;\n  /* Hide the horizontal scroll */ }\n\n.col1 {\n  width: 300px; }\n\n.col2 {\n  width: 125px; }\n\n.img-size {\n  height: 20rem;\n  width: auto; }\n\n.verti-middle {\n  vertical-align: -webkit-baseline-middle; }\n\n.date-input-width {\n  width: 19rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-campaign/manage-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_pubsub__ = __webpack_require__("../../../../angular2-pubsub/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_manage_campaign_manage_campaign_service__ = __webpack_require__("../../../../../src/app/manage-campaign/manage-campaign.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageCampaignComponent = (function () {
    function ManageCampaignComponent(router, server, pubsub, campaignService) {
        this.router = router;
        this.server = server;
        this.pubsub = pubsub;
        this.campaignService = campaignService;
        this.campaignTypeList = [];
        this.campaignList = [];
        this.CE_CAMPAIGN_ACTION = '';
        this.campaignData = {};
        this.changeImage = false;
        this.pubsub.$pub('loading', true);
    }
    ManageCampaignComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.initialize_campaignType();
    };
    ManageCampaignComponent.prototype.initialize = function () {
        var _this = this;
        this.campaignService.getCampaign().subscribe(function (data) {
            _this.pubsub.$pub('loading', false);
            _this.campaignList = data;
            console.log(data);
        }, function (err) {
            _this.pubsub.$pub('loading', false);
            alert("ระบบไม่สามารถทำการโหลดข้อมูลแคมเปญได้ค่ะ กรุณาลองใหม่อีกครั้ง");
        });
    };
    ManageCampaignComponent.prototype.initialize_campaignType = function () {
        var _this = this;
        this.campaignService.getCampaignTypeList().subscribe(function (data) {
            _this.pubsub.$pub('loading', false);
            _this.campaignTypeList = data;
            console.log(data);
        }, function (err) {
            _this.pubsub.$pub('loading', false);
            alert("ระบบไม่สามารถทำการโหลดข้อมูลประเภทแคมเปญได้ค่ะ");
        });
    };
    ManageCampaignComponent.prototype.campaignManage = function () {
        $(this.modalCampaignType.nativeElement).modal('show');
        this.pubsub.$pub('loading', true);
        this.initialize_campaignType();
    };
    ManageCampaignComponent.prototype.addType = function (name) {
        var _this = this;
        this.pubsub.$pub('loading', true);
        var sendType = {
            name: name
        };
        this.campaignService.postCampaignType(sendType).subscribe(function (data) {
            console.log(data);
            alert("ระบบได้ทำการเพิ่มประเภทแคมเปญเรียบร้อยแล้วค่ะ");
            _this.initialize_campaignType();
        }, function (err) {
            _this.pubsub.$pub('loading', false);
            alert("ระบบwม่สามารถเพิ่มประเภทแคมเปญได้ค่ะ");
        });
    };
    ManageCampaignComponent.prototype.deleteCampType = function (Camp) {
        var _this = this;
        this.pubsub.$pub('loading', true);
        this.campaignService.deleteCampType(Camp).subscribe(function (data) {
            alert("ระบบได้ทำการลบประเภทแคมเปญเรียบร้อยแล้วค่ะ");
            _this.initialize_campaignType();
        }, function (err) {
        });
    };
    ManageCampaignComponent.prototype.addCampaign = function () {
        this.CE_CAMPAIGN_ACTION = 'เพิ่ม';
        this.campaignData.status = false;
        $(this.modalCampaign.nativeElement).modal('show');
    };
    ManageCampaignComponent.prototype.selectCampaignImg = function () {
        this.uploadCampaign.nativeElement.click();
    };
    ManageCampaignComponent.prototype.onCampaignImgChange = function ($event) {
        var _this = this;
        var fileBrowser = this.uploadCampaign.nativeElement;
        var reader = new FileReader();
        reader.readAsDataURL(fileBrowser.files[0]);
        if (fileBrowser.files.length > 0) {
            reader.onload = function () {
                _this.campimgAdding = reader.result.replace(/\n/g, '');
                _this.changeImage = true;
            };
        }
    };
    ManageCampaignComponent.prototype.editCampaign = function (item) {
        console.log(item);
        this.CE_CAMPAIGN_ACTION = 'แก้ไข';
        var itemdata = JSON.parse(JSON.stringify(item));
        this.campaignData = itemdata;
        // this.campaignData.effectivedatestart = itemdata.effectivedatestart.toString().substring(0, 16);
        // this.campaignData.effectivedateend = itemdata.effectivedateend.toString().substring(0, 16);
        this.campimgAdding = item.image;
        $(this.modalCampaign.nativeElement).modal('show');
    };
    ManageCampaignComponent.prototype.saveCampaign = function () {
        var _this = this;
        this.pubsub.$pub('loading', true);
        // console.log(this.campaignData);
        if (this.CE_CAMPAIGN_ACTION == 'เพิ่ม') {
            if (this.changeImage == true && this.campimgAdding) {
                this.campaignService.uploadImage(this.campimgAdding).subscribe(function (UpImg) {
                    console.log(UpImg);
                    var sendCampaign = {
                        name: _this.campaignData.name,
                        detail: _this.campaignData.detail,
                        coin_give: _this.campaignData.coin_give,
                        effectivedatestart: _this.campaignData.effectivedatestart,
                        effectivedateend: _this.campaignData.effectivedateend,
                        type: _this.campaignData.type,
                        status: _this.campaignData.status,
                        image: UpImg.imageURL,
                        remark: _this.campaignData.remark
                    };
                    console.log(sendCampaign);
                    _this.campaignService.postCampaign(sendCampaign).subscribe(function (data) {
                        _this.changeImage = false;
                        alert("ระบบทำการเพิ่มแคมเปญเรียบร้อยแล้วค่ะ");
                        $(_this.modalCampaign.nativeElement).modal('hide');
                        _this.initialize();
                    }, function (err) {
                        _this.pubsub.$pub('loading', false);
                        alert("ระบบไม่สามารถเพิ่มแคมเปญได้ค่ะ");
                    });
                }, function (err) {
                    _this.pubsub.$pub('loading', false);
                    alert("ระบบไม่สามารถทำการเพิ่มรูปภาพแคมเปญได้ค่ะ");
                });
            }
            else {
                alert("ERR");
            }
        }
        else if (this.CE_CAMPAIGN_ACTION == 'แก้ไข') {
            if (this.changeImage == false) {
                var sendCampaign = {
                    _id: this.campaignData._id,
                    name: this.campaignData.name,
                    detail: this.campaignData.detail,
                    coin_give: this.campaignData.coin_give,
                    effectivedatestart: this.campaignData.effectivedatestart,
                    effectivedateend: this.campaignData.effectivedateend,
                    type: this.campaignData.type,
                    status: this.campaignData.status,
                    image: this.campaignData.image,
                    remark: this.campaignData.remark
                };
                this.campaignService.putCampaign(sendCampaign).subscribe(function (data) {
                    alert("ระบบทำการแก้ไขแคมเปญเรียบร้อยแล้วค่ะ");
                    $(_this.modalCampaign.nativeElement).modal('hide');
                    _this.initialize();
                }, function (err) {
                    _this.pubsub.$pub('loading', false);
                    alert("ระบบไม่สามารถแก้ไขแคมเปญได้ค่ะ");
                });
            }
            else if (this.changeImage == true) {
                this.campaignService.uploadImage(this.campimgAdding).subscribe(function (UpImg) {
                    var sendCampaign = {
                        _id: _this.campaignData._id,
                        name: _this.campaignData.name,
                        detail: _this.campaignData.detail,
                        coin_give: _this.campaignData.coin_give,
                        effectivedatestart: _this.campaignData.effectivedatestart,
                        effectivedateend: _this.campaignData.effectivedateend,
                        type: _this.campaignData.type,
                        status: _this.campaignData.status,
                        image: UpImg.imageURL,
                        remark: _this.campaignData.remark
                    };
                    _this.campaignService.putCampaign(sendCampaign).subscribe(function (data) {
                        _this.changeImage = false;
                        alert("ระบบทำการแก้ไขแคมเปญเรียบร้อยแล้วค่ะ");
                        $(_this.modalCampaign.nativeElement).modal('hide');
                        _this.initialize();
                    }, function (err) {
                        _this.pubsub.$pub('loading', false);
                        alert("ระบบไม่สามารถแก้ไขแคมเปญได้ค่ะ");
                    });
                }, function (err) {
                    _this.pubsub.$pub('loading', false);
                    alert("ระบบไม่สามารถทำการเพิ่มรูปภาพแคมเปญได้ค่ะ");
                });
            }
        }
    };
    ManageCampaignComponent.prototype.cancelAddCampaign = function () {
        this.campaignData = {};
        this.campimgAdding = null;
        this.changeImage = false;
        $(this.modalCampaign.nativeElement).modal('hide');
    };
    ManageCampaignComponent.prototype.deleteCampaign = function (item) {
        var _this = this;
        var cfDelete = confirm('คุณต้องการลบแคมเปญนี้ใช่หรือไม่');
        console.log(item);
        if (cfDelete) {
            this.pubsub.$pub('loading', true);
            this.campaignService.deleteCampaign(item).subscribe(function (data) {
                _this.pubsub.$pub('loading', false);
                alert("ระบบได้ทำการลบแคมเปญเรียบร้อยแล้วค่ะ");
                _this.cancelAddCampaign();
                _this.pubsub.$pub('loading', true);
                _this.initialize();
            }, function (err) {
                _this.pubsub.$pub('loading', false);
                alert("ระบบไม่สามารภทำการลบแคมเปญได้ในขณะนี้ค่ะ กรุณาลองใหม่อีกครั้งค่ะ");
                console.log(err);
            });
        }
    };
    return ManageCampaignComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalCampaignType'),
    __metadata("design:type", Object)
], ManageCampaignComponent.prototype, "modalCampaignType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalCampaign'),
    __metadata("design:type", Object)
], ManageCampaignComponent.prototype, "modalCampaign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uploadCampaign'),
    __metadata("design:type", Object)
], ManageCampaignComponent.prototype, "uploadCampaign", void 0);
ManageCampaignComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-campaign',
        template: __webpack_require__("../../../../../src/app/manage-campaign/manage-campaign.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-campaign/manage-campaign.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_pubsub__["b" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_pubsub__["b" /* PubSubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_manage_campaign_manage_campaign_service__["a" /* CampaignService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_manage_campaign_manage_campaign_service__["a" /* CampaignService */]) === "function" && _d || Object])
], ManageCampaignComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manage-campaign.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-campaign/manage-campaign.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CampaignService = (function () {
    function CampaignService(http, server) {
        this.http = http;
        this.server = server;
    }
    CampaignService.prototype.getCampaign = function () {
        return this.http.get(this.server.url + 'api/campaigns/', {})
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    CampaignService.prototype.getCampaignTypeList = function () {
        return this.http.get(this.server.url + 'api/campaignmasters/', {})
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    CampaignService.prototype.postCampaignType = function (data) {
        return this.http.post(this.server.url + 'api/campaignmasters/', data, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    CampaignService.prototype.postCampaign = function (data) {
        return this.http.post(this.server.url + 'api/campaigns/', data, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    CampaignService.prototype.deleteCampType = function (data) {
        return this.http.delete(this.server.url + 'api/campaignmasters/' + data._id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    CampaignService.prototype.deleteCampaign = function (data) {
        return this.http.delete(this.server.url + 'api/campaigns/' + data._id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    CampaignService.prototype.putCampaign = function (data) {
        return this.http.put(this.server.url + 'api/campaigns/' + data._id, data, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    CampaignService.prototype.uploadImage = function (img) {
        return this.http.post(this.server.url + 'api/products_picture', { data: img.replace('data:image/jpeg;base64,', '') }, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    return CampaignService;
}());
CampaignService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object])
], CampaignService);

var _a, _b;
//# sourceMappingURL=manage-campaign.service.js.map

/***/ }),

/***/ "../../../../../src/app/manage-document/manage-document.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-document/manage-document.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n            <h4 class=\"title\">รายการเอกสาร</h4>\r\n            <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n          </div>\r\n\r\n          <div class=\"card-content table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"text-danger\">\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>ประเภท</th>\r\n                  <th>รายการ</th>\r\n                  <th class=\"text-center\">อ้างอิง</th>\r\n                  <th class=\"text-center\">โดย</th>\r\n                  <th class=\"text-center\">วันที่</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>1</td>\r\n                  <td>การซื้อสินค้า</td>\r\n                  <td>report_01.xlsx</td>\r\n                  <td class=\"text-center\">Dook</td>\r\n                  <td class=\"text-center\">Apple</td>\r\n                  <td class=\"text-center\">01/09/2560</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>2</td>\r\n                  <td>การซื้อสินค้า</td>\r\n                  <td>report_01.xlsx</td>\r\n                  <td class=\"text-center\">Dook</td>\r\n                  <td class=\"text-center\">Apple</td>\r\n                  <td class=\"text-center\">01/09/2560</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>3</td>\r\n                  <td>การซื้อสินค้า</td>\r\n                  <td>report_01.xlsx</td>\r\n                  <td class=\"text-center\">Dook</td>\r\n                  <td class=\"text-center\">Apple</td>\r\n                  <td class=\"text-center\">01/09/2560</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>4</td>\r\n                  <td>การซื้อสินค้า</td>\r\n                  <td>report_01.xlsx</td>\r\n                  <td class=\"text-center\">Dook</td>\r\n                  <td class=\"text-center\">Apple</td>\r\n                  <td class=\"text-center\">01/09/2560</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>5</td>\r\n                  <td>การซื้อสินค้า</td>\r\n                  <td>report_01.xlsx</td>\r\n                  <td class=\"text-center\">Dook</td>\r\n                  <td class=\"text-center\">Apple</td>\r\n                  <td class=\"text-center\">01/09/2560</td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-document/manage-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageDocumentComponent = (function () {
    function ManageDocumentComponent() {
    }
    ManageDocumentComponent.prototype.ngOnInit = function () {
    };
    return ManageDocumentComponent;
}());
ManageDocumentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-document',
        template: __webpack_require__("../../../../../src/app/manage-document/manage-document.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-document/manage-document.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageDocumentComponent);

//# sourceMappingURL=manage-document.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-file/manage-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-file/manage-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\" style=\"text-align: center;\">\r\n      <div class=\"card\" *ngIf=\"showeMainShop\" style=\"width: 68%;\">\r\n        <img class=\"card-img-top\" [src]=\"shop.coverimage ? shop.coverimage : 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1512718072/uploadcover_wmvyr4.jpg'\"\r\n          alt=\"Card image cap\" height=\"315px\">\r\n        <span class=\"fill\"></span>\r\n        <input type=\"file\" #fileInput accept=\"image/*\" [(ngModel)]=\"coverImg\" (change)=\"onCoverChange($event)\" style=\"visibility: hidden;\"\r\n        />\r\n        <span class=\"camera\" (click)=\"uploadCoverImage()\">\r\n          <i class=\"material-icons\">photo_camera</i>\r\n        </span>\r\n        <p class=\"name\">\r\n          {{shop.name}}\r\n          <i class=\"material-icons\" (click)=\"openEditShopDetail()\">create</i>\r\n        </p>\r\n        <p class=\"name2\">\r\n          {{shop.detail ? shop.detail: '-'}}\r\n        </p>\r\n        <p class=\"name3\">\r\n          {{address ? address: '-'}} เวลาเปิดปิดร้าน {{openTimeString}}\r\n        </p>\r\n        <div class=\"card-block\">\r\n  \r\n          <div class=\"row col-md-4 col-sm-4 col-lg-4\" [dragula]='\"zone0\"'>\r\n            <div class=\"\">\r\n              <img class=\"img\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511519960/camera_bkdxf8.png\" alt=\"image\" (click)=\"uploadPromoteImage()\">\r\n              <input type=\"file\" #promoteimgInput accept=\"image/*\" [(ngModel)]=\"promoteImg\" (change)=\"onPromoteImgChange($event)\" style=\"visibility: hidden;\"\r\n              />\r\n            </div>\r\n  \r\n  \r\n            <div class=\"col-md-2\" *ngFor=\"let item of shop.promoteimage\" (dblclick)=\"prmEdit()\">\r\n              <span class=\"bin-1\" *ngIf=\"promoteIsEdit == true\" (click)=\"deletePromoteImage(item)\">\r\n                <i class=\"material-icons\">delete</i>\r\n              </span>\r\n              <img class=\"img\" [src]=\"item\" alt=\"image\">\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <h3 class=\"h\" style=\"border-bottom: none;\">Category</h3>\r\n          </div>\r\n  \r\n  \r\n          <div class=\"row\" [dragula]='\"zone1\"'>\r\n            <div class=\"col-md-2\" (click)=\"createCategory()\">\r\n              <img class=\"img\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg\" alt=\"image\">\r\n            </div>\r\n            <div class=\"col-md-2\" *ngFor=\"let item of categoryList\">\r\n              <span class=\"bin-1\">\r\n                <i class=\"material-icons\" (click)=\"deleteCategory(item._id)\">delete</i>\r\n              </span>\r\n              <img (click)=\"filterByCate(item._id)\" class=\"img\" [src]=\"item.image\" alt=\"image\" width=\"500px\" height=\"355px\">\r\n              <span class=\"ca ovf\">\r\n                {{item.name}}\r\n              </span>\r\n              <span class=\"pc-1\">\r\n                <i class=\"material-icons\" (click)=\"editCategory(item)\">create</i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n  \r\n          <h3 class=\"h\">Product</h3>\r\n  \r\n  \r\n          <div class=\"row\" [dragula]='\"zone2\"'>\r\n            <div class=\"col-md-2\" (click)=\"createProduct()\">\r\n              <img class=\"img\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg\" alt=\"image\">\r\n            </div>\r\n            <div class=\"col-md-2\" *ngFor=\"let item of products\">\r\n              <span class=\"bin-1\">\r\n                <i class=\"material-icons\" (click)=\"deleteProduct(item._id)\">delete</i>\r\n              </span>\r\n              <img class=\"img\" [src]=\"item.images\" alt=\"image\">\r\n              <span class=\"ca ovf\">\r\n                {{item.name}} {{item.price | number}}\r\n              </span>\r\n              <span class=\"pc-1\">\r\n                <i class=\"material-icons\" (click)=\"editProduct(item)\">create</i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n      <!-- //////////////////////////edit shop///////////// -->\r\n  \r\n      <div class=\"card\" *ngIf=\"showeditdiv\" style=\"width:43.4%;\">\r\n        <div class=\"card-header cw\">\r\n          ข้อมูลร้านค้า\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n              <select name=\"cateshop\" class=\"form-control\" [(ngModel)]=\"shop.categories\">\r\n                <option value=\"\">เลือกประเภทร้านค้า</option>\r\n                <option *ngFor=\"let item of categoryShopList\" [value]=\"item._id\">{{item.name}}</option>\r\n              </select>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"ชื่อร้าน\" naem=\"shopName\" [(ngModel)]=\"shop.name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"ชื่อร้าน (ภาษาอังกฤษ)\" naem=\"shopNameEn\" [(ngModel)]=\"shop.name_eng\">\r\n              </div>\r\n  \r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-2\" style=\"margin-left: 0%;margin-top: 60px;\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511519960/camera_bkdxf8.png\"\r\n                alt=\"image\">\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"รายละเอียดร้าน\" naem=\"detail\" [(ngModel)]=\"shop.detail\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"อีเมล\" naem=\"email\" [(ngModel)]=\"shop.email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"หมายเลขโทรศัพท์\" naem=\"tel\" [(ngModel)]=\"shop.tel\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Facebook\" naem=\"Facebook\" [(ngModel)]=\"shop.facebook\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Line\" naem=\"Line\" [(ngModel)]=\"shop.line\">\r\n              </div>\r\n              <!-- card list -->\r\n  \r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\" (click)=\"openTime()\">\r\n                  <img class=\"img\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg\" alt=\"image\">\r\n                </div>\r\n                <div class=\"col-md-4\" *ngFor=\"let item of timeList;let i = index\">\r\n                  <div class=\"card\" style=\"margin: 0px 0;\">\r\n                    <span class=\"bin\" (click)=\"deleteTime(i)\">\r\n                      <i class=\"material-icons\">delete</i>\r\n                    </span>\r\n                    <div class=\"card-block\">\r\n                      <h4 class=\"card-title\" style=\"text-align: center;\">{{item.description}}</h4>\r\n                      <p class=\"card-text\">เวลาเปิด {{item.timestart}} น.</p>\r\n                      <p class=\"card-text\">เวลาปิด {{item.timeend}} น.</p>\r\n                    </div>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                      <li class=\"list-group-item\" *ngFor=\"let item2 of item.days\">{{item2}}</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <textarea rows=\"6\" class=\"form-control\" placeholder=\"ที่อยู่\" name=\"addr\" [(ngModel)]=\"address\"></textarea>\r\n              </div>\r\n              <p class=\"pin\" (click)=\"openSelectMap()\">\r\n                <i class=\"material-icons\">room</i>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"ct\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\">บันทึก</button>\r\n            <button class=\"btn btn-danger\" (click)=\"cancelEditShop()\">ยกเลิก</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"card\" *ngIf=\"showeditTime\" style=\"width:43.4%;\">\r\n        <div class=\"card-header cw\">\r\n          เวลาเปิดปิดร้านเวลาเปิดปิดร้าน\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"รายละเอียด\" name=\"timeDetail\" [(ngModel)]=\"times.description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"time\" class=\"form-control\" placeholder=\"เวลาเปิด\" name=\"start\" [(ngModel)]=\"times.timestart\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"time\" class=\"form-control\" placeholder=\"เวลาปิด\" name=\"end\" [(ngModel)]=\"times.timeend\">\r\n              </div>\r\n  \r\n              <ul class=\"list-group list-group-flush\">\r\n  \r\n                <li class=\"list-group-item\" (click)=\"selectDay(0)\">วันอาทิตย์\r\n                  <span class=\"check\" *ngIf=\"selectDate[0]\">\r\n                    <i class=\"material-icons\">done</i>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item\" (click)=\"selectDay(1)\">วันจัทร์\r\n                  <span class=\"check\" *ngIf=\"selectDate[1]\">\r\n                    <i class=\"material-icons\">done</i>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item\" (click)=\"selectDay(2)\">วันอังคาร\r\n                  <span class=\"check\" *ngIf=\"selectDate[2]\">\r\n                    <i class=\"material-icons\">done</i>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item\" (click)=\"selectDay(3)\">วันพุธ\r\n                  <span class=\"check\" *ngIf=\"selectDate[3]\">\r\n                    <i class=\"material-icons\">done</i>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item\" (click)=\"selectDay(4)\">วันพฤหัสบดี\r\n                  <span class=\"check\" *ngIf=\"selectDate[4]\">\r\n                    <i class=\"material-icons\">done</i>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item\" (click)=\"selectDay(5)\">วันศุกร์\r\n                  <span class=\"check\" *ngIf=\"selectDate[5]\">\r\n                    <i class=\"material-icons\">done</i>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item\" (click)=\"selectDay(6)\">วันเสาร์\r\n                  <span class=\"check\" *ngIf=\"selectDate[6]\">\r\n                    <i class=\"material-icons\">done</i>\r\n                  </span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"ct\">\r\n            <button class=\"btn btn-primary\" (click)=\"saveTime()\">บันทึก</button>\r\n            <button class=\"btn btn-danger\" (click)=\"cancelTime()\">ยกเลิก</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n  \r\n      <!-- //////////////////add and edit address ////// -->\r\n  \r\n  \r\n  \r\n      <div class=\"card\" *ngIf=\"showeMap\" style=\"width:43.4%;\">\r\n        <div class=\"card-header cw\">\r\n          ที่อยู่ร้านค้า\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <input #pacinput id=\"pac-input\" class=\"controls m2\" type=\"text\" placeholder=\"ค้นหาสถานที่\">\r\n          <div #map class=\"map\"></div>\r\n          <div class=\"ct\">\r\n            <button class=\"btn btn-primary\" (click)=\"saveMap()\">บันทึก</button>\r\n            <button class=\"btn btn-danger\" (click)=\"cancelMap()\">ยกเลิก</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n  \r\n      <!-- //////////////////add and edit product ////// -->\r\n  \r\n      <div class=\"card\" *ngIf=\"showAddProduct\" style=\"width: 43.4%;padding: 26px;\">\r\n        <div class=\"card-header cw\">\r\n          {{CE_action_product}}สินค้า\r\n        </div>\r\n        <div class=\"card-block\">\r\n  \r\n          <div class=\"row\" style=\"margin-left: -66px;\">\r\n            <div class=\"col-md-4\" *ngIf=\"addPrdImg !== 3\">\r\n              <!-- <span class=\"bin-2\" (click)=\"deleteTime(i)\">\r\n                <i class=\"material-icons\">delete</i>\r\n              </span> -->\r\n  \r\n              <!-- <img class=\"img-2\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511519960/camera_bkdxf8.png\" (click)=\"uploadPrdImage()\" alt=\"image\"> -->\r\n              <img class=\"img-2\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511519960/camera_bkdxf8.png\" alt=\"image\">\r\n              <!-- <input type=\"file\" #prdimgInput accept=\"image/*\" [(ngModel)]=\"prdImg\" (change)=\"onPrdImgChange($event)\" style=\"visibility: hidden;\"\r\n              /> -->\r\n            </div>\r\n            <div class=\"col-md-4\" *ngFor=\"let item of product.images; let i = index\">\r\n              <span class=\"bin-2\" (click)=\"deletePrdImg(i)\">\r\n                <i class=\"material-icons\">delete</i>\r\n              </span>\r\n              <img class=\"img-2\" [src]=\"item\" alt=\"image\">\r\n  \r\n            </div>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" name=\"cate\" [(ngModel)]=\"product.categories\">\r\n              <option value=\"\">เลือกหมวดหมู่อาหาร</option>\r\n              <option *ngFor=\"let item of categoryList\" [value]=\"item._id\">{{item.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Product Name\" name=\"productname\" [(ngModel)]=\"product.name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Price\" name=\"price\" [(ngModel)]=\"product.price\">\r\n          </div>\r\n          <div class=\"ct\">\r\n            <button class=\"btn btn-primary\" (click)=\"saveProduct()\">บันทึก</button>\r\n            <button class=\"btn btn-danger\" (click)=\"canselSaveProduct()\">ยกเลิก</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n  \r\n      <!-- //////////////////add and edit category ////// -->\r\n  \r\n      <div class=\"card\" *ngIf=\"showAddCategory\" style=\"width: 43.4%;padding: 26px;\">\r\n        <div class=\"card-header cw\">\r\n          {{CE_action_category}}หมวดหมู่\r\n        </div>\r\n        <div class=\"card-block\">\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n  \r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <span class=\"bin-3\" (click)=\"deleteTime(i)\">\r\n                <i class=\"material-icons\">delete</i>\r\n              </span>\r\n              <img class=\"img-2\" *ngIf=\"!updateOrEditCateImg\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511519960/camera_bkdxf8.png\"\r\n              (click)=\"updateCateImg()\" alt=\"image\">\r\n              <img class=\"img-2\" *ngIf=\"!updateOrEditCateImg && !category.image\" src=\"http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511519960/camera_bkdxf8.png\"\r\n                (click)=\"updateCateImg()\" alt=\"image\">\r\n              <img class=\"img-2\" *ngIf=\"updateOrEditCateImg \" [src]=\"updateOrEditCateImg\" (click)=\"updateCateImg()\" alt=\"image\">\r\n              <input type=\"file\" #cateimgInput accept=\"image/*\" [(ngModel)]=\"cateImg\" (change)=\"onCateImgChange($event)\" style=\"visibility: hidden;\"\r\n              />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n  \r\n            </div>\r\n          </div>\r\n  \r\n  \r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" naem=\"categoryname\" [(ngModel)]=\"category.name\">\r\n          </div>\r\n          <div class=\"ct\">\r\n            <button class=\"btn btn-primary\" (click)=\"saveCategory()\">บันทึก</button>\r\n            <button class=\"btn btn-danger\" (click)=\"cancelCategory()\">ยกเลิก</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/manage-file/manage-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageFileComponent = (function () {
    function ManageFileComponent() {
    }
    ManageFileComponent.prototype.ngOnInit = function () {
    };
    return ManageFileComponent;
}());
ManageFileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-file',
        template: __webpack_require__("../../../../../src/app/manage-file/manage-file.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-file/manage-file.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageFileComponent);

//# sourceMappingURL=manage-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-shop/manage-shop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card img {\r\n    /* height: 180px; */\r\n}\r\n\r\n\r\n/* .nav-tabs {\r\n    background: #f75251 !important;\r\n} */\r\n\r\n\r\n.btn-color {\r\n    border-radius: 10rem;\r\n    background-color: rgb(255, 0, 0);\r\n    width: 8rem;\r\n}\r\n\r\n\r\n.tel-col-size {\r\n    width: 12rem;\r\n}\r\n\r\n\r\n.adr-col-size{\r\n    width: 14rem;\r\n}\r\n\r\n\r\n.input-col-size {\r\n    width: 11rem;\r\n}\r\n\r\n\r\n[name-col-size] {\r\n    width: 17rem;\r\n}\r\n\r\n\r\n[index-col-size] {\r\n    width: 2rem;\r\n}\r\n\r\n\r\n.action-col-size {\r\n    width: 12rem;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n}\r\n\r\n\r\n[subText] {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n\r\n[adr-column-width] {\r\n    width: 20rem;\r\n    word-break: keep-all;\r\n}\r\n\r\n\r\n.btn-border {\r\n    /* background-color: white; */\r\n    /* color: black; */\r\n    border: 2px solid #4CAF50;\r\n    /* Green */\r\n    border-radius: 10rem;\r\n}\r\n\r\n\r\n.ellipsis {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.ic {\r\n    width: 34px !important;\r\n    height: 34px !important;\r\n}\r\n\r\n\r\n.lo {\r\n    position: absolute;\r\n    right: 4px;\r\n    margin-top: 6px;\r\n}\r\n\r\n\r\n.b-bage {\r\n    background-color: red;\r\n    border-radius: 6px;\r\n    padding: 4px;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.lo2 {\r\n    text-align: right;\r\n}\r\n\r\n\r\n.mt-10 {\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n.pd-4 {\r\n    padding: 4px;\r\n}\r\n\r\n\r\n.bd {\r\n    border: 1px #e2e2e2 solid;\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n.im {\r\n    height: 250px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.hv {\r\n    text-align: center;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    position: absolute;\r\n    height: 86%;\r\n    z-index: 1;\r\n    width: 92%;\r\n    margin-top: 24px;\r\n}\r\n\r\n\r\n.mgt-148 {\r\n    margin-top: 128px;\r\n}\r\n\r\n\r\n.pc {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.pagination>.active>a,\r\n.pagination>.active>a:focus,\r\n.pagination>.active>a:hover,\r\n.pagination>.active>span,\r\n.pagination>.active>span:focus,\r\n.pagination>.active>span:hover {\r\n    background-color: #9E9E9E;\r\n    border-color: #9E9E9E;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.pagination>li>a {\r\n    color: #9e9e9e;\r\n}\r\n\r\n\r\n.nav-tabs {\r\n    background: #ffffff00;\r\n    /* height: 4rem; */\r\n}\r\n\r\n\r\n.nav-tabs>li>a,\r\n.nav-tabs>li>a:hover,\r\n.nav-tabs>li>a:focus {\r\n    color: black !important;\r\n    font-size: 1.2em;\r\n}\r\n\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li.active>a:hover,\r\n.nav-tabs>li.active>a:focus {\r\n    border-bottom: 3px solid rgb(14, 156, 14) !important;\r\n}\r\n\r\n\r\n.card-img-top {\r\n    height: 180px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n\r\n.vcenter {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    float: none;\r\n}\r\n\r\n\r\n.addBTN {\r\n    background-color: #ffffff00;\r\n    color: rgb(34, 143, 34);\r\n    border-color: rgb(34, 143, 34);\r\n    border-radius: 4rem;\r\n    border: 3px solid;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n\r\n.addBTN :focus{\r\n    background-color: #ffffff00;\r\n}\r\n\r\n\r\n.addBTN :active{\r\n    background-color: #f72222fb !important;\r\n}\r\n\r\n\r\n/* .btn .btn:hover .btn:focus .open > .btn.dropdown-toggle .open > .btn.dropdown-toggle:focus .open > .btn.dropdown-toggle:hover {\r\n    background-color: #ff1515fa;\r\n} */\r\n\r\n\r\n.edit-color {\r\n    padding: 0 0.8rem 0 0.8rem;\r\n    color: orange;\r\n    font-size: 2.3rem;\r\n    cursor: pointer;\r\n    margin-top: 0.8rem;\r\n}\r\n\r\n\r\n.del-color {\r\n    padding: 0 0.8rem 0 0.8rem;\r\n    color: red;\r\n    font-size: 2.3rem;\r\n    cursor: pointer;\r\n    margin-top: 0.8rem;\r\n}\r\n\r\n\r\n/* .search-box{\r\n    border-radius: 5rem;\r\n    border: solid 0.3rem black; \r\n} */\r\n\r\n\r\n.del-color:hover {\r\n    background-color: #928f8f5d;\r\n}\r\n\r\n\r\n.edit-color:hover {\r\n    background-color: #928f8f5d;\r\n}\r\n\r\n\r\n.dropdown-menu {\r\n    min-width: 90px;\r\n}\r\n\r\n\r\n.btn-success {\r\n    background-color: #ffffff00;\r\n}\r\n\r\n\r\n.btn,\r\n.btn:hover,\r\n.btn:focus .open>.btn.dropdown-toggle:hover,\r\n.btn.btn-default,\r\n.btn.btn-default:hover {\r\n    background-color: #ffffff00 !important;\r\n    border-color: rgb(34, 143, 34);\r\n    color: rgb(34, 143, 34) !important;\r\n}\r\n\r\n\r\n.toggle-color {\r\n    /* color: rgb(78, 78, 78) !important; */\r\n}\r\n\r\n\r\n.close {\r\n    font-size: 4rem;\r\n}\r\n\r\n\r\n.sb {\r\n    height: 48px;\r\n    border: 2px solid;\r\n    border-radius: 40px;\r\n}\r\n\r\n\r\n.inner-sb {\r\n    position: absolute;\r\n    margin-left: 50px;\r\n    border-right: 2px solid;\r\n    padding-right: 4px;\r\n    height: 46px;\r\n    margin-top: -2px;\r\n}\r\n\r\n\r\n.txb {\r\n    margin-top: 14px;\r\n    position: absolute;\r\n    margin-left: -36px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.tb {\r\n    position: absolute;\r\n    margin-top: -22px;\r\n    width: 220px;\r\n    margin-left: 68px;\r\n}\r\n\r\n\r\n.adr-ovf{\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    max-width: 30rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-shop/manage-shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n\r\n    <!-- //////Apple/// -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\" style=\"margin-top: 10px\">\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n          <li role=\"presentation\" *ngFor=\"let tab of shopsL.name; let i = index\" class=\"{{ selectedTab === i ? 'active':''}}\">\r\n            <a href=\"#tab{{i}}\" role=\"tab\" data-toggle=\"tab\" (click)=\"selectTab(tab)\">{{tab}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <!-- <ul class=\"nav nav-tabs\">\r\n          <li *ngFor=\"let tab of shopsL.name; let i = index\" class=\"{{ selectedTab === i ? 'active':''}}\">\r\n            <a data-toggle=\"tab\" href=\"#tab{{i}}\" (click)=\"selectTab(tab)\">\r\n              <h4 style=\"font-family: 'Kanit', sans-serif;\">{{tab}}</h4>\r\n            </a>\r\n          </li>\r\n        </ul> -->\r\n\r\n\r\n\r\n      <div class=\"col-lg-4 col-md-8 col-sm-8 col-xs-8\" style=\"margin-top: 10px\">\r\n        <div class=\"sb\">\r\n          <span class=\"inner-sb\">\r\n            <span class=\"txb\">\r\n              ค้นหา\r\n            </span>\r\n          </span>\r\n\r\n          <span>\r\n            <input type=\"text\" class=\"form-control tb\" [(ngModel)]=\"searchKeyword\" (keyup.enter)=\"searchShop()\">\r\n          </span>\r\n        </div>\r\n        <!-- <div class=\"input-group search-box\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"ค้นหา...\" [(ngModel)]=\"searchKeyword\">\r\n          <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-default\" type=\"button\" (click)=\"searchShop()\">\r\n                <i class=\"material-icons\">search</i>\r\n              </button>\r\n            </span>\r\n        </div> -->\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\r\n        <div class=\"dropdown pull-right\">\r\n          <button class=\"btn  pull-right dropdown-toggle addBTN\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"true\">\r\n            <i class=\"material-icons\">add</i> เพิ่มร้านค้า\r\n          </button>\r\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n            <li (click)=\"createShop()\">\r\n              <a>เพิ่มข้อมูลเอง</a>\r\n            </li>\r\n            <li (click)=\"getShopFromGoogle()\">\r\n              <a data-toggle=\"modal\" data-target=\"#modalGoogle\">นำเข้าจาก Google</a>\r\n            </li>\r\n            <li (click)=\"getShopFromFacebook()\">\r\n              <a data-toggle=\"modal\" data-target=\"#modalGoogle\">นำเข้าจาก Facebook</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"tab-content\">\r\n      <div id=\"tab{{k}}\" *ngFor=\"let item of shopsL.name; let k = index\" class=\"tab-pane fade in {{ k === 0 ? 'active':''}}\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-content table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                  <thead class=\"text-danger\">\r\n                    <tr>\r\n                      <th index-col-size>#</th>\r\n                      <th name-col-size>ชื่อร้านค้า</th>\r\n                      <th class=\"text-center col-md-2 tel-col-size\">เบอร์โทร</th>\r\n                      <th adr-column-width>ที่อยู่</th>\r\n                      <th class=\"text-center col-md-2 input-col-size\">ช่องทางนำเข้า</th>\r\n                      <th class=\"text-center col-md-1\">Official</th>\r\n                      <th class=\"text-center col-md-1 col-lg-1 action-col-size\">\r\n                        Action\r\n                        <!-- <span style=\"margin-right:-50px\"></span> -->\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"shopsL.items && shopsL.items.length ==0\">\r\n                      <td colspan=\"7\" class=\"text-center\">\r\n                        ยังไม่มีข้อมูลร้านค้าในระบบค่ะ\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of shopsL.items; let i = index \">\r\n                      <td (click)=\"editShop(item)\">{{i + pageSelect + 1}}</td>\r\n                      <td (click)=\"editShop(item)\">{{item.name}}</td>\r\n                      <td class=\"text-center\" (click)=\"editShop(item)\">{{item.tel ? item.tel: '-'}}</td>\r\n                      <td *ngIf=\"!item.address\" (click)=\"editShop(item)\">ไม่ปรากฎที่อยู่ร้าน</td>\r\n                      <td *ngIf=\"item.address\" (click)=\"editShop(item)\"  class=\"adr-ovf\">{{item.address.address ? item.address.address: '-'}}</td>\r\n                      <td class=\"text-center\" (click)=\"editShop(item)\">{{item.importform}}\r\n                        <p subText>by {{item.user.firstName}}</p>\r\n                      </td>\r\n                      <td class=\"text-center \">\r\n\r\n                        <button class=\"btn btn-success btn-simple btn-xs btn-border\" type=\"button\" *ngIf=\"!item.issendmail && item.email\" (click)=\"isSendMail(item)\">\r\n                          SEND USER\r\n                        </button>\r\n                        <p *ngIf=\"item.issendmail\">Joined</p>\r\n                      </td>\r\n                      <td class=\"text-center\">\r\n                        <ui-switch [(ngModel)]=\"item.isactiveshop\" (change)=\"activeChange($event,item)\"></ui-switch>\r\n\r\n\r\n                        <div class=\"dropdown pull-right\">\r\n                          <button class=\"btn btn-simple btn-xs pull-right dropdown-toggle \" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\"\r\n                            aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                            <i class=\"material-icons toggle-color\">more_horiz</i>\r\n                          </button>\r\n                          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                            <span (click)=\"editShop(item)\">\r\n                              <i class=\"material-icons edit-color\">border_color</i>\r\n                            </span>\r\n                            <span (click)=\"deleteShop(item._id)\">\r\n                              <i class=\"material-icons del-color\">delete</i>\r\n                            </span>\r\n\r\n                          </ul>\r\n                        </div>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n\r\n                <div class=\"pc\">\r\n                  <nav aria-label=\"Page navigation\">\r\n                    <ul class=\"pagination\">\r\n                      <li [class]=\"curentPage[item]\" *ngFor=\"let item of shopsL.pagings\">\r\n                        <a (click)=\"pageing(item)\">{{item}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </nav>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!-- ////? -->\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- /////////////////////////////////MODAL Google and Facebook import shop///////////////////////// -->\r\n\r\n<div class=\"modal fade\" id=\"modalGoogle\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 style=\"font-family: 'Kanit', sans-serif;\" class=\"modal-title\" id=\"exampleModalLabel\">นำเข้าข้อมูลจาก {{importForm}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row bd\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group form-black is-empty\">\r\n              ละแวก (เช่น สยามพารากอน)\r\n              <!-- <label class=\"control-label\">ละแวก (เช่น สยามพารากอน)</label> -->\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"local\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group form-black is-empty\">\r\n\r\n              ค้นหาประเภทร้านค้า\r\n              <select class=\"form-control\" [(ngModel)]=\"shopType\">\r\n                <option *ngIf=\"importForm == 'Google'\" value=\"\">ทั้งหมด</option>\r\n                <option *ngIf=\"importForm == 'Google'\" value=\"restaurant\">restaurant</option>\r\n                <option *ngIf=\"importForm == 'Google'\" value=\"store\">store</option>\r\n                <option *ngIf=\"importForm == 'Google'\" value=\"cafe\">cafe</option>\r\n                <option *ngIf=\"importForm == 'Facebook'\" value=\"place\">place</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group form-black is-empty\">\r\n              คำค้นหา (เช่น coffee)\r\n              <!-- <label class=\"control-label\">คำค้นหา (เช่น coffee)</label> -->\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"keyword\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2 mt-10\">\r\n            <div class=\"form-group form-black is-empty\">\r\n              <button class=\"btn btn-info\" (click)=\"search()\">ค้นหา</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\" *ngFor=\"let item of shopList\" (click)=\"selectShops(item.id,item.ishave)\">\r\n            <div class=\"hv\" *ngIf=\"loadingIdx[item.id]\">\r\n              <img src=\"../../assets/img/301.svg\" alt=\"Loading...\" class=\"mgt-148\">\r\n            </div>\r\n            <div class=\"card\" style=\"width: 20rem\">\r\n              <span class=\"lo\" *ngIf=\"selectedShop[item.id]\">\r\n                <img class=\"ic\" src=\"https://i0.wp.com/triagelogic.com/wp-content/uploads/2016/02/successful-registration.png?resize=300%2C300&ssl=1\">\r\n              </span>\r\n              <span class=\"lo\" *ngIf=\"item.ishave\">\r\n                <span class=\"b-bage\">มีอยู่ในระบบ</span>\r\n              </span>\r\n              <img class=\"card-img-top\" [src]=\"item.img\" alt=\"Card image\">\r\n              <div class=\"card-block pd-4\">\r\n                <h4 class=\"card-title ellipsis\">\r\n                  <b>{{item.name}}</b>\r\n                </h4>\r\n                <p class=\"card-text ellipsis\">{{item.vicinity}}</p>\r\n                <p class=\"card-text ellipsis\">เบอร์โทรศัพท์ {{item.phone ? item.phone : '-'}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveShops()\">บันทึกข้อมูล</button>\r\n        <button type=\"button\" #dissmissBtn class=\"btn btn-default\" data-dismiss=\"modal\">ปิด</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- /////////////////////////////////MODAL create and edit shop///////////////////////// -->\r\n\r\n<div class=\"modal fade\" id=\"modalCEshop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel2\">\r\n  <div class=\"modal-dialog modal-md\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 style=\"font-family: 'Kanit', sans-serif;\" class=\"modal-title\" id=\"exampleModalLabel2\">{{action}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <img class=\"im\" src=\"{{shopForEdit.coverimage}}\" alt=\"image\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 lo2\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveShops()\">บันทึกข้อมูล</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">ปิด</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div #map></div>"

/***/ }),

/***/ "../../../../../src/app/manage-shop/manage-shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_manage_shop_manage_shop_service__ = __webpack_require__("../../../../../src/app/manage-shop/manage-shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_create_shop_create_shop_service__ = __webpack_require__("../../../../../src/app/create-shop/create-shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_pubsub__ = __webpack_require__("../../../../angular2-pubsub/esm/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageShopComponent = (function () {
    function ManageShopComponent(pubsub, shopService, server, router, fb, manageShopService) {
        this.pubsub = pubsub;
        this.shopService = shopService;
        this.server = server;
        this.router = router;
        this.fb = fb;
        this.manageShopService = manageShopService;
        // @ViewChild('loadingControl') loadingControl;
        this.shopList = [];
        this.selectedShop = [];
        this.loadingIdx = [];
        this.shops = [];
        this.latLng = {
            lat: 13.7466532,
            lng: 100.5347222
        }; //central world
        this.customSearch = false;
        this.shopTableList = [];
        this.shopTableListNew = [];
        this.shopForEdit = {};
        this.shopsL = {};
        this.selectedTab = 0;
        this.searchKeyword = null;
        this.typeTab = 'รายการร้านค้า';
        this.curentPage = [];
        this.pageSelect = 0;
        this.currentPageSelected = 1;
        this.loading = true;
    }
    ManageShopComponent.prototype.onRightClick = function () {
        console.log('Right Click');
        return false;
    };
    ManageShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.isLogin().subscribe(function (data) {
            if (!data) {
                _this.router.navigate(['/login']);
                _this.loading = false;
            }
            else {
                _this.pubsub.$pub('loading', true);
                _this.getListShop();
            }
        });
    };
    ManageShopComponent.prototype.getListShop = function () {
        var _this = this;
        this.manageShopService.getLocalJSONshoplist().subscribe(function (jso) {
            _this.loading = false;
            _this.shopsL = jso;
            _this.pubsub.$pub('loading', false);
            _this.curentPage[1] = 'active';
        }, function (err) {
            var msgERR = JSON.parse(err._body);
            if (msgERR.message === 'Token is incorrect or has expired. Please login again') {
                alert('หมดระยะเวลาการเชื่อมต่อกับระบบบริหารร้านค้า \nกรุณาเข้าสู่ระบบใหม่อีกครั้ง');
                window.localStorage.clear();
            }
        });
    };
    ManageShopComponent.prototype.searchShop = function () {
        var _this = this;
        this.pubsub.$pub('loading', true);
        this.manageShopService.searchShop(this.typeTab, this.currentPageSelected, this.searchKeyword).subscribe(function (data) {
            _this.shopsL.items = data.items;
            _this.shopsL.pagings = data.pagings;
            _this.pubsub.$pub('loading', false);
        }, function (err) {
            console.log(err);
        });
    };
    ManageShopComponent.prototype.pageing = function (page) {
        var _this = this;
        this.pubsub.$pub('loading', true);
        this.pageSelect = 0;
        this.curentPage = [];
        this.curentPage[page] = 'active';
        this.pageSelect = (page - 1) * 10;
        this.currentPageSelected = page;
        this.manageShopService.searchShop(this.typeTab, page, this.searchKeyword).subscribe(function (data) {
            _this.shopsL.items = data.items;
            _this.pubsub.$pub('loading', false);
        }, function (err) {
            console.log(err);
        });
    };
    ManageShopComponent.prototype.selectTab = function (name) {
        this.currentPageSelected = 1;
        this.typeTab = name;
        this.searchShop();
    };
    ManageShopComponent.prototype.saveShops = function () {
        var _this = this;
        this.shops.forEach(function (element, i) {
            if (!_this.loadingIdx[element.id] && !_this.selectedShop[element.id]) {
            }
            else {
                _this.loadingIdx[element.id] = true;
                _this.selectedShop[element.id] = true;
            }
            element.address = {
                address: element.vicinity,
                lat: element.lat,
                lng: element.lng
            };
            element.tel = element.phone;
            element.coverimage = element.img;
            element.importform = _this.importForm;
            _this.manageShopService.save(element).subscribe(function (dataRes) {
                _this.loadingIdx[element.id] = false;
                console.log(dataRes);
            }, function (err) {
                _this.loadingIdx[element.id] = false;
                console.log(err);
                if (JSON.parse(err._body).message.toString() === 'Name already exists') {
                    alert("มีข้อมูลร้าน " + element.name + "แล้วค่ะ");
                }
                _this.selectedShop[element.id] = false;
            });
            if (_this.shops.length === i + 1) {
                _this.dissmissBtn.nativeElement.click();
                _this.getListShop();
            }
        });
    };
    ManageShopComponent.prototype.deleteShop = function (shopID) {
        var _this = this;
        var cfDelete = confirm('ยืนยันการลบร้านค้า');
        if (cfDelete) {
            this.pubsub.$pub('loading', true);
            this.shopService.delete(shopID).subscribe(function (data) {
                _this.getListShop();
            }, function (err) {
                console.log(err);
            });
        }
    };
    ManageShopComponent.prototype.createShop = function () {
        window.localStorage.removeItem('selectShop');
        this.router.navigate(['/create-shop']);
    };
    ManageShopComponent.prototype.editShop = function (shop) {
        window.localStorage.setItem('selectShop', shop._id);
        this.router.navigate(['/create-shop']);
    };
    ManageShopComponent.prototype.convertLocalToGeo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': _this.local }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    _this.latLng = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    };
                    console.log(_this.latLng);
                    resolve(true);
                }
                else {
                    reject(false);
                }
            });
        });
    };
    ManageShopComponent.prototype.search = function () {
        var _this = this;
        this.customSearch = true;
        if (this.importForm == 'Google') {
            this.convertLocalToGeo().then(function (data) {
                _this.getShopFromGoogle();
            }).catch(function (err) {
                console.log(err);
            });
        }
        else if (this.importForm == 'Facebook') {
            this.convertLocalToGeo().then(function (data) {
                _this.getShopFromFacebook();
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    ManageShopComponent.prototype.selectShops = function (id, ishave) {
        if (!ishave) {
            if (this.selectedShop[id]) {
                this.selectedShop[id] = false;
                this.processSelectShop(id);
            }
            else {
                this.selectedShop[id] = true;
                this.processSelectShop(id);
            }
        }
    };
    ManageShopComponent.prototype.processSelectShop = function (id) {
        var _this = this;
        var checkDup = this.shops.findIndex(function (i) { return i.id === id; });
        this.shopList.forEach(function (element) {
            if (element.id == id) {
                if (checkDup == -1) {
                    _this.shops.push(element);
                }
                else {
                    _this.shops.splice(checkDup, 1);
                }
            }
        });
    };
    ManageShopComponent.prototype.getShopFromGoogle = function () {
        var _this = this;
        this.importForm = 'Google';
        this.shops = [];
        this.selectedShop = [];
        this.shopList = [];
        this.pubsub.$pub('loading', true);
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 18
        });
        if (!this.customSearch) {
            this.local = 'สยามพารากอน';
            this.keyword = 'ก๋วยเตี๋ยว';
            this.shopType = '';
        }
        var request = {
            location: this.latLng,
            radius: '2000',
            types: [this.shopType],
            keyword: this.keyword
        };
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function (results, status) {
            if (status == 'OK') {
                results.forEach(function (element, i) {
                    element.id = element.place_id;
                    element.img = element.photos ? element.photos[0].getUrl({ 'maxWidth': 318, 'maxHeight': 180 }) : 'http://www.freeiconspng.com/uploads/no-image-icon-15.png';
                    element.lat = element.geometry.location.lat();
                    element.lng = element.geometry.location.lng();
                    var request2 = {
                        placeId: element.place_id
                    };
                    setTimeout(function () {
                        service.getDetails(request2, function (place, status) {
                            if (status == google.maps.places.PlacesServiceStatus.OK) {
                                element.phone = place.international_phone_number ? place.international_phone_number : '';
                            }
                        });
                    }, 300 * i);
                });
                _this.customSearch = false;
                _this.pubsub.$pub('loading', false);
                _this.checkDuplicateShop(results).then(function (data) {
                    var newShopList = data;
                    _this.shopList = newShopList;
                }).catch(function (err) {
                    _this.pubsub.$pub('loading', false);
                    console.log(err);
                });
            }
        });
    };
    ManageShopComponent.prototype.checkDuplicateShop = function (importShopList) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.manageShopService.checkShopByName(importShopList).subscribe(function (data) {
                console.log(data);
                resolve(data.shopfind);
            }, function (err) {
                reject(err);
            });
        });
    };
    ManageShopComponent.prototype.getShopFromFacebook = function () {
        var _this = this;
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
        this.fb.login().then(function (user) {
            console.log(user);
            _this.fb.api('/search?center=' + _this.latLng.lat + ',' + _this.latLng.lng + '&distance=1000&q=' + _this.keyword + '&type=' + _this.shopType, 'get').then(function (stores) {
                _this.dataStore(stores.data);
                _this.pubsub.$pub('loading', false);
            }).catch(function (error) {
                _this.pubsub.$pub('loading', false);
                console.log(error);
            });
        }).catch(function (err) {
            _this.pubsub.$pub('loading', false);
            console.log(err);
        });
    };
    ManageShopComponent.prototype.dataStore = function (stores) {
        var _this = this;
        var dataShops = [];
        stores.forEach(function (element, i) {
            _this.fb.api('/' + element.id + '?fields=photos{images},name,category,location,phone', 'get').then(function (storeData) {
                var shopNewScema = {};
                shopNewScema.img = storeData.photos ? storeData.photos.data[0].images[0].source : 'http://www.freeiconspng.com/uploads/no-image-icon-15.png';
                shopNewScema.id = storeData.id;
                shopNewScema.name = storeData.name;
                shopNewScema.vicinity = storeData.location.street ? storeData.location.street : '' + storeData.location.city;
                shopNewScema.phone = storeData.phone;
                shopNewScema.lat = storeData.location.latitude;
                shopNewScema.lng = storeData.location.longitude;
                dataShops.push(shopNewScema);
                if (stores.length === i + 1) {
                    _this.checkDuplicateShop(dataShops).then(function (data) {
                        var newShopList = data;
                        _this.shopList = newShopList;
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }).catch(function (err2) {
                console.log(err2);
            });
        });
        this.customSearch = false;
    };
    ManageShopComponent.prototype.isSendMail = function (shop) {
        var _this = this;
        var cf = confirm('ยืนยันการส่งอีเมล');
        if (cf) {
            this.loading = true;
            var sendShop = shop;
            sendShop.isactiveshop = true;
            this.manageShopService.sendMail(sendShop).subscribe(function (data) {
                alert('ระบบได้ทำการส่ง User ไปให้ร้านเรียบร้อยแล้วค่ะ');
                _this.manageShopService.getLocalJSONshoplist().subscribe(function (jso) {
                    _this.loading = false;
                    _this.getListShop();
                    _this.shopsL = jso;
                    _this.curentPage[1] = 'active';
                });
            }, function (err) {
                console.log(err);
                alert('ระบบไม่สามารถส่ง User ไปให้ร้านได้ค่ะ กรุณาติดต่อทางทีมงานค่ะ');
                _this.getListShop();
                _this.loading = false;
            });
        }
    };
    ManageShopComponent.prototype.activeChange = function ($event, shop) {
        var _this = this;
        if ($event === true) {
            shop.isactiveshop = true;
            this.manageShopService.setActiveShop(shop).subscribe(function (succ) {
                alert('ระบบเปลี่ยนสถานะของร้าน ' + shop.name + ' เป็น Active เรียบร้อยแล้วค่ะ');
                _this.getListShop();
            }, function (err) {
                console.log('Update active shop ERROR : ', err);
                _this.getListShop();
            });
        }
        else if ($event === false) {
            shop.isactiveshop = false;
            this.manageShopService.setActiveShop(shop).subscribe(function (succ) {
                alert('ระบบเปลี่ยนสถานะของร้าน ' + shop.name + ' เป็น Inactive เรียบร้อยแล้วค่ะ');
                _this.getListShop();
            }, function (err) {
                console.log('Update active shop ERROR : ', err);
                _this.getListShop();
            });
        }
    };
    return ManageShopComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ManageShopComponent.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dissmissBtn'),
    __metadata("design:type", Object)
], ManageShopComponent.prototype, "dissmissBtn", void 0);
ManageShopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-shop',
        template: __webpack_require__("../../../../../src/app/manage-shop/manage-shop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-shop/manage-shop.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_pubsub__["b" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_pubsub__["b" /* PubSubService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_create_shop_create_shop_service__["a" /* ShopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_create_shop_create_shop_service__["a" /* ShopService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_app_manage_shop_manage_shop_service__["a" /* ManageShopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_manage_shop_manage_shop_service__["a" /* ManageShopService */]) === "function" && _g || Object])
], ManageShopComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=manage-shop.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-shop/manage-shop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageShopService = (function () {
    function ManageShopService(http, server) {
        this.http = http;
        this.server = server;
    }
    ManageShopService.prototype.save = function (data) {
        return this.http.post(this.server.url + 'api/shops', data, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageShopService.prototype.getList = function () {
        return this.http.get(this.server.url + 'api/shops', {})
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageShopService.prototype.getListShop = function () {
        return this.http.get(this.server.url + 'api/shops/categories', {})
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageShopService.prototype.getLocalJSONshoplist = function () {
        return this.http.get(this.server.url + 'api/adminhome', this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageShopService.prototype.sendMail = function (shop) {
        return this.http.put(this.server.url + 'api/shops/createusershop/' + shop._id, shop, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageShopService.prototype.setActiveShop = function (shop) {
        return this.http.put(this.server.url + 'api/shops/' + shop._id, shop, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageShopService.prototype.searchShop = function (typeTab, currentPage, keyword) {
        return this.http.post(this.server.url + 'api/filtershop', {
            typename: typeTab,
            currentpage: currentPage,
            keyword: keyword
        }, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageShopService.prototype.checkShopByName = function (shopList) {
        return this.http.post(this.server.url + 'api/checkshopbyname', shopList, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    return ManageShopService;
}());
ManageShopService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object])
], ManageShopService);

var _a, _b;
//# sourceMappingURL=manage-shop.service.js.map

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\" style=\"margin-top: 10px\">\r\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n            <li role=\"presentation\" class=\"active\">\r\n              <a href=\"#customer\" aria-controls=\"customer\" role=\"tab\" data-toggle=\"tab\" (click)=\"activeTab('customer')\">ลูกค้า</a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n              <a href=\"#shopowner\" aria-controls=\"shopowner\" role=\"tab\" data-toggle=\"tab\" (click)=\"activeTab('shopowner')\">เจ้าของร้าน</a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n              <a href=\"#admin\" aria-controls=\"admin\" role=\"tab\" data-toggle=\"tab\" (click)=\"activeTab('admin')\">แอดมิน</a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n              <a href=\"#biker\" aria-controls=\"biker\" role=\"tab\" data-toggle=\"tab\" (click)=\"activeTab('biker')\">ไบค์เกอร์</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-8 col-sm-8 col-xs-8\" style=\"margin-top: 10px\">\r\n          <div class=\"sb\">\r\n            <span class=\"inner-sb\">\r\n              <span class=\"txb\">\r\n                ค้นหา\r\n              </span>\r\n            </span>\r\n            <span>\r\n              <input type=\"text\" class=\"form-control tb\" [(ngModel)]=\"searchKeyword\" (keyup.enter)=\"searchShop()\">\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-2 col-md-4 col-sm-4 col-xs-4\">\r\n          <button class=\"btn addBTN\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"addUser()\">\r\n            <i class=\"material-icons\">add</i> เพิ่มผู้ใช้งาน\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Tab panes -->\r\n      <div class=\"tab-content\">\r\n\r\n        <!-- Tab Customer -->\r\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"customer\">\r\n          <div class=\"tab-content\">\r\n\r\n            <div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-content table-responsive\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"text-center\" index-col-size>#</th>\r\n                            <th class=\"text-center\">ชื่อที่แสดง</th>\r\n                            <th class=\"text-center\">ชื่อ - นามสกุล</th>\r\n                            <th class=\"text-center\">เบอร์โทร</th>\r\n                            <th class=\"text-center\">อีเมล์</th>\r\n                            <th class=\"text-center\">สถานะ</th>\r\n                            <th class=\"text-center\">Action</th>\r\n                            <th class=\"text-center\"></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngIf=\"listCust && listCust.length <=0\">\r\n                            <td colspan=\"8\" class=\"text-center\">\r\n                              ยังไม่มีข้อมูลผู้ใช้ในระบบค่ะ\r\n                            </td>\r\n\r\n                          </tr>\r\n                          <tr *ngFor=\"let item of listCust[0]; let i = index \">\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{i + pageSelect + 1}}</td>\r\n                            <td class=\"name-ovf\" style=\"text-align: center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.displayName}}</td>\r\n                            <td class=\"name-ovf\" style=\"text-align: center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.firstName}} {{item.lastName}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.mobile ? item.mobile: '-'}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.email}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">Active</td>\r\n                            <td style=\"text-align: center\">\r\n                              <ui-switch size=\"small\" color=\"green\" (change)=\"activeChange($event,item)\"></ui-switch>\r\n                              <!-- <button class=\"btn btn-danger btn-simple btn-xs btn-border\" style=\"margin-top: -8px\" type=\"button\" (click)=\"banUser(item)\">\r\n                                Ban User\r\n                              </button> -->\r\n                              <!-- <i class=\"material-icons del-color\" style=\"color:red\">delete</i> -->\r\n                            </td>\r\n                            <td style=\"text-align: center\">\r\n                              <button class=\"btn btn-danger btn-simple btn-xs btn-border\" type=\"button\" (click)=\"banUser(item)\">\r\n                                Ban User\r\n                              </button>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- Tab Customer -->\r\n\r\n        <!-- Tab ShopOwner -->\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"shopowner\">\r\n          <div class=\"tab-content\">\r\n            <div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-content table-responsive\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"text-center\" index-col-size>#</th>\r\n                            <th class=\"text-center\" displayname-col-size>ชื่อที่แสดง</th>\r\n                            <th class=\"text-center\" name-col-size>ชื่อ - นามสกุล</th>\r\n                            <th class=\"text-center tel-col-size\">เบอร์โทร</th>\r\n                            <th class=\"text-center\" email-col-size>อีเมล์</th>\r\n                            <th class=\"text-center col-md-1\">สถานะ</th>\r\n\r\n\r\n                            <th class=\"text-center col-md-1 col-lg-1 action-col-size\">\r\n                              Action\r\n                              <!-- <span style=\"margin-right:-50px\"></span> -->\r\n                            </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngIf=\"listShopOwner.length <=0\">\r\n                            <!-- <tr> -->\r\n                            <td colspan=\"8\" class=\"text-center\">\r\n                              ยังไม่มีข้อมูลผู้ใช้ในระบบค่ะ\r\n                            </td>\r\n\r\n                          </tr>\r\n                          <tr *ngFor=\"let item of listShopOwner[0]; let i = index \">\r\n                            <td class=\"text-center \" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{i + pageSelect + 1}}</td>\r\n                            <td class=\"text-center name-ovf\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.displayName}}</td>\r\n                            <td class=\"text-center name-ovf\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.firstName}} {{item.lastName}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.mobile ? item.mobile: '-'}}</td>\r\n                            <td class=\"text-center email-ovf\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.email}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.gender ? item.gender: '-'}}</td>\r\n\r\n\r\n                            <td class=\"text-center\">\r\n                              <span>\r\n                                <ui-switch size=\"small\" color=\"red\" (change)=\"activeChange($event,item)\"></ui-switch>\r\n                              </span>\r\n\r\n                            </td>\r\n                          </tr>\r\n\r\n                        </tbody>\r\n                      </table>\r\n\r\n                      <!-- <div class=\"pc\">\r\n                              <nav aria-label=\"Page navigation\">\r\n                                <ul class=\"pagination\">\r\n                                  <li [class]=\"curentPage[item]\" *ngFor=\"let item of shopsL.pagings\">\r\n                                    <a (click)=\"pageing(item)\">{{item}}</a>\r\n                                  </li>\r\n                                </ul>\r\n                              </nav>\r\n                            </div> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab ShopOwner -->\r\n\r\n        <!-- Tab Admin -->\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"admin\">\r\n          <div class=\"tab-content\">\r\n            <div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-content table-responsive\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"text-center\" index-col-size>#</th>\r\n                            <th class=\"text-center\" displayname-col-size>ชื่อที่แสดง</th>\r\n                            <th class=\"text-center\" name-col-size>ชื่อ - นามสกุล</th>\r\n                            <th class=\"text-center col-md-2 tel-col-size\">เบอร์โทร</th>\r\n                            <th class=\"text-center\" email-col-size>อีเมล์</th>\r\n                            <th class=\"text-center col-md-1\">สถานะ</th>\r\n\r\n\r\n                            <th class=\"text-center col-md-1 col-lg-1 action-col-size\">\r\n                              Action\r\n                              <!-- <span style=\"margin-right:-50px\"></span> -->\r\n                            </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngIf=\"listAdmin.length <=0\">\r\n                            <!-- <tr> -->\r\n                            <td colspan=\"8\" class=\"text-center\">\r\n                              ยังไม่มีข้อมูลผู้ใช้ในระบบค่ะ\r\n                            </td>\r\n\r\n                          </tr>\r\n                          <tr *ngFor=\"let item of listAdmin[0]; let i = index \">\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{i + pageSelect + 1}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.displayName}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.firstName}} {{item.lastName}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.mobile ? item.mobile: '-'}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.email}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.gender ? item.gender: '-'}}</td>\r\n\r\n                            <td class=\"text-center\">\r\n                              <span>\r\n                                <ui-switch size=\"small\" color=\"red\" (change)=\"activeChange($event,item)\"></ui-switch>\r\n                              </span>\r\n\r\n\r\n                            </td>\r\n                          </tr>\r\n\r\n                        </tbody>\r\n                      </table>\r\n\r\n                      <!-- <div class=\"pc\">\r\n                                  <nav aria-label=\"Page navigation\">\r\n                                    <ul class=\"pagination\">\r\n                                      <li [class]=\"curentPage[item]\" *ngFor=\"let item of shopsL.pagings\">\r\n                                        <a (click)=\"pageing(item)\">{{item}}</a>\r\n                                      </li>\r\n                                    </ul>\r\n                                  </nav>\r\n                                </div> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab Admin -->\r\n\r\n        <!-- Tab Biker -->\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"biker\">\r\n          <div class=\"tab-content\">\r\n            <div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-content table-responsive\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead class=\"text-danger\">\r\n                          <tr>\r\n                            <th class=\"text-center\" index-col-size>#</th>\r\n                            <th class=\"text-center\" displayname-col-size>ชื่อที่แสดง</th>\r\n                            <th class=\"text-center\" name-col-size>ชื่อ - นามสกุล</th>\r\n                            <th class=\"text-center col-md-2 tel-col-size\">เบอร์โทร</th>\r\n                            <th class=\"text-center\" email-col-size>อีเมล์</th>\r\n                            <th class=\"text-center col-md-1\">สถานะ</th>\r\n\r\n                            <th class=\"text-center col-md-1 col-lg-1 action-col-size\">\r\n                              Action\r\n                              <!-- <span style=\"margin-right:-50px\"></span> -->\r\n                            </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngIf=\"listBiker.length <=0\">\r\n                            <!-- <tr> -->\r\n                            <td colspan=\"8\" class=\"text-center\">\r\n                              ยังไม่มีข้อมูลผู้ใช้ในระบบค่ะ\r\n                            </td>\r\n\r\n                          </tr>\r\n                          <tr *ngFor=\"let item of listBiker[0]; let i = index \">\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{i + pageSelect + 1}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.displayName}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.firstName}} {{item.lastName}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.mobile ? item.mobile: '-'}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.email}}</td>\r\n                            <td class=\"text-center\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">{{item.gender ? item.gender: '-'}}</td>\r\n\r\n                            <td class=\"text-center\">\r\n                              <span>\r\n                                <i class=\"material-icons edit-btn\" data-toggle=\"modal\" data-target=\"#modalEditUser\" (click)=\"editUser(item)\">border_color</i>\r\n\r\n                                <ui-switch size=\"small\" color=\"red\" (change)=\"activeChange($event,item)\"></ui-switch>\r\n                              </span>\r\n\r\n\r\n                            </td>\r\n                          </tr>\r\n\r\n                        </tbody>\r\n                      </table>\r\n\r\n                      <!-- <div class=\"pc\">\r\n                                  <nav aria-label=\"Page navigation\">\r\n                                    <ul class=\"pagination\">\r\n                                      <li [class]=\"curentPage[item]\" *ngFor=\"let item of shopsL.pagings\">\r\n                                        <a (click)=\"pageing(item)\">{{item}}</a>\r\n                                      </li>\r\n                                    </ul>\r\n                                  </nav>\r\n                                </div> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab Admin -->\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- MODAL EDIT USER -->\r\n<div class=\"modal fade\" id=\"modalEditUser\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div>\r\n          <span modal-icon-1>\r\n            <i class=\"material-icons edit-color\">people</i>\r\n          </span>\r\n          <span modal-text-1>\r\n            <h4 style=\"font-family: 'Kanit', sans-serif;\" class=\"modal-title\" id=\"exampleModalLabel\">{{action}}\r\n            </h4>\r\n          </span>\r\n          <span class=\"dl\" *ngIf=\"action != 'เพิ่มบัญชีผู้ใช้'\">\r\n            <i class=\"material-icons edit-color\" (click)=\"deleteUser()\">delete</i>\r\n          </span>\r\n        </div>\r\n\r\n      </div>\r\n     \r\n        <div class=\"modal-body\">\r\n          \r\n          <div class=\"row bd\" *ngIf=\"action == 'เพิ่มบัญชีผู้ใช้'\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group form-black is-empty\">\r\n                Username\r\n                <span style=\"color:red\"> *</span>:\r\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editingUserData.username\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row bd\" *ngIf=\"action == 'เพิ่มบัญชีผู้ใช้'\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group form-black is-empty\">\r\n                Password\r\n                <span style=\"color:red\"> *</span>:\r\n                <input class=\"form-control\" type=\"password\" [(ngModel)]=\"editingUserData.password\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row bd\" *ngIf=\"action == 'เพิ่มบัญชีผู้ใช้'\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group form-black is-empty\">\r\n                Email\r\n                <span style=\"color:red\"> *</span>:\r\n                <input class=\"form-control\" type=\"email\"  [(ngModel)]=\"editingUserData.email\" #email=\"ngModel\" >\r\n        \r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row bd\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group form-black is-empty\">\r\n                ชื่อ\r\n                <span style=\"color:red\"> *</span>:\r\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editingUserData.firstName\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row bd\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group form-black is-empty\">\r\n                นามสกุล\r\n                <span style=\"color:red\"> *</span>:\r\n                <!-- <label class=\"control-label\">คำค้นหา (เช่น coffee)</label> -->\r\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editingUserData.lastName\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row bd\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group form-black is-empty\">\r\n                เบอร์โทร\r\n                <span style=\"color:red\"> *</span>:\r\n                <!-- <label class=\"control-label\">คำค้นหา (เช่น coffee)</label> -->\r\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editingUserData.mobile\">\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-2 mt-10\">\r\n            <div class=\"form-group form-black is-empty\">\r\n              <button class=\"btn btn-info\" (click)=\"search()\">ค้นหา</button>\r\n            </div>\r\n          </div> -->\r\n          </div>\r\n          <div class=\"row bd\" *ngIf=\"action != 'เพิ่มบัญชีผู้ใช้'\">\r\n            <div class=\"col-md-12\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"roles\">ระดับผู้ใช้:</label>\r\n                <select class=\"form-control \" id=\"roles\" [(ngModel)]=\"editingUserData.roles\">\r\n                  <option value=\"admin\">Admin</option>\r\n                  <option value=\"user\">Customer</option>\r\n                  <option value=\"shop\">Shop Owner</option>\r\n                  <option value=\"biker\">Biker</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" #dissmissBtn2 class=\"btn btn-danger\" data-dismiss=\"modal\">ปิด</button>\r\n            <button type=\"button\" class=\"btn btn-success \" (click)=\"saveUser()\">บันทึกข้อมูล</button>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!-- MODAL EDIT USER -->"

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-tabs {\n  background: transparent; }\n\n.dl {\n  right: 10px;\n  position: absolute;\n  cursor: pointer;\n  z-index: 100; }\n\n.nav-tabs > li > a {\n  color: #000 !important;\n  font-size: 1.2em; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  border-bottom: 3px solid #0e9c0e !important; }\n\n.tel-col-size {\n  width: 7.8rem; }\n\n.input-col-size {\n  width: 11rem; }\n\n[name-col-size] {\n  width: 17rem; }\n\n[displayname-col-size] {\n  width: 13rem; }\n\n[index-col-size] {\n  width: 2rem; }\n\n[email-col-size] {\n  width: 9rem; }\n\n.edit-color {\n  color: #f75251;\n  font-size: 3.5rem; }\n\n.edit-btn {\n  font-size: 2.5rem;\n  color: orange; }\n\n.action-col-size {\n  width: 14rem;\n  text-align: center;\n  vertical-align: text-top; }\n\n.close {\n  font-size: 4rem; }\n\n.form-control[disabled],\nfieldset[disabled] .form-control,\n.form-group .form-control[disabled],\nfieldset[disabled] .form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #565656; }\n\n.dropdown-menu {\n  min-width: 90px; }\n\n[modal-text-1] {\n  position: absolute;\n  margin-left: 4.5rem;\n  top: 3rem; }\n\n[modal-icon-1] {\n  position: absolute; }\n\n.switch {\n  background-color: #4caf50 !important; }\n\n.action-col-size {\n  width: 4rem;\n  text-align: center;\n  vertical-align: text-top; }\n\n.btn-border {\n  border: 2px solid red;\n  border-radius: 10rem;\n  width: 8rem; }\n\n.btn-color {\n  border-radius: 10rem;\n  background-color: red;\n  width: 8rem; }\n\n.sb {\n  height: 48px;\n  border: 2px solid;\n  border-radius: 40px; }\n\n.inner-sb {\n  position: absolute;\n  margin-left: 50px;\n  border-right: 2px solid;\n  padding-right: 4px;\n  height: 46px;\n  margin-top: -2px; }\n\n.txb {\n  margin-top: 14px;\n  position: absolute;\n  margin-left: -36px;\n  font-weight: bold; }\n\n.tb {\n  position: absolute;\n  margin-top: -22px;\n  width: 220px;\n  margin-left: 68px; }\n\n.addBTN {\n  background-color: #ffffff00;\n  color: #228f22;\n  border-color: #228f22;\n  border-radius: 4rem;\n  border: 3px solid;\n  font-size: 1.5rem; }\n\n.email-ovf {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 30rem; }\n\n.name-ovf {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 26rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_manage_user_manage_user_service__ = __webpack_require__("../../../../../src/app/manage-user/manage-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_pubsub__ = __webpack_require__("../../../../angular2-pubsub/esm/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageUserComponent = (function () {
    function ManageUserComponent(UserService, server, router, pubsub) {
        this.UserService = UserService;
        this.server = server;
        this.router = router;
        this.pubsub = pubsub;
        this.listAllUser = [];
        this.listCust = [];
        this.listShopOwner = [];
        this.listAdmin = [];
        this.listBiker = [];
        this.curentPage = [];
        this.pageSelect = 0;
        this.currentPageSelected = 1;
        this.editingUserData = {};
        this.tabType = 'customer';
        this.action = '';
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pubsub.$pub('loading', true);
        this.server.isLogin().subscribe(function (data) {
            if (!data) {
                _this.router.navigate(['/login']);
                _this.pubsub.$pub('loading', false);
            }
            else {
                _this.getAllUser();
            }
        });
    };
    ManageUserComponent.prototype.getAllUser = function () {
        var _this = this;
        this.UserService.getUser().subscribe(function (jso) {
            _this.listAllUser = jso.filterrole;
            _this.listCust = [];
            _this.listShopOwner = [];
            _this.listAdmin = [];
            _this.listBiker = [];
            _this.listAllUser.forEach(function (element) {
                if (element.name === 'customer') {
                    _this.listCust.push(element.users);
                }
                else if (element.name === 'shopowner') {
                    _this.listShopOwner.push(element.users);
                }
                else if (element.name === 'admin') {
                    _this.listAdmin.push(element.users);
                }
                else if (element.name === 'biker') {
                    _this.listBiker.push(element.users);
                }
            });
            _this.pubsub.$pub('loading', false);
        }, function (err) {
            _this.pubsub.$pub('loading', false);
            var msgERR = JSON.parse(err._body);
            if (msgERR.message === 'Token is incorrect or has expired. Please login again') {
                alert('หมดระยะเวลาการเชื่อมต่อกับระบบบริหารร้านค้า \nกรุณาเข้าสู่ระบบใหม่อีกครั้ง');
                window.localStorage.clear();
            }
        });
    };
    ManageUserComponent.prototype.deleteUser = function () {
        var _this = this;
        var r = confirm('ยืนยันการลบข้อมูล');
        if (r) {
            this.UserService.delete(this.editingUserData._id).subscribe(function (data) {
                console.log(data);
                _this.getAllUser();
                _this.dissmissBtn2.nativeElement.click();
            }, function (err) {
                console.log(err);
            });
        }
    };
    ManageUserComponent.prototype.addUser = function () {
        this.editingUserData = {};
        this.action = 'เพิ่มบัญชีผู้ใช้';
    };
    ManageUserComponent.prototype.editUser = function (item) {
        this.action = 'แก้ไขบัญชีผู้ใช้';
        this.editingUserData = item;
    };
    ManageUserComponent.prototype.saveUser = function () {
        var _this = this;
        this.pubsub.$pub('loading', true);
        if (this.action === 'แก้ไขบัญชีผู้ใช้') {
            this.UserService.edit(this.editingUserData).subscribe(function (data) {
                _this.getAllUser();
                _this.dissmissBtn2.nativeElement.click();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.UserService.add(this.editingUserData).subscribe(function (data) {
                _this.getAllUser();
                _this.dissmissBtn2.nativeElement.click();
            }, function (err) {
                console.log(err);
            });
        }
    };
    ManageUserComponent.prototype.activeTab = function (tabType) {
        this.tabType = tabType;
    };
    ManageUserComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    return ManageUserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dissmissBtn2'),
    __metadata("design:type", Object)
], ManageUserComponent.prototype, "dissmissBtn2", void 0);
ManageUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-user',
        template: __webpack_require__("../../../../../src/app/manage-user/manage-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-user/manage-user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_manage_user_manage_user_service__["a" /* ManageUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_manage_user_manage_user_service__["a" /* ManageUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_pubsub__["b" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_pubsub__["b" /* PubSubService */]) === "function" && _d || Object])
], ManageUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manage-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-user/manage-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageUserService = (function () {
    function ManageUserService(http, server) {
        this.http = http;
        this.server = server;
    }
    ManageUserService.prototype.getUser = function () {
        return this.http.get(this.server.url + 'api/management/users', this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageUserService.prototype.add = function (user) {
        return this.http.post(this.server.url + 'api/auth/signup', user, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageUserService.prototype.edit = function (user) {
        return this.http.put(this.server.url + 'api/users/' + user._id, user, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ManageUserService.prototype.delete = function (user_id) {
        return this.http.delete(this.server.url + 'api/users/' + user_id, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    return ManageUserService;
}());
ManageUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object])
], ManageUserService);

var _a, _b;
//# sourceMappingURL=manage-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(13.9338383, 100.7164154);
        var mapOptions = {
            zoom: 18,
            center: myLatlng,
            scrollwheel: false,
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maps',
        template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" data-background-color=\"red\">\r\n                <h4 class=\"title\">Notifications</h4>\r\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notifications Style</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <span>This is a plain notification</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span>This is a notification with close button.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notification states</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-success\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-warning\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-primary\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <br>\r\n\r\n                <div class=\"places-buttons\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\r\n                            <h5>Notifications Places\r\n                                <p class=\"category\">Click to view notifications</p>\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  \r\n    <div class=\"container-fluid\">\r\n  \r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n              <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <h4 class=\"title\">สรุปมูลค่าสินค้าทั้งหมด</h4>\r\n              <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 45%  </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n              <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <h4 class=\"title\">มูลค่าสินค้าคงเหลือรายคลัง</h4>\r\n              <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 10%  </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n              <h4 class=\"title\">สินค้าจมที่ขายไม่ได้มากกว่า 3 เดือน</h4>\r\n              <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n            </div>\r\n  \r\n            <div class=\"card-content table-responsive\">\r\n              <table class=\"table\">\r\n                <thead class=\"text-danger\">\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>สินค้า</th>\r\n                    <th class=\"text-center\">วันที่ขายล่าสุด</th>\r\n                    <th class=\"text-center\">จำนวนคงเหลือ</th>\r\n                    <th class=\"text-center\">มูลค่าสินค้าคงเหลือ (บาท)</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>ชุดเดรสสั้น คอกลม แขนบาน ลายขวาง ทรงใส่สบาย (สีดำ)</td>\r\n                    <td class=\"text-center\">01/09/2560</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>KK เดรสสั้น แขน 3 ส่วน ลายริ้ว (สีดำ) รุ่น 8801</td>\r\n                    <td class=\"text-center\">01/09/2560</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>KK ชุดเดรสสั้นน่ารัก สีดำตัดขาว รุ่น LW100</td>\r\n                    <td class=\"text-center\">01/09/2560</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>4</td>\r\n                    <td>Korea ชุดเดรสแฟชั่น ทรงหรูน่ารัก แขนระบาย(สีดำ) รุ่น 5309</td>\r\n                    <td class=\"text-center\">01/09/2560</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>5</td>\r\n                    <td>Charming ชุดเดรสดำชายระบาย ผ้ายืดเนื้อดีไม่ต้องรีด รุ่น D108</td>\r\n                    <td class=\"text-center\">01/09/2560</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n  \r\n                </tbody>\r\n              </table>\r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n              <h4 class=\"title\">สินค้าใกล้หมด</h4>\r\n              <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n            </div>\r\n  \r\n            <div class=\"card-content table-responsive\">\r\n              <table class=\"table\">\r\n                <thead class=\"text-danger\">\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>สินค้า</th>\r\n                    <th class=\"text-center\">จำนวนคงเหลือ</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>ชุดเดรสสั้น คอกลม แขนบาน ลายขวาง ทรงใส่สบาย (สีดำ)</td>\r\n                    <td class=\"text-center\">2</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>KK เดรสสั้น แขน 3 ส่วน ลายริ้ว (สีดำ) รุ่น 8801</td>\r\n                    <td class=\"text-center\">8</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>KK ชุดเดรสสั้นน่ารัก สีดำตัดขาว รุ่น LW100</td>\r\n                    <td class=\"text-center\">7</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>4</td>\r\n                    <td>Korea ชุดเดรสแฟชั่น ทรงหรูน่ารัก แขนระบาย(สีดำ) รุ่น 5309</td>\r\n                    <td class=\"text-center\">5</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>5</td>\r\n                    <td>Charming ชุดเดรสดำชายระบาย ผ้ายืดเนื้อดีไม่ต้องรีด รุ่น D108</td>\r\n                    <td class=\"text-center\">30</td>\r\n                  </tr>\r\n  \r\n  \r\n                </tbody>\r\n              </table>\r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    ProductComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    ProductComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 100,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        // var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        // this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/provider/auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__ = __webpack_require__("../../../../../src/app/provider/server.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Auth = (function () {
    function Auth(http, server) {
        this.http = http;
        this.server = server;
    }
    Auth.prototype.sigin = function (credentials) {
        return this.http.post(this.server.url + 'api/auth/signin', credentials, this.server.AuthHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    return Auth;
}());
Auth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_provider_server_config__["a" /* ServerConfig */]) === "function" && _b || Object])
], Auth);

var _a, _b;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../src/app/provider/pager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Pager = (function () {
    function Pager() {
    }
    Pager.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = this.range(startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    Pager.prototype.range = function (startPage, endPage) {
        var pages = [];
        for (var i = startPage; i < endPage; i++) {
            pages.push(i);
        }
        return pages;
    };
    return Pager;
}());
Pager = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Pager);

//# sourceMappingURL=pager.js.map

/***/ }),

/***/ "../../../../../src/app/provider/server.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerConfig = (function () {
    function ServerConfig() {
        this.url = 'https://coffeehub-server.herokuapp.com/';
    }
    ServerConfig.prototype.isLogin = function () {
        var user = window.localStorage.getItem('user');
        if (user ? JSON.parse(user).loginToken : false) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(true);
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(false);
        }
    };
    ServerConfig.prototype.logout = function () {
        window.localStorage.removeItem('user');
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(true);
    };
    ServerConfig.prototype.getUser = function () {
        var user = window.localStorage.getItem('user');
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(JSON.parse(user));
    };
    ServerConfig.prototype.AuthHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var user = window.localStorage.getItem('user');
        var token = '';
        if (user) {
            token = JSON.parse(user).loginToken;
        }
        headers.append('Authorization', 'Bearer ' + token);
        // headers.append('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRvb2siLCJsb2dpbkV4cGlyZXMiOiIyMDE3LTExLTIyVDA3OjE1OjI5LjYwNloiLCJpYXQiOjE1MTEzMjg1Mjl9.eFBp7O4V9a8CXiJqN5e1iN51WVu-kK-ZeVT3BUxJP44');
        return { headers: headers };
    };
    return ServerConfig;
}());
ServerConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ServerConfig);

//# sourceMappingURL=server.config.js.map

/***/ }),

/***/ "../../../../../src/app/purchase-order/purchase-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/purchase-order/purchase-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  \r\n    <div class=\"container-fluid\">\r\n  \r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n              <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <h4 class=\"title\">สรุปยอดซื้อ</h4>\r\n              <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 45%  </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n              <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <h4 class=\"title\">ยอดซื้อรวม</h4>\r\n              <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 10%  </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n              <h4 class=\"title\">ยอดซื้อ</h4>\r\n              <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n            </div>\r\n  \r\n            <div class=\"card-content table-responsive\">\r\n              <table class=\"table\">\r\n                <thead class=\"text-danger\">\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>สินค้า</th>\r\n                    <th class=\"text-center\">จำนวน</th>\r\n                    <th class=\"text-center\">ยอดซื้อ (บาท)</th>\r\n                    <th class=\"text-center\">ยอดซื้อ (%)</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>ชุดเดรสสั้น คอกลม แขนบาน ลายขวาง ทรงใส่สบาย (สีดำ)</td>\r\n                    <td class=\"text-center\">2</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>KK เดรสสั้น แขน 3 ส่วน ลายริ้ว (สีดำ) รุ่น 8801</td>\r\n                    <td class=\"text-center\">8</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>KK ชุดเดรสสั้นน่ารัก สีดำตัดขาว รุ่น LW100</td>\r\n                    <td class=\"text-center\">7</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>4</td>\r\n                    <td>Korea ชุดเดรสแฟชั่น ทรงหรูน่ารัก แขนระบาย(สีดำ) รุ่น 5309</td>\r\n                    <td class=\"text-center\">5</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n                  <tr>\r\n                    <td>5</td>\r\n                    <td>Charming ชุดเดรสดำชายระบาย ผ้ายืดเนื้อดีไม่ต้องรีด รุ่น D108</td>\r\n                    <td class=\"text-center\">30</td>\r\n                    <td class=\"text-center\">{{2700 | number}}</td>\r\n                    <td class=\"text-danger text-center\">10</td>\r\n                  </tr>\r\n  \r\n  \r\n                </tbody>\r\n              </table>\r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/purchase-order/purchase-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PurchaseOrderComponent = (function () {
    function PurchaseOrderComponent() {
    }
    PurchaseOrderComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    PurchaseOrderComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    PurchaseOrderComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 100,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        // var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        // this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    return PurchaseOrderComponent;
}());
PurchaseOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-purchase-order',
        template: __webpack_require__("../../../../../src/app/purchase-order/purchase-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/purchase-order/purchase-order.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PurchaseOrderComponent);

//# sourceMappingURL=purchase-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/sales/sales.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"title\">สรุปยอดขายรวม</h4>\r\n            <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 45%  </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n            <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"title\">กำไรจากการขาย</h4>\r\n            <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 10%  </span> เพิ่มขึ้นจากเมื่อวาน</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header dropdown\" data-background-color=\"red\">\r\n            <h4 class=\"title\">ยอดขาย</h4>\r\n            <!-- <p class=\"category\">Here is a subtitle for this table</p> -->\r\n          </div>\r\n\r\n          <div class=\"card-content table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"text-danger\">\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>สินค้า</th>\r\n                  <th class=\"text-center\">จำนวน</th>\r\n                  <th class=\"text-center\">ยอดขาย (บาท)</th>\r\n                  <th class=\"text-center\">ยอดขาย (%)</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>1</td>\r\n                  <td>ชุดเดรสสั้น คอกลม แขนบาน ลายขวาง ทรงใส่สบาย (สีดำ)</td>\r\n                  <td class=\"text-center\">2</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>2</td>\r\n                  <td>KK เดรสสั้น แขน 3 ส่วน ลายริ้ว (สีดำ) รุ่น 8801</td>\r\n                  <td class=\"text-center\">8</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>3</td>\r\n                  <td>KK ชุดเดรสสั้นน่ารัก สีดำตัดขาว รุ่น LW100</td>\r\n                  <td class=\"text-center\">7</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>4</td>\r\n                  <td>Korea ชุดเดรสแฟชั่น ทรงหรูน่ารัก แขนระบาย(สีดำ) รุ่น 5309</td>\r\n                  <td class=\"text-center\">5</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>5</td>\r\n                  <td>Charming ชุดเดรสดำชายระบาย ผ้ายืดเนื้อดีไม่ต้องรีด รุ่น D108</td>\r\n                  <td class=\"text-center\">30</td>\r\n                  <td class=\"text-center\">{{2700 | number}}</td>\r\n                  <td class=\"text-danger text-center\">10</td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesComponent = (function () {
    function SalesComponent() {
    }
    SalesComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    SalesComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    SalesComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 100,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        // var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        // this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    return SalesComponent;
}());
SalesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales',
        template: __webpack_require__("../../../../../src/app/sales/sales.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sales/sales.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SalesComponent);

//# sourceMappingURL=sales.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Simple Table</h4>\r\n                        <p class=\"category\">Here is a subtitle for this table</p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Country</th>\r\n                                    <th>City</th>\r\n                                    <th>Salary</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Dakota Rice</td>\r\n                                    <td>Niger</td>\r\n                                    <td>Oud-Turnhout</td>\r\n                                    <td class=\"text-danger\">$36,738</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Minerva Hooper</td>\r\n                                    <td>Curaçao</td>\r\n                                    <td>Sinaai-Waas</td>\r\n                                    <td class=\"text-danger\">$23,789</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Sage Rodriguez</td>\r\n                                    <td>Netherlands</td>\r\n                                    <td>Baileux</td>\r\n                                    <td class=\"text-danger\">$56,142</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Philip Chaney</td>\r\n                                    <td>Korea, South</td>\r\n                                    <td>Overland Park</td>\r\n                                    <td class=\"text-danger\">$38,735</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Doris Greene</td>\r\n                                    <td>Malawi</td>\r\n                                    <td>Feldkirchen in Kärnten</td>\r\n                                    <td class=\"text-danger\">$63,542</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mason Porter</td>\r\n                                    <td>Chile</td>\r\n                                    <td>Gloucester</td>\r\n                                    <td class=\"text-danger\">$78,615</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card card-plain\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Table on Plain Background</h4>\r\n                        <p class=\"category\">Here is a subtitle for this table</p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>ID</th>\r\n                                    <th>Name</th>\r\n                                    <th>Salary</th>\r\n                                    <th>Country</th>\r\n                                    <th>City</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Dakota Rice</td>\r\n                                    <td>$36,738</td>\r\n                                    <td>Niger</td>\r\n                                    <td>Oud-Turnhout</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>2</td>\r\n                                    <td>Minerva Hooper</td>\r\n                                    <td>$23,789</td>\r\n                                    <td>Curaçao</td>\r\n                                    <td>Sinaai-Waas</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>3</td>\r\n                                    <td>Sage Rodriguez</td>\r\n                                    <td>$56,142</td>\r\n                                    <td>Netherlands</td>\r\n                                    <td>Baileux</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>4</td>\r\n                                    <td>Philip Chaney</td>\r\n                                    <td>$38,735</td>\r\n                                    <td>Korea, South</td>\r\n                                    <td>Overland Park</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>5</td>\r\n                                    <td>Doris Greene</td>\r\n                                    <td>$63,542</td>\r\n                                    <td>Malawi</td>\r\n                                    <td>Feldkirchen in Kärnten</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>6</td>\r\n                                    <td>Mason Porter</td>\r\n                                    <td>$78,615</td>\r\n                                    <td>Chile</td>\r\n                                    <td>Gloucester</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableListComponent = (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    return TableListComponent;
}());
TableListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-list',
        template: __webpack_require__("../../../../../src/app/table-list/table-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table-list/table-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TableListComponent);

//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Material Dashboard Heading</h4>\r\n                    <p class=\"category\">Created using Roboto Font Family</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div id=\"typography\">\r\n                        <div class=\"title\">\r\n                            <h2>Typography</h2>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"tim-typo\">\r\n                                <h1><span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h2><span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h3><span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h4><span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h5><span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h6><span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <p><span class=\"tim-note\">Paragraph</span>\r\n                                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Quote</span>\r\n                                <blockquote>\r\n                                 <p>\r\n                                 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                                 </p>\r\n                                 <small>\r\n                                 Kanye West, Musician\r\n                                 </small>\r\n                                </blockquote>\r\n                            </div>\r\n\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Muted Text</span>\r\n                                <p class=\"text-muted\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Primary Text</span>\r\n                                <p class=\"text-primary\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Info Text</span>\r\n                                <p class=\"text-info\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Success Text</span>\r\n                                <p class=\"text-success\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Warning Text</span>\r\n                                <p class=\"text-warning\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Danger Text</span>\r\n                                <p class=\"text-danger\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h2><span class=\"tim-note\">Small Tag</span>\r\n                                    Header with small subtitle <br>\r\n                                    <small>Use \"small\" tag for the headers</small>\r\n                                </h2>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typography',
        template: __webpack_require__("../../../../../src/app/typography/typography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/typography/typography.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-md-offset-2\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\r\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"table-responsive table-upgrade\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th class=\"text-center\">Free</th>\r\n                                        <th class=\"text-center\">PRO</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Components</td>\r\n                                        <td class=\"text-center\">60</td>\r\n                                        <td class=\"text-center\">200</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Plugins</td>\r\n                                        <td class=\"text-center\">2</td>\r\n                                        <td class=\"text-center\">15</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Example Pages</td>\r\n                                        <td class=\"text-center\">3</td>\r\n                                        <td class=\"text-center\">27</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Login, Register, Pricing, Lock Pages</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Mini Sidebar</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Premium Support</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td class=\"text-center\">Free</td>\r\n                                        <td class=\"text-center\">Just $49</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-center\"></td>\r\n                                        <td class=\"text-center\">\r\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\r\n                                        </td>\r\n                                        <td class=\"text-center\">\r\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upgrade',
        template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upgrade/upgrade.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UpgradeComponent);

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Edit Profile</h4>\r\n                    <p class=\"category\">Complete your profile</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Company (disabled)</label>\r\n                                    <input type=\"text\" class=\"form-control\" disabled>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Username</label>\r\n                                    <input type=\"text\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Email address</label>\r\n                                    <input type=\"email\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Fist Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Last Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Adress</label>\r\n                                    <input type=\"text\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">City</label>\r\n                                    <input type=\"text\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Country</label>\r\n                                    <input type=\"text\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Postal Code</label>\r\n                                    <input type=\"text\" class=\"form-control\" >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>About Me</label>\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\r\n                                        <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\r\n                        <div class=\"clearfix\"></div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card card-profile\">\r\n                <div class=\"card-avatar\">\r\n                    <a href=\"#pablo\">\r\n                        <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"content\">\r\n                    <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                    <h4 class=\"card-title\">Alec Thompson</h4>\r\n                    <p class=\"card-content\">\r\n                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                    </p>\r\n                    <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponent);

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map