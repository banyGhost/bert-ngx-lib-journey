import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent],
  imports: [CommonModule, RouterModule, ComponentsModule],
  exports: [HomePageComponent, AboutPageComponent]
})
export class PagesModule {}
