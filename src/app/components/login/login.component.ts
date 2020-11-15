import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/providers/chat.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private _Chatservice: ChatService) {}

  ngOnInit(): void {}

  ingresar(proveedor: string) {
    this._Chatservice.login("", proveedor);
    if (proveedor == "google") {
    } else {
    }
  }
}
