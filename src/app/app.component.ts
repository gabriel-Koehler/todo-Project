import { Component} from '@angular/core';

interface OnInit {
  ngOnInit(): void
}

interface Tarefa{
  nome:string,
  categoria:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo-app';

  nome:string = ''
  categoria:string =''
  categoriaAtualiza:string=''
tarefa: Tarefa={
 nome: this.nome,
 categoria: this.categoria
}

  tarefas: Tarefa[]=[]

 cadastrarUsuario():void{

    this.categoriaAtualiza=this.categoria
    const tarefa: Tarefa={
      nome: this.nome,
      categoria: this.categoria
    }

    this.tarefas.push(tarefa)
    console.log(this.tarefas)
    this.nome=''
    this.categoria=''
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
    
 }
 removerTarefa(indice):void{
    this.tarefas.splice(indice,1)
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
 }
 atualizar(indice):void{
  this.tarefas=JSON.parse(localStorage.getItem('tarefas'))
  console.log(this.tarefas[indice].categoria)
  console.log(this.tarefa.categoria)
  this.tarefas[indice].categoria=this.categoria
 }
}


