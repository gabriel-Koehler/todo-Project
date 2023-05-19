import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { AdicionaCategoriaComponent} from './AdicionaCategoria/adicionaCategoria.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TarefaCoponent } from './tarefa/tarefa.component';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaCategoriaComponent,
    TarefaCoponent,
    TodoAppComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
