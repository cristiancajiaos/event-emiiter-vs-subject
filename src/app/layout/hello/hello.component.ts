import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Output() press = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
  }

  click(e: MouseEvent) {
    const { timeStamp } = e;
    this.press.next(timeStamp);
  }

}
