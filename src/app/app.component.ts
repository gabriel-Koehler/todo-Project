import { Component} from '@angular/core';

interface Tarefa{
  nome:string,
  categoria:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo-app';

  nome:string = ''
  categoria:string =''
tarefa: Tarefa={
 nome: this.nome,
 categoria: this.categoria
}
  tarefas: Tarefa[]=[]

 cadastrarUsuario():void{

    const tarefa: Tarefa={
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    }

    this.tarefas.push(tarefa)
    console.log(this.tarefas)
    this.tarefa.nome=''
 }
 removerTarefa(indice):void{
    this.tarefas.slice(indice,indice+1)
 }
}
