import { Component } from "@angular/core";
import { ChatService } from "./providers/chat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "app-angular2-firechat";
  constructor(public _chatService: ChatService) {}
  logOut() {
    this._chatService.logOut();
  }
}
