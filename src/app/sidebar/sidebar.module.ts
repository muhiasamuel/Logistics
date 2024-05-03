import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
         RouterModule,
         CommonModule,
         MatButtonModule,
         MatSidenavModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatListModule,
         RouterModule,
         MatExpansionModule,
         MatTooltipModule,
         ],
    declarations: [
         SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
