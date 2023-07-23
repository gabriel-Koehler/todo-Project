import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'categoria-app',
    templateUrl: './categoria.component.html',
    styleUrls:['./categoria.component.css']
})

export class CategoriaComponent { 
    @Input() tituloCategoria:string
    @Input() indiceCategoria:number
    @Output() onRemoveCateg=new EventEmitter()
    
    removeCateg(indice):void{
        this.onRemoveCateg.emit(indice)
    }
}