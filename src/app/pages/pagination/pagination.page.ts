import { Component } from '@angular/core';

@Component({
  selector: 'pagination-example',
  template: require('./pagination.html')
})

export class PaginatinDemoPage {
  private totalCount: number;
  private pageSize: number = 10;
  private currentPage: number;
  private maxSize: number = 10;
  private pagerDisabled: boolean = false;
  private pageOptions: any;

  private mockDatas: Array<any> = [];
  private data: Array<any> = [];

  private activeLoader: boolean = false;

  constructor() {
    for (let i = 0; i < 87; i++) {
      this.mockDatas.push({
        "ID": i + 1,
        "Name": "Name_" + i.toFixed(2),
        "Age": Math.floor(Math.random() * 100),
        "OrderNo": Math.floor(Math.random() * 100000000)
      })
    }
    this.totalCount = this.mockDatas.length;
    this.currentPage = 1;
    this.pageOptions = {
      "color": "default",
      "hidenLabel": false,
      "boundaryLinks": false,
      "firstText": "First",
      "lastText": "Last",
      "directionLinks": true,
      "prevText": "Prev",
      "nextText": "Next"
    }
  }

  ngOnInit() {
    this.data = this.getData(this.currentPage, this.pageSize);
  }

  getData(pageIndex: number, pageSize: number): Array<any> {
    var start = (pageIndex - 1) * pageSize;
    let data: Array<any> = [];
    for (let i = start; i < pageIndex * pageSize && i < this.totalCount; i++) {
      data.push(this.mockDatas[i]);
    }
    return data;
  }

  onSelectPage(pageIndex: number): void {
    this.activeLoader = true;
    this.pagerDisabled = true;
    var self = this;
    setTimeout(function () {
      self.data = self.getData(pageIndex, self.pageSize);
      self.activeLoader = false;
      self.pagerDisabled = false;
    }, Math.floor(Math.random() * 1500))
  }

  togglePagerDisable(): void {
    this.pagerDisabled = !this.pagerDisabled;
  }
}