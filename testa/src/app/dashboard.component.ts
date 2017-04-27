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
  private messageSubscription: Subscription;
  widgetList: CMWidgetComponent[] = [];
  constructor(todoService: MissionService) {
    todoService.closeEvent.subscribe(item => this.closeWidget(item));
  }
  ngOnInit() {
    this._onResize(null);

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
    console.log(widget, type);
        console.log(this.dashboard.order);
    
  }

  logOrder(order: Array<string>) {
    console.log(order, 'orderchange');
  }

  addWidget() {
    const ref: CMWidgetComponent = this.dashboard.addItem(CMWidgetComponent);
    ref.widgetId = Math.random() + '';
    ref.size = [1, 1];
        this.widgetList.push(ref);
    
       ref.onWidgetClose.subscribe(id => {
       this.dashboard.removeItemById(id);
 
  });
  }
  close(e: any, id: string) {
    this.dashboard.removeItemById(id);
    e.preventDefault();
    e.stopPropagation();
  }
  closeWidget(id: string) {
    console.log(id);
    this.dashboard.removeItemById(id);
//    const widget: WidgetComponent = this.dashboard.getWidgetById(id);
//    this.dashboard.removeItem(widget);
    //    this.widgetList.pop();
  }
}