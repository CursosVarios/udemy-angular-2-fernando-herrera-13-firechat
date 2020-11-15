import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { mensajeModel } from "../interface/mensaje.interface";
@Injectable({
  providedIn: "root",
})
export class ChatService {
  private _collection = "chat";
  private itemsCollection: AngularFirestoreCollection<mensajeModel>;
  public chats: mensajeModel[] = [];
  constructor(private _afs: AngularFirestore) {}

  public cargarMensajes(): Observable<mensajeModel[]> {
    this.itemsCollection = this._afs.collection<mensajeModel>(
      this._collection,
      (ref) => ref.orderBy("fecha", "desc").limit(10)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((chat: mensajeModel[]) => {
        this.chats = [];
        for (let cha of chat) {
          this.chats.unshift(cha);
        }
        return this.chats;
      })
    );
  }

  public AgregarMensaje(texto: string) {
    let mensaje: mensajeModel = {
      nombre: "fernando",
      mensaje: texto,
      fecha: new Date().getTime(),
    };
    return this.itemsCollection.add(mensaje);
  }
}
