import { Component, Input } from "@angular/core";

interface Tarefa{
    titulo:string,
    categoria:string,
    descricao:string
  }
  interface Categoria{
    categoria:string
  }
@Component({
    selector:'todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls:['./todo-app.component.css']
})
export class TodoAppComponent{
      @Input() public adicionaCategoria:string
  titulo:string=''
  categoria:string =''
  categoriaAtualizada:string 
  descricao:string=''
tarefa: Tarefa={
 titulo: this.titulo,
 categoria: this.categoria,
 descricao: this.descricao
}
categorias:Categoria[]=[{categoria:'TODO'},{categoria:'DOING'},{categoria:'DONE'}]

tarefas: Tarefa[]=[]

ngOnInit():void{
    
    if(localStorage.getItem('tarefas')!=null){
    this.tarefas = JSON.parse(localStorage.getItem('tarefas'))

  }
  if(localStorage.getItem('categorias')!=null){
    this.categorias = JSON.parse(localStorage.getItem('categorias'))
    console.log(this.categorias)
  }
  
}
 cadastrarTarefa():void{

    const tarefa: Tarefa={
      titulo: this.titulo,
      categoria: this.categoria,
      descricao: this.descricao
    }
    this.tarefas.push(tarefa)
    console.log(this.categoria)
    this.titulo=''
    this.categoria=''
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
    
 }
 removerTarefa(indice):void{
    this.tarefas.splice(indice,1)
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
 }
 atualizar(indice,categoriaa):void{
  this.tarefas=JSON.parse(localStorage.getItem('tarefas'))
  console.log(categoriaa)
  this.tarefas[indice].categoria=categoriaa
  localStorage.setItem('tarefas',JSON.stringify(this.tarefas))
 }
 adicionarCategoria(categoria):void{
    console.log(categoria+'todo-app')
 }
}