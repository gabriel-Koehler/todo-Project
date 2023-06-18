import { Component,Input,Output,EventEmitter } from "@angular/core";
interface Categoria{
    categoria:string
}

@Component({
    selector:'tarefa-app',
    templateUrl:'./tarefa.component.html',
    styleUrls:['./tarefa.component.css']
})
export class TarefaCoponent{

    @Input() tfCategoria:string
    @Input() categorias:Categoria[]
    @Input() indice:number
    @Input() valores:any[]
    @Output() onMudou=new EventEmitter()
    @Output() onRemove=new EventEmitter()
    @Output() onDescricao=new EventEmitter()

    categoriaMudou(indice,categoriaNova):void{
        this.onMudou.emit({indice: indice,categoria: categoriaNova})
    }
    clickRemover(indice):void{
        console.log(indice)
        this.onRemove.emit(indice)
    }
    descricaoMudou(indice,descricaoNova):void{
        this.onDescricao.emit({indice: indice,descricaoTarefa: descricaoNova})
    }
}