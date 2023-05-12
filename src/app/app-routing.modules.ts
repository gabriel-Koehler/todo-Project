import { Component, NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "../app/categoria/categoria.component";
import { TodoAppComponent } from "./todo-app/todo-app.component";

const rotas: Route[]=[
    {
        path:'todo-app',
        component: TodoAppComponent
    },
    {
        path:'categoria',
        component: CategoriaComponent
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