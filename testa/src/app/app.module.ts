import { CMWidgetComponent } from './cmwidget/cm-widget.component';
import { CMDashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgDashboardModule} from '../../node_modules/ngx-dashboard';
import { MissionService } from './closing.service';
import { ModalComponent } from './cmwidget/modal.component';


@NgModule({
  declarations: [
  CMDashboardComponent,
    CMWidgetComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgDashboardModule
  ],
  entryComponents: [
    CMWidgetComponent
  ],
  providers: [MissionService],
  bootstrap: [CMDashboardComponent]
})
export class AppModule { }
