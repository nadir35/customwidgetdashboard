import { CMDashboardComponent } from '../dashboard.component';
import { ModalComponent } from './modal.component';
import { Component, Renderer2, ElementRef, forwardRef, Input, ViewChild, EventEmitter, Output } from "@angular/core";
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
  public widgetTitle: string = ' Empty Widget';
  private maxedH = false;
  private maxedV = false;
  @Output() onWidgetClose: EventEmitter<string> = new EventEmitter<string>();
  @Output() onWidgetGrow: EventEmitter<number[]> = new EventEmitter<number[]>();
  @ViewChild(WidgetHandleDirective) protected _handle: WidgetHandleDirective;
  @ViewChild(ModalComponent)
  public modal: ModalComponent;

  // TODO figure out viewchild construct
  //    @ViewChild(WidgetContentComponent) protected _content: WidgetContentComponent;  


  constructor(ngEl: ElementRef, renderer: Renderer2) {
    super(ngEl, renderer);
  }

  close() {
    console.log('emit close event' + this.widgetId);
    this.onWidgetClose.emit(this.widgetId);
  }
  grow() {
    if (!this.maxedH) {
      this.onWidgetGrow.emit([1, 3]);
      this.maxedH=true;
    }
    else {
      this.onWidgetGrow.emit([1, 1]);
            this.maxedH=false;
      
    }
  }
  grow2() {
    if (!this.maxedV) {
      this.onWidgetGrow.emit([3, 2]);
            this.maxedV=true;
      
    }
    else {
      this.onWidgetGrow.emit([1, 1]);
                  this.maxedV=false;
      
    }
  }
  openModal() {
    this.modal.show();
    this.modal.callerId = this.widgetId;
    this.modal.onAddContent.subscribe(newTitle => {
      this.widgetTitle = newTitle;
    });
  }

}
