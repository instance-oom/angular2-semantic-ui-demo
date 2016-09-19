import { Component } from '@angular/core';

@Component({
  selector: 'dimmer-example',
  template: require('./dimmer.html')
})

export class DimmerDemoPage {
  private activeDimmer: boolean;
  constructor() {
  }

  ngOnInit() {
    this.activeDimmer = true;
  }

  toggle(): void {
    this.activeDimmer = !this.activeDimmer;
  }
}