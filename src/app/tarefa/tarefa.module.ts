import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TarefaCoponent } from "./tarefa.component";
import { FormsModule } from "@angular/forms";


@NgModule ({
    declarations:[TarefaCoponent],
    imports:[CommonModule,FormsModule],
    exports:[TarefaCoponent]
})
export class TarefaModule{}