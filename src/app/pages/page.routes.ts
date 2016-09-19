import { Routes } from '@angular/router';
import { LayoutPage } from './layout';
import { HomePage } from './home';
import { AccordionDemoPage } from './accordion';
import { CheckBoxDemoPage } from './checkbox';
import { DimmerDemoPage } from './dimmer';
import { DropdownDemoPage } from './dropdown';
import { LoaderDemoPage } from './loader';
import { ModalDemoPage } from './modal';
import { PaginatinDemoPage } from './pagination';
import { PopupDemoPage } from './popup';
import { ProgressDemoPage } from './progress';
import { RatingDemoPage } from './rating';
import { TabDemoPage } from './tab';
import { TagsInputDemoPage } from './tags-input';

let routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'accordion',
        component: AccordionDemoPage
      },
      {
        path: 'checkbox',
        component: CheckBoxDemoPage
      },
      {
        path: 'dimmer',
        component: DimmerDemoPage
      },
      {
        path: 'dropdown',
        component: DropdownDemoPage
      },
      {
        path: 'loader',
        component: LoaderDemoPage
      },
      {
        path: 'modal',
        component: ModalDemoPage
      },
      {
        path: 'pagination',
        component: PaginatinDemoPage
      },
      {
        path: 'popup',
        component: PopupDemoPage
      },
      {
        path: 'progress',
        component: ProgressDemoPage
      },
      {
        path: 'rating',
        component: RatingDemoPage
      },
      {
        path: 'tab',
        component: TabDemoPage
      },
      {
        path: 'tags-input',
        component: TagsInputDemoPage
      }
    ]
  }
];

export const PAGE_ROUTES = routes;