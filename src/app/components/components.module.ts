import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatComponent } from "./chat/chat.component";
import { FormsModule } from "@angular/forms";
const declarations = [ChatComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, FormsModule],
  exports: [...declarations],
})
export class ComponentsModule {}
