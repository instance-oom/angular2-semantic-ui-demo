import { Component } from '@angular/core';
import { DIMMER_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'

@Component({
  selector: 'dimmer-example',
  directives: [DIMMER_DIRECTIVES],
  template: require('./dimmer.html')
})

export class DimmerExample {
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