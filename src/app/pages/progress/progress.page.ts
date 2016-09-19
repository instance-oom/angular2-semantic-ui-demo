import { Component } from '@angular/core';

@Component({
  selector: 'progress-example',
  template: require('./progress.html')
})

export class ProgressDemoPage {

  private label: string = "Uploading...";
  private text: string;
  private color: string = "teal";
  private size: string = "standard";
  private percent: number = 0;

  private timer: any;
  constructor() {

  }

  ngOnInit() {
    this.animation();
  }

  animation(): void {
    var self = this;
    if (self.timer) {
      clearInterval(self.timer);
    }
    self.timer = setInterval(function () {
      self.percent += Math.floor(Math.random() * 10 + 10);
      if (self.percent > 100) {
        self.percent = 0;
      }
    }, 500)
  }

  setSize(size: string): void {
    this.size = size;
  }
}