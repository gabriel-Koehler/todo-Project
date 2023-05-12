import { Component, EventEmitter, Output } from "@angular/core";
interface Categoria{
    categoria:string
}
@Component({
    selector:'categoria',
    templateUrl:'./categoria.component.html'
})
export class CategoriaComponent{
categorias:Categoria[]=[]
nomeCategoria:string =''
@Output()
adicionar=new EventEmitter()

    

    adicionarCategoria():void{
           
        console.log(this.nomeCategoria)
         this.adicionar.emit(this.nomeCategoria)
         const categoria: Categoria={
            categoria: this.nomeCategoria
         }
         this.categorias.push(categoria)
         localStorage.setItem('categorias',JSON.stringify(this.categorias))
    }
    
}