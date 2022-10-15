import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./AngularState.component.html",
})
export class AngularState {
  count = 0;

  increment() {
    this.count++;
  }
}
