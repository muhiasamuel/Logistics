import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/reports',         title: 'Reports',             icon:'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Volume',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Credit',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'Debits',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Bank GLs',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Revenues',        icon:'nc-caps-small', class: '' },
];

const Reports = [
    { path: '/dashboard',     title: 'Cash Reports',         icon:'nc-bank',       class: '' },
    { path: '/reports',         title: 'Mpesa',             icon:'nc-diamond',    class: '' },
];

@Component({
    moduleId: module.id,
    styleUrl: 'sidebar.component.scss',
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[] = [];
    public reports: any[] = [];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.reports = Reports;

    }
}
