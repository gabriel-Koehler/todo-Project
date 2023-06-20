import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { AdicionaCategoriaComponent} from './AdicionaCategoria/adicionaCategoria.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TarefaCoponent } from './tarefa/tarefa.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { UserRepository } from 'src/repositories/user.repository';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaCategoriaComponent,
    TarefaCoponent,
    TodoAppComponent,
    CategoriaComponent,
    PropriedadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
