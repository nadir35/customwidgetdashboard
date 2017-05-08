import { CMDashboardComponent } from '../dashboard.component';
import { Component, Renderer2, ElementRef, forwardRef, Input, ViewChild, EventEmitter, Output } from "@angular/core";
import { WidgetHandleDirective, WidgetComponent, DashboardComponent } from "ngx-dashboard";

@Component({
  selector: 'cm-modal',
  templateUrl: './modal.html'

})
export class ModalComponent {
  @Input() public callerId: string;
  public visible = false;
  private visibleAnimate = false;
  @Output() onAddContent: EventEmitter<string> = new EventEmitter<string>();


  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
  addContent(throwerID: string, content: number) {
    console.log(throwerID);
    //    if (this.widgetId === throwerID) {
    //      this.widgetTitle = 'Widget content ' + content;
    //      console.log(content);
    //      console.log(this.widgetId);
    //    }
    this.onAddContent.emit('Widget content ' + content);

    this.hide();
  }
}
