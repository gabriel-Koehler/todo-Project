import { Component, NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdicionaCategoriaComponent } from "./AdicionaCategoria/adicionaCategoria.component";
import { TodoAppComponent } from "./todo-app/todo-app.component";

const rotas: Route[]=[
    {
        path:'todo-app',
        component: TodoAppComponent
    },
    {
        path:'categoria',
        component: AdicionaCategoriaComponent
    },
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'todo-app'
    }
    
    
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]

})
export class AppRoutingModule{}