import { asNativeElements, Component, Input } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";

interface Tarefa{
    titulo:string,
    categoria:string,
    descricao:string
  }
  interface Categoria{
    categoria:string,
    corFundo:string
  }
@Component({
    selector:'todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls:['./todo-app.component.css']
})
export class TodoAppComponent{
  titulo:string=''
  categoria:string =''
  categoriaAtualizada:string 
  descricao:string=''
tarefa: Tarefa={
 titulo: this.titulo,
 categoria: this.categoria,
 descricao: this.descricao
}
indiceTarefaTransicao:number
categoriaTransicao:string

 categorias:Categoria[]=[]
 
tarefas: Tarefa[]=[]

ngOnInit():void{
    
    if(localStorage.getItem('tarefas')!=null){
    this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
    console.log(this.tarefas)
    }
    
    if(localStorage.getItem('categorias')==null ){
      this.categorias.push(
      {categoria: 'TODO',corFundo:''},
      {categoria: 'DOING',corFundo:''},
      {categoria: 'DONE',corFundo:''}
      )
      console.log(this.categorias)
      localStorage.setItem('categorias',JSON.stringify(this.categorias));  
    } else if(localStorage.getItem('categorias')!=null){
    this.categorias = (JSON.parse(localStorage.getItem('categorias')))
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
    this.descricao=''
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
    
 }
 removerTarefa(indice):void{
    this.tarefas.splice(indice,1)
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
 }
 atualizar(valor):void{
  this.tarefas=JSON.parse(localStorage.getItem('tarefas'))
  console.log(valor.indice)
  this.tarefas[valor.indice].categoria=valor.categoria
  localStorage.setItem('tarefas',JSON.stringify(this.tarefas))
 }
 adicionarCategoria(categoria):void{
    console.log(categoria+'todo-app')
 }
 removerCategoria(id):void{
  for(let tarefa of this.tarefas){
    console.log(this.tarefas)
    if(tarefa.categoria==this.categorias[id].categoria){
      this.tarefas.splice(this.tarefas.indexOf(tarefa),1)
    }
  }
  
  this.categorias.splice(id,1)
  localStorage.setItem('categorias',JSON.stringify(this.categorias))
  localStorage.setItem('tarefas',JSON.stringify(this.tarefas))
 }

 mudarDescricao(valor):void{
  this.tarefas=JSON.parse(localStorage.getItem('tarefas'))
  console.log(valor.indice)
  this.tarefas[valor.indice].descricao=valor.descricaoTarefa
  localStorage.setItem('tarefas',JSON.stringify(this.tarefas))
 }
 dragTarefa(c,t):void{
  console.log(c)
  this.indiceTarefaTransicao=t
  this.categoriaTransicao=c
  console.log(t)
  console.log('drag')
 }
 dropTarefa(c):void{
   console.log(c)
   this.tarefas[this.indiceTarefaTransicao].categoria=c
   localStorage.setItem('tarefas',JSON.stringify(this.tarefas))
   console.log('drop')
 }
 dragovrTarefa():void{
  event.preventDefault()
 }
}