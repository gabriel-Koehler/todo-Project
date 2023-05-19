import { Component, EventEmitter, Output } from "@angular/core";
interface Categoria{
    categoria:string,
    corFundo:string
}
@Component({
    selector:'adiciona-categoria',
    templateUrl:'./adicionaCategoria.component.html'
})
export class AdicionaCategoriaComponent{
categorias:Categoria[]=[]
nomeCategoria:string =''
corEscolhida:string=''
    ngOnInit():void{
        if(JSON.parse(localStorage.getItem('categorias'))!=null){
            this.categorias = JSON.parse(localStorage.getItem('categorias'))
        }
    }

    adicionarCategoria():void{         
        console.log(this.nomeCategoria)
        console.log(this.corEscolhida)
         const categoria: Categoria={
            categoria: this.nomeCategoria,
            corFundo: this.corEscolhida
         }
         this.categorias.push(categoria)
         localStorage.setItem('categorias',JSON.stringify(this.categorias))
         this.nomeCategoria=''
         this.corEscolhida='#ffff'
    }
    
}