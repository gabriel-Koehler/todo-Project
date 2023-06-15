import { Component, EventEmitter, Input, Output } from "@angular/core";
interface Categoria{
    categoria:string,
    corFundo:string
}
interface Tarefa{
    titulo:string,
    categoria:string,
    descricao:string
  }
@Component({
    selector:'adiciona-categoria',
    templateUrl:'./adicionaCategoria.component.html',
    styleUrls:['./adicionaCategoria.component.css']
})
export class AdicionaCategoriaComponent{
    @Output() adicionarCategorias=new EventEmitter()
    @Input() arrayPropriedadePrint:Categoria[]

categorias:Categoria[]=[]

nomeCategoria:string =''

corEscolhida:string=''
 
tarefas:Tarefa[]=[]

    ngOnInit():void{
        if(JSON.parse(localStorage.getItem('categorias'))!=null){
            this.categorias = JSON.parse(localStorage.getItem('categorias'))
        }
        if(localStorage.getItem('tarefas')!=null){
            this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
            console.log(this.tarefas)
            }
    }

    adicionarCategoria():void{
        
        console.log(this.nomeCategoria)
        console.log(this.corEscolhida)
         const categoria: Categoria={
            categoria: this.nomeCategoria,
            corFundo: this.corEscolhida
         }
         this.adicionarCategorias.emit(
            categoria
            )
         this.categorias.push(categoria)

         localStorage.setItem('categorias',JSON.stringify(this.categorias))
         this.nomeCategoria=''
         this.corEscolhida='#ffff'

    }
    removeCategoria(id):void{
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
}