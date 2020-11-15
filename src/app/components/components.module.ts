import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatComponent } from "./chat/chat.component";
const declarations = [ChatComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class ComponentsModule {}
