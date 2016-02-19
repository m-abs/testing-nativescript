import * as vmModule from "../../main-view-model";

import {Page} from "ui/page";

export function pageLoaded(args) {
  const page: Page = args.object;
  page.bindingContext = new vmModule.HelloWorldModel();
}
