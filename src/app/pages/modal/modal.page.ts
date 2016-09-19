import { Component } from '@angular/core';

@Component({
  selector: 'modal-example',
  template: require('./modal.html')
})

export class ModalDemoPage {
  private modalOptions: any;
  private showModal: boolean;
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