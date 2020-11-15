import { Component, OnInit } from "@angular/core";
import { mensajeModel } from "src/app/interface/mensaje.interface";
import { ChatService } from "../../providers/chat.service";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  public mensaje: string;
  public chats: mensajeModel[];
  elemento: any;
  constructor(private _chatService: ChatService) {
    this._chatService.cargarMensajes().subscribe((e) => {
      //  console.log(e);
      this.chats = e;
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById("app-mensajes");
  }

  enviar_mensaje() {
    if (!this.mensaje || this.mensaje.length === 0) {
      return;
    }
    console.log(this.mensaje);
    this._chatService
      .AgregarMensaje(this.mensaje)
      .then((e) => {
        this.mensaje = "";
        console.log("mensaje agregado");
        console.log({ e });
      })
      .catch((err) => {
        console.log("error al agregar mensaje" + err);
      });
  }
}
