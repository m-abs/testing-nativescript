'use strict';

import { Observable, PropertyChangeData } from "data/observable";

export class HelloWorldModel extends Observable {
  constructor(counter: number = 42) {
    super();

    this.addEventListener(Observable.propertyChangeEvent, (pcd: PropertyChangeData) => {
      if (pcd.propertyName === "counter") {
        const counter: Number = pcd.value;
        if (counter <= 0) {
          this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        } else {
          this.set("message", `${counter} taps left`);
        }
      };
    });

    this.set("counter", counter);
  };

  tapAction() {
    this.set("counter", Math.max(this.get("counter") - 1, 0));
  };
};
