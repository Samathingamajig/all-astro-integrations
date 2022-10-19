import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { globalCountStore, incrementGlobalCount } from "../stores";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./AngularState.component.html",
})
export class AngularState implements OnInit, OnDestroy {
  personalCount = 0;
  globalCount = globalCountStore.get();
  globalCountStoreUnsubscribe: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.globalCountStoreUnsubscribe = globalCountStore.subscribe(
      (newCount) => {
        this.globalCount = newCount;
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.globalCountStoreUnsubscribe();
  }

  incrementPersonalCount() {
    this.personalCount++;
  }

  incrementGlobalCount() {
    incrementGlobalCount();
  }
}
