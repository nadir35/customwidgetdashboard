import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class MissionService {
  public closeEvent: EventEmitter<string>;
    private id: string;

    constructor() {
        this.closeEvent = new EventEmitter<string>();
    }
  
  closeWidget(id: string) {
    this.closeEvent.next(id);
  }
}
