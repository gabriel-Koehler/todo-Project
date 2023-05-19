import { Component,OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'todo-app';
  rotaTdApp:boolean=false
  rotaAddCategoria:boolean=true

  rotaAdicionaCategoria():void{
    this.rotaTdApp=true
    this.rotaAddCategoria=false
  }
  rotaTodoApp():void{
    this.rotaTdApp=false
    this.rotaAddCategoria=true
  }

}


