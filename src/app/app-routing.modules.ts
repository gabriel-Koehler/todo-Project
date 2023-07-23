import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdicionaCategoriaComponent } from "./AdicionaCategoria/adicionaCategoria.component";
import { LoginComponent } from "./Login/login.component";
import { PropriedadeComponent } from "./propriedade/propriedade.component";
import { TodoAppComponent } from "./todo-app/todo-app.component";
import { CadastroComponent } from "./Cadastro/cadastro.component";
import { AuthGuardService } from "src/services/auth-guard.service";

const rotas: Route[]=[
    {
        path:'todo-app',
        component: TodoAppComponent,
        canActivate:[AuthGuardService]
    },
    {
        path:'categoria',
        component: AdicionaCategoriaComponent,
        canActivate:[AuthGuardService]
    },
    {
        path:'propriedade',
        component: PropriedadeComponent,
        canActivate:[AuthGuardService]
    },
    {
        path:'login-app',
        component: LoginComponent
    },
    {
        path:'cadastro-app',
        component: CadastroComponent
    },
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'login-app'
    }
    
    
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]

})
export class AppRoutingModule{}