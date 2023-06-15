import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PropriedadeComponent } from "./propriedade.component";

@NgModule({
    declarations:[PropriedadeComponent],
    imports:[CommonModule],
    exports:[PropriedadeModule]
})
export class PropriedadeModule {}