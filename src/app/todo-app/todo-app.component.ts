import { asNativeElements, Component, Input } from "@angular/core";


interface Tarefa {
  arrayPropriedade: Propriedade[]
  arrayValorPropriedade: any[]
  arrayPropriedadeEscolhida: boolean[]
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
export class TodoAppComponent {
  titulo: string = ''
  categoria: string = ''
  categoriaAtualizada: string
  descricao: string = ''
  tarefa: Tarefa = {
    arrayPropriedade: [],
    arrayValorPropriedade: [],
    arrayPropriedadeEscolhida: []
  }

  propriedadeAMostrar:Propriedade

  tarefaTransicao: Tarefa

  propriedades: Propriedade[]

  valoresTarefa: any[] = []

  valoresEscolhidosTarefa: boolean[] = []

 

  tarefas: Tarefa[] = []

  ngOnInit(): void {
    for (let valor of this.valoresEscolhidosTarefa) {
      console.log(valor)
      valor = false
      console.log(valor)
    
  }
    if (localStorage.getItem('tarefas') != null) {
      this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
      console.log(this.tarefas)
    }

    if (localStorage.getItem('propriedades') != null) {
      this.propriedades = JSON.parse(localStorage.getItem('propriedades'))
      console.log(this.propriedades)
      console.log(this.propriedades.length)
      console.log(this.valoresTarefa.length)
      console.log(this.valoresEscolhidosTarefa.length)
      this.valoresTarefa.length = this.propriedades.length
      this.valoresEscolhidosTarefa.length = this.propriedades.length
      console.log(this.valoresTarefa.length)
      console.log(this.valoresEscolhidosTarefa.length)
    }

    
    console.log(this.valoresEscolhidosTarefa  )
    // if (localStorage.getItem('categorias') == null) {
    //   this.categorias.push(
    //     { categoria: 'TODO', corFundo: '' },
    //     { categoria: 'DOING', corFundo: '' },
    //     { categoria: 'DONE', corFundo: '' }
    //   )
    //   console.log(this.categorias)
    //   localStorage.setItem('categorias', JSON.stringify(this.categorias));
    // } else if (localStorage.getItem('categorias') != null) {
    //   this.categorias = (JSON.parse(localStorage.getItem('categorias')))
    //   console.log(this.categorias)
    // }

  }

  //cadastro e edição de tarefas

  adicionarInput(i):void{
    console.log(this.valoresEscolhidosTarefa[i])
    this.valoresEscolhidosTarefa[i]=true
    console.log(this.valoresEscolhidosTarefa[i])
  }

  cadastrarTarefa(): void {
    console.log(this.valoresEscolhidosTarefa)
      alert('Insira em todos os campos primeiro para cadastrar')
      const tarefa: Tarefa = {
        arrayPropriedade: this.propriedades,
        arrayValorPropriedade: this.valoresTarefa,
        arrayPropriedadeEscolhida: this.valoresEscolhidosTarefa
      }

      this.tarefas.push(tarefa)
      console.log(this.categoria)

      for (let valor of this.valoresTarefa) {
        valor = '' || 0
      }

      for (let valor of this.valoresEscolhidosTarefa) {
      if(this.valoresEscolhidosTarefa.indexOf(valor)==0){
        valor=true
      }else{valor = false}
    }
      this.addTarefaLocalStorage()
    
  }

  removerTarefa(indice): void {
    this.tarefas.splice(indice, 1)
    this.addTarefaLocalStorage()
  }

  atualizar(valor): void {
    this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
    console.log(valor.indice)
    console.log(
      this.tarefas[valor.indice]
    .arrayValorPropriedade[this.tarefas[valor.indice]
    .arrayValorPropriedade.indexOf(valor.categoria)]
    )
    console.log(
      this.tarefas[valor.indice]
    .arrayValorPropriedade[this.tarefas[valor.indice]
    .arrayValorPropriedade.indexOf(valor.propriedadeMudada)]
    )
    this.tarefas[valor.indice]
    .arrayValorPropriedade[this.tarefas[valor.indice]
    .arrayValorPropriedade.indexOf(valor.categoria)] = valor.categoria
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
    localStorage.setItem('propriedade', JSON.stringify(this.propriedades))
    this.addTarefaLocalStorage()
  }

  mudarInput(valor): void {
    this.tarefas = JSON.parse(localStorage.getItem('tarefas'))
    console.log(valor.indice)
    this.tarefas[valor.indice].
    arrayValorPropriedade[valor.propriedadeMudada] = valor.valorTarefa
    this.addTarefaLocalStorage()
  }
  //cadastro e edição de tarefas


  // drag de tarefas

  dragTarefa(tarefaD): void {
    console.log('drag')
    this.tarefaTransicao = tarefaD;
  }

  getCategoriaTarefa(c, event: Event): void {
    this.tarefas[this.tarefas.indexOf(this.tarefaTransicao)]
    .arrayValorPropriedade[this.tarefas[this.tarefas.indexOf(this.tarefaTransicao)]
    .arrayPropriedade.indexOf(this.propriedadeAMostrar)] = c
    this.addTarefaLocalStorage()
  }

  dropTarefa(i, event: Event): void {

    console.log(i)
    for (const i of this.tarefas) {
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

  addTarefaLocalStorage(): void {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
  }
  // drag de tarefas


}