import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodoAppComponent } from "./todo-app.component";

@NgModule({
    declarations:[CommonModule],
    imports:[TodoAppComponent],
    exports:[TodoAppComponent]
})
export class TodoAppModule{}