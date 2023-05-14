import { Component,Input,Output,EventEmitter } from "@angular/core";
interface Categoria{
    categoria:string
}

@Component({
    selector:'tarefa-app',
    templateUrl:'./tarefa.component.html',
    styles:['./tarefa.component.css']
})
export class TarefaCoponent{

    @Input() nomeTarefa:string
    @Input() descricaoTarefa:string
    @Input() tfCategoria:string
    @Input() categorias:Array<Categoria>
    @Input() indice:number
    @Output() onMudou=new EventEmitter()
    @Output() onRemove=new EventEmitter()

    categoriaMudou(indice,categoria):void{
        console.log({indice: indice,categoriaNova: categoria})
        this.onMudou.emit({indice: indice,categoriaNova: categoria})
    }
    clickRemover(indice):void{
        console.log(indice)
        this.onRemove.emit(indice)
    }
}