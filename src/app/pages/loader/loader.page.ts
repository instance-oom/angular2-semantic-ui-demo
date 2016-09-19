import { Component } from '@angular/core';

@Component({
  selector: 'loader-example',
  template: require('./loader.html')
})

export class LoaderDemoPage {
  private activeLoader: boolean;
  private loaderSize: string = "medium";
  private loaderText: string;
  constructor() {
  }

  ngOnInit() {
    this.activeLoader = true;
  }

  toggle(): void {
    this.activeLoader = !this.activeLoader;
  }

  setSize(size: string): void {
    this.loaderSize = size;
  }
}