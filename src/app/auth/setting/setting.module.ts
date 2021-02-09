import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  declarations: [SettingComponent, SidemenuComponent],
  imports: [CommonModule, SettingRoutingModule, ModalModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingModule {}
