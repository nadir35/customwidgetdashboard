import { MissionService } from './closing.service';
import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { WidgetComponent, DashboardComponent } from "ngx-dashboard";
import { CMWidgetComponent } from "./cmwidget/cm-widget.component";
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': '_onResize($event)',
  }
})
export class CMDashboardComponent implements OnInit {
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  @ViewChild('target', { read: DashboardComponent }) target: DashboardComponent;

  widgetsSize: number[] = [200, 100];
  dashboardMargin: number = 20;
  constructor() {
  }
  ngOnInit() {
    this._onResize(null);
//console.log("screen: " +screen.availWidth);
  }


  private _onResize(event: any) {
    if (window.innerWidth < 750) {
      this.dashboardMargin = 10;
      this.widgetsSize = [this.dashboard.width / 2 - this.dashboardMargin, 150];
    }
    else {
      this.dashboardMargin = 20;
      const nbColumn = Math.floor(this.dashboard.width / (300 + this.dashboardMargin));
      this.widgetsSize = [this.dashboard.width / nbColumn - this.dashboardMargin, 150];
    }
  }

  log(widget: WidgetComponent, type: string) {
//    console.log(widget, type);
//    console.log(this.dashboard.order);
  }

  logOrder(order: Array<string>) {
//    console.log(order, 'orderchange');
  }

  addWidget() {
    const ref: CMWidgetComponent = this.dashboard.addItem(CMWidgetComponent);
    ref.widgetId = Math.random() + '';
    ref.size = [1, 1];

    ref.onWidgetClose.subscribe(id => {
      this.dashboard.removeItemById(id);
    });
    ref.onWidgetGrow.subscribe(newSize => {
      ref.size = newSize;
      this.dashboard.ngOnChanges(null);
    });
  }
  close(e: any, id: string) {
    this.dashboard.removeItemById(id);
    e.preventDefault();
    e.stopPropagation();
  }
}
