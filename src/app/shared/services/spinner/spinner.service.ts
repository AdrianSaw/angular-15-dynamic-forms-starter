import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  readonly active = new BehaviorSubject(false);

  show() {
    this.active.next(true);
  }

  hide() {
    this.active.next(false);
  }

}
