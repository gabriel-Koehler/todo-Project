import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CadastroComponent } from "./cadastro.component";

@NgModule({
    declarations:[CadastroModule],
    imports:[CommonModule],
    exports:[CadastroComponent]
})
export class CadastroModule{}