import { Component,Input,Output,EventEmitter,OnInit } from "@angular/core";
interface Categoria{
    categoria:string
}
interface Propriedade {
    nomePropriedade: string,
    tipoDeDado: string | number,
    array: Categoria[]
  }
  interface Tarefa {
    arrayPropriedade: Propriedade[]
    arrayValorPropriedade: any[]
    valoresEscolhidosPropriedade: boolean[]
  }

@Component({
    selector:'tarefa-app',
    templateUrl:'./tarefa.component.html',
    styleUrls:['./tarefa.component.css']
})
export class TarefaCoponent implements OnInit{
    @Input() tarefa:Tarefa
    @Input() indiceTarefa:number
    @Output() onMudou=new EventEmitter()
    @Output() onRemove=new EventEmitter()
    @Output() onDescricao=new EventEmitter()
    tarefas:Tarefa[]=[]
    propriedade:Propriedade ={
        nomePropriedade: '',
        tipoDeDado: '' ,
        array: []
      }
    ngOnInit():void{
        if(localStorage.getItem('tarefas')!=null){
            this.tarefas=JSON.parse(localStorage.getItem('tarefas'))
        }    
        // console.log(this.tarefa)
        // console.log(this.tarefas)
    }
    adicionarInput(i): void{
        console.log(this.tarefas[this.indiceTarefa].valoresEscolhidosPropriedade[i])
        this.tarefas[this.indiceTarefa].valoresEscolhidosPropriedade[i]=!this.tarefas[this.indiceTarefa].valoresEscolhidosPropriedade[i]
    this.addTarefaLocalStorage()
    }
    

    categoriaMudou(indice,categoriaNova,propriedadeMudada):void{
        this.onMudou.emit({indice: indice,categoria: categoriaNova,indicePropriedadeMudada: propriedadeMudada})
    }
    clickRemover(indice):void{
        console.log(indice)
        this.onRemove.emit(indice)
    }
    inputMudou(indice,valorNovo,propriedadeMudada):void{
        this.onDescricao.emit({indice: indice,valorTarefa: valorNovo,indicePropriedadeMudada: propriedadeMudada})
    }
    addTarefaLocalStorage(): void {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
      }
}