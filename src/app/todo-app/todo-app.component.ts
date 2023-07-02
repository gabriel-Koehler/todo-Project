import {  Component, Injectable, Input } from "@angular/core";
import { AppComponent } from "../app.component";

interface Tarefa {
  arrayPropriedade: Propriedade[]
  arrayValorPropriedade: any[]
  valoresEscolhidosPropriedade: boolean[]
}
interface Categoria {
  categoria: string,
  corFundo: string
}
interface Propriedade {
  nomePropriedade: string,
  tipoDeDado: string | number,
  array: Categoria[]
}
@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
@Injectable()
export class TodoAppComponent {
  categoriaAtualizada: string
  
  propriedadeAMostrar:Propriedade={
    nomePropriedade: '',
    tipoDeDado:'',
    array: []
  }
  
  tarefaTransicao: Tarefa={
    arrayPropriedade: [],
  arrayValorPropriedade: [],
  valoresEscolhidosPropriedade: [],
  }
  tarefaCadastrar:Tarefa
  // tarefa: Tarefa = {
  //   arrayPropriedade: [],
  //   arrayValorPropriedade: [],
  //   valoresEscolhidosPropriedade: []
  // }
  propriedade:Propriedade={
  nomePropriedade: '',
  tipoDeDado: '',
  array: []
  }
  propriedades: Propriedade[]=[]

  valoresTarefa: any[] = []

  valoresEscolhidosTarefa: boolean[] = []

  tarefas: Tarefa[] = []

  constructor(private appComponent:AppComponent){
    
  }

  ngOnInit(): void {
    
    if (localStorage.getItem('propriedades') != null) {
      this.propriedades = JSON.parse(localStorage.getItem('propriedades'))
      console.log(this.propriedades)
      console.log(this.propriedades.length)
      
      this.valoresTarefa.length = this.propriedades.length
      this.valoresEscolhidosTarefa.length = this.propriedades.length
      console.log(this.valoresTarefa.length)
      console.log(this.valoresEscolhidosTarefa.length)
    }else{
      this.propriedades.push({
        nomePropriedade: 'Nome',
        tipoDeDado: 'text',
        array: []
      })
      localStorage.setItem('propriedades',JSON.stringify(this.propriedades))
    }

    for (let i = 0; i < this.valoresEscolhidosTarefa.length; i++) {
      if(i==0){
        this.valoresEscolhidosTarefa[i]=true
      } else{
        this.valoresEscolhidosTarefa[i]=false
      }
    }
    
    if (localStorage.getItem('tarefas') != null) {
      this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
      console.log(this.tarefas)
      for(let tarefa of this.tarefas){
        tarefa.arrayPropriedade=this.propriedades
        tarefa.arrayValorPropriedade.length=this.propriedades.length
        tarefa.valoresEscolhidosPropriedade.length=this.propriedades.length
        this.addTarefaLocalStorage()
      }
      this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }
    // console.log(this.appComponent.hasCardPermission('Add'))
    // console.log(this.appComponent.hasCardPermission('MoveCard'))
    // console.log(this.appComponent.hasCardPermission('Edit'))

    console.log(this.valoresEscolhidosTarefa  )
    
  }

  //cadastro e edição de tarefas

  adicionarInput(i): void{
    this.valoresEscolhidosTarefa[i]=!this.valoresEscolhidosTarefa[i]
  }

  mudarVisibilidade(i){
    this.tarefas[i.indiceTarefa].valoresEscolhidosPropriedade[i.indicePropriedadeEscolhida]=!this.tarefas[i.indiceTarefa].valoresEscolhidosPropriedade[i.indicePropriedadeEscolhida]
    this.addTarefaLocalStorage()
  }

