import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LayoutComponent }]),
  ],
  declarations: [LayoutComponent],
})
export class WebsiteHomepageFeatureModule {}
