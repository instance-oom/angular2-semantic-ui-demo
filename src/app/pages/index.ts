import { LsuDemoLayoutPage } from './layout/layout.page';
import { HomePage } from './home/home.page';

import { AccordionDemoPage } from './accordion/accordion.page';
import { CheckBoxDemoPage } from './checkbox/checkbox.page';

export * from './layout/layout.page';
export * from './home/home.page';
export * from './accordion/accordion.page';
export * from './checkbox/checkbox.page';

export const PAGES: Array<any> = [
  LsuDemoLayoutPage,
  HomePage,

  AccordionDemoPage,
  CheckBoxDemoPage
]
