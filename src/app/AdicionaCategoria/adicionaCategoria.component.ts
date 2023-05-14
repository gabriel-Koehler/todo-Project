import { Component, EventEmitter, Output } from "@angular/core";
interface Categoria{
    categoria:string
}
@Component({
    selector:'adiciona-categoria',
    templateUrl:'./adicionaCategoria.component.html'
})
export class AdicionaCategoriaComponent{
categorias:Categoria[]=[]
nomeCategoria:string =''

    ngOnInit():void{
        if(JSON.parse(localStorage.getItem('categorias'))!=null){
            this.categorias = JSON.parse(localStorage.getItem('categorias'))
        }
    }

    adicionarCategoria():void{         
        console.log(this.nomeCategoria)
         const categoria: Categoria={
            categoria: this.nomeCategoria
         }
         this.categorias.push(categoria)
         localStorage.setItem('categorias',JSON.stringify(this.categorias))
         this.nomeCategoria=''
    }
    
}