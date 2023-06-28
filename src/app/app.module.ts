import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { AdicionaCategoriaComponent} from './AdicionaCategoria/adicionaCategoria.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TarefaCoponent } from './tarefa/tarefa.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';

import { UserRepository } from 'src/repositories/user.repository';
import { LoginComponent } from './Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaCategoriaComponent,
    TarefaCoponent,
    TodoAppComponent,
    CategoriaComponent,
    PropriedadeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
