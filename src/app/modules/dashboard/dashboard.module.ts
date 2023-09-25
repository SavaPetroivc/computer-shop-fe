import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigateLinkComponent } from './components/navigate-link/navigate-link.component';


@NgModule({
  declarations: [
    NavigateLinkComponent
  ],
  exports: [
    NavigateLinkComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
