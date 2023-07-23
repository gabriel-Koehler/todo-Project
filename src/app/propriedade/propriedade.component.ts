import { Component,OnInit } from "@angular/core";

interface Propriedade{
    nomePropriedade:string,
    tipoDeDado:string | number,
    array:Categoria[]
}
interface Categoria{
    categoria:string,
    corFundo:string
}

@Component({
    selector:'propriedade-app' ,
    templateUrl: './propriedade.component.html',
    styleUrls:['./propriedade.component.css']
})

// castrar prorpiedade de forma de dinamica prorpiedade (string, numb)
// 	-nome 
// 	-tipo de dado( string, número, seleção)
// nas tarefas, carregar as propriedades cadastrar 
// permitindo o usuario prencher ou não 
//  propriedades( 
// propriedade{nome: , tipoDeDado:(select),selects:selects[]} )

export class PropriedadeComponent{
    nomePropriedade:string
    tipoDeDado:string | number='Tipo de dado'
    arrayPropriedade:Categoria[]=[]
    escolhidoSelecao:boolean=false
    
    propriedades:Propriedade[]=[]

    completar:boolean= true

    propriedade:Propriedade

    ngOnInit(){
        this.propriedades=JSON.parse(localStorage.getItem('propriedades'))
    }

    mudarOpcao():void{
        console.log('aaa')
        if(this.tipoDeDado=='select'){

            this.completar=false
            this.escolhidoSelecao=true
        }else{
            this.completar=true
            this.escolhidoSelecao=false
        }
        
    }
    criarPropriedade():void{
        
        this.propriedade={
            nomePropriedade: this.nomePropriedade,
            tipoDeDado: this.tipoDeDado,
            array:this.arrayPropriedade
        }
        console.log(this.propriedade)
        this.propriedades.push(this.propriedade)
        localStorage.setItem('propriedades',JSON.stringify(this.propriedades))
        this.nomePropriedade=''
        this.tipoDeDado=''
        this.arrayPropriedade=[]
        this.completar=false
        this.escolhidoSelecao=false

    }
    adicionarCategoriaPropriedade(categoria):void{
        console.log(categoria)
        this.arrayPropriedade.push(categoria)
        if(this.arrayPropriedade!=null){
                this.completar=true
        }
    }

}