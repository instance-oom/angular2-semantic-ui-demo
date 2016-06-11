import { Component } from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Home } from '../home/home';
import { AccordionExample } from '../accordion/accordion';
import { CheckBoxExample } from '../checkbox/checkbox';
import { DimmerExample } from '../dimmer/dimmer';
import { DropdownExample } from '../dropdown/dropdown';
import { LoaderExample } from '../loader/loader';
import { ModalExample } from '../modal/modal';
import { PaginatinExample } from '../pagination/pagination';
import { PopupExample } from '../popup/popup';
import { ProgressExample } from '../progress/progress';
import { RatingExample } from '../rating/rating';
import { TabExample } from '../tab/tab';

@Component({
  selector: "lsu-demo",
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html')
})

@RouteConfig([
  { path: '/', name: 'Home', component: Home },
  { path: '/accordion', name: 'Accordion', component: AccordionExample },
  { path: '/checkbox', name: 'CheckBox', component: CheckBoxExample },
  { path: '/dimmer', name: 'Dimmer', component: DimmerExample },
  { path: '/dropdown', name: 'Dropdown', component: DropdownExample },
  { path: '/loader', name: 'Loader', component: LoaderExample },
  { path: '/modal', name: 'Modal', component: ModalExample },
  { path: '/pagination', name: 'Pagination', component: PaginatinExample },
  { path: '/popup', name: 'Popup', component: PopupExample },
  { path: '/progress', name: 'Progress', component: ProgressExample },
  { path: '/rating', name: 'Rating', component: RatingExample },
  { path: '/tab', name: 'Tab', component: TabExample },
])

export class LsuDemo {
  constructor() {

  }
}