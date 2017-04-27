import { CMWidgetComponent } from './cmwidget/cm-widget.component';
import { CMDashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2DashboardModule} from '../../node_modules/ngx-dashboard';
import { MissionService } from './closing.service';


@NgModule({
  declarations: [
  CMDashboardComponent,
    CMWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DashboardModule
  ],
  entryComponents: [
    CMWidgetComponent
  ],
  providers: [MissionService],
  bootstrap: [CMDashboardComponent]
})
export class AppModule { }
