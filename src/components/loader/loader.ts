import { Component } from '@angular/core';
import { CodeBlockDirective } from '../codeblock/codeblock';
import { LOADER_DIRECTIVES, TAB_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'

@Component({
  selector: 'loader-example',
  directives: [LOADER_DIRECTIVES, TAB_DIRECTIVES, CodeBlockDirective],
  template: require('./loader.html')
})

export class LoaderExample {
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