  cadastrarTarefa(): void {
    console.log(this.valoresEscolhidosTarefa)
      alert('Insira em todos os campos primeiro para cadastrar')
      console.log(this.valoresTarefa)
      console.log(this.valoresEscolhidosTarefa)
       const tarefaCadastrar:Tarefa = {
        arrayPropriedade: this.propriedades,
        arrayValorPropriedade: this.valoresTarefa,
        valoresEscolhidosPropriedade: this.valoresEscolhidosTarefa
      }
      console.log(tarefaCadastrar) 
      this.tarefas.push(tarefaCadastrar)
      this.valoresTarefa=[]
      this.valoresEscolhidosTarefa=[]
      this.valoresTarefa.length = this.propriedades.length
      this.valoresEscolhidosTarefa.length = this.propriedades.length
      console.log(this.tarefas)
 
      this.addTarefaLocalStorage()  
    
  }

  removerTarefa(indice): void {
    this.tarefas.splice(indice, 1)
    this.addTarefaLocalStorage()
  }

  atualizarCategoria(valor): void {
    this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
    let idPropri:number=this.propriedades.indexOf(valor.propriedadeMudada)

    console.log(idPropri+' '+valor.indice+' '+valor.categoria+' '+valor.indicePropriedadeMudada)
    
    console.log(this.tarefas[valor.indice]) 
    console.log(this.tarefas[valor.indice].arrayPropriedade[valor.indicePropriedadeMudada])
    this.tarefas[valor.indice].arrayValorPropriedade[valor.indicePropriedadeMudada]=valor.categoria
    this.addTarefaLocalStorage()
  }

  

  removerCategoria(id): void {
    for (let tarefa of this.tarefas) {
      console.log(this.tarefas)
      if (tarefa.arrayValorPropriedade
        [this.propriedades.indexOf(this.propriedadeAMostrar)] 
        ==
        this.propriedadeAMostrar.array[id].categoria) {

        this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
      }
    }

    this.propriedades
    [this.propriedades.indexOf(this.propriedadeAMostrar)].array.splice(id, 1)
    localStorage.setItem('propriedades', JSON.stringify(this.propriedades))
    this.addTarefaLocalStorage()
  }

  mudarInput(valor): void {
    this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
    console.log(valor.indice) 
    console.log(valor.valorTarefa) 
    console.log(valor.indicePropriedadeMudada)
    this.tarefas[valor.indice].
    arrayValorPropriedade[valor.indicePropriedadeMudada] = valor.valorTarefa
    this.addTarefaLocalStorage()
  }
  //cadastro e edição de tarefas

  //mudar pro propriedade
    listaDeProPriedadesComArray(){
        const propriedadesComArray:Propriedade[]=[]
      for(let propriedade of this.propriedades){
        if(propriedade.array.length!=0){
          propriedadesComArray.push(propriedade)
        }
      }
      return propriedadesComArray
      }
    
  //

  // drag de tarefas

  dragTarefa(tarefaD): void {
    console.log('drag')
    this.tarefaTransicao = tarefaD;
    console.log(this.tarefaTransicao)
  }

  getCategoriaTarefa(c, event: Event): void {
    event.preventDefault()
    console.log(c) 
    console.log(this.propriedadeAMostrar) 
    let idTarefa=this.tarefas.indexOf(this.tarefaTransicao)
    let idPropri=(this.propriedades.indexOf(this.propriedadeAMostrar))
    console.log(idTarefa) 
    console.log(idPropri) 
    this.tarefas[idTarefa].arrayValorPropriedade[idPropri] = c
    this.addTarefaLocalStorage()
  }

  dropTarefa(i, event: Event): void {
    event.preventDefault()
    console.log(i)
    for (let i of this.tarefas) {
      if (i == this.tarefaTransicao) {
        console.log(this.tarefas)
        this.tarefas.splice(this.tarefas.indexOf(i), 1)
        console.log(this.tarefas)
      }
    }
    console.log(this.tarefas)
    this.tarefas.splice(i, 0, this.tarefaTransicao)
    console.log(this.tarefas)
    this.addTarefaLocalStorage()

    console.log('drop')
  }

  dragovrTarefa(): void {
    event.preventDefault()
  }
  // drag de tarefas

  addTarefaLocalStorage(): void {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
  }


}