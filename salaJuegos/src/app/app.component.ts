import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1 - Promedio Edades';

  public edadUno:number=0;
  public edadDos:number=0;

  constructor(){

  }
  
  public Limpiar(){
    this.edadUno=0;
    this.edadDos=0;

    var textSuma = document.getElementById("suma");
    var textPromedio = document.getElementById("promedio");
    
    textSuma?.setAttribute("value",'');
    textPromedio?.setAttribute("value",'');
    
  }

  public Calcular(a:number,b:number){
    var textSuma = document.getElementById("suma");
    var textPromedio = document.getElementById("promedio");
    
    var suma = a+b;
    textSuma?.setAttribute("value",suma.toString());
    textPromedio?.setAttribute("value",(suma/2).toString());

    var fieldsetResultados = document.getElementById("resultados");
    fieldsetResultados?.removeAttribute("hidden");
  }
}
