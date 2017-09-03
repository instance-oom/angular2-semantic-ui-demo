import { Component } from '@angular/core';

@Component({
  selector: 'modal-demo',
  templateUrl: './modal.html'
})
export class ModalDemoPage {

  modalOptions: any;
  showModal: boolean;

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
