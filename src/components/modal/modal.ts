import { Component } from '@angular/core';
import { MODAL_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'

@Component({
  selector: 'modal-example',
  directives: [MODAL_DIRECTIVES],
  template: require('./modal.html')
})

export class ModalExample {
  private modalOptions: any;
  private showModal: boolean = true;
  constructor() {
    
  }

  ngOnInit() {
    this.modalOptions = {
      "size": "small",
      "type": "default",
      "closeable": true
    }
  }

  activeModal(): void {
    this.showModal = true;
  }

  cancel(): void {
    this.showModal = false;
  }

  setType(type: string): void {
    this.modalOptions.type = type;
    this.activeModal();
  }

  setSize(size: string): void {
    this.modalOptions.size = size;
    this.activeModal();
  }
}