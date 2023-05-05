import { Component,OnInit} from '@angular/core';


interface Tarefa{
  titulo:string,
  categoria:string
  descricao:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'todo-app';

  titulo:string
  categoria:string 
  categoriaAtualiza:string
  descricao:string
tarefa: Tarefa={
 titulo: this.titulo,
 categoria: this.categoria,
 descricao: this.descricao
}


tarefas: Tarefa[]=[]

ngOnInit():void{
  if(localStorage.getItem('tarefas')!=null){
    this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
  }
}
 cadastrarUsuario():void{

    const tarefa: Tarefa={
      titulo: this.titulo,
      categoria: this.categoria

    }
    this.tarefas.push(tarefa)
    console.log(this.tarefas)
    this.titulo=''
    this.categoria=''
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
    
 }
 removerTarefa(indice):void{
    this.tarefas.splice(indice,1)
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
 }
 atualizar(indice):void{
  this.tarefas=JSON.parse(localStorage.getItem('tarefas'))
  this.tarefas[indice].categoria=this.categoriaAtualiza
  localStorage.setItem('tarefas',JSON.stringify(this.tarefas))

 }
}


