import { Observable } from 'rxjs';
import { ControlService } from './services/control.service';
import { Component } from '@angular/core';
import { ControlBase } from './classes/control-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestingConcept';

  controls$: Observable<ControlBase<any>[]>;

  constructor(private service: ControlService) {
    this.controls$ = service.getControls();
  }
}
