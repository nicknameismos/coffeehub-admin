import { Component, OnInit } from '@angular/core';
import { ServerConfig } from 'app/provider/server.config';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
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
    
    // { path: 'user-profile', title: 'รายการขาย',  icon: 'unarchive', class: '' },
    // { path: 'typography', title: 'สินค้า',  icon: 'inbox', class: '' },
    // { path: 'icons', title: 'ลูกค้า / คู่ค้า',  icon: 'assignment_ind', class: '' },
    // { path: 'maps', title: 'การเงิน',  icon: 'account_balance_wallet', class: '' },
    // { path: 'notifications', title: 'ตั้งค่า',  icon: 'settings', class: '' },
    // { path: 'upgrade', title: 'แพ็คเกจ',  icon: 'dashboard', class: '' },
    //backup
    // { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    private isLogin: boolean;

    constructor(private server: ServerConfig) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.server.isLogin().subscribe(data => {
            this.isLogin = data;
        });
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
