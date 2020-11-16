import { Injectable } from "@angular/core";

import firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
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
  private usuario: any = {};
  public userLogin: boolean=false;
  constructor(
    private _afs: AngularFirestore,
    private _afAuth: AngularFireAuth
  ) {
    this._afAuth.authState.subscribe((user) => {
      if (!user) {
        this.userLogin = false;
        return;
      }
      this.userLogin = true;
      this.usuario.nombre = user.displayName;
      console.log(this.usuario);
    });
  }

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

  public login(user: any, tipo: string = "google") {
    if (tipo == "google") {
      this._afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }
  public logOut() {
    this.usuario = {};
    this.userLogin = false;
    this._afAuth.signOut();
  }
}
