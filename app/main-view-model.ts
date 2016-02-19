import { Observable } from "data/observable";

export class HelloWorldModel extends Observable {
  constructor(public counter: number = 43) {
    super();

    this.set("message", this.counter + " taps left");
  };

  tapAction() {
    this.counter--;
    if (this.counter <= 0) {
      this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    } else {
      this.set("message", `${this.counter} taps left`);
    }
  };
};
