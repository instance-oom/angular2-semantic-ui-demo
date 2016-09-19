import { Component } from '@angular/core';

@Component({
  selector: 'rating-example',
  template: require('./rating.html')
})

export class RatingDemoPage {
  private rating: number = 3;

  private type: string = 'star';
  private size: string = "default";

  private sizes: Array<string> = [];
  private maxRating: string = '10';
  constructor() {
  }

  ngOnInit() {
    for (let i = 5; i < 15; i++) {
      this.sizes.push(i + '');
    }
  }

  getMaxRating(): number {
    return parseInt(this.maxRating);
  }

  setType(type: string): void {
    this.type = type;
  }

  setSize(size: string): void {
    this.size = size;
  }
}