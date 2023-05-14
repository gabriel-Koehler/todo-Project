import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdicionaCategoriaComponent } from "./adicionaCategoria.component";

NgModule({
    declarations:[AdicionaCategoriaComponent],
    imports:[CommonModule,FormsModule],
    exports:[AdicionaCategoriaComponent],
})
export class AdicionaCategoriaModule {

}