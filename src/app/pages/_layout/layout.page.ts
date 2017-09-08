import { Component, ViewChild, ElementRef } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'layout',
  styleUrls: ['./layout.scss'],
  templateUrl: './layout.html'
})
export class LsuDemoLayoutPage {

  @ViewChild('sidebar')
  sidebar: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {

  }
}
