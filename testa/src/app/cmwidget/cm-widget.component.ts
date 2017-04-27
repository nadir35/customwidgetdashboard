import { MissionService } from '../closing.service';
import { CMDashboardComponent } from '../dashboard.component';
import { Component, Renderer2, ElementRef, forwardRef, Input, ViewChild, EventEmitter, Output, SimpleChange } from "@angular/core";
import { WidgetHandleDirective, WidgetComponent, DashboardComponent } from "ngx-dashboard";

const forwardReference = forwardRef(() => CMWidgetComponent);

@Component({
  selector: 'cm-widget',
  templateUrl: './cm-widget.component.html',
  providers: [{ provide: WidgetComponent, useExisting: forwardReference }]
})
export class CMWidgetComponent extends WidgetComponent {
  @Input() public size: number[];
  @Input() public widgetId: string;
  @Output() onWidgetClose: EventEmitter<string> =  new EventEmitter<string>();
  @ViewChild(WidgetHandleDirective) protected _handle: WidgetHandleDirective;


  constructor(ngEl: ElementRef, renderer: Renderer2, private missionService: MissionService) {
    super(ngEl, renderer);
  }
  close() {
        console.log('emit close event' + this.widgetId);
    this.onWidgetClose.emit(this.widgetId);
//    this.missionService.closeEvent.next(this.widgetId);
  }

}