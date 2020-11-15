import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  public mensaje: string;
  constructor() {}

  ngOnInit(): void {}

  enviar_mensaje() {
    console.log(this.mensaje);
  }
}
