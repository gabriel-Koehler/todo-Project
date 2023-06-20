import { Component,Input,Output,EventEmitter } from "@angular/core";
interface Categoria{
    categoria:string
}
interface Propriedade {
    nomePropriedade: string,
    tipoDeDado: string | number,
    array: Categoria[]
  }

@Component({
    selector:'tarefa-app',
    templateUrl:'./tarefa.component.html',
    styleUrls:['./tarefa.component.css']
})
export class TarefaCoponent{

    @Input() propriedades:Propriedade[]
    @Input() propriedadesEscolhidas:boolean[]
    @Input() indice:number
    @Input() valores:any[]
    @Output() onMudou=new EventEmitter()
    @Output() onRemove=new EventEmitter()
    @Output() onDescricao=new EventEmitter()

    categoriaMudou(indice,categoriaNova,propriedadeMudada):void{
        this.onMudou.emit({indice: indice,categoria: categoriaNova,propriedadeMudada: propriedadeMudada})
    }
    clickRemover(indice):void{
        console.log(indice)
        this.onRemove.emit(indice)
    }
    inputMudou(indice,valorNovo,propriedadeMudada):void{
        this.onDescricao.emit({indice: indice,valorTarefa: valorNovo,propriedadeMudada: propriedadeMudada})
    }
}