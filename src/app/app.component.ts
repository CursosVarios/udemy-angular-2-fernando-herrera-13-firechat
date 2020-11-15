import { Component } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "app-angular2-firechat";
  item$: Observable<any[]>;
  items: any = {};
  constructor(firestore: AngularFirestore) {
    firestore
      .collection("chat")
      .valueChanges()
      .subscribe((item) => {
        console.log(item);
        this.items = item;
      });
  }
}
