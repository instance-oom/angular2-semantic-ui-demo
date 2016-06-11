import { Component } from '@angular/core';
import { LOADER_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'

@Component({
  selector: 'loader-example',
  directives: [LOADER_DIRECTIVES],
  template: require('./loader.html')
})

export class LoaderExample {
  private activeLoader: boolean;
  private loaderSize: string;
  private loaderText: string = "Loading";
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