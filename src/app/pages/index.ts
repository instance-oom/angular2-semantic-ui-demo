import { LsuDemoLayoutPage } from './_layout/layout.page';
import { HomePage } from './home/home.page';

import { AccordionDemoPage } from './accordion/accordion.page';
import { CheckBoxDemoPage } from './checkbox/checkbox.page';
import { DimmerDemoPage } from './dimmer/dimmer.page';
import { DropdownDemoPage } from './dropdown/dropdown.page';
import { LoaderDemoPage } from './loader/loader.page';

export * from './_layout/layout.page';
export * from './home/home.page';
export * from './accordion/accordion.page';
export * from './checkbox/checkbox.page';
export * from './dimmer/dimmer.page';
export * from './dropdown/dropdown.page';
export * from './loader/loader.page';

export const PAGES: Array<any> = [
  LsuDemoLayoutPage,
  HomePage,

  AccordionDemoPage,
  CheckBoxDemoPage,
  DimmerDemoPage,
  DropdownDemoPage,
  LoaderDemoPage
]
